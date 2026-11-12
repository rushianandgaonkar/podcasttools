"use client";

import React, { useCallback, useMemo, useRef, useState } from "react";
import { AudioLines, CheckCircle2, AlertTriangle, Upload, RotateCcw, Loader2 } from "lucide-react";
import { defaultLocale, type SupportedLocale } from "@/i18n/languages";
import { LOUDNESS_TEXT, fill } from "./loudnessMeterText";

/**
 * LUFS Meter & Loudness Checker
 *
 * Measures a dropped audio file entirely in the browser:
 *  - Integrated loudness, gated, per ITU-R BS.1770-4 (K-weighting + absolute/relative gates)
 *  - Loudness range (LRA) per EBU Tech 3342
 *  - True peak, estimated with 4x oversampling around the loudest samples
 * and compares the result with a platform target. Nothing is uploaded.
 */

type PresetId = "apple" | "spotify" | "ebu";

interface Preset {
  id: PresetId;
  /** Target integrated loudness in LUFS */
  target: number;
  /** Accepted deviation in LU */
  tolerance: number;
  /** Maximum true peak in dBTP */
  peakLimit: number;
}

// Apple Podcasts: -16 dB LKFS, +/- 1 dB, true peak <= -1 dBFS (podcasters.apple.com/support/audio-requirements).
// Spotify: normalises to -14 LUFS and asks for true peak below -1 dBTP (Spotify loudness normalisation article).
// EBU R128: -23 LUFS +/- 0.5 LU, max true peak -1 dBTP.
const PRESETS: Preset[] = [
  { id: "apple", target: -16, tolerance: 1, peakLimit: -1 },
  { id: "spotify", target: -14, tolerance: 1, peakLimit: -1 },
  { id: "ebu", target: -23, tolerance: 0.5, peakLimit: -1 },
];

interface Measurement {
  fileName: string;
  durationSec: number;
  channels: number;
  sampleRate: number;
  /** Integrated loudness as measured (single channel for mono files) */
  integrated: number;
  loudnessRange: number;
  shortTermMax: number;
  truePeak: number;
  /** One short-term (3 s) loudness value per second */
  timeline: number[];
}

const MONO_OFFSET = 10 * Math.log10(2); // a mono file played on two speakers is ~3.01 LU louder
const ABSOLUTE_GATE = -70;
// BS.1770 channel weights: L, R, C = 1.0, LFE excluded, surrounds = 1.41
const CHANNEL_WEIGHTS = [1, 1, 1, 0, 1.41, 1.41];

const toLoudness = (power: number) => (power > 0 ? -0.691 + 10 * Math.log10(power) : -Infinity);
const pause = () => new Promise<void>((resolve) => setTimeout(resolve, 0));

/** K-weighting biquad coefficients for any sample rate (matches the BS.1770 table at 48 kHz). */
function kWeighting(sampleRate: number) {
  // Stage 1: high-shelf "head" filter
  const f0 = 1681.974450955533;
  const gain = 3.999843853973347;
  const q = 0.7071752369554196;
  const k = Math.tan((Math.PI * f0) / sampleRate);
  const vh = Math.pow(10, gain / 20);
  const vb = Math.pow(vh, 0.4996667741545416);
  const a0 = 1 + k / q + k * k;
  const shelf = {
    b0: (vh + (vb * k) / q + k * k) / a0,
    b1: (2 * (k * k - vh)) / a0,
    b2: (vh - (vb * k) / q + k * k) / a0,
    a1: (2 * (k * k - 1)) / a0,
    a2: (1 - k / q + k * k) / a0,
  };
  // Stage 2: RLB high-pass
  const f1 = 38.13547087602444;
  const q1 = 0.5003270373238773;
  const k1 = Math.tan((Math.PI * f1) / sampleRate);
  const a01 = 1 + k1 / q1 + k1 * k1;
  const highpass = {
    b0: 1,
    b1: -2,
    b2: 1,
    a1: (2 * (k1 * k1 - 1)) / a01,
    a2: (1 - k1 / q1 + k1 * k1) / a01,
  };
  return { shelf, highpass };
}

/** Polyphase interpolation filter (4x, 12 taps per phase) used for the true-peak estimate. */
const OVERSAMPLE = 4;
const PHASE_TAPS = 12;
const INTERPOLATOR: Float64Array[] = (() => {
  const length = OVERSAMPLE * PHASE_TAPS + 1;
  const center = (length - 1) / 2;
  const phases: Float64Array[] = [];
  for (let p = 1; p < OVERSAMPLE; p++) {
    const taps = new Float64Array(PHASE_TAPS);
    let sum = 0;
    for (let i = 0; i < PHASE_TAPS; i++) {
      const n = p + OVERSAMPLE * i;
      const x = (n - center) / OVERSAMPLE;
      const sinc = x === 0 ? 1 : Math.sin(Math.PI * x) / (Math.PI * x);
      const window = 0.5 - 0.5 * Math.cos((2 * Math.PI * n) / (length - 1));
      taps[i] = sinc * window;
      sum += taps[i];
    }
    for (let i = 0; i < PHASE_TAPS; i++) taps[i] /= sum;
    phases.push(taps);
  }
  return phases;
})();

function estimateTruePeak(channels: Float32Array[]): number {
  let samplePeak = 0;
  for (const data of channels) {
    for (let i = 0; i < data.length; i++) {
      const v = data[i] < 0 ? -data[i] : data[i];
      if (v > samplePeak) samplePeak = v;
    }
  }
  if (samplePeak === 0) return -Infinity;

  // Inter-sample peaks only matter next to loud samples, so only those neighbourhoods are oversampled.
  const threshold = samplePeak * 0.5;
  const delay = PHASE_TAPS / 2;
  let peak = samplePeak;
  for (const data of channels) {
    for (let m = PHASE_TAPS - 1; m < data.length; m++) {
      const a = data[m - delay];
      const b = data[m - delay + 1];
      if ((a < 0 ? -a : a) < threshold && (b < 0 ? -b : b) < threshold) continue;
      for (const taps of INTERPOLATOR) {
        let acc = 0;
        for (let i = 0; i < PHASE_TAPS; i++) acc += taps[i] * data[m - i];
        if (acc < 0) acc = -acc;
        if (acc > peak) peak = acc;
      }
    }
  }
  return 20 * Math.log10(peak);
}

async function measure(buffer: AudioBuffer, fileName: string): Promise<Measurement | null> {
  const sampleRate = buffer.sampleRate;
  const channelCount = Math.min(buffer.numberOfChannels, CHANNEL_WEIGHTS.length);
  const hop = Math.round(sampleRate * 0.1); // 100 ms sub-blocks
  const subBlocks = Math.floor(buffer.length / hop);
  if (subBlocks < 4) return null;

  const { shelf, highpass } = kWeighting(sampleRate);
  const channels: Float32Array[] = [];
  // Weighted mean-square energy per 100 ms sub-block, summed across channels
  const energy = new Float64Array(subBlocks);

  for (let c = 0; c < channelCount; c++) {
    const data = buffer.getChannelData(c);
    channels.push(data);
    const weight = CHANNEL_WEIGHTS[c];
    if (weight === 0) continue;
    let x1 = 0, x2 = 0, y1 = 0, y2 = 0; // shelf state
    let u1 = 0, u2 = 0, v1 = 0, v2 = 0; // high-pass state
    for (let block = 0; block < subBlocks; block++) {
      const start = block * hop;
      let sum = 0;
      for (let i = start; i < start + hop; i++) {
        const x = data[i];
        const y = shelf.b0 * x + shelf.b1 * x1 + shelf.b2 * x2 - shelf.a1 * y1 - shelf.a2 * y2;
        x2 = x1; x1 = x; y2 = y1; y1 = y;
        const v = highpass.b0 * y + highpass.b1 * u1 + highpass.b2 * u2 - highpass.a1 * v1 - highpass.a2 * v2;
        u2 = u1; u1 = y; v2 = v1; v1 = v;
        sum += v * v;
      }
      energy[block] += (weight * sum) / hop;
      if (block % 600 === 599) await pause(); // keep the page responsive on long episodes
    }
  }

  // Momentary blocks: 400 ms with 75 % overlap
  const momentary: number[] = [];
  for (let j = 0; j + 4 <= subBlocks; j++) {
    momentary.push((energy[j] + energy[j + 1] + energy[j + 2] + energy[j + 3]) / 4);
  }
  const aboveAbsolute = momentary.filter((p) => toLoudness(p) > ABSOLUTE_GATE);
  if (aboveAbsolute.length === 0) return null;
  const mean = (values: number[]) => values.reduce((a, b) => a + b, 0) / values.length;
  const relativeGate = toLoudness(mean(aboveAbsolute)) - 10;
  const gated = aboveAbsolute.filter((p) => toLoudness(p) > relativeGate);
  const integrated = toLoudness(mean(gated.length ? gated : aboveAbsolute));

  // Short-term: 3 s windows, one per second
  const shortTerm: number[] = [];
  for (let j = 0; j + 30 <= subBlocks; j += 10) {
    let sum = 0;
    for (let i = j; i < j + 30; i++) sum += energy[i];
    shortTerm.push(sum / 30);
  }
  let loudnessRange = 0;
  let shortTermMax = integrated;
  if (shortTerm.length > 0) {
    const stAbove = shortTerm.filter((p) => toLoudness(p) > ABSOLUTE_GATE);
    if (stAbove.length > 0) {
      const stGate = toLoudness(mean(stAbove)) - 20;
      const sorted = stAbove.map(toLoudness).filter((l) => l > stGate).sort((a, b) => a - b);
      if (sorted.length > 1) {
        const at = (fraction: number) => sorted[Math.min(sorted.length - 1, Math.round(fraction * (sorted.length - 1)))];
        loudnessRange = at(0.95) - at(0.1);
      }
      shortTermMax = Math.max(...stAbove.map(toLoudness));
    }
  }

  await pause();
  const truePeak = estimateTruePeak(channels);

  return {
    fileName,
    durationSec: buffer.duration,
    channels: buffer.numberOfChannels,
    sampleRate,
    integrated,
    loudnessRange,
    shortTermMax,
    truePeak,
    timeline: shortTerm.map(toLoudness),
  };
}

const fmt = (value: number, digits = 1) => (Number.isFinite(value) ? value.toFixed(digits) : "–");
// Round first so values that round to zero never print as "−0.0"
const round1 = (value: number) => Math.round(value * 10) / 10;
const fmtSigned = (value: number) => {
  const v = round1(value);
  return `${v > 0 ? "+" : v < 0 ? "−" : ""}${Math.abs(v).toFixed(1)}`;
};
const fmtLoudness = (value: number) => {
  if (!Number.isFinite(value)) return "–";
  const v = round1(value);
  return `${v < 0 ? "−" : ""}${Math.abs(v).toFixed(1)}`;
};

function formatDuration(seconds: number) {
  const total = Math.round(seconds);
  const h = Math.floor(total / 3600);
  const m = Math.floor((total % 3600) / 60);
  const s = total % 60;
  const pad = (n: number) => String(n).padStart(2, "0");
  return h > 0 ? `${h}:${pad(m)}:${pad(s)}` : `${m}:${pad(s)}`;
}

/** Short-term loudness drawn as level bars against the target band. */
function LoudnessTimeline({ values, target, tolerance }: { values: number[]; target: number; tolerance: number }) {
  const maxBars = 160;
  const bucket = Math.max(1, Math.ceil(values.length / maxBars));
  const bars: number[] = [];
  for (let i = 0; i < values.length; i += bucket) {
    const slice = values.slice(i, i + bucket).filter(Number.isFinite);
    bars.push(slice.length ? Math.max(...slice) : -Infinity);
  }
  const top = target + 10;
  const bottom = target - 26;
  const height = 120;
  const width = 640;
  const y = (lufs: number) => ((top - Math.max(bottom, Math.min(top, lufs))) / (top - bottom)) * height;
  const step = width / Math.max(bars.length, 1);

  return (
    <svg viewBox={`0 0 ${width} ${height}`} className="w-full h-32" preserveAspectRatio="none" aria-hidden="true">
      <rect x={0} y={y(target + tolerance)} width={width} height={Math.max(1, y(target - tolerance) - y(target + tolerance))} className="fill-emerald-500/15" />
      {bars.map((value, i) => {
        if (!Number.isFinite(value)) return null;
        const barTop = y(value);
        const tooLoud = value > target + tolerance + 3;
        return (
          <rect
            key={i}
            x={i * step + step * 0.15}
            y={barTop}
            width={Math.max(1, step * 0.7)}
            height={Math.max(1, height - barTop)}
            rx={Math.min(2, step * 0.3)}
            className={tooLoud ? "fill-red-500" : "fill-orange-500"}
            opacity={0.85}
          />
        );
      })}
      <line x1={0} x2={width} y1={y(target)} y2={y(target)} className="stroke-emerald-600 dark:stroke-emerald-400" strokeWidth={1.5} strokeDasharray="6 5" vectorEffect="non-scaling-stroke" />
    </svg>
  );
}

export function LoudnessMeter({ lang = defaultLocale }: { lang?: SupportedLocale }) {
  const ui = LOUDNESS_TEXT[lang] || LOUDNESS_TEXT.en;
  const [presetId, setPresetId] = useState<PresetId>("apple");
  const [status, setStatus] = useState<"idle" | "working" | "done" | "error" | "silent">("idle");
  const [result, setResult] = useState<Measurement | null>(null);
  const [monoAsStereo, setMonoAsStereo] = useState(true);
  const [dragging, setDragging] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  const preset = PRESETS.find((p) => p.id === presetId) ?? PRESETS[0];
  const presetName = ui.presets[preset.id];

  const handleFile = useCallback(async (file: File | undefined) => {
    if (!file) return;
    setStatus("working");
    setResult(null);
    let context: AudioContext | null = null;
    try {
      const Ctor: typeof AudioContext = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
      context = new Ctor();
      const bytes = await file.arrayBuffer();
      const buffer = await context.decodeAudioData(bytes);
      const measured = await measure(buffer, file.name);
      if (!measured) {
        setStatus("silent");
      } else {
        setResult(measured);
        setStatus("done");
      }
    } catch (_) {
      setStatus("error");
    } finally {
      if (context) context.close().catch(() => {});
      if (inputRef.current) inputRef.current.value = "";
    }
  }, []);

  const view = useMemo(() => {
    if (!result) return null;
    const isMono = result.channels === 1;
    const offset = isMono && monoAsStereo ? MONO_OFFSET : 0;
    const integrated = result.integrated + offset;
    const difference = integrated - preset.target; // + = too loud
    const gain = -difference;
    const onTarget = Math.abs(difference) <= preset.tolerance;
    const peakOver = result.truePeak > preset.peakLimit;
    const peakAfterGain = result.truePeak + gain;
    return {
      isMono,
      integrated,
      difference,
      gain,
      onTarget,
      peakOver,
      peakAfterGain,
      peakAfterGainOver: !onTarget && gain > 0 && peakAfterGain > preset.peakLimit,
      shortTermMax: result.shortTermMax + offset,
      timeline: result.timeline.map((v) => v + offset),
    };
  }, [result, monoAsStereo, preset]);

  const cardClass = "rounded-xl bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800";

  return (
    <div className="space-y-5">
      {/* Target selector */}
      <div className={`${cardClass} p-4 sm:p-5 flex flex-col sm:flex-row sm:items-center gap-3`}>
        <span className="text-sm font-semibold text-neutral-900 dark:text-neutral-100 shrink-0">{ui.target}</span>
        <div className="flex flex-wrap gap-2" role="group" aria-label={ui.target}>
          {PRESETS.map((p) => (
            <button
              key={p.id}
              type="button"
              onClick={() => setPresetId(p.id)}
              aria-pressed={presetId === p.id}
              className={`px-3.5 py-2 rounded-lg text-sm font-medium border transition-colors cursor-pointer ${
                presetId === p.id
                  ? "bg-orange-600 border-orange-600 text-white"
                  : "bg-neutral-50 dark:bg-neutral-800 border-neutral-200 dark:border-neutral-700 text-neutral-700 dark:text-neutral-300 hover:border-neutral-400 dark:hover:border-neutral-500"
              }`}
            >
              {ui.presets[p.id]}
              <span className={`ml-2 font-mono text-xs ${presetId === p.id ? "opacity-90" : "text-neutral-500 dark:text-neutral-400"}`}>
                {fmtLoudness(p.target).replace(".0", "")} LUFS
              </span>
            </button>
          ))}
        </div>
      </div>

      {/* Drop zone */}
      {status !== "done" && (
        <label
          onDragOver={(e) => { e.preventDefault(); setDragging(true); }}
          onDragLeave={() => setDragging(false)}
          onDrop={(e) => { e.preventDefault(); setDragging(false); handleFile(e.dataTransfer.files?.[0]); }}
          className={`${cardClass} block p-8 sm:p-12 text-center border-dashed border-2 cursor-pointer transition-colors ${
            dragging ? "border-orange-500 bg-orange-50 dark:bg-orange-950/40" : "hover:border-neutral-400 dark:hover:border-neutral-600"
          }`}
        >
          <input
            ref={inputRef}
            type="file"
            accept="audio/*,video/mp4,.mp3,.wav,.m4a,.flac,.ogg,.aac"
            className="sr-only"
            onChange={(e) => handleFile(e.target.files?.[0])}
            disabled={status === "working"}
          />
          {status === "working" ? (
            <div className="flex flex-col items-center gap-3" role="status">
              <Loader2 className="w-8 h-8 text-orange-600 animate-spin motion-reduce:animate-none" />
              <p className="text-sm font-medium text-neutral-900 dark:text-neutral-100">{ui.analyzing}</p>
            </div>
          ) : (
            <div className="flex flex-col items-center gap-3">
              <div className="w-12 h-12 rounded-full bg-orange-100 dark:bg-orange-950 flex items-center justify-center text-orange-600 dark:text-orange-400">
                <AudioLines className="w-6 h-6" />
              </div>
              <p className="text-base font-semibold text-neutral-900 dark:text-neutral-100">{ui.dropTitle}</p>
              <p className="text-sm text-neutral-600 dark:text-neutral-400 max-w-md">{ui.dropSub}</p>
              <span className="mt-1 inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-orange-600 text-white text-sm font-medium">
                <Upload className="w-4 h-4" /> {ui.choose}
              </span>
              {status === "error" && (
                <p className="text-sm text-red-600 dark:text-red-400 max-w-md" role="alert">{ui.decodeError}</p>
              )}
              {status === "silent" && (
                <p className="text-sm text-red-600 dark:text-red-400 max-w-md" role="alert">{ui.silent}</p>
              )}
            </div>
          )}
        </label>
      )}

      {/* Results */}
      {status === "done" && result && view && (
        <div className="space-y-5">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
            <div className="min-w-0">
              <p className="text-sm font-semibold text-neutral-900 dark:text-neutral-100 truncate">{result.fileName}</p>
              <p className="text-xs text-neutral-600 dark:text-neutral-400">
                {ui.length}: {formatDuration(result.durationSec)} · {ui.channels}: {result.channels === 1 ? ui.mono : result.channels === 2 ? ui.stereo : result.channels}
              </p>
            </div>
            <button
              type="button"
              onClick={() => { setStatus("idle"); setResult(null); }}
              className="inline-flex items-center justify-center gap-2 px-3.5 py-2 rounded-lg border border-neutral-200 dark:border-neutral-700 bg-white dark:bg-neutral-800 text-sm font-medium text-neutral-800 dark:text-neutral-200 hover:border-neutral-400 dark:hover:border-neutral-500 transition-colors cursor-pointer shrink-0"
            >
              <RotateCcw className="w-4 h-4" /> {ui.another}
            </button>
          </div>

          {/* Verdict */}
          <div
            className={`rounded-xl border p-4 sm:p-5 flex items-start gap-3 ${
              view.onTarget && !view.peakOver
                ? "border-emerald-500/40 bg-emerald-500/10"
                : "border-amber-500/40 bg-amber-500/10"
            }`}
            role="status"
          >
            {view.onTarget && !view.peakOver ? (
              <CheckCircle2 className="w-5 h-5 mt-0.5 shrink-0 text-emerald-600 dark:text-emerald-400" />
            ) : (
              <AlertTriangle className="w-5 h-5 mt-0.5 shrink-0 text-amber-600 dark:text-amber-400" />
            )}
            <div className="space-y-1.5 text-sm text-neutral-800 dark:text-neutral-200">
              <p className="font-semibold text-neutral-900 dark:text-neutral-100">
                {view.onTarget
                  ? fill(ui.verdictOk, { platform: presetName })
                  : fill(view.difference < 0 ? ui.verdictQuiet : ui.verdictLoud, { n: Math.abs(view.difference).toFixed(1), platform: presetName })}
              </p>
              {!view.onTarget && (
                <p>
                  {fill(view.gain > 0 ? ui.fixRaise : ui.fixLower, { n: Math.abs(view.gain).toFixed(1), target: fmtLoudness(preset.target).replace(".0", "") })}
                </p>
              )}
              <p>
                {view.peakOver
                  ? fill(ui.peakOver, { limit: fmtLoudness(preset.peakLimit).replace(".0", "") })
                  : fill(ui.peakOk, { limit: fmtLoudness(preset.peakLimit).replace(".0", "") })}
              </p>
              {view.peakAfterGainOver && (
                <p>{fill(ui.peakAfterGain, { n: fmtLoudness(view.peakAfterGain), limit: fmtLoudness(preset.peakLimit).replace(".0", "") })}</p>
              )}
            </div>
          </div>

          {/* Headline numbers */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3">
            <div className={`${cardClass} p-4`}>
              <p className="text-xs text-neutral-600 dark:text-neutral-400 mb-1">{ui.integrated}</p>
              <p className="text-2xl sm:text-3xl font-semibold tracking-tight text-neutral-900 dark:text-neutral-100 tabular-nums">
                {fmtLoudness(view.integrated)} <span className="text-sm font-medium text-neutral-500 dark:text-neutral-400">LUFS</span>
              </p>
              <p className="text-xs text-neutral-600 dark:text-neutral-400 mt-1 tabular-nums">
                {fmtSigned(view.difference)} LU · {ui.target} {fmtLoudness(preset.target).replace(".0", "")} (±{preset.tolerance})
              </p>
            </div>
            <div className={`${cardClass} p-4`}>
              <p className="text-xs text-neutral-600 dark:text-neutral-400 mb-1">{ui.truePeak}</p>
              <p className={`text-2xl sm:text-3xl font-semibold tracking-tight tabular-nums ${view.peakOver ? "text-red-600 dark:text-red-400" : "text-neutral-900 dark:text-neutral-100"}`}>
                {fmtLoudness(result.truePeak)} <span className="text-sm font-medium text-neutral-500 dark:text-neutral-400">dBTP</span>
              </p>
              <p className="text-xs text-neutral-600 dark:text-neutral-400 mt-1">≤ {fmtLoudness(preset.peakLimit).replace(".0", "")} dBTP</p>
            </div>
            <div className={`${cardClass} p-4`}>
              <p className="text-xs text-neutral-600 dark:text-neutral-400 mb-1">{ui.lra}</p>
              <p className="text-2xl sm:text-3xl font-semibold tracking-tight text-neutral-900 dark:text-neutral-100 tabular-nums">
                {fmt(result.loudnessRange)} <span className="text-sm font-medium text-neutral-500 dark:text-neutral-400">LU</span>
              </p>
            </div>
            <div className={`${cardClass} p-4`}>
              <p className="text-xs text-neutral-600 dark:text-neutral-400 mb-1">{ui.shortMax}</p>
              <p className="text-2xl sm:text-3xl font-semibold tracking-tight text-neutral-900 dark:text-neutral-100 tabular-nums">
                {fmtLoudness(view.shortTermMax)} <span className="text-sm font-medium text-neutral-500 dark:text-neutral-400">LUFS</span>
              </p>
            </div>
          </div>

          {/* Mono handling */}
          {view.isMono && (
            <div className={`${cardClass} p-4 sm:p-5 space-y-3`}>
              <label className="flex items-start gap-3 cursor-pointer">
                <input
                  type="checkbox"
                  checked={monoAsStereo}
                  onChange={(e) => setMonoAsStereo(e.target.checked)}
                  className="mt-0.5 w-4 h-4"
                />
                <span className="text-sm font-medium text-neutral-900 dark:text-neutral-100">{ui.monoToggle}</span>
              </label>
              <p className="text-sm text-neutral-600 dark:text-neutral-400">
                {fill(ui.monoNote, { raw: fmtLoudness(result.integrated), dual: fmtLoudness(result.integrated + MONO_OFFSET) })}
              </p>
            </div>
          )}

          {/* Timeline */}
          {view.timeline.length > 1 && (
            <div className={`${cardClass} p-4 sm:p-5`}>
              <div className="flex items-center justify-between gap-3 mb-3">
                <p className="text-sm font-semibold text-neutral-900 dark:text-neutral-100">{ui.timelineTitle}</p>
                <p className="text-xs text-neutral-600 dark:text-neutral-400 whitespace-nowrap">
                  <span className="inline-block w-3 h-0.5 align-middle bg-emerald-600 dark:bg-emerald-400 mr-1.5" aria-hidden="true" />
                  {fmtLoudness(preset.target).replace(".0", "")} LUFS
                </p>
              </div>
              <LoudnessTimeline values={view.timeline} target={preset.target} tolerance={preset.tolerance} />
              <div className="flex justify-between text-xs text-neutral-500 dark:text-neutral-400 mt-1 tabular-nums">
                <span>0:00</span>
                <span>{formatDuration(result.durationSec)}</span>
              </div>
            </div>
          )}

          <p className="text-xs text-neutral-500 dark:text-neutral-400">{ui.estimateNote}</p>
        </div>
      )}
    </div>
  );
}

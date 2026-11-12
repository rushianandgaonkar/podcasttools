"use client";

import React, { useId, useMemo, useState } from "react";
import { Timer, Sparkles, Eraser } from "lucide-react";
import { defaultLocale, type SupportedLocale } from "@/i18n/languages";
import { SCRIPT_TIMER_TEXT, fill } from "./scriptTimerText";

/**
 * Script Timer — words to minutes for podcast scripts.
 *
 * Counts the spoken part of a script (skipping # headings, [bracketed cues] and
 * speaker labels), converts it to speaking time at a chosen pace, compares it with
 * a target length and breaks it into segments. Everything runs in the browser.
 *
 * Japanese and Korean text has no reliable word boundaries for timing, so those
 * scripts are counted in characters with their own pace presets:
 *  - English & other Latin-script languages: ~150 words/min is a typical podcast pace.
 *  - Japanese: ~300 characters/min is the usual guideline for speeches.
 *  - Korean: announcers read prose at roughly 180–340 syllables/min.
 */

type Mode = "words" | "ja" | "ko";

const PRESETS: Record<Mode, { slow: number; natural: number; fast: number }> = {
  words: { slow: 130, natural: 150, fast: 170 },
  ja: { slow: 250, natural: 300, fast: 350 },
  ko: { slow: 240, natural: 280, fast: 320 },
};

const TARGET_CHIPS = [30, 60, 300, 900, 1800, 3600];

const HEADING_RE = /^\s{0,3}#{1,6}\s+(.*)$/;
const CUE_RE = /\[[^\]\n]*\]|［[^］\n]*］|【[^】\n]*】/g;
// Speaker labels at the start of a line: ALL-CAPS names (may contain spaces),
// a single token such as "Ana:" or "진행자:", or **Bold:** markdown labels.
const LABEL_RE = /^\s*(?:\*\*[^*\n]{1,30}\*\*\s*[:：]|\p{Lu}[\p{Lu}\p{N} .'’-]{0,24}[:：]|[^\s:：、。,.!?「」()（）]{1,12}[:：])\s*/u;

interface Segment {
  name: string | null;
  count: number;
}

interface Analysis {
  mode: Mode;
  count: number;
  paragraphs: number;
  segments: Segment[];
}

function detectMode(text: string, lang: SupportedLocale): Mode {
  const letters = text.match(/\p{L}/gu)?.length ?? 0;
  if (letters === 0) return lang === "ja" ? "ja" : lang === "ko" ? "ko" : "words";
  const jaChars = text.match(/[\p{sc=Han}\p{sc=Hiragana}\p{sc=Katakana}]/gu)?.length ?? 0;
  const koChars = text.match(/\p{sc=Hangul}/gu)?.length ?? 0;
  if (jaChars / letters > 0.3) return "ja";
  if (koChars / letters > 0.3) return "ko";
  return "words";
}

function countSpoken(line: string, mode: Mode): number {
  if (mode === "words") {
    return line.split(/\s+/).filter((t) => /[\p{L}\p{N}]/u.test(t)).length;
  }
  if (mode === "ja") {
    // Japanese manuscript counts include punctuation; spaces are ignored.
    return line.replace(/\s+/g, "").replace(/[#*_>`]/g, "").length;
  }
  // Korean: count syllables and other letters/digits, not spaces or punctuation.
  return line.match(/[\p{L}\p{N}]/gu)?.length ?? 0;
}

function analyze(text: string, lang: SupportedLocale, skipCues: boolean): Analysis {
  const mode = detectMode(text, lang);
  const segments: Segment[] = [{ name: null, count: 0 }];
  let paragraphs = 0;
  let inParagraph = false;

  for (const raw of text.split(/\r?\n/)) {
    const heading = raw.match(HEADING_RE);
    if (heading) {
      const name = heading[1].replace(/[*_`]/g, "").trim();
      segments.push({ name: name || null, count: 0 });
      inParagraph = false;
      continue;
    }
    let line = raw;
    if (skipCues) line = line.replace(CUE_RE, " ").replace(LABEL_RE, "");
    const n = countSpoken(line, mode);
    if (n > 0) {
      segments[segments.length - 1].count += n;
      if (!inParagraph) paragraphs += 1;
      inParagraph = true;
    } else if (raw.trim() === "") {
      inParagraph = false;
    }
  }

  const visible = segments.filter((s, i) => i > 0 || s.count > 0);
  const count = segments.reduce((sum, s) => sum + s.count, 0);
  return { mode, count, paragraphs, segments: visible };
}

function formatTime(totalSeconds: number): string {
  const s = Math.max(0, Math.round(totalSeconds));
  const h = Math.floor(s / 3600);
  const m = Math.floor((s % 3600) / 60);
  const sec = s % 60;
  const ss = String(sec).padStart(2, "0");
  return h > 0 ? `${h}:${String(m).padStart(2, "0")}:${ss}` : `${m}:${ss}`;
}

const SEGMENT_SHADES = ["#cc785c", "#e0ab93", "#a9583e", "#d58f72", "#8f4630", "#eccbbb"];

export function ScriptTimer({ lang = defaultLocale }: { lang?: SupportedLocale }) {
  const ui = SCRIPT_TIMER_TEXT[lang] || SCRIPT_TIMER_TEXT.en;
  const ids = useId();
  const numberFormat = useMemo(() => new Intl.NumberFormat(lang), [lang]);

  const [text, setText] = useState("");
  const [skipCues, setSkipCues] = useState(true);
  const [paces, setPaces] = useState<Record<Mode, number>>({
    words: PRESETS.words.natural,
    ja: PRESETS.ja.natural,
    ko: PRESETS.ko.natural,
  });
  const [extraMinutes, setExtraMinutes] = useState(0);
  const [targetSeconds, setTargetSeconds] = useState(600);

  const analysis = useMemo(() => analyze(text, lang, skipCues), [text, lang, skipCues]);
  const { mode, count } = analysis;
  const unit = mode === "words" ? "words" : "chars";
  const pace = paces[mode];
  const presets = PRESETS[mode];

  const speechSeconds = pace > 0 ? (count / pace) * 60 : 0;
  const extraSeconds = Math.max(0, extraMinutes) * 60;
  const totalSeconds = speechSeconds + extraSeconds;
  const hasScript = count > 0;

  const diff = totalSeconds - targetSeconds;
  const diffCount = Math.round((Math.abs(diff) / 60) * pace);
  const fit: "on" | "over" | "under" = Math.abs(diff) <= 5 ? "on" : diff > 0 ? "over" : "under";

  const neededFor = (rate: number) => Math.max(0, Math.round(((targetSeconds - extraSeconds) / 60) * rate));
  const paceRows: Array<{ label: string; rate: number }> = [
    { label: ui.paces.slow, rate: presets.slow },
    { label: ui.paces.natural, rate: presets.natural },
    { label: ui.paces.fast, rate: presets.fast },
  ];
  if (!paceRows.some((r) => r.rate === pace) && pace > 0) paceRows.push({ label: ui.yourPace, rate: pace });

  // Run-of-show timeline: segment blocks, then music & ads, scaled to the longer of total and target.
  const scale = Math.max(totalSeconds, targetSeconds, 1);
  let cursor = 0;
  const timeline = analysis.segments.map((seg, i) => {
    const seconds = pace > 0 ? (seg.count / pace) * 60 : 0;
    const start = cursor;
    cursor += seconds;
    return { ...seg, seconds, start, color: SEGMENT_SHADES[i % SEGMENT_SHADES.length] };
  });
  const showRunOfShow = hasScript && timeline.length >= 2;

  const setPace = (value: number) => setPaces((prev) => ({ ...prev, [mode]: value }));
  const cardClass = "rounded-xl bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800";
  const inputClass =
    "px-3 py-2 rounded-lg bg-white dark:bg-neutral-950 border border-neutral-200 dark:border-neutral-700 text-sm text-neutral-900 dark:text-neutral-100 tabular-nums focus:outline-none focus-visible:border-orange-500 focus-visible:ring-2 focus-visible:ring-orange-500/30";
  const chip = (active: boolean) =>
    `px-3 py-1.5 rounded-lg text-sm font-medium border transition-colors cursor-pointer tabular-nums ${
      active
        ? "bg-orange-600 border-orange-600 text-white"
        : "bg-white dark:bg-neutral-900 border-neutral-200 dark:border-neutral-700 text-neutral-700 dark:text-neutral-300 hover:border-orange-400"
    }`;

  return (
    <div className="space-y-5">
      {/* Pace */}
      <div className={`${cardClass} p-4 sm:p-5 flex flex-col lg:flex-row lg:items-center gap-3 lg:gap-5`}>
        <span className="text-sm font-semibold text-neutral-900 dark:text-neutral-100 shrink-0">{ui.pace}</span>
        <div className="flex flex-wrap gap-2" role="group" aria-label={ui.pace}>
          {(["slow", "natural", "fast"] as const).map((key) => (
            <button key={key} type="button" aria-pressed={pace === presets[key]} onClick={() => setPace(presets[key])} className={chip(pace === presets[key])}>
              {ui.paces[key]}
              <span className={`ml-1.5 text-xs ${pace === presets[key] ? "opacity-90" : "text-neutral-500 dark:text-neutral-400"}`}>{presets[key]}</span>
            </button>
          ))}
        </div>
        <label className="flex items-center gap-2 lg:ml-auto text-sm text-neutral-600 dark:text-neutral-400">
          <span className="whitespace-nowrap">{ui.customPace}</span>
          <input
            type="number"
            min={40}
            max={600}
            value={pace}
            onChange={(e) => setPace(Math.min(600, Math.max(0, Number(e.target.value) || 0)))}
            className={`${inputClass} w-20 shrink-0`}
          />
          <span className="whitespace-nowrap">{ui.perMinute[unit]}</span>
        </label>
      </div>

      <div className="grid lg:grid-cols-5 gap-5 items-start">
        {/* Script input */}
        <div className={`${cardClass} lg:col-span-3 p-4 sm:p-5 space-y-3`}>
          <div className="flex items-center justify-between gap-3">
            <label htmlFor={`${ids}-script`} className="text-sm font-semibold text-neutral-900 dark:text-neutral-100">
              {ui.script}
            </label>
            <div className="flex gap-2">
              <button
                type="button"
                onClick={() => setText(ui.sample)}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-neutral-200 dark:border-neutral-700 text-xs font-medium text-neutral-700 dark:text-neutral-300 hover:border-orange-400 cursor-pointer"
              >
                <Sparkles className="w-3.5 h-3.5" /> {ui.example}
              </button>
              {text && (
                <button
                  type="button"
                  onClick={() => setText("")}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-neutral-200 dark:border-neutral-700 text-xs font-medium text-neutral-700 dark:text-neutral-300 hover:border-orange-400 cursor-pointer"
                >
                  <Eraser className="w-3.5 h-3.5" /> {ui.clear}
                </button>
              )}
            </div>
          </div>
          <textarea
            id={`${ids}-script`}
            value={text}
            onChange={(e) => setText(e.target.value)}
            placeholder={ui.placeholder}
            spellCheck
            className="w-full min-h-[22rem] resize-y px-3.5 py-3 rounded-lg bg-neutral-50 dark:bg-neutral-950 border border-neutral-200 dark:border-neutral-700 text-[15px] leading-relaxed text-neutral-900 dark:text-neutral-100 placeholder-neutral-500 focus:outline-none focus-visible:border-orange-500 focus-visible:ring-2 focus-visible:ring-orange-500/30"
          />
          <label className="flex items-start gap-2.5 text-sm text-neutral-700 dark:text-neutral-300 cursor-pointer">
            <input type="checkbox" checked={skipCues} onChange={(e) => setSkipCues(e.target.checked)} className="mt-0.5 w-4 h-4 accent-orange-600" />
            <span>{ui.skipCues}</span>
          </label>
        </div>

        {/* Console readout */}
        <div className="lg:col-span-2 space-y-5">
          <div className="rounded-2xl bg-[#141413] text-[#faf9f5] border border-[#34312c] overflow-hidden">
            <div className="p-5 sm:p-6">
              <div className="flex items-center gap-2 text-xs text-[#c2beb4]">
                <Timer className="w-4 h-4 text-[#cc785c]" aria-hidden="true" />
                <span>{ui.speakingTime}</span>
              </div>
              <p className="font-display text-6xl sm:text-7xl font-semibold tracking-tight tabular-nums mt-2" aria-live="polite">
                {formatTime(speechSeconds)}
              </p>
              <p className="text-sm text-[#c2beb4] mt-1 min-h-5">
                {!hasScript ? ui.emptyHint : extraSeconds > 0 ? fill(ui.withExtra, { time: formatTime(totalSeconds) }) : " "}
              </p>

              <dl className="grid grid-cols-2 gap-3 mt-5">
                <div className="rounded-lg bg-[#1f1e1b] border border-[#34312c] px-3 py-2.5">
                  <dt className="text-xs text-[#a5a097]">{ui.unitLabel[unit]}</dt>
                  <dd className="text-xl font-semibold tabular-nums">{numberFormat.format(count)}</dd>
                </div>
                <div className="rounded-lg bg-[#1f1e1b] border border-[#34312c] px-3 py-2.5">
                  <dt className="text-xs text-[#a5a097]">{ui.paragraphs}</dt>
                  <dd className="text-xl font-semibold tabular-nums">{numberFormat.format(analysis.paragraphs)}</dd>
                </div>
              </dl>
            </div>

            {/* Timeline strip */}
            <div className="px-5 sm:px-6 pb-5 sm:pb-6">
              <div className="relative h-9 rounded-md bg-[#0f0f0e] border border-[#34312c] overflow-hidden" aria-hidden="true">
                <div className="absolute inset-y-0 left-0 flex w-full">
                  {timeline.map((seg, i) =>
                    seg.seconds > 0 ? (
                      <div
                        key={i}
                        className="h-full border-r border-[#141413] transition-[width] duration-300 motion-reduce:transition-none"
                        style={{ width: `${(seg.seconds / scale) * 100}%`, background: seg.color }}
                      />
                    ) : null,
                  )}
                  {extraSeconds > 0 && (
                    <div
                      className="h-full"
                      style={{
                        width: `${(extraSeconds / scale) * 100}%`,
                        background: "repeating-linear-gradient(135deg,#45433d 0 6px,#34312c 6px 12px)",
                      }}
                    />
                  )}
                </div>
                <div className="absolute inset-y-0 w-0.5 bg-[#faf9f5]" style={{ left: `calc(${(targetSeconds / scale) * 100}% - 1px)` }} />
              </div>
              <div className="flex justify-between text-[11px] text-[#a5a097] mt-1.5 tabular-nums">
                <span>0:00</span>
                <span>
                  {ui.targetMark} {formatTime(targetSeconds)}
                </span>
              </div>
              {hasScript && (
                <p
                  className={`mt-3 text-sm font-medium ${fit === "on" ? "text-[#8fd6a8]" : fit === "over" ? "text-[#f3a58b]" : "text-[#faf9f5]"}`}
                  role="status"
                >
                  {fit === "on"
                    ? ui.onTarget
                    : fill(fit === "over" ? ui.over : ui.under, {
                        time: formatTime(Math.abs(diff)),
                        n: numberFormat.format(diffCount),
                        unit: ui.unitNoun[unit],
                      })}
                </p>
              )}
            </div>
          </div>

          {/* Target & extras */}
          <div className={`${cardClass} p-4 sm:p-5 space-y-4`}>
            <div className="space-y-2">
              <p className="text-sm font-semibold text-neutral-900 dark:text-neutral-100" id={`${ids}-target`}>
                {ui.target}
              </p>
              <div className="flex flex-wrap gap-2" role="group" aria-labelledby={`${ids}-target`}>
                {TARGET_CHIPS.map((s) => (
                  <button key={s} type="button" aria-pressed={targetSeconds === s} onClick={() => setTargetSeconds(s)} className={chip(targetSeconds === s)}>
                    {formatTime(s)}
                  </button>
                ))}
              </div>
              <label className="flex items-center gap-2 text-sm text-neutral-600 dark:text-neutral-400">
                <span className="flex-1">{ui.targetMinutes}</span>
                <input
                  type="number"
                  min={0}
                  step={0.5}
                  value={Number((targetSeconds / 60).toFixed(2))}
                  onChange={(e) => setTargetSeconds(Math.max(0, Math.round((Number(e.target.value) || 0) * 60)))}
                  className={`${inputClass} w-24 shrink-0`}
                />
              </label>
            </div>
            <label className="flex items-center gap-2 text-sm text-neutral-600 dark:text-neutral-400 pt-3 border-t border-neutral-200 dark:border-neutral-800">
              <span className="flex-1">{ui.extra}</span>
              <input
                type="number"
                min={0}
                step={0.5}
                value={extraMinutes}
                onChange={(e) => setExtraMinutes(Math.max(0, Number(e.target.value) || 0))}
                className={`${inputClass} w-24 shrink-0`}
              />
              <span>{ui.minutes}</span>
            </label>
            <div className="pt-3 border-t border-neutral-200 dark:border-neutral-800">
              <p className="text-sm font-semibold text-neutral-900 dark:text-neutral-100 mb-2">
                {fill(ui.needed, { unit: ui.unitLabel[unit], target: formatTime(targetSeconds) })}
              </p>
              <table className="w-full text-sm">
                <tbody>
                  {paceRows.map((row) => (
                    <tr key={`${row.label}-${row.rate}`} className={row.rate === pace ? "text-neutral-900 dark:text-neutral-100 font-semibold" : "text-neutral-600 dark:text-neutral-400"}>
                      <th scope="row" className="text-left font-[inherit] py-1">
                        {row.label} <span className="ml-1 text-xs font-normal text-neutral-500 dark:text-neutral-400 tabular-nums">{row.rate}</span>
                      </th>
                      <td className="text-right tabular-nums py-1">{numberFormat.format(neededFor(row.rate))}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>

      {showRunOfShow && (
        <div className={`${cardClass} p-4 sm:p-5`}>
          <p className="text-sm font-semibold text-neutral-900 dark:text-neutral-100 mb-3">{ui.runOfShow}</p>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="text-left text-xs text-neutral-500 dark:text-neutral-400 border-b border-neutral-200 dark:border-neutral-800">
                  <th scope="col" className="font-medium py-2 pr-3">{ui.segment}</th>
                  <th scope="col" className="font-medium py-2 px-3 text-right">{ui.starts}</th>
                  <th scope="col" className="font-medium py-2 px-3 text-right">{ui.unitLabel[unit]}</th>
                  <th scope="col" className="font-medium py-2 pl-3 text-right">{ui.length}</th>
                </tr>
              </thead>
              <tbody>
                {timeline.map((seg, i) => (
                  <tr key={i} className="border-b last:border-b-0 border-neutral-100 dark:border-neutral-800 text-neutral-800 dark:text-neutral-200">
                    <td className="py-2 pr-3">
                      <span className="inline-block w-2.5 h-2.5 rounded-sm mr-2 align-middle" style={{ background: seg.color }} aria-hidden="true" />
                      {seg.name ?? ui.opening}
                    </td>
                    <td className="py-2 px-3 text-right tabular-nums text-neutral-500 dark:text-neutral-400">{formatTime(seg.start)}</td>
                    <td className="py-2 px-3 text-right tabular-nums">{numberFormat.format(seg.count)}</td>
                    <td className="py-2 pl-3 text-right tabular-nums font-medium">{formatTime(seg.seconds)}</td>
                  </tr>
                ))}
                {extraSeconds > 0 && (
                  <tr className="text-neutral-500 dark:text-neutral-400">
                    <td className="py-2 pr-3">{ui.musicAds}</td>
                    <td className="py-2 px-3 text-right tabular-nums">{formatTime(speechSeconds)}</td>
                    <td className="py-2 px-3 text-right">–</td>
                    <td className="py-2 pl-3 text-right tabular-nums">{formatTime(extraSeconds)}</td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
      )}

      <p className="text-xs text-neutral-500 dark:text-neutral-400">{ui.note}</p>
    </div>
  );
}

"use client";

import React, { useMemo, useState } from "react";
import { CheckCircle2, XCircle } from "lucide-react";

interface Chapter {
  id: string;
  time: string;
  title: string;
}

/** "1:02:03" | "02:45" → seconds (NaN if malformed) */
export function toSeconds(time: string): number {
  const parts = time.trim().split(":").map((p) => Number(p));
  if (parts.some((n) => Number.isNaN(n)) || parts.length < 2 || parts.length > 3) return NaN;
  return parts.reduce((acc, n) => acc * 60 + n, 0);
}

const fmt = (sec: number) => {
  const h = Math.floor(sec / 3600);
  const m = Math.floor((sec % 3600) / 60);
  const s = Math.floor(sec % 60);
  const mm = String(m).padStart(2, "0");
  const ss = String(s).padStart(2, "0");
  return h > 0 ? `${h}:${mm}:${ss}` : `${mm}:${ss}`;
};

/**
 * Proportional chapter timeline + YouTube chapter-rule checks
 * (first chapter at 00:00, at least 3 chapters, each ≥ 10 s, ascending order).
 */
export function ChapterTimeline({ chapters }: { chapters: Chapter[] }) {
  const [hover, setHover] = useState<string | null>(null);

  const { segments, checks, total } = useMemo(() => {
    const parsed = chapters.map((c) => ({ ...c, start: toSeconds(c.time) }));
    const valid = parsed.filter((c) => !Number.isNaN(c.start));
    const sorted = [...valid].sort((a, b) => a.start - b.start);
    const lastStart = sorted.length ? sorted[sorted.length - 1].start : 0;
    // We don't know the episode length: assume the final chapter runs ~10% of the timeline (min 60 s)
    const total = Math.max(lastStart + Math.max(60, lastStart * 0.1), 60);

    const segments = sorted.map((c, i) => {
      const end = i < sorted.length - 1 ? sorted[i + 1].start : total;
      return { ...c, end, duration: end - c.start };
    });

    const ascending = valid.length === parsed.length && parsed.every((c, i) => i === 0 || c.start > parsed[i - 1].start);
    const checks = [
      { ok: parsed.length > 0 && parsed[0].start === 0, label: "First chapter starts at 00:00" },
      { ok: parsed.length >= 3, label: "At least 3 chapters" },
      { ok: segments.slice(0, -1).every((s) => s.duration >= 10), label: "Every chapter is 10 seconds or longer" },
      { ok: ascending, label: "Valid timestamps in ascending order" },
    ];
    return { segments, checks, total };
  }, [chapters]);

  const allOk = checks.every((c) => c.ok);
  const active = segments.find((s) => s.id === hover);

  return (
    <div className="p-6 rounded-2xl bg-studio-card border border-studio-border space-y-4">
      <div className="flex flex-wrap items-center justify-between gap-2 pb-2 border-b border-studio-border/60">
        <span className="text-xs font-bold uppercase tracking-wider text-neutral-700 dark:text-neutral-300">
          Chapter Timeline Preview
        </span>
        <span
          className={`inline-flex items-center gap-1 text-[11px] font-semibold px-2 py-0.5 rounded-full border ${
            allOk
              ? "text-emerald-600 dark:text-emerald-400 bg-emerald-500/10 border-emerald-500/20"
              : "text-amber-600 dark:text-amber-400 bg-amber-500/10 border-amber-500/20"
          }`}
        >
          {allOk ? <CheckCircle2 className="w-3.5 h-3.5" /> : <XCircle className="w-3.5 h-3.5" />}
          {allOk ? "YouTube chapters will activate" : "YouTube may ignore these chapters"}
        </span>
      </div>

      {/* Player-style scrubber with chapter gaps */}
      <div>
        <div className="flex w-full h-3 gap-[2px]" role="img" aria-label={`${segments.length} chapters across ${fmt(total)}`}>
          {segments.map((s, i) => (
            <button
              type="button"
              key={s.id}
              onPointerEnter={() => setHover(s.id)}
              onPointerLeave={() => setHover(null)}
              onFocus={() => setHover(s.id)}
              onBlur={() => setHover(null)}
              className="h-full first:rounded-l-[4px] last:rounded-r-[4px] transition-opacity focus:outline-none focus-visible:ring-2 focus-visible:ring-orange-500"
              style={{
                flexGrow: Math.max(s.duration, 1),
                flexBasis: 0,
                backgroundColor: i % 2 === 0 ? "#ea580c" : "#f59e0b",
                opacity: hover && hover !== s.id ? 0.35 : 1,
              }}
              aria-label={`${s.time} ${s.title}`}
            />
          ))}
        </div>
        <div className="flex justify-between mt-1.5 text-[10px] font-mono text-neutral-500">
          <span>00:00</span>
          <span className="text-neutral-700 dark:text-neutral-300 truncate px-2">
            {active ? `${active.time} · ${active.title} (${fmt(active.duration)})` : "Hover a segment to inspect"}
          </span>
          <span>≈{fmt(total)}</span>
        </div>
      </div>

      <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-1.5 text-[11px]">
        {checks.map((c) => (
          <li key={c.label} className="flex items-center gap-1.5">
            {c.ok ? (
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400 shrink-0" />
            ) : (
              <XCircle className="w-3.5 h-3.5 text-red-500 shrink-0" />
            )}
            <span className={c.ok ? "text-neutral-700 dark:text-neutral-300" : "text-neutral-900 dark:text-white font-medium"}>
              {c.label}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}

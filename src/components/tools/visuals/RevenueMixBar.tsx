"use client";

import React, { useState } from "react";

export interface MixSegment {
  id: string;
  label: string;
  value: number; // monthly $
  color: string;
}

interface RevenueMixBarProps {
  segments: MixSegment[];
  total: number;
  caption?: string;
}

const money = (n: number) => `$${Math.round(n).toLocaleString()}`;

/**
 * Horizontal stacked "where every dollar comes from" bar.
 * 2px surface gaps between segments, 4px rounded ends,
 * legend with swatch + value + share (identity never colour-only).
 */
export function RevenueMixBar({ segments, total, caption }: RevenueMixBarProps) {
  const [hover, setHover] = useState<string | null>(null);
  const active = segments.filter((s) => s.value > 0);

  return (
    <div className="space-y-3">
      {caption && (
        <span className="text-[11px] font-semibold uppercase tracking-wider text-neutral-600 dark:text-slate-400 block">
          {caption}
        </span>
      )}

      <div
        className="relative flex w-full h-3.5 gap-[2px] rounded-[4px] overflow-hidden bg-studio-darkest"
        role="img"
        aria-label={active.map((s) => `${s.label} ${money(s.value)}`).join(", ") || "No revenue"}
      >
        {active.map((s) => (
          <div
            key={s.id}
            className="h-full transition-[flex-grow,opacity] duration-300"
            style={{
              flexGrow: s.value,
              flexBasis: 0,
              backgroundColor: s.color,
              opacity: hover && hover !== s.id ? 0.35 : 1,
            }}
            onPointerEnter={() => setHover(s.id)}
            onPointerLeave={() => setHover(null)}
            title={`${s.label}: ${money(s.value)} / mo`}
          />
        ))}
      </div>

      <ul className="grid grid-cols-1 sm:grid-cols-3 gap-2">
        {segments.map((s) => {
          const share = total > 0 ? Math.round((s.value / total) * 100) : 0;
          return (
            <li
              key={s.id}
              className={`flex items-center gap-2 text-[11px] transition-opacity ${s.value === 0 ? "opacity-40" : ""}`}
              onPointerEnter={() => setHover(s.id)}
              onPointerLeave={() => setHover(null)}
            >
              <span className="w-2.5 h-2.5 rounded-[3px] shrink-0" style={{ backgroundColor: s.color }} />
              <span className="text-neutral-700 dark:text-slate-300 truncate">{s.label}</span>
              <span className="ml-auto font-mono text-neutral-900 dark:text-white">{share}%</span>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

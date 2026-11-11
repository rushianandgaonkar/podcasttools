"use client";

import React, { useId, useMemo, useState } from "react";

export interface GrowthPoint {
  label: string; // e.g. "M1"
  value: number; // downloads per episode
}

export interface Threshold {
  value: number;
  label: string; // e.g. "Top 10%"
}

interface GrowthChartProps {
  points: GrowthPoint[];
  thresholds?: Threshold[];
  unit?: string;
  title?: string;
  tableLabel?: string;
}

const W = 900;
const H = 250;
const PAD = { top: 16, right: 76, bottom: 28, left: 48 };
const ACCENT = "#ea580c";

function niceMax(v: number) {
  if (v <= 0) return 10;
  const exp = Math.pow(10, Math.floor(Math.log10(v)));
  const n = v / exp;
  const step = n <= 1 ? 1 : n <= 2 ? 2 : n <= 2.5 ? 2.5 : n <= 5 ? 5 : 10;
  return step * exp;
}

const fmt = (n: number) =>
  n >= 10000 ? `${Math.round(n / 1000)}k` : n >= 1000 ? `${(n / 1000).toFixed(1).replace(/\.0$/, "")}k` : `${Math.round(n)}`;

/**
 * Single-series area chart (12-month download trajectory) with
 * dashed percentile threshold lines and a crosshair tooltip.
 * Dependency-free SVG, theme-aware via Tailwind classes.
 */
export function GrowthChart({ points, thresholds = [], unit = "dl / ep", title, tableLabel = "View data table" }: GrowthChartProps) {
  const gid = useId().replace(/:/g, "");
  const [hover, setHover] = useState<number | null>(null);

  const { yMax, xs, ys, visibleThresholds } = useMemo(() => {
    const maxVal = Math.max(...points.map((p) => p.value), 1);
    // show the next tier above the curve so users see what they're climbing toward
    const nextTier = thresholds.find((t) => t.value > maxVal);
    const yMax = niceMax(Math.max(maxVal, nextTier ? nextTier.value : 0) * 1.08);
    const innerW = W - PAD.left - PAD.right;
    const innerH = H - PAD.top - PAD.bottom;
    const xs = points.map((_, i) => PAD.left + (points.length === 1 ? innerW / 2 : (i / (points.length - 1)) * innerW));
    const ys = points.map((p) => PAD.top + innerH - (p.value / yMax) * innerH);
    const visibleThresholds = thresholds.filter((t) => t.value <= yMax);
    return { yMax, xs, ys, visibleThresholds };
  }, [points, thresholds]);

  const yFor = (v: number) => PAD.top + (H - PAD.top - PAD.bottom) - (v / yMax) * (H - PAD.top - PAD.bottom);
  const baseline = H - PAD.bottom;
  const linePath = xs.map((x, i) => `${i === 0 ? "M" : "L"}${x.toFixed(1)},${ys[i].toFixed(1)}`).join(" ");
  const areaPath = `${linePath} L${xs[xs.length - 1].toFixed(1)},${baseline} L${xs[0].toFixed(1)},${baseline} Z`;
  const ticks = [0, 0.25, 0.5, 0.75, 1].map((f) => f * yMax);

  const onMove = (e: React.PointerEvent<SVGRectElement>) => {
    const rect = e.currentTarget.ownerSVGElement!.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * W;
    let best = 0;
    xs.forEach((px, i) => {
      if (Math.abs(px - x) < Math.abs(xs[best] - x)) best = i;
    });
    setHover(best);
  };

  const hp = hover !== null ? points[hover] : null;

  return (
    <figure className="relative w-full">
      {title && (
        <figcaption className="text-xs font-bold uppercase tracking-wider text-neutral-900 dark:text-white mb-3">
          {title}
        </figcaption>
      )}
      <div className="relative">
        <svg
          viewBox={`0 0 ${W} ${H}`}
          className="w-full h-auto select-none"
          role="img"
          aria-label={`${title ?? "Growth"}: ${points[0]?.value.toLocaleString()} to ${points[points.length - 1]?.value.toLocaleString()} ${unit}`}
        >
          <defs>
            <linearGradient id={`${gid}-fill`} x1="0" y1="0" x2="0" y2="1">
              <stop offset="0" stopColor={ACCENT} stopOpacity="0.28" />
              <stop offset="1" stopColor={ACCENT} stopOpacity="0" />
            </linearGradient>
          </defs>

          {/* recessive grid + y ticks */}
          {ticks.map((v) => (
            <g key={v}>
              <line
                x1={PAD.left}
                x2={W - PAD.right}
                y1={yFor(v)}
                y2={yFor(v)}
                className="stroke-neutral-200 dark:stroke-neutral-800"
                strokeWidth={1}
              />
              <text
                x={PAD.left - 8}
                y={yFor(v) + 3.5}
                textAnchor="end"
                className="fill-neutral-500 font-mono"
                fontSize={10}
              >
                {fmt(v)}
              </text>
            </g>
          ))}

          {/* percentile thresholds */}
          {visibleThresholds.map((t) => (
            <g key={t.label}>
              <line
                x1={PAD.left}
                x2={W - PAD.right}
                y1={yFor(t.value)}
                y2={yFor(t.value)}
                className="stroke-neutral-400 dark:stroke-neutral-600"
                strokeWidth={1}
                strokeDasharray="4 4"
              />
              <text
                x={W - PAD.right + 6}
                y={yFor(t.value) + 3.5}
                className="fill-neutral-600 dark:fill-neutral-400 font-mono"
                fontSize={10}
              >
                {t.label}
              </text>
            </g>
          ))}

          <path d={areaPath} fill={`url(#${gid}-fill)`} />
          <path d={linePath} fill="none" stroke={ACCENT} strokeWidth={2} strokeLinejoin="round" strokeLinecap="round" />

          {/* x labels: every other month to avoid collisions */}
          {points.map((p, i) =>
            i % 2 === 0 || i === points.length - 1 ? (
              <text
                key={p.label}
                x={xs[i]}
                y={H - 8}
                textAnchor="middle"
                className="fill-neutral-500 font-mono"
                fontSize={10}
              >
                {p.label}
              </text>
            ) : null
          )}

          {/* end-point direct label */}
          <circle cx={xs[xs.length - 1]} cy={ys[ys.length - 1]} r={4.5} fill={ACCENT} className="stroke-white dark:stroke-[#0a0a0a]" strokeWidth={2} />

          {/* crosshair */}
          {hover !== null && (
            <g pointerEvents="none">
              <line x1={xs[hover]} x2={xs[hover]} y1={PAD.top} y2={baseline} className="stroke-neutral-400 dark:stroke-neutral-500" strokeWidth={1} />
              <circle cx={xs[hover]} cy={ys[hover]} r={5} fill={ACCENT} className="stroke-white dark:stroke-[#0a0a0a]" strokeWidth={2} />
            </g>
          )}

          {/* hit area */}
          <rect
            x={PAD.left}
            y={PAD.top}
            width={W - PAD.left - PAD.right}
            height={H - PAD.top - PAD.bottom}
            fill="transparent"
            onPointerMove={onMove}
            onPointerLeave={() => setHover(null)}
          />
        </svg>

        {hp && hover !== null && (
          <div
            className="pointer-events-none absolute -translate-x-1/2 -translate-y-full px-2.5 py-1.5 rounded-lg border border-neutral-200 dark:border-neutral-800 bg-white/95 dark:bg-[#0a0a0a]/95 shadow-md text-[11px] whitespace-nowrap"
            style={{ left: `${(xs[hover] / W) * 100}%`, top: `${(ys[hover] / H) * 100}%`, marginTop: -10 }}
          >
            <span className="block font-mono text-neutral-500">{hp.label}</span>
            <span className="font-semibold text-neutral-900 dark:text-white">
              {hp.value.toLocaleString()} {unit}
            </span>
          </div>
        )}
      </div>

      {/* accessible table view */}
      <details className="mt-2 text-[11px] text-neutral-500">
        <summary className="cursor-pointer hover:text-neutral-900 dark:hover:text-white">{tableLabel}</summary>
        <table className="mt-2 w-full font-mono">
          <tbody>
            {points.map((p) => (
              <tr key={p.label} className="border-t border-studio-border/60">
                <td className="py-1">{p.label}</td>
                <td className="py-1 text-right text-neutral-900 dark:text-neutral-200">
                  {p.value.toLocaleString()} {unit}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </details>
    </figure>
  );
}

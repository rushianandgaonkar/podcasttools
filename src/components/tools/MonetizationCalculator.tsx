"use client";

import React, { useState } from "react";
import { DollarSign, TrendingUp, HelpCircle, Layers, BarChart3, CheckCircle2 } from "lucide-react";

export function MonetizationCalculator() {
  const [downloads, setDownloads] = useState<number>(5000);
  const [episodesPerMonth, setEpisodesPerMonth] = useState<number>(4);
  const [hasPreRoll, setHasPreRoll] = useState<boolean>(true);
  const [preRollCpm, setPreRollCpm] = useState<number>(18);
  const [hasMidRoll, setHasMidRoll] = useState<boolean>(true);
  const [midRollCpm, setMidRollCpm] = useState<number>(28);
  const [hasPostRoll, setHasPostRoll] = useState<boolean>(false);
  const [postRollCpm, setPostRollCpm] = useState<number>(12);
  const [fillRate, setFillRate] = useState<number>(85); // 85% sellout
  const [includePatreon, setIncludePatreon] = useState<boolean>(false);
  const [patreonBackers, setPatreonBackers] = useState<number>(100);
  const [patreonPrice, setPatreonPrice] = useState<number>(7);

  // Calculations
  const effectiveDownloads = downloads * (fillRate / 100);

  const preRollRevPerEp = hasPreRoll ? (effectiveDownloads / 1000) * preRollCpm : 0;
  const midRollRevPerEp = hasMidRoll ? (effectiveDownloads / 1000) * midRollCpm : 0;
  const postRollRevPerEp = hasPostRoll ? (effectiveDownloads / 1000) * postRollCpm : 0;

  const totalSponsorPerEp = preRollRevPerEp + midRollRevPerEp + postRollRevPerEp;
  const monthlySponsor = totalSponsorPerEp * episodesPerMonth;
  const monthlyPatreon = includePatreon ? patreonBackers * patreonPrice : 0;
  const totalMonthly = monthlySponsor + monthlyPatreon;
  const totalAnnual = totalMonthly * 12;

  // Industry percentile tier indicator
  const getTier = (dl: number) => {
    if (dl >= 35000) return { label: "Top 1% Worldwide", color: "text-amber-400 bg-amber-500/10 border-amber-500/30" };
    if (dl >= 10000) return { label: "Top 5% Worldwide", color: "text-purple-400 bg-purple-500/10 border-purple-500/30" };
    if (dl >= 3500) return { label: "Top 10% Worldwide", color: "text-indigo-400 bg-indigo-500/10 border-indigo-500/30" };
    if (dl >= 1100) return { label: "Top 20% Worldwide", color: "text-cyan-400 bg-cyan-500/10 border-cyan-500/30" };
    if (dl >= 150) return { label: "Top 50% Worldwide", color: "text-emerald-400 bg-emerald-500/10 border-emerald-500/30" };
    return { label: "Emerging Show", color: "text-slate-400 bg-slate-500/10 border-slate-500/30" };
  };

  const tier = getTier(downloads);

  return (
    <div className="w-full space-y-6">
      {/* Top Results Cards Banner */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {/* Monthly Projection */}
        <div className="p-5 rounded-2xl bg-gradient-to-br from-studio-card via-studio-card to-orange-500/10 border border-orange-500/30 shadow-lg">
          <span className="text-xs font-semibold text-neutral-600 dark:text-slate-400 uppercase tracking-wider block mb-1">
            Projected Monthly Gross
          </span>
          <div className="text-3xl font-extrabold text-neutral-900 dark:text-white flex items-baseline gap-1">
            <span className="text-orange-500 dark:text-orange-400">$</span>
            {Math.round(totalMonthly).toLocaleString()}
          </div>
          <span className="text-[11px] text-neutral-600 dark:text-slate-400 mt-1 block">
            Across {episodesPerMonth} episodes ({fillRate}% ad fill)
          </span>
        </div>

        {/* Annual Projection */}
        <div className="p-5 rounded-2xl bg-gradient-to-br from-studio-card via-studio-card to-indigo-500/10 border border-indigo-500/30 shadow-lg">
          <span className="text-xs font-semibold text-neutral-600 dark:text-slate-400 uppercase tracking-wider block mb-1">
            Projected Annual Gross
          </span>
          <div className="text-3xl font-extrabold text-neutral-900 dark:text-white flex items-baseline gap-1">
            <span className="text-indigo-600 dark:text-indigo-400">$</span>
            {Math.round(totalAnnual).toLocaleString()}
          </div>
          <span className="text-[11px] text-neutral-600 dark:text-slate-400 mt-1 block">
            12-month run rate
          </span>
        </div>

        {/* Per-Episode Average */}
        <div className="p-5 rounded-2xl bg-studio-card border border-studio-border shadow-lg">
          <div className="flex items-center justify-between mb-1">
            <span className="text-xs font-semibold text-neutral-600 dark:text-slate-400 uppercase tracking-wider">
              Per-Episode Average
            </span>
            <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full border ${tier.color}`}>
              {tier.label}
            </span>
          </div>
          <div className="text-3xl font-extrabold text-neutral-900 dark:text-white flex items-baseline gap-1">
            <span className="text-emerald-600 dark:text-emerald-400">$</span>
            {Math.round(totalSponsorPerEp).toLocaleString()}
          </div>
          <span className="text-[11px] text-neutral-600 dark:text-slate-400 mt-1 block">
            Gross sponsorship per release
          </span>
        </div>
      </div>

      {/* Main Controls & Breakdown Split */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Left: Input Controls */}
        <div className="p-6 rounded-2xl bg-studio-card border border-studio-border space-y-5">
          <h2 className="text-xs font-bold uppercase tracking-wider text-neutral-900 dark:text-white pb-2 border-b border-studio-border/60 flex items-center gap-2">
            <DollarSign className="w-4 h-4 text-orange-500 dark:text-orange-400" />
            Audience & Episode Parameters
          </h2>

          {/* Downloads Slider */}
          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <label className="text-xs font-semibold text-neutral-700 dark:text-neutral-300">
                Average 30-Day Downloads per Episode
              </label>
              <span className="text-xs font-bold font-mono text-orange-600 dark:text-orange-400 bg-studio-darkest px-2 py-1 rounded border border-studio-border">
                {downloads.toLocaleString()} downloads
              </span>
            </div>
            <input
              type="range"
              min={200}
              max={100000}
              step={200}
              value={downloads}
              onChange={(e) => setDownloads(Number(e.target.value))}
              className="w-full accent-orange-500 bg-studio-darkest h-2 rounded-lg cursor-pointer"
            />
            <div className="flex justify-between text-[10px] text-neutral-500">
              <span>200</span>
              <span>10k</span>
              <span>50k</span>
              <span>100k+</span>
            </div>
          </div>

          {/* Episodes / Month */}
          <div className="space-y-1.5">
            <label className="block text-xs font-semibold text-neutral-700 dark:text-neutral-300">
              Episodes Released Per Month
            </label>
            <div className="grid grid-cols-4 gap-2">
              {[1, 2, 4, 8].map((num) => (
                <button
                  key={num}
                  onClick={() => setEpisodesPerMonth(num)}
                  className={`py-2 rounded-xl text-xs font-semibold border transition-all cursor-pointer ${
                    episodesPerMonth === num
                      ? "bg-orange-500 text-white border-orange-500 shadow-md"
                      : "bg-studio-darkest text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white border-studio-border"
                  }`}
                >
                  {num} {num === 1 ? "Ep/mo" : "Eps/mo"}
                </button>
              ))}
            </div>
          </div>

          {/* Ad Slot Options */}
          <div className="space-y-3 pt-3 border-t border-studio-border/60">
            <span className="text-xs font-bold uppercase tracking-wider text-neutral-600 dark:text-neutral-400 block">
              Sponsorship Slots & CPM Rates
            </span>

            {/* Pre-roll */}
            <div className="flex items-center justify-between p-3 rounded-xl bg-studio-darkest border border-studio-border">
              <label className="flex items-center gap-2 cursor-pointer">
                <input
                  type="checkbox"
                  checked={hasPreRoll}
                  onChange={(e) => setHasPreRoll(e.target.checked)}
                  className="rounded accent-orange-500 w-4 h-4 cursor-pointer"
                />
                <span className="text-xs font-semibold text-neutral-900 dark:text-slate-200">Pre-Roll (15-30s)</span>
              </label>
              <div className="flex items-center gap-1.5 text-xs text-neutral-600 dark:text-slate-400">
                <span>CPM $</span>
                <input
                  type="number"
                  value={preRollCpm}
                  onChange={(e) => setPreRollCpm(Number(e.target.value))}
                  disabled={!hasPreRoll}
                  className="w-14 px-2 py-1 bg-studio-card border border-studio-border rounded text-neutral-900 dark:text-white text-center text-xs focus:outline-none"
                />
              </div>
            </div>

            {/* Mid-roll */}
            <div className="flex items-center justify-between p-3 rounded-xl bg-studio-darkest border border-studio-border">
              <label className="flex items-center gap-2 cursor-pointer">
                <input
                  type="checkbox"
                  checked={hasMidRoll}
                  onChange={(e) => setHasMidRoll(e.target.checked)}
                  className="rounded accent-orange-500 w-4 h-4 cursor-pointer"
                />
                <span className="text-xs font-semibold text-neutral-900 dark:text-slate-200">Mid-Roll (60s Host-Read)</span>
              </label>
              <div className="flex items-center gap-1.5 text-xs text-neutral-600 dark:text-slate-400">
                <span>CPM $</span>
                <input
                  type="number"
                  value={midRollCpm}
                  onChange={(e) => setMidRollCpm(Number(e.target.value))}
                  disabled={!hasMidRoll}
                  className="w-14 px-2 py-1 bg-studio-card border border-studio-border rounded text-neutral-900 dark:text-white text-center text-xs focus:outline-none"
                />
              </div>
            </div>

            {/* Post-roll */}
            <div className="flex items-center justify-between p-3 rounded-xl bg-studio-darkest border border-studio-border">
              <label className="flex items-center gap-2 cursor-pointer">
                <input
                  type="checkbox"
                  checked={hasPostRoll}
                  onChange={(e) => setHasPostRoll(e.target.checked)}
                  className="rounded accent-orange-500 w-4 h-4 cursor-pointer"
                />
                <span className="text-xs font-semibold text-neutral-900 dark:text-slate-200">Post-Roll (15s End)</span>
              </label>
              <div className="flex items-center gap-1.5 text-xs text-neutral-600 dark:text-slate-400">
                <span>CPM $</span>
                <input
                  type="number"
                  value={postRollCpm}
                  onChange={(e) => setPostRollCpm(Number(e.target.value))}
                  disabled={!hasPostRoll}
                  className="w-14 px-2 py-1 bg-studio-card border border-studio-border rounded text-neutral-900 dark:text-white text-center text-xs focus:outline-none"
                />
              </div>
            </div>
          </div>

          {/* Ad Fill Rate Slider */}
          <div className="space-y-1.5 pt-2 border-t border-studio-border/60">
            <div className="flex items-center justify-between">
              <label className="text-xs font-semibold text-neutral-700 dark:text-neutral-300">
                Sponsor Sell-Through / Fill Rate
              </label>
              <span className="text-xs font-mono font-bold text-neutral-900 dark:text-white">{fillRate}%</span>
            </div>
            <input
              type="range"
              min={20}
              max={100}
              step={5}
              value={fillRate}
              onChange={(e) => setFillRate(Number(e.target.value))}
              className="w-full accent-orange-500 bg-studio-darkest h-2 rounded-lg cursor-pointer"
            />
          </div>
        </div>

        {/* Right: Revenue Breakdown & Benchmarks */}
        <div className="p-6 rounded-2xl bg-studio-card border border-studio-border space-y-6">
          <h2 className="text-xs font-bold uppercase tracking-wider text-neutral-900 dark:text-white pb-2 border-b border-studio-border/60 flex items-center gap-2">
            <BarChart3 className="w-4 h-4 text-indigo-500 dark:text-indigo-400" />
            Monthly Revenue Breakdown
          </h2>

          {/* Breakdown Rows */}
          <div className="space-y-3">
            <div className="flex items-center justify-between p-3 rounded-xl bg-studio-darkest border border-studio-border text-xs">
              <span className="text-neutral-700 dark:text-slate-300">Pre-Roll Sponsorship ({hasPreRoll ? `$${preRollCpm} CPM` : "Off"})</span>
              <span className="font-mono font-bold text-neutral-900 dark:text-white">
                ${Math.round(preRollRevPerEp * episodesPerMonth).toLocaleString()}
              </span>
            </div>

            <div className="flex items-center justify-between p-3 rounded-xl bg-studio-darkest border border-studio-border text-xs">
              <span className="text-neutral-700 dark:text-slate-300">Mid-Roll Sponsorship ({hasMidRoll ? `$${midRollCpm} CPM` : "Off"})</span>
              <span className="font-mono font-bold text-orange-600 dark:text-orange-400">
                ${Math.round(midRollRevPerEp * episodesPerMonth).toLocaleString()}
              </span>
            </div>

            <div className="flex items-center justify-between p-3 rounded-xl bg-studio-darkest border border-studio-border text-xs">
              <span className="text-neutral-700 dark:text-slate-300">Post-Roll Sponsorship ({hasPostRoll ? `$${postRollCpm} CPM` : "Off"})</span>
              <span className="font-mono font-bold text-neutral-900 dark:text-white">
                ${Math.round(postRollRevPerEp * episodesPerMonth).toLocaleString()}
              </span>
            </div>
          </div>

          {/* 2026 Industry CPM Benchmarks Guide */}
          <div className="p-4 rounded-xl bg-studio-darkest border border-studio-border space-y-2.5">
            <span className="text-xs font-bold text-neutral-900 dark:text-white uppercase tracking-wider block">
              2026 Industry CPM Benchmarks
            </span>
            <div className="text-xs text-neutral-600 dark:text-slate-400 space-y-1.5 leading-relaxed">
              <div className="flex justify-between">
                <span>Standard Pre-roll (15-30s):</span>
                <span className="font-semibold text-neutral-900 dark:text-slate-200">$15 – $18 CPM</span>
              </div>
              <div className="flex justify-between">
                <span>Host-read Mid-roll (60s):</span>
                <span className="font-semibold text-orange-600 dark:text-orange-400">$25 – $35 CPM</span>
              </div>
              <div className="flex justify-between">
                <span>Niche B2B / Finance Mid-roll:</span>
                <span className="font-semibold text-indigo-600 dark:text-indigo-400">$40 – $75 CPM</span>
              </div>
              <div className="flex justify-between">
                <span>Standard Post-roll:</span>
                <span className="font-semibold text-neutral-900 dark:text-slate-200">$10 – $14 CPM</span>
              </div>
            </div>
            <p className="text-[11px] text-neutral-500 pt-1">
              Note: Most podcast sponsorship networks (Gumball, Advertisecast, Midroll) typically look for shows averaging 2,500+ to 5,000+ downloads per episode before broker matching.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}


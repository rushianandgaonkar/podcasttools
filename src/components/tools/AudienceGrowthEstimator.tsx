"use client";

import React, { useState } from "react";
import { TrendingUp, Users, ArrowUpRight, BarChart2, CheckCircle2 } from "lucide-react";

export function AudienceGrowthEstimator() {
  const [startingDownloads, setStartingDownloads] = useState<number>(350);
  const [episodesPerMonth, setEpisodesPerMonth] = useState<number>(4);
  const [growthRate, setGrowthRate] = useState<number>(7); // 7% monthly growth

  // Calculate 12-month trajectory
  const months = Array.from({ length: 12 }, (_, i) => {
    const monthNum = i + 1;
    const perEpisode = Math.round(startingDownloads * Math.pow(1 + growthRate / 100, i));
    const totalMonthlyDownloads = perEpisode * episodesPerMonth;

    return {
      month: `Month ${monthNum}`,
      perEpisode,
      totalMonthlyDownloads,
    };
  });

  const month3 = months[2];
  const month6 = months[5];
  const month12 = months[11];

  return (
    <div className="w-full space-y-6">
      {/* 3 Milestone Metric Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="p-5 rounded-2xl bg-studio-card border border-studio-border">
          <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider block mb-1">
            Month 3 Projected
          </span>
          <div className="text-2xl font-bold text-white flex items-baseline gap-1.5">
            <span>{month3.perEpisode.toLocaleString()}</span>
            <span className="text-xs text-orange-400 font-normal">dl / ep</span>
          </div>
          <span className="text-[11px] text-slate-500 mt-1 block">
            ~{month3.totalMonthlyDownloads.toLocaleString()} total downloads in M3
          </span>
        </div>

        <div className="p-5 rounded-2xl bg-studio-card border border-studio-border">
          <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider block mb-1">
            Month 6 Projected
          </span>
          <div className="text-2xl font-bold text-white flex items-baseline gap-1.5">
            <span>{month6.perEpisode.toLocaleString()}</span>
            <span className="text-xs text-indigo-400 font-normal">dl / ep</span>
          </div>
          <span className="text-[11px] text-slate-500 mt-1 block">
            ~{month6.totalMonthlyDownloads.toLocaleString()} total downloads in M6
          </span>
        </div>

        <div className="p-5 rounded-2xl bg-gradient-to-br from-studio-card to-orange-500/10 border border-orange-500/30">
          <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider block mb-1">
            Month 12 Milestone
          </span>
          <div className="text-2xl font-bold text-white flex items-baseline gap-1.5">
            <span className="text-orange-400">{month12.perEpisode.toLocaleString()}</span>
            <span className="text-xs text-orange-400 font-normal">dl / ep</span>
          </div>
          <span className="text-[11px] text-slate-400 mt-1 block">
            ~{month12.totalMonthlyDownloads.toLocaleString()} monthly downloads
          </span>
        </div>
      </div>

      {/* Control Sliders & Percentile Benchmark Split */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Sliders */}
        <div className="p-6 rounded-2xl bg-studio-card border border-studio-border space-y-5">
          <h2 className="text-xs font-bold uppercase tracking-wider text-white pb-2 border-b border-studio-border/60 flex items-center gap-2">
            <TrendingUp className="w-4 h-4 text-orange-400" />
            Growth Dynamics
          </h2>

          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <label className="text-xs font-semibold text-slate-300">
                Current Average 30-Day Downloads
              </label>
              <span className="text-xs font-mono font-bold text-orange-400 bg-studio-darkest px-2 py-1 rounded border border-studio-border">
                {startingDownloads.toLocaleString()}
              </span>
            </div>
            <input
              type="range"
              min={50}
              max={15000}
              step={50}
              value={startingDownloads}
              onChange={(e) => setStartingDownloads(Number(e.target.value))}
              className="w-full accent-orange-500 bg-studio-darkest h-2 rounded-lg cursor-pointer"
            />
          </div>

          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <label className="text-xs font-semibold text-slate-300">
                Monthly Organic Growth Rate
              </label>
              <span className="text-xs font-mono font-bold text-indigo-400 bg-studio-darkest px-2 py-1 rounded border border-studio-border">
                {growthRate}% / month
              </span>
            </div>
            <input
              type="range"
              min={2}
              max={25}
              step={1}
              value={growthRate}
              onChange={(e) => setGrowthRate(Number(e.target.value))}
              className="w-full accent-indigo-500 bg-studio-darkest h-2 rounded-lg cursor-pointer"
            />
            <div className="flex justify-between text-[10px] text-slate-500">
              <span>2% (Steady)</span>
              <span>7% (Average)</span>
              <span>15%+ (High Viral)</span>
            </div>
          </div>

          <div className="space-y-1.5 pt-2 border-t border-studio-border/60">
            <label className="block text-xs font-semibold text-slate-300">Episodes Released per Month</label>
            <div className="grid grid-cols-4 gap-2">
              {[2, 4, 8, 12].map((n) => (
                <button
                  key={n}
                  onClick={() => setEpisodesPerMonth(n)}
                  className={`py-2 rounded-xl text-xs font-semibold border transition-all ${
                    episodesPerMonth === n
                      ? "bg-orange-500 text-white border-orange-500 shadow-sm"
                      : "bg-studio-darkest text-slate-400 hover:text-white border-studio-border"
                  }`}
                >
                  {n} eps
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* 2026 Industry Download Percentiles */}
        <div className="p-6 rounded-2xl bg-studio-card border border-studio-border space-y-4">
          <h2 className="text-xs font-bold uppercase tracking-wider text-white pb-2 border-b border-studio-border/60 flex items-center gap-2">
            <BarChart2 className="w-4 h-4 text-emerald-400" />
            Where You Stand Globally (Libsyn 2026 Data)
          </h2>

          <div className="space-y-2.5 text-xs">
            <div className="flex items-center justify-between p-2.5 rounded-xl bg-studio-darkest border border-studio-border">
              <span className="text-slate-300">Top 50% of all shows worldwide:</span>
              <span className="font-mono font-semibold text-emerald-400">&gt; 150 downloads</span>
            </div>
            <div className="flex items-center justify-between p-2.5 rounded-xl bg-studio-darkest border border-studio-border">
              <span className="text-slate-300">Top 20% of all shows worldwide:</span>
              <span className="font-mono font-semibold text-cyan-400">&gt; 1,100 downloads</span>
            </div>
            <div className="flex items-center justify-between p-2.5 rounded-xl bg-studio-darkest border border-studio-border">
              <span className="text-slate-300">Top 10% of all shows worldwide:</span>
              <span className="font-mono font-semibold text-indigo-400">&gt; 3,500 downloads</span>
            </div>
            <div className="flex items-center justify-between p-2.5 rounded-xl bg-studio-darkest border border-studio-border">
              <span className="text-slate-300">Top 5% of all shows worldwide:</span>
              <span className="font-mono font-semibold text-purple-400">&gt; 10,000 downloads</span>
            </div>
            <div className="flex items-center justify-between p-2.5 rounded-xl bg-studio-darkest border border-studio-border">
              <span className="text-slate-300">Top 1% elite tier:</span>
              <span className="font-mono font-semibold text-amber-400">&gt; 35,000+ downloads</span>
            </div>
          </div>

          <p className="text-[11px] text-slate-500 pt-1 leading-relaxed">
            Over 90% of podcasts stop publishing after episode 7. Consistency and listener retention are the true compounding engines of audio growth.
          </p>
        </div>
      </div>
    </div>
  );
}


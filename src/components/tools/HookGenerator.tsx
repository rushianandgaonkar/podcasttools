"use client";

import React, { useState, useMemo } from "react";
import { Zap, Copy, Check, Sparkles, Filter } from "lucide-react";

export function HookGenerator() {
  const [topic, setTopic] = useState("Venture Capital Funding");
  const [guest, setGuest] = useState("Marc Andreessen");
  const [selectedStyle, setSelectedStyle] = useState<string>("all");
  const [copiedIndex, setCopiedIndex] = useState<number | null>(null);

  const hooks = useMemo(() => {
    const t = topic.trim() || "this industry";
    const g = guest.trim();

    const list = [
      {
        style: "Contrarian",
        hook: `“If you still believe that ${t} works the way it did two years ago, you're about to lose a lot of money.”`,
        why: "Challenges prevailing assumptions, triggering instant defensive curiosity.",
      },
      {
        style: "Open Loop",
        hook: `“There is a private conversation happening among leaders in ${t} right now that nobody is admitting publicly. By the end of this episode, you'll know why.”`,
        why: "Creates an irresistible curiosity gap listeners must stay to resolve.",
      },
      {
        style: "High Stakes",
        hook: `“In 2026, there are only two types of people in ${t}: those who leverage modern automation, and those who are about to become obsolete.”`,
        why: "Elevates the emotional stakes and urgency.",
      },
      {
        style: "Big Metric",
        hook: `“We spent 18 months analyzing $50M in transactions across ${t}. Here is the single outlier factor that accounted for 80% of the profits.”`,
        why: "Promises hard data and empirical evidence rather than opinions.",
      },
      {
        style: "Pattern Interrupt",
        hook: `“Stop reading the blog posts. Stop buying the courses. Everything you actually need to win at ${t} comes down to one uncomfortable habit.”`,
        why: "Tells the listener to stop doing what they're currently doing, resetting attention.",
      },
      ...(g
        ? [
            {
              style: "Interview",
              hook: `“When ${g} said that 99% of people in ${t} are optimizing for the wrong metric, I had to stop the recording and make him explain why.”`,
              why: "Teases an authentic, spontaneous host reaction to a shocking guest quote.",
            },
          ]
        : []),
    ];

    return list;
  }, [topic, guest]);

  const filteredHooks = useMemo(() => {
    if (selectedStyle === "all") return hooks;
    return hooks.filter((h) => h.style.toLowerCase() === selectedStyle.toLowerCase());
  }, [hooks, selectedStyle]);

  const handleCopy = (text: string, idx: number) => {
    navigator.clipboard.writeText(text);
    setCopiedIndex(idx);
    setTimeout(() => setCopiedIndex(null), 2000);
  };

  return (
    <div className="w-full space-y-6">
      {/* Controls */}
      <div className="p-6 rounded-2xl bg-studio-card border border-studio-border space-y-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="space-y-1.5">
            <label className="block text-xs font-bold uppercase tracking-wider text-slate-300">
              Episode Subject / Industry
            </label>
            <input
              type="text"
              value={topic}
              onChange={(e) => setTopic(e.target.value)}
              className="w-full px-3.5 py-2 rounded-xl bg-studio-darkest border border-studio-border text-neutral-900 dark:text-white text-xs focus:outline-none focus:border-orange-500/70"
            />
          </div>

          <div className="space-y-1.5">
            <label className="block text-xs font-bold uppercase tracking-wider text-neutral-700 dark:text-neutral-300">
              Featured Guest <span className="text-neutral-500 font-normal">(Optional)</span>
            </label>
            <input
              type="text"
              value={guest}
              onChange={(e) => setGuest(e.target.value)}
              className="w-full px-3.5 py-2 rounded-xl bg-studio-darkest border border-studio-border text-neutral-900 dark:text-white text-xs focus:outline-none focus:border-orange-500/70"
            />
          </div>
        </div>

        {/* Styles Filter */}
        <div className="flex flex-wrap items-center gap-1.5 pt-2 border-t border-studio-border/60">
          <span className="text-xs text-neutral-600 dark:text-neutral-400 mr-1">Hook Style:</span>
          {(["all", "Contrarian", "Open Loop", "High Stakes", "Big Metric", "Pattern Interrupt"] as const).map(
            (style) => (
              <button
                key={style}
                onClick={() => setSelectedStyle(style)}
                className={`text-xs px-3 py-1.5 rounded-lg font-medium transition-all cursor-pointer ${
                  selectedStyle === style
                    ? "bg-orange-500 text-white shadow-sm"
                    : "bg-studio-darkest text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white border border-studio-border"
                }`}
              >
                {style === "all" ? "All Hooks" : style}
              </button>
            )
          )}
        </div>
      </div>

      {/* Hooks Grid */}
      <div className="grid grid-cols-1 gap-3">
        {filteredHooks.map((h, i) => (
          <div
            key={i}
            className="p-5 rounded-2xl bg-studio-card border border-studio-border hover:border-orange-500/40 transition-all flex flex-col sm:flex-row sm:items-center justify-between gap-4 group"
          >
            <div className="space-y-1 flex-1">
              <div className="flex items-center gap-2">
                <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-md bg-studio-dark border border-studio-border text-orange-500 dark:text-orange-400">
                  {h.style}
                </span>
                <span className="text-[11px] text-neutral-500">{h.why}</span>
              </div>
              <p className="text-sm sm:text-base font-semibold text-neutral-900 dark:text-white leading-relaxed">
                {h.hook}
              </p>
            </div>

            <button
              onClick={() => handleCopy(h.hook, i)}
              className="self-end sm:self-center flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-neutral-100 dark:bg-neutral-800 text-neutral-800 dark:text-neutral-200 border border-neutral-300 dark:border-neutral-700 hover:!bg-orange-500 hover:!text-white hover:!border-orange-500 text-xs font-semibold transition-all flex-shrink-0 cursor-pointer shadow-2xs"
            >
              {copiedIndex === i ? (
                <>
                  <Check className="w-3.5 h-3.5 text-emerald-400" />
                  <span>Copied!</span>
                </>
              ) : (
                <>
                  <Copy className="w-3.5 h-3.5" />
                  <span>Copy Hook</span>
                </>
              )}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}


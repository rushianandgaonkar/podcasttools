"use client";

import React, { useState } from "react";
import { Sparkles, Copy, Check, ArrowRight } from "lucide-react";

const EXAMPLE_TOPICS = [
  "AI & Automation",
  "True Crime & Cold Cases",
  "Solo Entrepreneurship",
  "Fitness After 40",
  "Personal Finance & Investing",
];

const TITLE_FORMULAS = [
  (topic: string) => `Why Most People Fail at ${topic} (And How to Fix It)`,
  (topic: string) => `The Unfiltered Truth About ${topic} in 2026`,
  (topic: string) => `How to Master ${topic} Without Burning Out`,
  (topic: string) => `5 Costly Mistakes Creators Make in ${topic}`,
  (topic: string) => `The Secret Framework Behind ${topic} Success`,
];

export function HeroQuickTool() {
  const [topic, setTopic] = useState("AI & Automation");
  const [copiedIndex, setCopiedIndex] = useState<number | null>(null);

  const titles = TITLE_FORMULAS.slice(0, 3).map((formula) => formula(topic.trim() || "Podcasting"));

  const handleCopy = (text: string, index: number) => {
    navigator.clipboard.writeText(text);
    setCopiedIndex(index);
    setTimeout(() => setCopiedIndex(null), 2000);
  };

  return (
    <div className="w-full max-w-2xl mx-auto rounded-2xl bg-studio-card/90 border border-studio-border p-5 sm:p-6 shadow-2xl backdrop-blur-md relative overflow-hidden">
      {/* Decorative top glow */}
      <div className="absolute -top-24 left-1/2 -translate-x-1/2 w-96 h-32 bg-orange-500/20 rounded-full blur-3xl pointer-events-none" />

      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-2">
          <span className="flex h-2.5 w-2.5 rounded-full bg-orange-400 animate-pulse" />
          <h2 className="text-sm font-bold text-white tracking-wide uppercase flex items-center gap-1.5">
            <Sparkles className="w-4 h-4 text-orange-400" />
            Instant Episode Title Tester
          </h2>
        </div>
        <span className="text-[11px] font-medium text-slate-400 bg-studio-elevated px-2.5 py-0.5 rounded-full border border-studio-border">
          Client-Side Demo
        </span>
      </div>

      {/* Input */}
      <div className="space-y-3 mb-4">
        <label htmlFor="quick-topic" className="block text-xs font-medium text-slate-300">
          Enter your episode topic or guest angle:
        </label>
        <div className="relative">
          <input
            id="quick-topic"
            type="text"
            value={topic}
            onChange={(e) => setTopic(e.target.value)}
            placeholder="e.g. Scaling a SaaS to $10k MRR..."
            className="w-full px-4 py-2.5 rounded-xl bg-studio-darkest border border-studio-border text-white placeholder-slate-500 text-sm focus:outline-none focus:border-orange-500/70 focus:ring-1 focus:ring-orange-500/50 transition-all"
          />
        </div>

        {/* Quick Suggestion Pills */}
        <div className="flex flex-wrap items-center gap-1.5 pt-1">
          <span className="text-[11px] text-slate-500 mr-1">Try:</span>
          {EXAMPLE_TOPICS.map((item) => (
            <button
              key={item}
              onClick={() => setTopic(item)}
              className={`text-xs px-2.5 py-1 rounded-lg transition-all ${
                topic === item
                  ? "bg-orange-500/20 text-orange-300 border border-orange-500/40"
                  : "bg-studio-elevated text-slate-400 hover:text-slate-200 border border-studio-border"
              }`}
            >
              {item}
            </button>
          ))}
        </div>
      </div>

      {/* Instant Output Titles */}
      <div className="space-y-2 mb-4">
        <div className="text-xs font-semibold text-slate-400 mb-1.5">High-CTR Title Previews:</div>
        {titles.map((titleText, idx) => (
          <div
            key={idx}
            className="flex items-center justify-between p-3 rounded-xl bg-studio-darkest/90 border border-studio-border/70 hover:border-orange-500/40 transition-all group"
          >
            <span className="text-xs sm:text-sm font-medium text-slate-200 group-hover:text-white transition-colors">
              {titleText}
            </span>
            <button
              onClick={() => handleCopy(titleText, idx)}
              className="flex items-center gap-1.5 px-2.5 py-1 text-xs rounded-lg bg-studio-card hover:bg-studio-elevated text-slate-300 hover:text-white border border-studio-border ml-3 flex-shrink-0 transition-colors"
              title="Copy to clipboard"
            >
              {copiedIndex === idx ? (
                <>
                  <Check className="w-3.5 h-3.5 text-emerald-400" />
                  <span className="text-emerald-400">Copied!</span>
                </>
              ) : (
                <>
                  <Copy className="w-3.5 h-3.5" />
                  <span>Copy</span>
                </>
              )}
            </button>
          </div>
        ))}
      </div>

      {/* Footer Link to Full Tool */}
      <div className="pt-2 flex items-center justify-between border-t border-studio-border/60 text-xs">
        <span className="text-slate-400">Want 30+ titles with emotional triggers?</span>
        <a
          href="/tools/episode-title-generator"
          className="inline-flex items-center gap-1 font-semibold text-orange-400 hover:text-orange-300 transition-colors"
        >
          Open Full Generator <ArrowRight className="w-3.5 h-3.5" />
        </a>
      </div>
    </div>
  );
}


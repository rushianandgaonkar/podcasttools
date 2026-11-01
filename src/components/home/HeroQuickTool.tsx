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
    if (typeof navigator !== "undefined") {
      navigator.clipboard.writeText(text);
      setCopiedIndex(index);
      setTimeout(() => setCopiedIndex(null), 2000);
    }
  };

  return (
    <div className="w-full max-w-2xl mx-auto rounded-xl bg-white dark:bg-[#0a0a0a] border border-neutral-200 dark:border-neutral-800 p-5 sm:p-6 shadow-sm relative overflow-hidden transition-colors duration-150">
      {/* Vercel-style Top Eyebrow & Status */}
      <div className="flex items-center justify-between mb-4 pb-3 border-b border-neutral-100 dark:border-neutral-900">
        <div className="flex items-center gap-2">
          <span className="flex h-2 w-2 rounded-full bg-emerald-500"></span>
          <h2 className="font-mono text-xs uppercase font-medium tracking-wider text-neutral-900 dark:text-neutral-100 flex items-center gap-1.5">
            <Sparkles className="w-3.5 h-3.5 text-[#0070f3]" />
            Instant Episode Title Tester
          </h2>
        </div>
        <span className="font-mono text-[10px] text-neutral-500 uppercase px-2 py-0.5 rounded border border-neutral-200 dark:border-neutral-800 bg-neutral-50 dark:bg-neutral-900">
          Client-Side Demo
        </span>
      </div>

      {/* Input Field */}
      <div className="space-y-2 mb-4">
        <label htmlFor="quick-topic" className="block text-xs font-medium text-neutral-600 dark:text-neutral-400">
          Enter your episode topic or guest angle:
        </label>
        <input
          id="quick-topic"
          type="text"
          value={topic}
          onChange={(e) => setTopic(e.target.value)}
          placeholder="e.g. Scaling a SaaS to $10k MRR..."
          className="w-full px-3.5 py-2 rounded-md bg-neutral-50 dark:bg-black border border-neutral-200 dark:border-neutral-800 text-neutral-900 dark:text-neutral-100 placeholder-neutral-400 text-xs sm:text-sm focus:outline-none focus:border-neutral-400 dark:focus:border-neutral-600 transition-colors"
        />

        {/* Quick Suggestion Pills */}
        <div className="flex flex-wrap items-center gap-1.5 pt-1">
          <span className="text-[11px] font-mono text-neutral-400 mr-1">Quick:</span>
          {EXAMPLE_TOPICS.map((item) => (
            <button
              key={item}
              onClick={() => setTopic(item)}
              className={`text-[11px] px-2 py-0.5 rounded-md transition-colors ${
                topic === item
                  ? "bg-neutral-900 text-white dark:bg-white dark:text-black font-medium"
                  : "bg-neutral-100 dark:bg-neutral-900 text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white border border-neutral-200 dark:border-neutral-800"
              }`}
            >
              {item}
            </button>
          ))}
        </div>
      </div>

      {/* Output Titles List */}
      <div className="space-y-2 mb-4">
        <div className="text-[11px] font-mono uppercase tracking-wider text-neutral-500 dark:text-neutral-400">
          High-CTR Title Previews:
        </div>
        {titles.map((titleText, idx) => (
          <div
            key={idx}
            className="flex items-center justify-between p-3 rounded-lg bg-neutral-50 dark:bg-[#111111] border border-neutral-200 dark:border-neutral-800/80 hover:border-neutral-300 dark:hover:border-neutral-700 transition-colors group"
          >
            <span className="text-xs sm:text-sm font-medium text-neutral-900 dark:text-neutral-100 group-hover:text-[#0070f3] dark:group-hover:text-[#0070f3] transition-colors">
              {titleText}
            </span>
            <button
              onClick={() => handleCopy(titleText, idx)}
              className="flex items-center gap-1 px-2 py-1 text-[11px] font-mono rounded-md border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900 text-neutral-600 dark:text-neutral-300 hover:text-neutral-900 dark:hover:text-white ml-2 flex-shrink-0 transition-colors"
              title="Copy to clipboard"
            >
              {copiedIndex === idx ? (
                <>
                  <Check className="w-3 h-3 text-emerald-500" />
                  <span className="text-emerald-500 font-semibold">Copied</span>
                </>
              ) : (
                <>
                  <Copy className="w-3 h-3" />
                  <span>Copy</span>
                </>
              )}
            </button>
          </div>
        ))}
      </div>

      {/* Footer Link to Full Tool */}
      <div className="pt-3 flex items-center justify-between border-t border-neutral-100 dark:border-neutral-900 text-xs">
        <span className="text-neutral-500 text-[11px]">Looking for 30+ emotional triggers?</span>
        <a
          href="/tools/episode-title-generator"
          className="inline-flex items-center gap-1 font-medium text-xs text-[#0070f3] hover:underline"
        >
          Open Generator <ArrowRight className="w-3.5 h-3.5" />
        </a>
      </div>
    </div>
  );
}

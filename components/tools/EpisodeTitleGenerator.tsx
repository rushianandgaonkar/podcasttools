"use client";

import React, { useState, useMemo } from "react";
import { Sparkles, Copy, Check, Download, RefreshCw, Filter, CheckCircle2 } from "lucide-react";

interface TitleResult {
  title: string;
  category: "Curiosity" | "How-To" | "Interview" | "Contrarian" | "Listicle";
  charCount: number;
  rating: "Optimal" | "Good" | "Too Long";
}

export function EpisodeTitleGenerator() {
  const [topic, setTopic] = useState("AI Productivity Tools");
  const [guest, setGuest] = useState("");
  const [tone, setTone] = useState<string>("all");
  const [copiedIndex, setCopiedIndex] = useState<number | null>(null);
  const [copiedAll, setCopiedAll] = useState(false);

  const formulas = useMemo(() => {
    const t = topic.trim() || "Your Topic";
    const g = guest.trim();

    const list: Array<{ title: string; category: TitleResult["category"] }> = [
      // Curiosity & Hook
      { title: `The Uncomfortable Truth About ${t} in 2026`, category: "Curiosity" },
      { title: `Why Most People Will Fail at ${t} This Year`, category: "Curiosity" },
      { title: `What Really Happens When You Double Down on ${t}`, category: "Curiosity" },
      { title: `The Hidden Dark Side of ${t} Nobody Talks About`, category: "Curiosity" },
      { title: `Is ${t} Dead? The Brutal Reality`, category: "Curiosity" },
      { title: `The Untold Story Behind the Biggest Breakthrough in ${t}`, category: "Curiosity" },

      // How-To & Actionable
      { title: `How to Master ${t} in 30 Days (Without Burning Out)`, category: "How-To" },
      { title: `The Step-by-Step Playbook for Modern ${t}`, category: "How-To" },
      { title: `How to 10x Your Results in ${t} (Beginner Friendly Guide)`, category: "How-To" },
      { title: `How to Get Started with ${t} When You Have Zero Time`, category: "How-To" },
      { title: `The 15-Minute Daily Routine to Dominate ${t}`, category: "How-To" },
      { title: `How to Build a High-Performing System Around ${t}`, category: "How-To" },

      // Contrarian & Debate
      { title: `Why Everything You Were Told About ${t} Is Dead Wrong`, category: "Contrarian" },
      { title: `Stop Doing ${t} the Hard Way (Do This Instead)`, category: "Contrarian" },
      { title: `The Overrated Trap in ${t} You Must Avoid`, category: "Contrarian" },
      { title: `Unpopular Opinion: Why ${t} is Overhyped`, category: "Contrarian" },
      { title: `Why Smart Creators Are Abandoning Traditional ${t}`, category: "Contrarian" },

      // Listicles & Frameworks
      { title: `7 Expensive Mistakes Creators Make in ${t}`, category: "Listicle" },
      { title: `5 Non-Negotiable Rules for Winning at ${t}`, category: "Listicle" },
      { title: `3 Harsh Truths About ${t} I Wish I Knew Sooner`, category: "Listicle" },
      { title: `The 4-Step Mental Model for Fast-Tracking ${t}`, category: "Listicle" },
      { title: `9 Game-Changing Secrets to Modern ${t}`, category: "Listicle" },

      // Guest / Interview formats
      ...(g
        ? [
            { title: `${g}: The Exact Blueprint to Conquer ${t}`, category: "Interview" as const },
            { title: `Inside the Mind of ${g}: Real Lessons from ${t}`, category: "Interview" as const },
            { title: `${g} on Why Most Advice Around ${t} Fails`, category: "Interview" as const },
            { title: `What ${g} Learned After 10 Years in ${t}`, category: "Interview" as const },
            { title: `The Masterclass: ${g} Deconstructs ${t}`, category: "Interview" as const },
          ]
        : [
            { title: `Expert Breakdown: How Industry Leaders Approach ${t}`, category: "Interview" as const },
            { title: `Deconstructing the Playbooks of Top Experts in ${t}`, category: "Interview" as const },
          ]),
    ];

    return list.map((item): TitleResult => {
      const len = item.title.length;
      let rating: TitleResult["rating"] = "Optimal";
      if (len > 70) rating = "Too Long";
      else if (len < 35) rating = "Good";

      return {
        ...item,
        charCount: len,
        rating,
      };
    });
  }, [topic, guest]);

  const filteredTitles = useMemo(() => {
    if (tone === "all") return formulas;
    return formulas.filter((f) => f.category.toLowerCase() === tone.toLowerCase());
  }, [formulas, tone]);

  const handleCopySingle = (text: string, idx: number) => {
    navigator.clipboard.writeText(text);
    setCopiedIndex(idx);
    setTimeout(() => setCopiedIndex(null), 2000);
  };

  const handleCopyAll = () => {
    const allText = filteredTitles.map((t) => t.title).join("\n");
    navigator.clipboard.writeText(allText);
    setCopiedAll(true);
    setTimeout(() => setCopiedAll(false), 2000);
  };

  const handleExportTxt = () => {
    const allText = `PODCAST EPISODE TITLES - POD STUDIO\nTopic: ${topic}\nGuest: ${guest || "N/A"}\n\n` +
      filteredTitles.map((t, i) => `${i + 1}. [${t.category}] ${t.title} (${t.charCount} chars)`).join("\n");
    
    const blob = new Blob([allText], { type: "text/plain;charset=utf-8" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = `podcast-titles-${topic.toLowerCase().replace(/[^a-z0-9]+/g, "-")}.txt`;
    link.click();
    URL.revokeObjectURL(url);
  };

  return (
    <div className="w-full space-y-6">
      {/* Control Panel */}
      <div className="p-6 rounded-2xl bg-studio-card border border-studio-border space-y-5">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* Topic Input */}
          <div className="space-y-1.5">
            <label htmlFor="topic-input" className="block text-xs font-bold uppercase tracking-wider text-slate-300">
              Episode Topic / Keyword <span className="text-orange-400">*</span>
            </label>
            <input
              id="topic-input"
              type="text"
              value={topic}
              onChange={(e) => setTopic(e.target.value)}
              placeholder="e.g. Solo SaaS Bootstrapping, Marathon Running..."
              className="w-full px-4 py-2.5 rounded-xl bg-studio-darkest border border-studio-border text-white text-sm focus:outline-none focus:border-orange-500/70 focus:ring-1 focus:ring-orange-500/50"
            />
          </div>

          {/* Guest Name Input */}
          <div className="space-y-1.5">
            <label htmlFor="guest-input" className="block text-xs font-bold uppercase tracking-wider text-slate-300">
              Featured Guest Name <span className="text-slate-500 font-normal">(Optional)</span>
            </label>
            <input
              id="guest-input"
              type="text"
              value={guest}
              onChange={(e) => setGuest(e.target.value)}
              placeholder="e.g. Seth Godin, Alex Hormozi..."
              className="w-full px-4 py-2.5 rounded-xl bg-studio-darkest border border-studio-border text-white text-sm focus:outline-none focus:border-orange-500/70 focus:ring-1 focus:ring-orange-500/50"
            />
          </div>
        </div>

        {/* Category / Angle Filter Tabs */}
        <div className="flex flex-wrap items-center justify-between gap-3 pt-2 border-t border-studio-border/60">
          <div className="flex flex-wrap items-center gap-1.5">
            <span className="text-xs text-slate-400 mr-1 flex items-center gap-1">
              <Filter className="w-3.5 h-3.5" /> Filter by:
            </span>
            {(["all", "Curiosity", "How-To", "Contrarian", "Listicle", "Interview"] as const).map((cat) => (
              <button
                key={cat}
                onClick={() => setTone(cat)}
                className={`text-xs px-3 py-1.5 rounded-lg font-medium transition-all ${
                  tone === cat
                    ? "bg-orange-500 text-white shadow-md shadow-orange-500/20"
                    : "bg-studio-elevated text-slate-400 hover:text-white border border-studio-border"
                }`}
              >
                {cat === "all" ? "All Angles" : cat}
              </button>
            ))}
          </div>

          {/* Batch Actions */}
          <div className="flex items-center gap-2">
            <button
              onClick={handleCopyAll}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-studio-elevated hover:bg-studio-border border border-studio-border text-slate-300 hover:text-white text-xs font-medium transition-colors"
            >
              {copiedAll ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
              {copiedAll ? "Copied All!" : "Copy All"}
            </button>
            <button
              onClick={handleExportTxt}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-studio-elevated hover:bg-studio-border border border-studio-border text-slate-300 hover:text-white text-xs font-medium transition-colors"
            >
              <Download className="w-3.5 h-3.5" />
              Export TXT
            </button>
          </div>
        </div>
      </div>

      {/* Generated Titles List */}
      <div className="space-y-3">
        <div className="flex items-center justify-between px-1">
          <span className="text-xs font-bold uppercase tracking-wider text-slate-400">
            Generated Titles ({filteredTitles.length})
          </span>
          <span className="text-[11px] text-slate-500">
            Tip: Under 65 characters prevents truncation in Apple Podcasts & Spotify.
          </span>
        </div>

        <div className="grid grid-cols-1 gap-2.5">
          {filteredTitles.map((item, index) => (
            <div
              key={index}
              className="p-4 rounded-xl bg-studio-card border border-studio-border/80 hover:border-orange-500/50 hover:bg-studio-elevated/70 transition-all flex flex-col sm:flex-row sm:items-center justify-between gap-3 group"
            >
              <div className="space-y-1">
                <div className="flex items-center gap-2">
                  <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-md bg-studio-dark border border-studio-border text-slate-400">
                    {item.category}
                  </span>
                  <span
                    className={`text-[10px] font-mono px-1.5 py-0.5 rounded ${
                      item.rating === "Optimal"
                        ? "text-emerald-400 bg-emerald-500/10"
                        : item.rating === "Good"
                        ? "text-blue-400 bg-blue-500/10"
                        : "text-amber-400 bg-amber-500/10"
                    }`}
                  >
                    {item.charCount} chars • {item.rating}
                  </span>
                </div>
                <p className="text-sm sm:text-base font-semibold text-slate-100 group-hover:text-white transition-colors">
                  {item.title}
                </p>
              </div>

              <button
                onClick={() => handleCopySingle(item.title, index)}
                className="self-end sm:self-center flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-studio-dark hover:bg-orange-500 hover:text-white border border-studio-border text-slate-300 text-xs font-semibold transition-all flex-shrink-0"
              >
                {copiedIndex === index ? (
                  <>
                    <Check className="w-3.5 h-3.5 text-emerald-400" />
                    <span>Copied!</span>
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
      </div>
    </div>
  );
}

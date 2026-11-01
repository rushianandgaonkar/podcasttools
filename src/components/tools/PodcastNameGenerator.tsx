"use client";

import React, { useState, useMemo } from "react";
import { Mic, Sparkles, Copy, Check, Heart, Bookmark, Filter, Download } from "lucide-react";

interface NameIdea {
  name: string;
  tagline: string;
  style: "Clever" | "Authoritative" | "Modern" | "Playful" | "Narrative";
}

const STYLE_TEMPLATES = {
  Authoritative: [
    (n: string) => ({ name: `The ${n} Blueprint`, tagline: `The definitive masterclass for ${n} practitioners.` }),
    (n: string) => ({ name: `${n} Unfiltered`, tagline: `Hard-hitting insights and real strategies in ${n}.` }),
    (n: string) => ({ name: `The ${n} Ledger`, tagline: `Decoding the business and mechanics of ${n}.` }),
    (n: string) => ({ name: `Masters of ${n}`, tagline: `Interviews with top 1% leaders in ${n}.` }),
    (n: string) => ({ name: `The ${n} Standard`, tagline: `Setting the benchmark for excellence in ${n}.` }),
  ],
  Clever: [
    (n: string) => ({ name: `Between the ${n}`, tagline: `The stories and nuances between the lines.` }),
    (n: string) => ({ name: `Plot Twist ${n}`, tagline: `Unexpected perspectives on modern ${n}.` }),
    (n: string) => ({ name: `${n} & Chill`, tagline: `Relaxed conversations about serious ${n} topics.` }),
    (n: string) => ({ name: `The ${n} Paradox`, tagline: `Exploring what everyone gets wrong about ${n}.` }),
    (n: string) => ({ name: `Off the ${n} Record`, tagline: `Candid audio backstage passes to ${n}.` }),
  ],
  Modern: [
    (n: string) => ({ name: `Signal: ${n}`, tagline: `Filtering high-impact signal from the noise.` }),
    (n: string) => ({ name: `${n} Lab`, tagline: `Experiments, hypotheses, and breakdowns in ${n}.` }),
    (n: string) => ({ name: `The Next ${n}`, tagline: `Where ${n} is heading in the next 5 years.` }),
    (n: string) => ({ name: `Compound ${n}`, tagline: `Small daily habits that yield exponential ${n} gains.` }),
    (n: string) => ({ name: `Pulse of ${n}`, tagline: `The weekly heartbeat of the ${n} industry.` }),
  ],
  Playful: [
    (n: string) => ({ name: `Don't Panic, It's ${n}`, tagline: `Demystifying ${n} without the corporate jargon.` }),
    (n: string) => ({ name: `The Happy ${n} Hour`, tagline: `End-of-week banter and laughs about ${n}.` }),
    (n: string) => ({ name: `Holy ${n}!`, tagline: `Mind-blowing discoveries and entertaining chats.` }),
    (n: string) => ({ name: `Confessions of a ${n} Geek`, tagline: `Unapologetically obsessed with ${n}.` }),
    (n: string) => ({ name: `${n} After Dark`, tagline: `Late night, no-holds-barred commentary.` }),
  ],
  Narrative: [
    (n: string) => ({ name: `The Anatomy of ${n}`, tagline: `Serial investigative deep dives into ${n}.` }),
    (n: string) => ({ name: `Chasing ${n}`, tagline: `Human stories and pivotal turning points in ${n}.` }),
    (n: string) => ({ name: `The ${n} Chronicles`, tagline: `Documentary audio memoirs from the front lines.` }),
    (n: string) => ({ name: `Origins of ${n}`, tagline: `How today's biggest ${n} milestones actually started.` }),
  ],
};

export function PodcastNameGenerator() {
  const [niche, setNiche] = useState("Finance & Crypto");
  const [customKeyword, setCustomKeyword] = useState("");
  const [selectedStyle, setSelectedStyle] = useState<string>("all");
  const [favorites, setFavorites] = useState<string[]>([]);
  const [copiedName, setCopiedName] = useState<string | null>(null);

  const generatedNames = useMemo(() => {
    const rawSubject = (customKeyword.trim() || niche).replace(/&/g, "and");
    const subject = rawSubject.charAt(0).toUpperCase() + rawSubject.slice(1);

    const results: NameIdea[] = [];

    Object.entries(STYLE_TEMPLATES).forEach(([styleKey, templateList]) => {
      templateList.forEach((fn) => {
        const item = fn(subject);
        results.push({
          ...item,
          style: styleKey as NameIdea["style"],
        });
      });
    });

    return results;
  }, [niche, customKeyword]);

  const filteredNames = useMemo(() => {
    if (selectedStyle === "all") return generatedNames;
    return generatedNames.filter((item) => item.style.toLowerCase() === selectedStyle.toLowerCase());
  }, [generatedNames, selectedStyle]);

  const handleCopy = (name: string) => {
    navigator.clipboard.writeText(name);
    setCopiedName(name);
    setTimeout(() => setCopiedName(null), 2000);
  };

  const toggleFavorite = (name: string) => {
    setFavorites((prev) =>
      prev.includes(name) ? prev.filter((i) => i !== name) : [...prev, name]
    );
  };

  const handleExportFavorites = () => {
    if (favorites.length === 0) return;
    const text = `SAVED PODCAST NAMES - POD STUDIO\n\n` + favorites.map((n, i) => `${i + 1}. ${n}`).join("\n");
    const blob = new Blob([text], { type: "text/plain;charset=utf-8" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = `favorite-podcast-names.txt`;
    link.click();
    URL.revokeObjectURL(url);
  };

  return (
    <div className="w-full space-y-6">
      {/* Control Panel */}
      <div className="p-6 rounded-2xl bg-studio-card border border-studio-border space-y-5">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* Niche Selector */}
          <div className="space-y-1.5">
            <label className="block text-xs font-bold uppercase tracking-wider text-slate-300">
              Podcast Niche / Genre
            </label>
            <select
              value={niche}
              onChange={(e) => setNiche(e.target.value)}
              className="w-full px-3.5 py-2.5 rounded-xl bg-studio-darkest border border-studio-border text-white text-xs focus:outline-none focus:border-orange-500/70"
            >
              <option value="Tech & Startups">Tech & Startups</option>
              <option value="Finance & Crypto">Finance & Crypto</option>
              <option value="True Crime & Mystery">True Crime & Mystery</option>
              <option value="Health & Longevity">Health & Longevity</option>
              <option value="Personal Growth & Mindset">Personal Growth & Mindset</option>
              <option value="Pop Culture & Movies">Pop Culture & Movies</option>
              <option value="B2B Marketing & Sales">B2B Marketing & Sales</option>
              <option value="Comedy & Casual">Comedy & Casual</option>
              <option value="History & Culture">History & Culture</option>
            </select>
          </div>

          {/* Custom Keyword */}
          <div className="space-y-1.5">
            <label className="block text-xs font-bold uppercase tracking-wider text-slate-300">
              Custom Word or Theme <span className="text-slate-500 font-normal">(Optional)</span>
            </label>
            <input
              type="text"
              value={customKeyword}
              onChange={(e) => setCustomKeyword(e.target.value)}
              placeholder="e.g. AI Agents, Marathon, Indie Hacker..."
              className="w-full px-3.5 py-2.5 rounded-xl bg-studio-darkest border border-studio-border text-white text-xs focus:outline-none focus:border-orange-500/70"
            />
          </div>
        </div>

        {/* Style Filters */}
        <div className="flex flex-wrap items-center justify-between gap-3 pt-2 border-t border-studio-border/60">
          <div className="flex flex-wrap items-center gap-1.5">
            <span className="text-xs text-slate-400 mr-1">Brand Style:</span>
            {(["all", "Authoritative", "Modern", "Clever", "Playful", "Narrative"] as const).map((style) => (
              <button
                key={style}
                onClick={() => setSelectedStyle(style)}
                className={`text-xs px-3 py-1.5 rounded-lg font-medium transition-all ${
                  selectedStyle === style
                    ? "bg-orange-500 text-white shadow-md shadow-orange-500/20"
                    : "bg-studio-elevated text-slate-400 hover:text-white border border-studio-border"
                }`}
              >
                {style === "all" ? "All Styles" : style}
              </button>
            ))}
          </div>

          {/* Favorites Counter & Export */}
          {favorites.length > 0 && (
            <button
              onClick={handleExportFavorites}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-studio-elevated hover:bg-studio-border text-orange-400 hover:text-orange-300 border border-studio-border text-xs font-semibold transition-colors"
            >
              <Bookmark className="w-3.5 h-3.5 fill-current" />
              Export {favorites.length} Saved
            </button>
          )}
        </div>
      </div>

      {/* Grid of Generated Names */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {filteredNames.map((item, idx) => {
          const isFav = favorites.includes(item.name);
          const isCopied = copiedName === item.name;

          return (
            <div
              key={idx}
              className="p-5 rounded-2xl bg-studio-card border border-studio-border hover:border-orange-500/40 hover:bg-studio-card/90 transition-all flex flex-col justify-between group shadow-sm"
            >
              <div>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-md bg-studio-dark border border-studio-border text-slate-400">
                    {item.style}
                  </span>
                  <button
                    onClick={() => toggleFavorite(item.name)}
                    className="p-1.5 rounded-lg hover:bg-studio-elevated text-slate-400 hover:text-red-400 transition-colors"
                    title={isFav ? "Remove from favorites" : "Save to favorites"}
                  >
                    <Heart className={`w-4 h-4 ${isFav ? "fill-red-500 text-red-500" : ""}`} />
                  </button>
                </div>

                <h3 className="text-base font-bold text-white group-hover:text-orange-400 transition-colors mb-1.5">
                  {item.name}
                </h3>
                <p className="text-xs text-slate-400 leading-relaxed mb-4">
                  {item.tagline}
                </p>
              </div>

              <div className="pt-3 border-t border-studio-border/50 flex items-center justify-between">
                <span className="text-[11px] text-slate-500">
                  Ready to brand
                </span>
                <button
                  onClick={() => handleCopy(item.name)}
                  className="flex items-center gap-1.5 px-3 py-1 rounded-lg bg-studio-dark hover:bg-orange-500 hover:text-white border border-studio-border text-slate-300 text-xs font-semibold transition-all"
                >
                  {isCopied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                  <span>{isCopied ? "Copied" : "Copy"}</span>
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}


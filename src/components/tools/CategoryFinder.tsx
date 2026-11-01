"use client";

import React, { useState, useMemo } from "react";
import { FolderSearch, Search, Copy, Check, Sparkles, Filter } from "lucide-react";

interface CategoryData {
  primary: string;
  subcategories: string[];
  competition: "Very High" | "High" | "Moderate" | "Low Opportunity";
  tip: string;
}

const OFFICIAL_TAXONOMY: CategoryData[] = [
  {
    primary: "Business",
    subcategories: ["Careers", "Entrepreneurship", "Investing", "Management", "Marketing", "Non-Profit"],
    competition: "Very High",
    tip: "Highly competitive at top level. Niche into 'Management' or 'Careers' for faster chart ranking.",
  },
  {
    primary: "Technology",
    subcategories: ["AI & Machine Learning", "Tech News", "Software Engineering", "Cybersecurity"],
    competition: "High",
    tip: "Tech has high CPM sponsors. Subcategories give better algorithmic discovery on Apple Podcasts.",
  },
  {
    primary: "Health & Fitness",
    subcategories: ["Alternative Health", "Fitness", "Medicine", "Mental Health", "Nutrition", "Sexuality"],
    competition: "High",
    tip: "'Mental Health' and 'Nutrition' have dedicated loyal audiences but high medical scrutiny.",
  },
  {
    primary: "Education",
    subcategories: ["Courses", "How To", "Language Learning", "Self-Improvement"],
    competition: "Moderate",
    tip: "'How To' and 'Language Learning' have strong search intent with steady evergreen downloads.",
  },
  {
    primary: "True Crime",
    subcategories: ["Investigative", "Historical Crime", "Courtroom", "Serial Cases"],
    competition: "Very High",
    tip: "Massive listener appetite, but requires high narrative audio production value.",
  },
  {
    primary: "Leisure",
    subcategories: ["Animation & Manga", "Automotive", "Aviation", "Crafts", "Games", "Hobbies", "Home & Garden", "Video Games"],
    competition: "Low Opportunity",
    tip: "Excellent low-competition gem! 'Aviation', 'Crafts', and 'Automotive' have passionate micro-audiences.",
  },
  {
    primary: "Science",
    subcategories: ["Astronomy", "Chemistry", "Earth Sciences", "Life Sciences", "Mathematics", "Nature", "Physics", "Social Sciences"],
    competition: "Moderate",
    tip: "'Earth Sciences' and 'Astronomy' rank easily in top category charts with consistent release schedules.",
  },
  {
    primary: "Arts",
    subcategories: ["Books", "Design", "Fashion & Beauty", "Food", "Performing Arts", "Visual Arts"],
    competition: "Moderate",
    tip: "'Design' and 'Books' have high affiliate and sponsorship conversion potential.",
  },
  {
    primary: "History",
    subcategories: ["Ancient History", "Military History", "Biographies", "Cultural History"],
    competition: "Moderate",
    tip: "One of the highest retention genres in podcasting. Listeners consume full multi-hour archives.",
  },
  {
    primary: "Society & Culture",
    subcategories: ["Documentary", "Personal Journals", "Philosophy", "Places & Travel", "Relationships"],
    competition: "Very High",
    tip: "Broad catchment area. Choose specific subcategories to avoid being drowned out.",
  },
  {
    primary: "Sports",
    subcategories: ["Running", "Basketball", "Football", "Golf", "Soccer", "Tennis", "Wilderness"],
    competition: "High",
    tip: "Local team coverage or niche sports (like 'Running' and 'Wilderness') achieve top chart ranks rapidly.",
  },
];

export function CategoryFinder() {
  const [search, setSearch] = useState("");
  const [copiedTag, setCopiedTag] = useState<string | null>(null);

  const filtered = useMemo(() => {
    if (!search.trim()) return OFFICIAL_TAXONOMY;
    const q = search.toLowerCase();
    return OFFICIAL_TAXONOMY.filter(
      (cat) =>
        cat.primary.toLowerCase().includes(q) ||
        cat.subcategories.some((sub) => sub.toLowerCase().includes(q)) ||
        cat.tip.toLowerCase().includes(q)
    );
  }, [search]);

  const handleCopyXml = (primary: string, sub?: string) => {
    const xml = sub
      ? `<itunes:category text="${primary}">\n  <itunes:category text="${sub}" />\n</itunes:category>`
      : `<itunes:category text="${primary}" />`;
    navigator.clipboard.writeText(xml);
    setCopiedTag(sub || primary);
    setTimeout(() => setCopiedTag(null), 2000);
  };

  return (
    <div className="w-full space-y-6">
      {/* Search Header */}
      <div className="p-6 rounded-2xl bg-studio-card border border-studio-border space-y-4">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
          <div>
            <h2 className="text-xs font-bold uppercase tracking-wider text-white flex items-center gap-2">
              <FolderSearch className="w-4 h-4 text-orange-400" />
              Apple Podcasts & Spotify 2026 Taxonomy Explorer
            </h2>
            <p className="text-xs text-slate-400 mt-1">
              Search official genres to find high-growth, low-competition subcategories for your show.
            </p>
          </div>

          <div className="relative w-full sm:w-72">
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search category (e.g. AI, gaming, design)..."
              className="w-full pl-9 pr-4 py-2 rounded-xl bg-studio-darkest border border-studio-border text-white text-xs focus:outline-none focus:border-orange-500/70"
            />
          </div>
        </div>
      </div>

      {/* Categories Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {filtered.map((cat, idx) => (
          <div
            key={idx}
            className="p-5 rounded-2xl bg-studio-card border border-studio-border hover:border-studio-border-hover transition-all flex flex-col justify-between space-y-4"
          >
            <div>
              <div className="flex items-center justify-between mb-2">
                <h3 className="text-base font-bold text-white flex items-center gap-2">
                  {cat.primary}
                </h3>
                <span
                  className={`text-[10px] font-bold px-2 py-0.5 rounded-full border ${
                    cat.competition === "Low Opportunity"
                      ? "text-emerald-400 bg-emerald-500/10 border-emerald-500/20"
                      : cat.competition === "Moderate"
                      ? "text-blue-400 bg-blue-500/10 border-blue-500/20"
                      : "text-amber-400 bg-amber-500/10 border-amber-500/20"
                  }`}
                >
                  {cat.competition}
                </span>
              </div>

              <p className="text-xs text-slate-400 leading-relaxed mb-4">
                {cat.tip}
              </p>

              {/* Subcategories tags */}
              <div className="flex flex-wrap gap-1.5">
                {cat.subcategories.map((sub, sIdx) => {
                  const isCopied = copiedTag === sub;
                  return (
                    <button
                      key={sIdx}
                      onClick={() => handleCopyXml(cat.primary, sub)}
                      className="px-2.5 py-1 rounded-lg bg-studio-darkest hover:bg-studio-elevated border border-studio-border text-xs text-slate-300 hover:text-white transition-colors flex items-center gap-1 group"
                      title="Click to copy iTunes XML tag"
                    >
                      <span>{sub}</span>
                      {isCopied ? (
                        <Check className="w-3 h-3 text-emerald-400" />
                      ) : (
                        <Copy className="w-3 h-3 text-slate-500 group-hover:text-orange-400" />
                      )}
                    </button>
                  );
                })}
              </div>
            </div>

            <div className="pt-3 border-t border-studio-border/60 flex items-center justify-between text-[11px] text-slate-500">
              <span>Click any subcategory to copy XML tag</span>
              <button
                onClick={() => handleCopyXml(cat.primary)}
                className="text-orange-400 hover:text-orange-300 font-medium"
              >
                Copy &lt;{cat.primary}&gt; Tag
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}


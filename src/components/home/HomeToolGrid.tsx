"use client";

import React, { useState, useEffect } from "react";
import { toolCategories, toolRegistry, type ToolDefinition } from "@/config/site";
import { ToolIcon } from "@/components/tools/ToolIcon";
import { ArrowRight, Search } from "lucide-react";
import { defaultLocale, type SupportedLocale } from "@/i18n/languages";
import { getLocalizedPath, useTranslations } from "@/i18n/utils";

interface HomeToolGridProps {
  lang?: SupportedLocale;
}

export function HomeToolGrid({ lang = defaultLocale }: HomeToolGridProps) {
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [searchQuery, setSearchQuery] = useState<string>("");

  const t = useTranslations(lang);

  // Sync with URL hash or query param on mount (e.g., #ideation or ?category=content)
  useEffect(() => {
    if (typeof window !== "undefined") {
      const hash = window.location.hash.replace("#", "").toLowerCase();
      const params = new URLSearchParams(window.location.search);
      const queryCat = params.get("category")?.toLowerCase();

      const target = hash || queryCat;
      const validCategories = ["ideation", "content", "technical", "growth"];
      if (target && validCategories.includes(target)) {
        setSelectedCategory(target);
      }
    }
  }, []);

  const filteredTools = toolRegistry.filter((tool) => {
    const matchesCategory =
      selectedCategory === "all" || tool.category === selectedCategory;
    const matchesSearch =
      !searchQuery.trim() ||
      tool.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      tool.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      tool.primaryKeyword.toLowerCase().includes(searchQuery.toLowerCase());

    return matchesCategory && matchesSearch;
  });

  return (
    <div className="w-full space-y-6" id="tools-section">
      {/* Category Pills & Live Search Bar */}
      <div className="flex flex-col md:flex-row items-center justify-between gap-3 pb-2 border-b border-neutral-200 dark:border-neutral-800">
        {/* Category Tabs */}
        <div className="flex items-center gap-1.5 overflow-x-auto w-full md:w-auto pb-1 md:pb-0 scrollbar-none">
          <button
            onClick={() => setSelectedCategory("all")}
            className={`px-3 py-1 rounded-full text-xs font-medium whitespace-nowrap transition-colors ${
              selectedCategory === "all"
                ? "bg-[#171717] text-white dark:bg-white dark:text-black shadow-2xs"
                : "bg-white dark:bg-[#0a0a0a] text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white border border-neutral-200 dark:border-neutral-800"
            }`}
          >
            {t.categories.all} ({toolRegistry.length})
          </button>

          {toolCategories.map((cat) => {
            const count = toolRegistry.filter((t) => t.category === cat.id).length;
            const isSelected = selectedCategory === cat.id;

            return (
              <button
                key={cat.id}
                id={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-3 py-1 rounded-full text-xs font-medium whitespace-nowrap transition-colors ${
                  isSelected
                    ? "bg-[#171717] text-white dark:bg-white dark:text-black shadow-2xs"
                    : "bg-white dark:bg-[#0a0a0a] text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white border border-neutral-200 dark:border-neutral-800"
                }`}
              >
                {cat.label} ({count})
              </button>
            );
          })}
        </div>

        {/* Live Search Input */}
        <div className="relative w-full md:w-64">
          <Search className="w-3.5 h-3.5 text-neutral-400 absolute left-3 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Filter tools by keyword..."
            className="w-full pl-8 pr-3 py-1.5 rounded-md bg-white dark:bg-[#0a0a0a] border border-neutral-200 dark:border-neutral-800 text-neutral-900 dark:text-neutral-100 text-xs placeholder-neutral-400 focus:outline-none focus:border-neutral-400 dark:focus:border-neutral-600 transition-colors"
          />
        </div>
      </div>

      {/* Tools Grid */}
      {filteredTools.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {filteredTools.map((tool) => (
            <a
              key={tool.id}
              href={getLocalizedPath(`/tools/${tool.slug}`, lang)}
              className="group relative rounded-xl bg-white dark:bg-[#0a0a0a] border border-neutral-200 dark:border-neutral-800 p-5 hover:border-neutral-400 dark:hover:border-neutral-600 hover:shadow-2xs transition-all duration-200 flex flex-col justify-between"
            >
              <div>
                {/* Header: Icon + Category Badge */}
                <div className="flex items-center justify-between mb-3">
                  <div className="w-8 h-8 rounded-md bg-neutral-100 dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 flex items-center justify-center text-neutral-800 dark:text-neutral-200 group-hover:text-[#0070f3] dark:group-hover:text-[#0070f3] transition-colors">
                    <ToolIcon name={tool.icon} className="w-4 h-4" />
                  </div>

                  <div className="flex items-center gap-1.5">
                    {tool.badge && (
                      <span className="font-mono text-[9px] uppercase tracking-wider px-1.5 py-0.5 rounded border border-neutral-200 dark:border-neutral-800 bg-neutral-100 dark:bg-neutral-900 text-neutral-700 dark:text-neutral-300 font-semibold">
                        {tool.badge}
                      </span>
                    )}
                    <span className="font-mono text-[9px] px-1.5 py-0.5 rounded border border-neutral-200 dark:border-neutral-800 text-neutral-500">
                      {tool.categoryLabel}
                    </span>
                  </div>
                </div>

                {/* Title */}
                <h3 className="text-sm font-semibold tracking-[-0.01em] text-neutral-900 dark:text-neutral-100 group-hover:text-[#0070f3] dark:group-hover:text-[#0070f3] transition-colors mb-1.5">
                  {tool.title}
                </h3>

                {/* Description */}
                <p className="text-xs text-neutral-500 dark:text-neutral-400 leading-relaxed line-clamp-2 mb-4">
                  {tool.description}
                </p>
              </div>

              {/* Bottom Card Action */}
              <div className="pt-3 border-t border-neutral-100 dark:border-neutral-900 flex items-center justify-between text-xs">
                <span className="font-mono text-[10px] text-neutral-400">100% In-Browser</span>
                <span className="inline-flex items-center gap-1 font-medium text-xs text-neutral-700 dark:text-neutral-300 group-hover:text-[#0070f3] dark:group-hover:text-[#0070f3] transition-colors">
                  {t.toolsSection.launchTool} <ArrowRight className="w-3 h-3 group-hover:translate-x-0.5 transition-transform" />
                </span>
              </div>
            </a>
          ))}
        </div>
      ) : (
        <div className="p-12 text-center border border-dashed border-neutral-300 dark:border-neutral-800 rounded-xl bg-white/40 dark:bg-[#0a0a0a]/40">
          <p className="text-sm text-neutral-500 mb-2">No tools found matching your search.</p>
          <button
            onClick={() => {
              setSelectedCategory("all");
              setSearchQuery("");
            }}
            className="text-xs text-[#0070f3] hover:underline font-medium"
          >
            Clear filters
          </button>
        </div>
      )}
    </div>
  );
}

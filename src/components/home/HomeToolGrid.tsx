"use client";

import React, { useState, useEffect, useMemo } from "react";
import { toolCategories, toolRegistry } from "@/config/site";
import { ToolIcon } from "@/components/tools/ToolIcon";
import { ArrowRight, Search, LayoutGrid, SlidersHorizontal } from "lucide-react";
import { defaultLocale, type SupportedLocale } from "@/i18n/languages";
import { getLocalizedPath, useTranslations } from "@/i18n/utils";
import ThumbnailImageViewer, { type GalleryImage } from "@/components/ui/thumbnail-image-viewer";

interface HomeToolGridProps {
  lang?: SupportedLocale;
  defaultView?: "carousel" | "grid";
}

const toolImageMap: Record<string, { src: string; location: string; credit: string }> = {
  "episode-title-generator": {
    src: "https://images.unsplash.com/photo-1590602847861-f357a9332bbc?auto=format&fit=crop&w=1200&q=80",
    location: "Ideation / 01",
    credit: "Jonathan Farber / Unsplash",
  },
  "show-notes-generator": {
    src: "https://images.unsplash.com/photo-1447069387593-a5de0862481e?auto=format&fit=crop&w=1200&q=80",
    location: "Content / 02",
    credit: "Unsplash",
  },
  "podcast-name-generator": {
    src: "https://images.unsplash.com/photo-1519671482749-fd09be7ccebf?auto=format&fit=crop&w=1200&q=80",
    location: "Ideation / 03",
    credit: "Unsplash",
  },
  "episode-outline-builder": {
    src: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1200&q=80",
    location: "Content / 04",
    credit: "Christopher Gower / Unsplash",
  },
  "guest-question-generator": {
    src: "https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&w=1200&q=80",
    location: "Ideation / 05",
    credit: "Unsplash",
  },
  "monetization-calculator": {
    src: "https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?auto=format&fit=crop&w=1200&q=80",
    location: "Growth / 06",
    credit: "Felipe Ramos / Unsplash",
  },
  "cover-art-preview": {
    src: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&w=1200&q=80",
    location: "Technical / 07",
    credit: "Will Francis / Unsplash",
  },
  "rss-feed-validator": {
    src: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1200&q=80",
    location: "Technical / 08",
    credit: "Unsplash",
  },
  "episode-timestamp-generator": {
    src: "https://images.unsplash.com/photo-1478737270239-2f02b77fc618?auto=format&fit=crop&w=1200&q=80",
    location: "Technical / 09",
    credit: "Austin Neill / Unsplash",
  },
  "intro-script-generator": {
    src: "https://images.unsplash.com/photo-1507676184212-d03ab07a01bf?auto=format&fit=crop&w=1200&q=80",
    location: "Content / 10",
    credit: "Unsplash",
  },
  "audience-growth-estimator": {
    src: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=1200&q=80",
    location: "Growth / 11",
    credit: "Unsplash",
  },
  "description-generator": {
    src: "https://images.unsplash.com/photo-1526478806334-5fd488fcaabc?auto=format&fit=crop&w=1200&q=80",
    location: "Content / 12",
    credit: "Unsplash",
  },
  "category-finder": {
    src: "https://images.unsplash.com/photo-1512820790803-83ca734da794?auto=format&fit=crop&w=1200&q=80",
    location: "Technical / 13",
    credit: "Unsplash",
  },
  "hook-generator": {
    src: "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&w=1200&q=80",
    location: "Ideation / 14",
    credit: "Unsplash",
  },
  "transcript-formatter": {
    src: "https://images.unsplash.com/photo-1593697821252-0c9137d9fc45?auto=format&fit=crop&w=1200&q=80",
    location: "Content / 15",
    credit: "Unsplash",
  },
  "trailer-script-builder": {
    src: "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?auto=format&fit=crop&w=1200&q=80",
    location: "Content / 16",
    credit: "Unsplash",
  },
  "review-response-generator": {
    src: "https://images.unsplash.com/photo-1501386761578-eac5c94b800a?auto=format&fit=crop&w=1200&q=80",
    location: "Growth / 17",
    credit: "Unsplash",
  },
  "collab-finder": {
    src: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1200&q=80",
    location: "Growth / 18",
    credit: "Unsplash",
  },
};

export function HomeToolGrid({ lang = defaultLocale, defaultView = "carousel" }: HomeToolGridProps) {
  const [viewMode, setViewMode] = useState<"carousel" | "grid">(defaultView);
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

  const filteredTools = useMemo(() => {
    return toolRegistry.filter((tool) => {
      const matchesCategory =
        selectedCategory === "all" || tool.category === selectedCategory;
      const matchesSearch =
        !searchQuery.trim() ||
        tool.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        tool.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        tool.primaryKeyword.toLowerCase().includes(searchQuery.toLowerCase());

      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchQuery]);

  const carouselImages = useMemo<GalleryImage[]>(() => {
    return filteredTools.map((tool) => {
      const meta = toolImageMap[tool.slug] || {
        src: "https://images.unsplash.com/photo-1590602847861-f357a9332bbc?auto=format&fit=crop&w=1200&q=80",
        location: tool.categoryLabel,
        credit: "Unsplash",
      };
      return {
        src: meta.src,
        alt: tool.title,
        title: tool.title,
        location: meta.location,
        credit: meta.credit,
        href: getLocalizedPath(`/tools/${tool.slug}`, lang),
        category: tool.categoryLabel,
        description: tool.description,
      };
    });
  }, [filteredTools, lang]);

  return (
    <div className="w-full space-y-6" id="tools-section">
      {/* Category Pills, Live Search Bar & View Mode Switcher */}
      <div className="flex flex-col lg:flex-row items-center justify-between gap-3 pb-3 border-b border-neutral-200 dark:border-neutral-800">
        {/* Category Tabs */}
        <div className="flex items-center gap-1.5 overflow-x-auto w-full lg:w-auto pb-1 lg:pb-0 scrollbar-none">
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
            const count = toolRegistry.filter((item) => item.category === cat.id).length;
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

        {/* Right Tools: View Toggle + Search Input */}
        <div className="flex items-center gap-2.5 w-full lg:w-auto justify-between lg:justify-end">
          {/* View Toggle */}
          <div className="flex items-center gap-0.5 bg-neutral-100 dark:bg-neutral-900 p-0.5 rounded-lg border border-neutral-200 dark:border-neutral-800 shrink-0">
            <button
              type="button"
              onClick={() => setViewMode("carousel")}
              className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md text-xs font-medium transition-colors ${
                viewMode === "carousel"
                  ? "bg-white dark:bg-[#1a1a1a] text-neutral-900 dark:text-white shadow-2xs"
                  : "text-neutral-500 hover:text-neutral-900 dark:hover:text-white"
              }`}
              aria-label="Carousel View"
              title="Carousel View"
            >
              <SlidersHorizontal className="w-3.5 h-3.5" />
              <span>Carousel</span>
            </button>
            <button
              type="button"
              onClick={() => setViewMode("grid")}
              className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md text-xs font-medium transition-colors ${
                viewMode === "grid"
                  ? "bg-white dark:bg-[#1a1a1a] text-neutral-900 dark:text-white shadow-2xs"
                  : "text-neutral-500 hover:text-neutral-900 dark:hover:text-white"
              }`}
              aria-label="Grid View"
              title="Grid View"
            >
              <LayoutGrid className="w-3.5 h-3.5" />
              <span>Grid</span>
            </button>
          </div>

          {/* Live Search Input */}
          <div className="relative flex-1 lg:w-60">
            <Search className="w-3.5 h-3.5 text-neutral-400 absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Filter tools..."
              className="w-full pl-8 pr-3 py-1.5 rounded-md bg-white dark:bg-[#0a0a0a] border border-neutral-200 dark:border-neutral-800 text-neutral-900 dark:text-neutral-100 text-xs placeholder-neutral-400 focus:outline-none focus:border-neutral-400 dark:focus:border-neutral-600 transition-colors"
            />
          </div>
        </div>
      </div>

      {/* Content Rendering: Carousel or Grid */}
      {filteredTools.length > 0 ? (
        viewMode === "carousel" ? (
          <div className="py-2">
            <ThumbnailImageViewer
              title="Explore All 18 Features"
              subtitle="Use arrow keys or thumbnails to inspect each podcast production tool."
              images={carouselImages}
            />
          </div>
        ) : (
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
        )
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

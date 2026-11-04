"use client";

import React, { useState, useEffect, useMemo } from "react";
import { toolCategories, toolRegistry } from "@/config/site";
import { ToolIcon } from "@/components/tools/ToolIcon";
import {
  ArrowRight,
  Search,
  LayoutGrid,
  SlidersHorizontal,
  ChevronLeft,
  ChevronRight,
  Sparkles,
} from "lucide-react";
import { defaultLocale, type SupportedLocale } from "@/i18n/languages";
import { getLocalizedPath, useTranslations } from "@/i18n/utils";
import { getLocalizedTool } from "@/i18n/toolsData";
import {
  Stories,
  StoriesContent,
  Story,
  StoryAuthor,
  StoryAuthorName,
  StoryImage,
  StoryOverlay,
  StoryTitle,
  StoryVideo,
} from "@/components/ui/stories-carousel";
import type { CarouselApi } from "@/components/ui/carousel";

interface HomeToolGridProps {
  lang?: SupportedLocale;
  defaultView?: "carousel" | "grid";
}

interface ToolStoryMeta {
  src: string;
  stage: string;
  video?: string;
  credit: string;
}

const defaultMeta: ToolStoryMeta = {
  src: "/images/tools/podcasttools_01_title-generator.png",
  stage: "01",
  credit: "Pod Studio Tools",
};

const toolMetaMap: Record<string, ToolStoryMeta> = {
  "episode-title-generator": {
    src: "/images/tools/podcasttools_01_title-generator.png",
    stage: "01",
    credit: "Pod Studio Tools",
  },
  "show-notes-generator": {
    src: "/images/tools/podcasttools_02_show-notes-generator.png",
    stage: "02",
    credit: "Pod Studio Tools",
  },
  "podcast-name-generator": {
    src: "/images/tools/podcasttools_03_name-domain-checker.png",
    stage: "03",
    credit: "Pod Studio Tools",
  },
  "episode-outline-builder": {
    src: "/images/tools/podcasttools_04_episode-outline-builder.png",
    stage: "04",
    credit: "Pod Studio Tools",
  },
  "guest-question-generator": {
    src: "/images/tools/podcasttools_05_guest-interview-questions.png",
    stage: "05",
    credit: "Pod Studio Tools",
  },
  "monetization-calculator": {
    src: "/images/tools/podcasttools_06_sponsorship-cpm-calculator.png",
    stage: "06",
    credit: "Pod Studio Tools",
  },
  "cover-art-preview": {
    src: "/images/tools/podcasttools_07_cover-art-previewer.png",
    stage: "07",
    credit: "Pod Studio Tools",
  },
  "rss-feed-validator": {
    src: "/images/tools/podcasttools_08_rss-feed-validator.png",
    stage: "08",
    credit: "Pod Studio Tools",
  },
  "episode-timestamp-generator": {
    src: "/images/tools/podcasttools_09_chapter-timestamp-generator.png",
    stage: "09",
    credit: "Pod Studio Tools",
  },
  "intro-script-generator": {
    src: "/images/tools/podcasttools_10_hook-intro-script-generator.png",
    stage: "10",
    credit: "Pod Studio Tools",
  },
  "audience-growth-estimator": {
    src: "/images/tools/podcasttools_11_audience-download-growth.png",
    stage: "11",
    credit: "Pod Studio Tools",
  },
  "description-generator": {
    src: "/images/tools/podcasttools_12_show-episode-description.png",
    stage: "12",
    credit: "Pod Studio Tools",
  },
  "category-finder": {
    src: "/images/tools/podcasttools_13_apple-spotify-category-finder.png",
    stage: "13",
    credit: "Pod Studio Tools",
  },
  "hook-generator": {
    src: "/images/tools/podcasttools_14_social-hook-clip-quotes.png",
    stage: "14",
    credit: "Pod Studio Tools",
  },
  "transcript-formatter": {
    src: "/images/tools/podcasttools_15_transcript-cleaner-formatter.png",
    stage: "15",
    credit: "Pod Studio Tools",
  },
  "trailer-script-builder": {
    src: "/images/tools/podcasttools_16_trailer-script-builder.png",
    stage: "16",
    credit: "Pod Studio Tools",
  },
  "review-response-generator": {
    src: "/images/tools/podcasttools_17_review-response-shoutout.png",
    stage: "17",
    credit: "Pod Studio Tools",
  },
  "collab-finder": {
    src: "/images/tools/podcasttools_18_guest-pitch-collab-outreach.png",
    stage: "18",
    credit: "Pod Studio Tools",
  },
};

export function HomeToolGrid({ lang = defaultLocale, defaultView = "carousel" }: HomeToolGridProps) {
  const [viewMode, setViewMode] = useState<"carousel" | "grid">(defaultView);
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [api, setApi] = useState<CarouselApi>();
  const [canScrollPrev, setCanScrollPrev] = useState(false);
  const [canScrollNext, setCanScrollNext] = useState(false);

  const t = useTranslations(lang);

  // Carousel API scroll state observation
  useEffect(() => {
    if (!api) return;

    const updateScrollState = () => {
      setCanScrollPrev(api.canScrollPrev());
      setCanScrollNext(api.canScrollNext());
    };

    updateScrollState();
    api.on("select", updateScrollState);
    api.on("reInit", updateScrollState);

    return () => {
      api.off("select", updateScrollState);
      api.off("reInit", updateScrollState);
    };
  }, [api]);

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

  const localizedTools = useMemo(() => {
    return toolRegistry.map((tool) => getLocalizedTool(tool, lang));
  }, [lang]);

  const filteredTools = useMemo(() => {
    return localizedTools.filter((tool) => {
      const matchesCategory =
        selectedCategory === "all" || tool.category === selectedCategory;
      const matchesSearch =
        !searchQuery.trim() ||
        tool.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        tool.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        tool.primaryKeyword.toLowerCase().includes(searchQuery.toLowerCase());

      return matchesCategory && matchesSearch;
    });
  }, [localizedTools, selectedCategory, searchQuery]);

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
            const count = localizedTools.filter((item) => item.category === cat.id).length;
            const isSelected = selectedCategory === cat.id;
            const catLabel = t.categories[cat.id as keyof typeof t.categories] || cat.label;

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
                {catLabel} ({count})
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
          <div className="relative py-2">
            {/* Carousel Header with Navigation Controls */}
            <div className="flex items-center justify-between mb-4 px-1">
              <div className="flex items-center gap-2">
                <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-neutral-900 dark:text-white">
                  <Sparkles className="w-3.5 h-3.5 text-[#0070f3]" />
                  Stories Carousel
                </span>
                <span className="font-mono text-[10px] px-2 py-0.5 rounded-full bg-neutral-100 dark:bg-neutral-800 text-neutral-600 dark:text-neutral-400 border border-neutral-200 dark:border-neutral-700">
                  {filteredTools.length} {filteredTools.length === 1 ? "tool" : "tools"}
                </span>
              </div>

              {/* Prev / Next Buttons */}
              <div className="flex items-center gap-1.5">
                <button
                  type="button"
                  onClick={() => api?.scrollPrev()}
                  disabled={!canScrollPrev}
                  className="w-7 h-7 rounded-full border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900 flex items-center justify-center text-neutral-700 dark:text-neutral-300 hover:text-black dark:hover:text-white disabled:opacity-30 disabled:pointer-events-none transition-all shadow-2xs"
                  aria-label="Previous tools"
                  title="Previous tools"
                >
                  <ChevronLeft className="w-3.5 h-3.5" />
                </button>
                <button
                  type="button"
                  onClick={() => api?.scrollNext()}
                  disabled={!canScrollNext}
                  className="w-7 h-7 rounded-full border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900 flex items-center justify-center text-neutral-700 dark:text-neutral-300 hover:text-black dark:hover:text-white disabled:opacity-30 disabled:pointer-events-none transition-all shadow-2xs"
                  aria-label="Next tools"
                  title="Next tools"
                >
                  <ChevronRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>

            {/* Stories Carousel */}
            <Stories
              setApi={setApi}
              opts={{
                align: "start",
                dragFree: true,
                loop: false,
              }}
              className="w-full"
            >
              <StoriesContent className="gap-3 py-2 px-1">
                {filteredTools.map((tool) => {
                  const meta = toolMetaMap[tool.slug] || defaultMeta;
                  const localizedHref = getLocalizedPath(`/tools/${tool.slug}`, lang);

                  return (
                    <Story
                      key={tool.id}
                      className="aspect-[3/4] !w-[220px] sm:!w-[250px] shrink-0 select-none shadow-sm hover:shadow-xl transition-all duration-300 rounded-2xl"
                      onClick={() => {
                        window.location.href = localizedHref;
                      }}
                      onKeyDown={(e) => {
                        if (e.key === "Enter" || e.key === " ") {
                          e.preventDefault();
                          window.location.href = localizedHref;
                        }
                      }}
                      aria-label={`${tool.title} — ${tool.categoryLabel}`}
                    >
                      {/* Visual Content: Video or Stock Photography */}
                      {meta.video ? (
                        <StoryVideo src={meta.video} poster={meta.src} />
                      ) : (
                        <StoryImage src={meta.src} alt={tool.title} />
                      )}

                      {/* Top & Bottom Contrast Gradients */}
                      <StoryOverlay side="top" className="h-20 from-black/75 via-black/35 to-transparent" />
                      <StoryOverlay side="bottom" className="h-36 from-black/95 via-black/60 to-transparent" />

                      {/* Top Bar: Category Pill & Stage Badge */}
                      <StoryTitle className="p-3">
                        <div className="flex items-center justify-between text-white">
                          <span className="font-mono text-[9px] uppercase tracking-wider px-2 py-0.5 rounded-full bg-black/50 backdrop-blur-md border border-white/20 font-medium">
                            {tool.categoryLabel}
                          </span>
                          <span className="font-mono text-[10px] font-bold px-1.5 py-0.5 rounded bg-white/20 text-white backdrop-blur-md border border-white/20">
                            {meta.stage}
                          </span>
                        </div>
                      </StoryTitle>

                      {/* Bottom Bar: Title, Description, & CTA */}
                      <StoryAuthor className="p-3 text-white flex flex-col items-start gap-1">
                        <div className="w-full mb-1">
                          <StoryAuthorName className="text-xs font-semibold text-white truncate leading-tight block">
                            {tool.title}
                          </StoryAuthorName>
                        </div>

                        <p className="text-[11px] text-neutral-200 line-clamp-2 leading-snug mb-2 font-normal">
                          {tool.description}
                        </p>

                        <div className="w-full flex items-center justify-between pt-1.5 border-t border-white/15 text-[10px]">
                          <span className="text-neutral-300 font-mono">100% Client-Side</span>
                          <span className="text-white font-medium inline-flex items-center gap-1 group-hover:translate-x-0.5 transition-transform text-[#60a5fa]">
                            {t.toolsSection.launchTool} &rarr;
                          </span>
                        </div>
                      </StoryAuthor>
                    </Story>
                  );
                })}
              </StoriesContent>
            </Stories>
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
                  {/* Tool Image Preview */}
                  {tool.image && (
                    <div className="w-full aspect-[16/9] rounded-lg overflow-hidden mb-3.5 border border-neutral-200 dark:border-neutral-800 bg-neutral-100 dark:bg-neutral-900">
                      <img
                        src={tool.image}
                        alt={tool.title}
                        loading="lazy"
                        decoding="async"
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                  )}

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

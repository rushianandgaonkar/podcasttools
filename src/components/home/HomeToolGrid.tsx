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
import {
  Stories,
  StoriesContent,
  Story,
  StoryAuthor,
  StoryAuthorImage,
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
  avatar: string;
  author: string;
  fallback: string;
  stage: string;
  video?: string;
  credit: string;
}

const defaultMeta: ToolStoryMeta = {
  src: "https://images.unsplash.com/photo-1590602847861-f357a9332bbc?auto=format&fit=crop&w=800&q=80",
  avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&h=100&fit=crop&crop=face",
  author: "Alex Johnson",
  fallback: "AJ",
  stage: "01",
  credit: "Unsplash",
};

const toolMetaMap: Record<string, ToolStoryMeta> = {
  "episode-title-generator": {
    src: "https://images.unsplash.com/photo-1590602847861-f357a9332bbc?auto=format&fit=crop&w=800&q=80",
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&h=100&fit=crop&crop=face",
    author: "Alex Johnson",
    fallback: "AJ",
    stage: "01",
    credit: "Jonathan Farber / Unsplash",
  },
  "show-notes-generator": {
    src: "https://images.unsplash.com/photo-1447069387593-a5de0862481e?auto=format&fit=crop&w=800&q=80",
    avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=100&h=100&fit=crop&crop=face",
    author: "Sarah Chen",
    fallback: "SC",
    stage: "02",
    credit: "Unsplash",
  },
  "podcast-name-generator": {
    src: "https://images.unsplash.com/photo-1519671482749-fd09be7ccebf?auto=format&fit=crop&w=800&q=80",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face",
    author: "Mike Rodriguez",
    fallback: "MR",
    stage: "03",
    credit: "Unsplash",
  },
  "episode-outline-builder": {
    src: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=800&q=80",
    avatar: "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=100&h=100&fit=crop&crop=face",
    author: "Emma Wilson",
    fallback: "EW",
    stage: "04",
    credit: "Christopher Gower / Unsplash",
  },
  "guest-question-generator": {
    src: "https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&w=800&q=80",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop&crop=face",
    author: "David Kim",
    fallback: "DK",
    stage: "05",
    credit: "Unsplash",
  },
  "monetization-calculator": {
    src: "https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?auto=format&fit=crop&w=800&q=80",
    avatar: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=100&h=100&fit=crop&crop=face",
    author: "Felipe Ramos",
    fallback: "FR",
    stage: "06",
    credit: "Felipe Ramos / Unsplash",
  },
  "cover-art-preview": {
    src: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&w=800&q=80",
    avatar: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=100&h=100&fit=crop&crop=face",
    author: "Will Francis",
    fallback: "WF",
    stage: "07",
    credit: "Will Francis / Unsplash",
  },
  "rss-feed-validator": {
    src: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=800&q=80",
    avatar: "https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?w=100&h=100&fit=crop&crop=face",
    author: "Elena Rostova",
    fallback: "ER",
    stage: "08",
    credit: "Unsplash",
  },
  "episode-timestamp-generator": {
    src: "https://images.unsplash.com/photo-1478737270239-2f02b77fc618?auto=format&fit=crop&w=800&q=80",
    avatar: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=100&h=100&fit=crop&crop=face",
    author: "Austin Neill",
    fallback: "AN",
    stage: "09",
    credit: "Austin Neill / Unsplash",
  },
  "intro-script-generator": {
    src: "https://images.unsplash.com/photo-1507676184212-d03ab07a01bf?auto=format&fit=crop&w=800&q=80",
    avatar: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=100&h=100&fit=crop&crop=face",
    author: "Marcus Vance",
    fallback: "MV",
    stage: "10",
    credit: "Unsplash",
  },
  "audience-growth-estimator": {
    src: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=800&q=80",
    avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=100&h=100&fit=crop&crop=face",
    author: "Maya Lin",
    fallback: "ML",
    stage: "11",
    credit: "Unsplash",
  },
  "description-generator": {
    src: "https://images.unsplash.com/photo-1526478806334-5fd488fcaabc?auto=format&fit=crop&w=800&q=80",
    avatar: "https://images.unsplash.com/photo-1501196354995-cbb51c65aaea?w=100&h=100&fit=crop&crop=face",
    author: "Jordan Reed",
    fallback: "JR",
    stage: "12",
    credit: "Unsplash",
  },
  "category-finder": {
    src: "https://images.unsplash.com/photo-1512820790803-83ca734da794?auto=format&fit=crop&w=800&q=80",
    avatar: "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=100&h=100&fit=crop&crop=face",
    author: "Amara Okafor",
    fallback: "AO",
    stage: "13",
    credit: "Unsplash",
  },
  "hook-generator": {
    src: "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&w=800&q=80",
    avatar: "https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?w=100&h=100&fit=crop&crop=face",
    author: "Samir Patel",
    fallback: "SP",
    stage: "14",
    credit: "Unsplash",
  },
  "transcript-formatter": {
    src: "https://images.unsplash.com/photo-1593697821252-0c9137d9fc45?auto=format&fit=crop&w=800&q=80",
    avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=100&h=100&fit=crop&crop=face",
    author: "Chloe Bennett",
    fallback: "CB",
    stage: "15",
    credit: "Unsplash",
  },
  "trailer-script-builder": {
    src: "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?auto=format&fit=crop&w=800&q=80",
    avatar: "https://images.unsplash.com/photo-1499996860823-5214fcc65f8f?w=100&h=100&fit=crop&crop=face",
    author: "Liam O'Connor",
    fallback: "LO",
    stage: "16",
    credit: "Unsplash",
  },
  "review-response-generator": {
    src: "https://images.unsplash.com/photo-1501386761578-eac5c94b800a?auto=format&fit=crop&w=800&q=80",
    avatar: "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=100&h=100&fit=crop&crop=face",
    author: "Hannah Abbott",
    fallback: "HA",
    stage: "17",
    credit: "Unsplash",
  },
  "collab-finder": {
    src: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop&crop=face",
    author: "Carlos Mendez",
    fallback: "CM",
    stage: "18",
    credit: "Unsplash",
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

                      {/* Bottom Bar: Creator Avatar, Title, Description, & CTA */}
                      <StoryAuthor className="p-3 text-white flex-col items-start gap-1">
                        <div className="flex items-center gap-2 w-full mb-1">
                          <StoryAuthorImage
                            src={meta.avatar}
                            name={meta.author}
                            fallback={meta.fallback}
                            className="size-6 border-white/30 shrink-0"
                          />
                          <div className="flex flex-col min-w-0">
                            <StoryAuthorName className="text-xs font-semibold text-white truncate leading-tight">
                              {tool.title}
                            </StoryAuthorName>
                            <span className="text-[10px] text-neutral-300 font-mono truncate">
                              {meta.author}
                            </span>
                          </div>
                        </div>

                        <p className="text-[11px] text-neutral-200 line-clamp-2 leading-snug mb-2 font-normal">
                          {tool.description}
                        </p>

                        <div className="w-full flex items-center justify-between pt-1.5 border-t border-white/15 text-[10px]">
                          <span className="text-neutral-300 font-mono">100% Client-Side</span>
                          <span className="text-white font-medium inline-flex items-center gap-1 group-hover:translate-x-0.5 transition-transform text-[#60a5fa]">
                            Launch Tool &rarr;
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

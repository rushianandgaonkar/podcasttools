"use client";

import React, { useState, useEffect, useMemo } from "react";
import { toolCategories, toolRegistry } from "@/config/site";
import { ToolIcon } from "@/components/tools/ToolIcon";
import {
  ArrowRight,
  Search,
  LayoutGrid,
  SlidersHorizontal,
  Sparkles,
} from "lucide-react";
import { defaultLocale, type SupportedLocale } from "@/i18n/languages";
import { getLocalizedPath, useTranslations } from "@/i18n/utils";
import { getLocalizedTool } from "@/i18n/toolsData";
import { OfferCarousel, type Offer } from "@/components/ui/offer-carousel";
import { getToolImage } from "@/lib/toolImages";
import type { PageCopy } from "@/i18n/pageCopy";

interface HomeToolGridProps {
  lang?: SupportedLocale;
  defaultView?: "carousel" | "grid";
  /** Localized control labels (from pageCopy[lang].grid); English defaults are used if omitted. */
  labels?: PageCopy["grid"];
}

const DEFAULT_LABELS: PageCopy["grid"] = {
  carousel: "Carousel",
  grid: "Grid",
  carouselView: "Carousel view",
  gridView: "Grid view",
  filterPlaceholder: "Filter tools...",
  inBrowser: "Runs in your browser",
  noResults: "No tools match your search.",
  clearFilters: "Clear filters",
  toolsCarousel: "Tools carousel",
  toolSingular: "tool",
  toolPlural: "tools",
};

const CARD_CREDIT = "Pod Studio Tools";

// Category accent colours (shared with config/site.ts → toolCategories[].accent)
const categoryAccent: Record<string, string> = Object.fromEntries(
  toolCategories.map((cat) => [cat.id, cat.accent])
);

export function HomeToolGrid({ lang = defaultLocale, defaultView = "carousel", labels = DEFAULT_LABELS }: HomeToolGridProps) {
  const [viewMode, setViewMode] = useState<"carousel" | "grid">(defaultView);
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [searchQuery, setSearchQuery] = useState<string>("");

  // Support /tools?q=… deep links (used by the WebSite SearchAction structured data)
  useEffect(() => {
    try {
      const q = new URLSearchParams(window.location.search).get("q");
      if (q) {
        setSearchQuery(q);
        setViewMode("grid");
      }
    } catch (_) {}
  }, []);

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

  const carouselOffers: Offer[] = filteredTools.map((tool) => {
    const stage = String(toolRegistry.findIndex((item) => item.slug === tool.slug) + 1).padStart(2, "0");
    const img = getToolImage(tool.image);
    return {
      id: tool.id,
      imageSrc: img.src,
      imageSrcSet: img.srcSet,
      imageAlt: tool.title,
      tag: tool.categoryLabel,
      title: tool.title,
      description: tool.description,
      brandLogoSrc: "/favicon.svg",
      brandName: CARD_CREDIT,
      promoCode: `Tool ${stage} · ${t.toolsSection.launchTool}`,
      accent: categoryAccent[tool.category],
      href: getLocalizedPath(`/tools/${tool.slug}`, lang),
    };
  });

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
                ? "bg-[#a9583e] hover:bg-[#8f4630] text-white shadow-2xs"
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
                    ? "bg-[#a9583e] hover:bg-[#8f4630] text-white shadow-2xs"
                    : "bg-white dark:bg-[#0a0a0a] text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white border border-neutral-200 dark:border-neutral-800"
                }`}
              >
                <span
                  aria-hidden="true"
                  className="inline-block w-1.5 h-1.5 rounded-full mr-1.5 align-middle"
                  style={{ backgroundColor: cat.accent }}
                />
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
              aria-label={labels.carouselView}
              title={labels.carouselView}
            >
              <SlidersHorizontal className="w-3.5 h-3.5" />
              <span>{labels.carousel}</span>
            </button>
            <button
              type="button"
              onClick={() => setViewMode("grid")}
              className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md text-xs font-medium transition-colors ${
                viewMode === "grid"
                  ? "bg-white dark:bg-[#1a1a1a] text-neutral-900 dark:text-white shadow-2xs"
                  : "text-neutral-500 hover:text-neutral-900 dark:hover:text-white"
              }`}
              aria-label={labels.gridView}
              title={labels.gridView}
            >
              <LayoutGrid className="w-3.5 h-3.5" />
              <span>{labels.grid}</span>
            </button>
          </div>

          {/* Live Search Input */}
          <div className="relative flex-1 lg:w-60">
            <Search className="w-3.5 h-3.5 text-neutral-400 absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder={labels.filterPlaceholder}
              aria-label={labels.filterPlaceholder}
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
                  <Sparkles className="w-3.5 h-3.5 text-[#a9583e]" />
                  {labels.toolsCarousel}
                </span>
                <span className="font-mono text-[10px] px-2 py-0.5 rounded-full bg-neutral-100 dark:bg-neutral-800 text-neutral-600 dark:text-neutral-400 border border-neutral-200 dark:border-neutral-700">
                  {filteredTools.length} {filteredTools.length === 1 ? labels.toolSingular : labels.toolPlural}
                </span>
              </div>

            </div>

            <OfferCarousel offers={carouselOffers} />
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
                  {tool.image && (() => {
                    const img = getToolImage(tool.image);
                    return (
                      <div className="relative w-full aspect-[16/9] rounded-lg overflow-hidden mb-3.5 border border-neutral-200 dark:border-neutral-800 bg-neutral-100 dark:bg-neutral-900">
                        <img
                          src={img.src}
                          srcSet={img.srcSet}
                          sizes="(min-width: 1024px) 360px, (min-width: 768px) 50vw, 100vw"
                          width={img.width}
                          height={img.height}
                          alt=""
                          loading="lazy"
                          decoding="async"
                          className="w-full h-full object-cover object-[50%_30%] group-hover:scale-105 transition-transform duration-300"
                        />
                        <span
                          aria-hidden="true"
                          className="absolute inset-x-0 top-0 h-0.5"
                          style={{ backgroundColor: categoryAccent[tool.category] }}
                        />
                      </div>
                    );
                  })()}

                  {/* Header: Icon + Category Badge */}
                  <div className="flex items-center justify-between mb-3">
                    <div
                      className="w-8 h-8 rounded-md border flex items-center justify-center transition-colors"
                      style={{
                        color: categoryAccent[tool.category],
                        backgroundColor: `${categoryAccent[tool.category]}14`,
                        borderColor: `${categoryAccent[tool.category]}33`,
                      }}
                    >
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
                  <h3 className="text-sm font-semibold tracking-[-0.01em] text-neutral-900 dark:text-neutral-100 group-hover:text-[#a9583e] dark:group-hover:text-[#a9583e] transition-colors mb-1.5">
                    {tool.title}
                  </h3>

                  {/* Description */}
                  <p className="text-xs text-neutral-500 dark:text-neutral-400 leading-relaxed line-clamp-2 mb-4">
                    {tool.description}
                  </p>
                </div>

                {/* Bottom Card Action */}
                <div className="pt-3 border-t border-neutral-100 dark:border-neutral-900 flex items-center justify-between text-xs">
                  <span className="font-mono text-[10px] text-neutral-400">{labels.inBrowser}</span>
                  <span className="inline-flex items-center gap-1 font-medium text-xs text-neutral-700 dark:text-neutral-300 group-hover:text-[#a9583e] dark:group-hover:text-[#a9583e] transition-colors">
                    {t.toolsSection.launchTool} <ArrowRight className="w-3 h-3 group-hover:translate-x-0.5 transition-transform" />
                  </span>
                </div>
              </a>
            ))}
          </div>
        )
      ) : (
        <div className="p-12 text-center border border-dashed border-neutral-300 dark:border-neutral-800 rounded-xl bg-white/40 dark:bg-[#0a0a0a]/40">
          <p className="text-sm text-neutral-500 mb-2">{labels.noResults}</p>
          <button
            onClick={() => {
              setSelectedCategory("all");
              setSearchQuery("");
            }}
            className="text-xs text-[#a9583e] hover:underline font-medium"
          >
            {labels.clearFilters}
          </button>
        </div>
      )}
    </div>
  );
}

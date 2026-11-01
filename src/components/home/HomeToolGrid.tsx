"use client";

import React, { useState } from "react";
import { toolCategories, toolRegistry, type ToolDefinition } from "@/config/site";
import { ToolIcon } from "@/components/tools/ToolIcon";
import { ArrowRight, Search, Sparkles } from "lucide-react";

export function HomeToolGrid() {
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [searchQuery, setSearchQuery] = useState<string>("");

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
    <div className="w-full space-y-8" id="tools-section">
      {/* Category Tabs & Search Bar */}
      <div className="flex flex-col md:flex-row items-center justify-between gap-4 pb-2">
        {/* Category Pills */}
        <div className="flex items-center gap-1.5 overflow-x-auto w-full md:w-auto pb-2 md:pb-0 scrollbar-none">
          <button
            onClick={() => setSelectedCategory("all")}
            className={`px-3.5 py-1.5 rounded-xl text-xs font-semibold whitespace-nowrap transition-all ${
              selectedCategory === "all"
                ? "bg-orange-500 text-white shadow-lg shadow-orange-500/20"
                : "bg-studio-card text-slate-300 hover:text-white hover:bg-studio-elevated border border-studio-border"
            }`}
          >
            All Tools ({toolRegistry.length})
          </button>

          {toolCategories.map((cat) => {
            const count = toolRegistry.filter((t) => t.category === cat.id).length;
            const isSelected = selectedCategory === cat.id;

            return (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-3.5 py-1.5 rounded-xl text-xs font-semibold whitespace-nowrap transition-all ${
                  isSelected
                    ? "bg-orange-500 text-white shadow-lg shadow-orange-500/20"
                    : "bg-studio-card text-slate-300 hover:text-white hover:bg-studio-elevated border border-studio-border"
                }`}
              >
                {cat.label} ({count})
              </button>
            );
          })}
        </div>

        {/* Live Filter Input */}
        <div className="relative w-full md:w-72">
          <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Filter tools by keyword..."
            className="w-full pl-9 pr-4 py-2 rounded-xl bg-studio-card border border-studio-border text-white text-xs placeholder-slate-500 focus:outline-none focus:border-orange-500/70 focus:ring-1 focus:ring-orange-500/50 transition-all"
          />
        </div>
      </div>

      {/* Tools Grid */}
      {filteredTools.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {filteredTools.map((tool) => (
            <a
              key={tool.id}
              href={`/tools/${tool.slug}`}
              className="group relative rounded-2xl bg-studio-card/80 border border-studio-border p-6 hover:border-orange-500/40 hover:bg-studio-card transition-all duration-300 flex flex-col justify-between shadow-lg hover:shadow-orange-500/5"
            >
              <div>
                {/* Header: Icon + Category Badge */}
                <div className="flex items-center justify-between mb-4">
                  <div className="w-10 h-10 rounded-xl bg-studio-elevated border border-studio-border/80 flex items-center justify-center text-orange-400 group-hover:scale-110 group-hover:bg-orange-500/10 group-hover:border-orange-500/30 transition-all duration-300">
                    <ToolIcon name={tool.icon} className="w-5 h-5" />
                  </div>

                  <div className="flex items-center gap-2">
                    {tool.badge && (
                      <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full bg-orange-500/10 text-orange-400 border border-orange-500/20">
                        {tool.badge}
                      </span>
                    )}
                    <span className="text-[10px] font-medium px-2 py-0.5 rounded-full bg-studio-dark border border-studio-border text-slate-400">
                      {tool.categoryLabel}
                    </span>
                  </div>
                </div>

                {/* Title */}
                <h3 className="text-base font-bold text-white group-hover:text-orange-400 transition-colors mb-2">
                  {tool.title}
                </h3>

                {/* Description */}
                <p className="text-xs text-slate-400 leading-relaxed mb-4 line-clamp-3">
                  {tool.description}
                </p>
              </div>

              {/* Bottom Card Action */}
              <div className="pt-4 border-t border-studio-border/50 flex items-center justify-between text-xs">
                <span className="text-slate-500 font-medium">Free & Client-Side</span>
                <span className="inline-flex items-center gap-1 font-semibold text-orange-400 group-hover:text-orange-300 group-hover:translate-x-0.5 transition-all">
                  Open Tool <ArrowRight className="w-3.5 h-3.5" />
                </span>
              </div>
            </a>
          ))}
        </div>
      ) : (
        <div className="p-12 text-center rounded-2xl bg-studio-card border border-studio-border">
          <p className="text-slate-300 text-sm font-medium mb-1">
            No tools match &ldquo;{searchQuery}&rdquo;
          </p>
          <p className="text-slate-500 text-xs mb-4">
            Try adjusting your search query or switching categories.
          </p>
          <button
            onClick={() => {
              setSearchQuery("");
              setSelectedCategory("all");
            }}
            className="text-xs px-4 py-2 rounded-xl bg-orange-500 text-white font-medium hover:bg-orange-600 transition-colors"
          >
            Reset Filters
          </button>
        </div>
      )}
    </div>
  );
}


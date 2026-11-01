import React from "react";
import { Metadata } from "next";
import Link from "next/link";
import { createPageMetadata } from "@/lib/metadata";
import { guidesRegistry } from "@/config/site";
import { BookOpen, Clock, ArrowRight, Sparkles } from "lucide-react";

export const metadata: Metadata = createPageMetadata({
  title: "Podcasting Guides & Industry Playbooks (2026)",
  description:
    "Expert, data-backed guides for podcast creators. Learn verified 2026 CPM sponsorship rates, Apple/Spotify cover art specs, and psychological episode title formulas.",
  path: "/guides",
});

export default function GuidesIndexPage() {
  return (
    <div className="w-full py-12 sm:py-20 bg-[#0A0A16]">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <div className="space-y-4">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-orange-500/10 border border-orange-500/20 text-orange-400 text-xs font-semibold">
            <BookOpen className="w-3.5 h-3.5" /> Topical Authority Playbooks
          </div>
          <h1 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Podcasting Guides &amp; Research
          </h1>
          <p className="text-base sm:text-lg text-slate-400 leading-relaxed max-w-3xl">
            In-depth, field-tested articles covering monetization benchmarks, directory artwork specifications, and audience growth mechanics. Grounded in 2026 audio industry data.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {guidesRegistry.map((guide) => (
            <Link
              key={guide.slug}
              href={`/guides/${guide.slug}`}
              className="group p-6 rounded-2xl bg-studio-card border border-studio-border hover:border-orange-500/40 hover:bg-studio-elevated transition-all flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between text-xs text-slate-400 mb-3">
                  <span className="px-2.5 py-0.5 rounded-full bg-studio-dark border border-studio-border text-orange-400 font-semibold">
                    {guide.category}
                  </span>
                  <span className="flex items-center gap-1 font-mono text-[11px]">
                    <Clock className="w-3.5 h-3.5" />
                    {guide.readTime}
                  </span>
                </div>
                <h2 className="text-base font-bold text-white group-hover:text-orange-400 transition-colors mb-2">
                  {guide.title}
                </h2>
                <p className="text-xs text-slate-400 leading-relaxed mb-6">
                  {guide.description}
                </p>
              </div>

              <div className="pt-3 border-t border-studio-border/50 text-xs font-semibold text-orange-400 group-hover:translate-x-1 transition-transform inline-flex items-center gap-1">
                Read Playbook &rarr;
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

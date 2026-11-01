import React from "react";
import { Metadata } from "next";
import Link from "next/link";
import { createPageMetadata } from "@/lib/metadata";
import { siteConfig } from "@/config/site";
import { Sparkles, ShieldCheck, Heart, Layers, ArrowRight } from "lucide-react";

export const metadata: Metadata = createPageMetadata({
  title: "About Pod Studio — Our Mission for Podcast Creators",
  description:
    "Learn about Pod Studio, our 100% client-side privacy architecture, and our mission to provide free, accessible tools for independent podcast creators worldwide.",
  path: "/about",
});

export default function AboutPage() {
  return (
    <div className="w-full py-12 sm:py-20 bg-[#0A0A16]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Header */}
        <div className="space-y-4">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-orange-500/10 border border-orange-500/20 text-orange-400 text-xs font-semibold">
            <Heart className="w-3.5 h-3.5" /> Built for Creators
          </div>
          <h1 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Empowering the Next Generation of Audio Storytellers
          </h1>
          <p className="text-base sm:text-lg text-slate-400 leading-relaxed">
            Podcasting has exploded into a global medium with over 500 million listeners. Yet for individual creators, the tool ecosystem has become fractured between expensive corporate SaaS subscriptions and invasive ad-heavy websites.
          </p>
        </div>

        {/* Core Principles */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="p-6 rounded-2xl bg-studio-card border border-studio-border space-y-3">
            <div className="w-10 h-10 rounded-xl bg-orange-500/10 text-orange-400 border border-orange-500/20 flex items-center justify-center">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <h2 className="text-lg font-bold text-white">100% Client-Side Privacy</h2>
            <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
              Your episode concepts, unreleased interview notes, and artwork remain strictly on your local device. We never upload your audio, draft scripts, or contact lists to external cloud servers or LLM training databases.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-studio-card border border-studio-border space-y-3">
            <div className="w-10 h-10 rounded-xl bg-indigo-500/10 text-indigo-400 border border-indigo-500/20 flex items-center justify-center">
              <Sparkles className="w-5 h-5" />
            </div>
            <h2 className="text-lg font-bold text-white">Zero Paywalls or Signups</h2>
            <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
              Every utility on Pod Studio is free to use without requiring an account, credit card, or email sign-up. We build fast, high-utility tools so you can focus on creating your show.
            </p>
          </div>
        </div>

        {/* The Story */}
        <div className="p-8 rounded-2xl bg-studio-card border border-studio-border space-y-4">
          <h2 className="text-xl font-bold text-white">Why We Built Pod Studio</h2>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
            As podcast hosts and audio producers ourselves, we were exhausted from jumping between four different web apps just to format show notes, calculate fair sponsorship CPM rates, check our cover art dimensions, and draft cold open hooks.
          </p>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
            Pod Studio unifies all 18 essential audio utilities into one modern dark studio interface designed for speed, elegance, and keyboard-first productivity.
          </p>
          <div className="pt-4">
            <Link
              href="/tools"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-orange-500 hover:bg-orange-600 text-white text-xs font-bold transition-all shadow-md shadow-orange-500/20"
            >
              Explore the Toolkit <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

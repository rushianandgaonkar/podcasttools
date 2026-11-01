import React from "react";
import Link from "next/link";
import { Logo } from "@/components/brand/Logo";
import { toolCategories, toolRegistry } from "@/config/site";
import { ShieldCheck, Heart, Sparkles, ExternalLink } from "lucide-react";

export function Footer() {
  return (
    <footer className="w-full border-t border-studio-border/60 bg-[#070712] text-slate-400 text-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        {/* Top Section: Brand + Category Columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-8 pb-12 border-b border-studio-border/60">
          {/* Brand Info */}
          <div className="lg:col-span-2 space-y-4">
            <Logo size="md" />
            <p className="text-sm text-slate-400 max-w-sm leading-relaxed">
              The free, all-in-one creator toolkit for podcasters. Generate episode titles, format show notes, calculate sponsorship revenue, and preview Apple/Spotify artwork.
            </p>

            {/* Privacy Promise Callout */}
            <div className="p-3.5 rounded-xl bg-studio-card border border-studio-border/80 flex items-start gap-3 max-w-sm">
              <ShieldCheck className="w-5 h-5 text-emerald-400 flex-shrink-0 mt-0.5" />
              <div className="text-xs space-y-1">
                <span className="font-semibold text-slate-200 block">
                  100% Client-Side Privacy Guarantee
                </span>
                <p className="text-slate-400">
                  Zero audio files, scripts, or personal notes are uploaded to external servers. Everything computes locally in your browser.
                </p>
              </div>
            </div>
          </div>

          {/* Column 1: Ideation & Branding */}
          <div className="space-y-3">
            <h3 className="text-xs font-bold uppercase tracking-wider text-slate-300">
              Ideation & Branding
            </h3>
            <ul className="space-y-2 text-xs">
              <li>
                <Link
                  href="/tools/episode-title-generator"
                  className="hover:text-orange-400 transition-colors"
                >
                  Episode Title Generator
                </Link>
              </li>
              <li>
                <Link
                  href="/tools/podcast-name-generator"
                  className="hover:text-orange-400 transition-colors"
                >
                  Podcast Name Generator
                </Link>
              </li>
              <li>
                <Link
                  href="/tools/guest-question-generator"
                  className="hover:text-orange-400 transition-colors"
                >
                  Guest Question Generator
                </Link>
              </li>
              <li>
                <Link
                  href="/tools/hook-generator"
                  className="hover:text-orange-400 transition-colors"
                >
                  Hook & Cold Open Generator
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 2: Content & Production */}
          <div className="space-y-3">
            <h3 className="text-xs font-bold uppercase tracking-wider text-slate-300">
              Content & Scripts
            </h3>
            <ul className="space-y-2 text-xs">
              <li>
                <Link
                  href="/tools/show-notes-generator"
                  className="hover:text-orange-400 transition-colors"
                >
                  Show Notes Generator
                </Link>
              </li>
              <li>
                <Link
                  href="/tools/episode-outline-builder"
                  className="hover:text-orange-400 transition-colors"
                >
                  Episode Outline Builder
                </Link>
              </li>
              <li>
                <Link
                  href="/tools/intro-script-generator"
                  className="hover:text-orange-400 transition-colors"
                >
                  Intro Script Generator
                </Link>
              </li>
              <li>
                <Link
                  href="/tools/description-generator"
                  className="hover:text-orange-400 transition-colors"
                >
                  Description Generator
                </Link>
              </li>
              <li>
                <Link
                  href="/tools/transcript-formatter"
                  className="hover:text-orange-400 transition-colors"
                >
                  Transcript Formatter
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Tech & Growth */}
          <div className="space-y-3">
            <h3 className="text-xs font-bold uppercase tracking-wider text-slate-300">
              Tech & Analytics
            </h3>
            <ul className="space-y-2 text-xs">
              <li>
                <Link
                  href="/tools/monetization-calculator"
                  className="hover:text-orange-400 transition-colors"
                >
                  Sponsorship CPM Calculator
                </Link>
              </li>
              <li>
                <Link
                  href="/tools/cover-art-preview"
                  className="hover:text-orange-400 transition-colors"
                >
                  Cover Art Preview & Specs
                </Link>
              </li>
              <li>
                <Link
                  href="/tools/rss-feed-validator"
                  className="hover:text-orange-400 transition-colors"
                >
                  RSS Feed Validator
                </Link>
              </li>
              <li>
                <Link
                  href="/tools/episode-timestamp-generator"
                  className="hover:text-orange-400 transition-colors"
                >
                  Timestamp Generator
                </Link>
              </li>
              <li>
                <Link
                  href="/tools/category-finder"
                  className="hover:text-orange-400 transition-colors"
                >
                  Category Finder (Apple/Spotify)
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Section: Legal & Copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <div className="flex items-center gap-2">
            <span>&copy; {new Date().getFullYear()} Pod Studio. Built for podcast creators worldwide.</span>
          </div>

          <div className="flex items-center gap-6">
            <Link href="/about" className="hover:text-slate-200 transition-colors">
              About
            </Link>
            <Link href="/contact" className="hover:text-slate-200 transition-colors">
              Contact
            </Link>
            <Link href="/privacy" className="hover:text-slate-200 transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms" className="hover:text-slate-200 transition-colors">
              Terms of Use
            </Link>
            <Link href="/guides" className="hover:text-slate-200 transition-colors">
              Guides
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

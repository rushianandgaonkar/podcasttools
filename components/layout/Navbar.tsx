"use client";

import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Logo } from "@/components/brand/Logo";
import { toolRegistry } from "@/config/site";
import {
  Search,
  Sparkles,
  Menu,
  X,
  Compass,
  BookOpen,
  ShieldCheck,
  ChevronRight,
} from "lucide-react";

export function Navbar() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  const filteredTools = searchQuery.trim()
    ? toolRegistry.filter(
        (t) =>
          t.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
          t.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
          t.categoryLabel.toLowerCase().includes(searchQuery.toLowerCase())
      )
    : [];

  return (
    <>
      <header className="sticky top-0 z-40 w-full border-b border-studio-border/60 bg-[#0A0A16]/85 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between gap-4">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group focus:outline-none">
            <Logo size="md" />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-1.5 lg:gap-2">
            <Link
              href="/tools"
              className={`px-3 py-1.5 rounded-lg text-sm font-medium transition-colors ${
                pathname === "/tools"
                  ? "bg-studio-elevated text-white border border-studio-border"
                  : "text-slate-300 hover:text-white hover:bg-studio-card"
              }`}
            >
              All 18 Tools
            </Link>

            <Link
              href="/tools#ideation"
              className="px-3 py-1.5 rounded-lg text-sm font-medium text-slate-300 hover:text-white hover:bg-studio-card transition-colors"
            >
              Ideation
            </Link>

            <Link
              href="/tools#content"
              className="px-3 py-1.5 rounded-lg text-sm font-medium text-slate-300 hover:text-white hover:bg-studio-card transition-colors"
            >
              Content
            </Link>

            <Link
              href="/tools#technical"
              className="px-3 py-1.5 rounded-lg text-sm font-medium text-slate-300 hover:text-white hover:bg-studio-card transition-colors"
            >
              Technical
            </Link>

            <Link
              href="/tools#growth"
              className="px-3 py-1.5 rounded-lg text-sm font-medium text-slate-300 hover:text-white hover:bg-studio-card transition-colors"
            >
              Growth & Money
            </Link>

            <Link
              href="/guides"
              className={`px-3 py-1.5 rounded-lg text-sm font-medium transition-colors ${
                pathname.startsWith("/guides")
                  ? "bg-studio-elevated text-white border border-studio-border"
                  : "text-slate-300 hover:text-white hover:bg-studio-card"
              }`}
            >
              Guides
            </Link>
          </nav>

          {/* Right Action Bar */}
          <div className="flex items-center gap-2.5">
            {/* Quick Search Button */}
            <button
              onClick={() => setSearchOpen(true)}
              className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-studio-card border border-studio-border text-slate-400 hover:text-white hover:border-studio-border-hover text-sm transition-all group"
              aria-label="Search tools"
            >
              <Search className="w-4 h-4 text-orange-400 group-hover:scale-110 transition-transform" />
              <span className="hidden sm:inline text-xs font-medium text-slate-300">
                Find a tool...
              </span>
              <kbd className="hidden lg:inline-block px-1.5 py-0.5 text-[10px] bg-studio-elevated rounded border border-studio-border text-slate-400 font-mono">
                ⌘K
              </kbd>
            </button>

            {/* Privacy Badge */}
            <div className="hidden lg:flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-semibold">
              <ShieldCheck className="w-3.5 h-3.5" />
              <span>100% Client-Side</span>
            </div>

            {/* Mobile Menu Toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 rounded-lg bg-studio-card border border-studio-border text-slate-300 hover:text-white"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden border-b border-studio-border bg-studio-card px-4 pt-3 pb-5 space-y-3">
            <Link
              href="/tools"
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2 rounded-lg text-sm font-medium text-slate-200 hover:bg-studio-elevated"
            >
              All 18 Tools
            </Link>
            <div className="grid grid-cols-2 gap-2 pt-1 border-t border-studio-border/60">
              <Link
                href="/tools#ideation"
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-2 rounded-lg text-xs font-medium text-slate-300 hover:bg-studio-elevated"
              >
                💡 Ideation Tools
              </Link>
              <Link
                href="/tools#content"
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-2 rounded-lg text-xs font-medium text-slate-300 hover:bg-studio-elevated"
              >
                📝 Content Tools
              </Link>
              <Link
                href="/tools#technical"
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-2 rounded-lg text-xs font-medium text-slate-300 hover:bg-studio-elevated"
              >
                ⚙️ Technical Tools
              </Link>
              <Link
                href="/tools#growth"
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-2 rounded-lg text-xs font-medium text-slate-300 hover:bg-studio-elevated"
              >
                💰 Monetization
              </Link>
            </div>
            <Link
              href="/guides"
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2 rounded-lg text-sm font-medium text-slate-200 hover:bg-studio-elevated"
            >
              Podcast Playbooks & Guides
            </Link>
            <Link
              href="/about"
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2 rounded-lg text-sm font-medium text-slate-400 hover:text-white"
            >
              About & Trust
            </Link>
          </div>
        )}
      </header>

      {/* Global Quick Search Modal */}
      {searchOpen && (
        <div className="fixed inset-0 z-50 flex items-start justify-center pt-20 px-4 bg-black/80 backdrop-blur-sm animate-fade-in">
          <div
            className="w-full max-w-2xl bg-studio-card border border-studio-border rounded-2xl shadow-2xl overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Search Input */}
            <div className="p-4 border-b border-studio-border flex items-center gap-3">
              <Search className="w-5 h-5 text-orange-400" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search podcast tools (e.g. title, show notes, CPM, rss, cover art)..."
                autoFocus
                className="flex-1 bg-transparent text-white placeholder-slate-500 text-base focus:outline-none"
              />
              <button
                onClick={() => {
                  setSearchOpen(false);
                  setSearchQuery("");
                }}
                className="p-1 rounded text-slate-400 hover:text-white"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Results or Featured List */}
            <div className="max-h-96 overflow-y-auto p-3 divide-y divide-studio-border/40">
              {filteredTools.length > 0 ? (
                filteredTools.map((tool) => (
                  <Link
                    key={tool.id}
                    href={`/tools/${tool.slug}`}
                    onClick={() => {
                      setSearchOpen(false);
                      setSearchQuery("");
                    }}
                    className="flex items-center justify-between p-3 rounded-xl hover:bg-studio-elevated transition-colors group"
                  >
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="text-sm font-semibold text-white group-hover:text-orange-400 transition-colors">
                          {tool.title}
                        </span>
                        <span className="text-[10px] px-2 py-0.5 rounded-full bg-studio-dark border border-studio-border text-slate-400">
                          {tool.categoryLabel}
                        </span>
                      </div>
                      <p className="text-xs text-slate-400 line-clamp-1 mt-0.5">
                        {tool.description}
                      </p>
                    </div>
                    <ChevronRight className="w-4 h-4 text-slate-500 group-hover:text-orange-400 group-hover:translate-x-1 transition-all" />
                  </Link>
                ))
              ) : searchQuery.trim() ? (
                <div className="p-6 text-center text-slate-400 text-sm">
                  No podcast tools found for &ldquo;{searchQuery}&rdquo;. Try &ldquo;title&rdquo;, &ldquo;cpm&rdquo;, or &ldquo;outline&rdquo;.
                </div>
              ) : (
                <div className="p-2 space-y-1">
                  <div className="text-[11px] font-semibold text-slate-500 uppercase tracking-wider px-3 py-1">
                    Top Featured Tools
                  </div>
                  {toolRegistry.slice(0, 5).map((tool) => (
                    <Link
                      key={tool.id}
                      href={`/tools/${tool.slug}`}
                      onClick={() => setSearchOpen(false)}
                      className="flex items-center justify-between p-2.5 rounded-xl hover:bg-studio-elevated transition-colors group"
                    >
                      <div className="flex items-center gap-2.5">
                        <span className="text-xs font-medium text-slate-200 group-hover:text-white">
                          {tool.title}
                        </span>
                      </div>
                      <span className="text-[11px] text-orange-400">Open &rarr;</span>
                    </Link>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
}

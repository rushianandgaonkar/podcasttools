"use client";

import React, { useState, useEffect } from "react";
import { Logo } from "@/components/brand/Logo";
import { toolRegistry } from "@/config/site";
import {
  Search,
  Menu,
  X,
  ChevronRight,
  Sun,
  Moon,
} from "lucide-react";

export function Navbar() {
  const [pathname, setPathname] = useState("");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [theme, setTheme] = useState<"light" | "dark">("dark");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    if (typeof window !== "undefined") {
      setPathname(window.location.pathname);
      const isDark = document.documentElement.classList.contains("dark");
      setTheme(isDark ? "dark" : "light");
    }
  }, []);

  // Keyboard shortcut ⌘K / Ctrl+K
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        setSearchOpen((prev) => !prev);
      } else if (e.key === "Escape") {
        setSearchOpen(false);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  const toggleTheme = () => {
    const nextTheme = theme === "dark" ? "light" : "dark";
    setTheme(nextTheme);
    if (typeof document !== "undefined") {
      if (nextTheme === "dark") {
        document.documentElement.classList.add("dark");
        document.documentElement.classList.remove("light");
      } else {
        document.documentElement.classList.add("light");
        document.documentElement.classList.remove("dark");
      }
      localStorage.setItem("theme", nextTheme);
    }
  };

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
      <header className="sticky top-0 z-40 w-full border-b border-neutral-200 dark:border-[#222222] bg-[#fafafa]/80 dark:bg-[#000000]/80 backdrop-blur-md transition-colors duration-150">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 h-14 flex items-center justify-between gap-4">
          {/* Logo */}
          <a href="/" className="flex items-center gap-2 group focus:outline-none">
            <Logo size="md" />
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-1">
            <a
              href="/tools"
              className={`px-3 py-1 rounded-full text-xs font-medium transition-colors ${
                pathname === "/tools"
                  ? "bg-neutral-200/80 dark:bg-neutral-800 text-neutral-900 dark:text-white"
                  : "text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white hover:bg-neutral-100 dark:hover:bg-neutral-900"
              }`}
            >
              All 18 Tools
            </a>

            <a
              href="/tools#ideation"
              className="px-3 py-1 rounded-full text-xs font-medium text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white hover:bg-neutral-100 dark:hover:bg-neutral-900 transition-colors"
            >
              Ideation
            </a>

            <a
              href="/tools#content"
              className="px-3 py-1 rounded-full text-xs font-medium text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white hover:bg-neutral-100 dark:hover:bg-neutral-900 transition-colors"
            >
              Content
            </a>

            <a
              href="/tools#technical"
              className="px-3 py-1 rounded-full text-xs font-medium text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white hover:bg-neutral-100 dark:hover:bg-neutral-900 transition-colors"
            >
              Technical
            </a>

            <a
              href="/tools#growth"
              className="px-3 py-1 rounded-full text-xs font-medium text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white hover:bg-neutral-100 dark:hover:bg-neutral-900 transition-colors"
            >
              Growth &amp; CPM
            </a>

            <a
              href="/guides"
              className={`px-3 py-1 rounded-full text-xs font-medium transition-colors ${
                pathname.startsWith("/guides")
                  ? "bg-neutral-200/80 dark:bg-neutral-800 text-neutral-900 dark:text-white"
                  : "text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white hover:bg-neutral-100 dark:hover:bg-neutral-900"
              }`}
            >
              Guides
            </a>
          </nav>

          {/* Right Action Bar */}
          <div className="flex items-center gap-2">
            {/* Vercel Search Trigger (⌘K) */}
            <button
              onClick={() => setSearchOpen(true)}
              className="flex items-center gap-2 px-2.5 py-1 rounded-md border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-[#0a0a0a] text-neutral-500 dark:text-neutral-400 hover:border-neutral-300 dark:hover:border-neutral-700 text-xs transition-all shadow-2xs"
              aria-label="Search tools (Press ⌘K)"
            >
              <Search className="w-3.5 h-3.5" />
              <span className="hidden sm:inline font-normal">Search tools...</span>
              <kbd className="hidden sm:inline-block px-1.5 py-0.5 text-[10px] font-mono rounded bg-neutral-100 dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 text-neutral-500">
                ⌘K
              </kbd>
            </button>

            {/* Dark / Light Theme Toggle */}
            <button
              onClick={toggleTheme}
              className="p-1.5 rounded-md border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-[#0a0a0a] text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white transition-all shadow-2xs focus:outline-none"
              aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
              title={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
            >
              {mounted && theme === "dark" ? (
                <Sun className="w-4 h-4 text-amber-400 animate-spin-once" />
              ) : (
                <Moon className="w-4 h-4 text-neutral-700" />
              )}
            </button>

            {/* 100% Client-Side Pill */}
            <div className="hidden lg:flex items-center gap-1.5 px-2.5 py-1 rounded-full border border-neutral-200 dark:border-neutral-800 bg-white/60 dark:bg-neutral-950/60 text-xs font-mono text-neutral-600 dark:text-neutral-400">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
              <span className="text-[11px]">100% client-side</span>
            </div>

            {/* Mobile Hamburger */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-1.5 rounded-md border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-[#0a0a0a] text-neutral-700 dark:text-neutral-300"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden border-b border-neutral-200 dark:border-neutral-800 bg-white dark:bg-[#0a0a0a] px-4 py-3 space-y-2">
            <a
              href="/tools"
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-1.5 rounded-md text-xs font-medium text-neutral-900 dark:text-neutral-100 hover:bg-neutral-100 dark:hover:bg-neutral-900"
            >
              All 18 Tools
            </a>
            <div className="grid grid-cols-2 gap-1 pt-1 border-t border-neutral-200 dark:border-neutral-800">
              <a
                href="/tools#ideation"
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-1.5 rounded-md text-xs text-neutral-600 dark:text-neutral-400 hover:bg-neutral-100 dark:hover:bg-neutral-900"
              >
                💡 Ideation
              </a>
              <a
                href="/tools#content"
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-1.5 rounded-md text-xs text-neutral-600 dark:text-neutral-400 hover:bg-neutral-100 dark:hover:bg-neutral-900"
              >
                📝 Content
              </a>
              <a
                href="/tools#technical"
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-1.5 rounded-md text-xs text-neutral-600 dark:text-neutral-400 hover:bg-neutral-100 dark:hover:bg-neutral-900"
              >
                ⚙️ Technical
              </a>
              <a
                href="/tools#growth"
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-1.5 rounded-md text-xs text-neutral-600 dark:text-neutral-400 hover:bg-neutral-100 dark:hover:bg-neutral-900"
              >
                💰 CPM &amp; Growth
              </a>
            </div>
            <a
              href="/guides"
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-1.5 rounded-md text-xs font-medium text-neutral-900 dark:text-neutral-100 hover:bg-neutral-100 dark:hover:bg-neutral-900"
            >
              Podcast Playbooks &amp; Guides
            </a>
            <a
              href="/about"
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-1.5 rounded-md text-xs text-neutral-500 hover:text-neutral-900 dark:hover:text-white"
            >
              About &amp; Trust
            </a>
          </div>
        )}
      </header>

      {/* Vercel Command Palette Modal */}
      {searchOpen && (
        <div
          className="fixed inset-0 z-50 flex items-start justify-center pt-20 px-4 bg-black/50 backdrop-blur-xs animate-fade-in"
          onClick={() => setSearchOpen(false)}
        >
          <div
            className="w-full max-w-xl bg-white dark:bg-[#0a0a0a] border border-neutral-200 dark:border-neutral-800 rounded-xl shadow-2xl overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Search Input Bar */}
            <div className="p-3.5 border-b border-neutral-200 dark:border-neutral-800 flex items-center gap-3">
              <Search className="w-4 h-4 text-neutral-400" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Type a command or search tools (e.g. title, CPM, show notes)..."
                autoFocus
                className="flex-1 bg-transparent text-neutral-900 dark:text-neutral-100 placeholder-neutral-400 text-sm focus:outline-none"
              />
              <span className="font-mono text-[10px] uppercase px-1.5 py-0.5 rounded border border-neutral-200 dark:border-neutral-800 text-neutral-400">
                ESC
              </span>
            </div>

            {/* Results List */}
            <div className="max-h-80 overflow-y-auto p-2 divide-y divide-neutral-100 dark:divide-neutral-900">
              {filteredTools.length > 0 ? (
                filteredTools.map((tool) => (
                  <a
                    key={tool.id}
                    href={`/tools/${tool.slug}`}
                    onClick={() => {
                      setSearchOpen(false);
                      setSearchQuery("");
                    }}
                    className="flex items-center justify-between p-2.5 rounded-lg hover:bg-neutral-100 dark:hover:bg-neutral-900 transition-colors group"
                  >
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="text-xs font-semibold text-neutral-900 dark:text-white group-hover:text-[#0070f3] dark:group-hover:text-[#0070f3] transition-colors">
                          {tool.title}
                        </span>
                        <span className="text-[10px] font-mono px-1.5 py-0.2 rounded border border-neutral-200 dark:border-neutral-800 text-neutral-500">
                          {tool.categoryLabel}
                        </span>
                      </div>
                      <p className="text-[11px] text-neutral-500 line-clamp-1 mt-0.5">
                        {tool.description}
                      </p>
                    </div>
                    <ChevronRight className="w-3.5 h-3.5 text-neutral-400 group-hover:text-[#0070f3] group-hover:translate-x-0.5 transition-all" />
                  </a>
                ))
              ) : searchQuery.trim() ? (
                <div className="p-6 text-center text-neutral-500 text-xs">
                  No podcast tools found for &ldquo;{searchQuery}&rdquo;.
                </div>
              ) : (
                <div className="p-2 space-y-1">
                  <div className="text-[10px] font-mono uppercase tracking-wider text-neutral-400 px-2 py-1">
                    Suggested Tools
                  </div>
                  {toolRegistry.slice(0, 5).map((tool) => (
                    <a
                      key={tool.id}
                      href={`/tools/${tool.slug}`}
                      onClick={() => setSearchOpen(false)}
                      className="flex items-center justify-between p-2 rounded-md hover:bg-neutral-100 dark:hover:bg-neutral-900 transition-colors"
                    >
                      <span className="text-xs text-neutral-700 dark:text-neutral-300">
                        {tool.title}
                      </span>
                      <span className="text-[11px] font-mono text-neutral-400">Open &rarr;</span>
                    </a>
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

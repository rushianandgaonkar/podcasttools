"use client";

import React, { useState, useEffect } from "react";
import { Logo } from "@/components/brand/Logo";
import { toolRegistry } from "@/config/site";
import { LanguageSelector } from "./LanguageSelector";
import { getLangFromUrl, getLocalizedPath, useTranslations } from "@/i18n/utils";
import { defaultLocale, type SupportedLocale } from "@/i18n/languages";
import { getLocalizedTool } from "@/i18n/toolsData";
import {
  Menu,
  X,
  ChevronRight,
  Sun,
  Moon,
} from "lucide-react";

interface NavbarProps {
  lang?: SupportedLocale;
}

export function Navbar({ lang: initialLang }: NavbarProps) {
  const [pathname, setPathname] = useState("");
  const [currentLang, setCurrentLang] = useState<SupportedLocale>(initialLang || defaultLocale);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [theme, setTheme] = useState<"light" | "dark">("dark");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    if (typeof window !== "undefined") {
      const path = window.location.pathname;
      setPathname(path);
      const detectedLang = getLangFromUrl(path);
      setCurrentLang(initialLang || detectedLang);

      const isDark = document.documentElement.classList.contains("dark");
      setTheme(isDark ? "dark" : "light");
    }
  }, [initialLang]);

  // Keyboard shortcut ⌘K / Ctrl+K and "/"
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      const target = e.target as HTMLElement | null;
      const isInput =
        target &&
        (target.tagName === "INPUT" ||
          target.tagName === "TEXTAREA" ||
          target.isContentEditable);

      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        setSearchOpen((prev) => !prev);
      } else if (e.key === "/" && !isInput) {
        e.preventDefault();
        setSearchOpen(true);
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

  const t = useTranslations(currentLang);
  const localizedTools = toolRegistry.map((tool) => getLocalizedTool(tool, currentLang));

  const filteredTools = searchQuery.trim()
    ? localizedTools.filter(
        (tool) =>
          tool.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
          tool.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
          tool.categoryLabel.toLowerCase().includes(searchQuery.toLowerCase())
      )
    : [];

  return (
    <>
      <header className="sticky top-0 z-40 w-full border-b border-neutral-200 dark:border-[#222222] bg-[#faf9f5]/80 dark:bg-[#000000]/80 backdrop-blur-md transition-colors duration-150">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 h-14 flex items-center justify-between gap-4">
          {/* Logo */}
          <a
            href={getLocalizedPath("/", currentLang)}
            className="flex items-center gap-2 group focus:outline-none"
            aria-label="Pod Studio Home"
          >
            <Logo size="md" />
          </a>

          {/* Clean Desktop Navigation — Removed redundant single-reference anchors */}
          <nav className="hidden md:flex items-center gap-1">
            <a
              href={getLocalizedPath("/tools", currentLang)}
              className={`px-3 py-1 rounded-full text-xs font-medium transition-colors ${
                pathname === "/tools" || pathname.endsWith("/tools")
                  ? "bg-neutral-200/80 dark:bg-neutral-800 text-neutral-900 dark:text-white"
                  : "text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white hover:bg-neutral-100 dark:hover:bg-neutral-900"
              }`}
            >
              {t.nav.allTools}
            </a>

            <a
              href={getLocalizedPath("/guides", currentLang)}
              className={`px-3 py-1 rounded-full text-xs font-medium transition-colors ${
                pathname.includes("/guides")
                  ? "bg-neutral-200/80 dark:bg-neutral-800 text-neutral-900 dark:text-white"
                  : "text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white hover:bg-neutral-100 dark:hover:bg-neutral-900"
              }`}
            >
              {t.nav.guides}
            </a>

            <a
              href={getLocalizedPath("/about", currentLang)}
              className={`px-3 py-1 rounded-full text-xs font-medium transition-colors ${
                pathname.includes("/about")
                  ? "bg-neutral-200/80 dark:bg-neutral-800 text-neutral-900 dark:text-white"
                  : "text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white hover:bg-neutral-100 dark:hover:bg-neutral-900"
              }`}
            >
              {t.nav.about}
            </a>

            <a
              href={getLocalizedPath("/contact", currentLang)}
              className={`px-3 py-1 rounded-full text-xs font-medium transition-colors ${
                pathname.includes("/contact")
                  ? "bg-neutral-200/80 dark:bg-neutral-800 text-neutral-900 dark:text-white"
                  : "text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white hover:bg-neutral-100 dark:hover:bg-neutral-900"
              }`}
            >
              {t.nav.contact}
            </a>
          </nav>

          {/* Right Action Bar */}
          <div className="flex items-center gap-2">
            {/* Elevated Search Button with interactive hover animation & shortcut */}
            <button
              type="button"
              onClick={() => setSearchOpen(true)}
              className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1 rounded-full border border-[var(--border-hairline)] bg-[var(--bg-canvas-elevated)] hover:border-[var(--brand-accent)] text-xs text-[var(--text-muted)] hover:text-[var(--text-ink)] shadow-[var(--shadow-button-elevated)] hover:shadow-[var(--shadow-button-elevated-hover)] hover:-translate-y-0.5 active:translate-y-0 transition-all focus:outline-none focus:ring-1 focus:ring-[var(--brand-accent)] cursor-pointer"
              aria-label="Open tool search command palette"
            >
              <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
              <span>{t.searchModal.btnText}</span>
              <kbd className="text-[10px] font-mono px-1.5 py-0.5 rounded-full bg-[var(--bg-canvas-subtle)] border border-[var(--border-hairline)] text-[var(--text-body)]">
                /
              </kbd>
            </button>

            {/* Mobile Search Icon Trigger */}
            <button
              type="button"
              onClick={() => setSearchOpen(true)}
              className="sm:hidden p-1.5 rounded-full border border-[var(--border-hairline)] bg-[var(--bg-canvas-elevated)] text-[var(--text-muted)] hover:text-[var(--text-ink)] hover:border-[var(--brand-accent)] cursor-pointer transition-all"
              aria-label="Search tools"
            >
              <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </button>

            {/* Language Selector Dropdown */}
            <LanguageSelector currentLang={currentLang} />

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

        {/* Clean Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden border-b border-neutral-200 dark:border-neutral-800 bg-white dark:bg-[#0a0a0a] px-4 py-3 space-y-1">
            <a
              href={getLocalizedPath("/tools", currentLang)}
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2 rounded-md text-xs font-medium text-neutral-900 dark:text-neutral-100 hover:bg-neutral-100 dark:hover:bg-neutral-900 transition-colors"
            >
              🛠️ {t.nav.allTools}
            </a>
            <a
              href={getLocalizedPath("/guides", currentLang)}
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2 rounded-md text-xs font-medium text-neutral-900 dark:text-neutral-100 hover:bg-neutral-100 dark:hover:bg-neutral-900 transition-colors"
            >
              📚 {t.nav.guides}
            </a>
            <a
              href={getLocalizedPath("/about", currentLang)}
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2 rounded-md text-xs font-medium text-neutral-900 dark:text-neutral-100 hover:bg-neutral-100 dark:hover:bg-neutral-900 transition-colors"
            >
              ℹ️ {t.nav.about}
            </a>
            <a
              href={getLocalizedPath("/contact", currentLang)}
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2 rounded-md text-xs font-medium text-neutral-900 dark:text-neutral-100 hover:bg-neutral-100 dark:hover:bg-neutral-900 transition-colors"
            >
              ✉️ {t.nav.contact}
            </a>
          </div>
        )}
      </header>

      {/* Global Command Palette Quick Search Modal */}
      {searchOpen && (
        <div
          className="fixed inset-0 z-50 flex items-start justify-center pt-20 px-4 bg-black/60 backdrop-blur-xs"
          onClick={() => setSearchOpen(false)}
        >
          <div
            className="w-full max-w-xl bg-white dark:bg-[#0c0c0c] border border-neutral-200 dark:border-neutral-800 rounded-xl shadow-2xl overflow-hidden animate-in fade-in zoom-in-95 duration-150"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Search Input Bar */}
            <div className="flex items-center px-4 border-b border-neutral-200 dark:border-neutral-800">
              <svg className="w-4 h-4 text-neutral-400 mr-3 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder={t.nav.searchPlaceholder}
                autoFocus
                className="w-full py-3.5 bg-transparent text-sm text-neutral-900 dark:text-white placeholder-neutral-400 focus:outline-none"
              />
              <button
                onClick={() => setSearchOpen(false)}
                className="p-1 text-neutral-400 hover:text-neutral-600 dark:hover:text-neutral-200 text-xs font-mono"
              >
                ESC
              </button>
            </div>

            {/* Results List */}
            <div className="max-h-80 overflow-y-auto p-2">
              {searchQuery.trim() === "" ? (
                <div className="p-4 text-center">
                  <p className="text-xs text-neutral-500 dark:text-neutral-400">
                    {t.searchModal.prompt}
                  </p>
                  <div className="mt-3 flex flex-wrap justify-center gap-1.5">
                    {localizedTools.slice(0, 5).map((tool) => (
                      <a
                        key={tool.slug}
                        href={getLocalizedPath(`/tools/${tool.slug}`, currentLang)}
                        onClick={() => setSearchOpen(false)}
                        className="text-[11px] px-2 py-0.5 rounded-full bg-neutral-100 dark:bg-neutral-900 text-neutral-600 dark:text-neutral-400 hover:bg-neutral-200 dark:hover:bg-neutral-800 transition-colors"
                      >
                        {tool.shortTitle}
                      </a>
                    ))}
                  </div>
                </div>
              ) : filteredTools.length === 0 ? (
                <div className="p-8 text-center text-xs text-neutral-500">
                  {t.searchModal.noResults} &quot;{searchQuery}&quot;.
                </div>
              ) : (
                <div className="space-y-1">
                  {filteredTools.map((t) => (
                    <a
                      key={t.slug}
                      href={getLocalizedPath(`/tools/${t.slug}`, currentLang)}
                      onClick={() => setSearchOpen(false)}
                      className="flex items-center justify-between p-2 rounded-lg hover:bg-neutral-100 dark:hover:bg-neutral-900/80 group transition-colors"
                    >
                      <div>
                        <div className="text-xs font-medium text-neutral-900 dark:text-neutral-100 group-hover:text-[#a9583e] transition-colors">
                          {t.title}
                        </div>
                        <div className="text-[11px] text-neutral-500 dark:text-neutral-400 line-clamp-1">
                          {t.description}
                        </div>
                      </div>
                      <ChevronRight className="w-3.5 h-3.5 text-neutral-400 group-hover:translate-x-0.5 transition-transform" />
                    </a>
                  ))}
                </div>
              )}
            </div>

            {/* Footer hint */}
            <div className="px-4 py-2 border-t border-neutral-100 dark:border-neutral-800/80 bg-neutral-50/50 dark:bg-neutral-950/50 text-[10px] text-neutral-400 flex items-center justify-between">
              <span>{t.searchModal.shortcutHint}</span>
              <span>{t.searchModal.toolsIndexed}</span>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

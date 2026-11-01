"use client";

import React, { useState, useEffect, useRef } from "react";
import { Globe, Check, ChevronDown } from "lucide-react";
import { languages, defaultLocale, type SupportedLocale } from "@/i18n/languages";
import { getLangFromUrl, getLocalizedPath } from "@/i18n/utils";

interface LanguageSelectorProps {
  currentLang?: SupportedLocale;
  className?: string;
  variant?: "navbar" | "footer";
}

// Order requested by user: Español, 日本語, Français, Deutsch, Português, 한국어, Italiano, English
const orderedLocaleKeys: SupportedLocale[] = [
  "es",
  "ja",
  "fr",
  "de",
  "pt",
  "ko",
  "it",
  "en",
];

export function LanguageSelector({
  currentLang,
  className = "",
  variant = "navbar",
}: LanguageSelectorProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [activeLang, setActiveLang] = useState<SupportedLocale>(currentLang || defaultLocale);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const detected = getLangFromUrl(window.location.pathname);
      setActiveLang(currentLang || detected);
    }
  }, [currentLang]);

  // Close on outside click
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };
    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isOpen]);

  // Close on Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setIsOpen(false);
    };
    if (isOpen) {
      window.addEventListener("keydown", handleKeyDown);
    }
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen]);

  const handleSelectLanguage = (targetLang: SupportedLocale) => {
    setIsOpen(false);
    if (typeof window !== "undefined") {
      const nextPath = getLocalizedPath(window.location.pathname, targetLang);
      window.location.href = nextPath;
    }
  };

  const currentInfo = languages[activeLang] || languages[defaultLocale];

  if (variant === "footer") {
    return (
      <div className={`relative inline-block text-left ${className}`} ref={dropdownRef}>
        <div className="flex items-center gap-2">
          <Globe className="w-3.5 h-3.5 text-neutral-500 dark:text-neutral-400" />
          <label htmlFor="footer-language-select" className="sr-only">
            Select Language
          </label>
          <select
            id="footer-language-select"
            value={activeLang}
            onChange={(e) => handleSelectLanguage(e.target.value as SupportedLocale)}
            className="text-xs bg-transparent border border-neutral-300 dark:border-neutral-800 text-neutral-700 dark:text-neutral-300 rounded px-2 py-1 focus:outline-none focus:ring-1 focus:ring-neutral-400 dark:focus:ring-neutral-600 cursor-pointer"
          >
            {orderedLocaleKeys.map((key) => {
              const lang = languages[key];
              return (
                <option
                  key={key}
                  value={key}
                  className="bg-white dark:bg-neutral-900 text-neutral-900 dark:text-white"
                >
                  {lang.nativeName} ({lang.name})
                </option>
              );
            })}
          </select>
        </div>
      </div>
    );
  }

  return (
    <div className={`relative inline-block text-left ${className}`} ref={dropdownRef}>
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-1.5 px-2.5 py-1 rounded-md border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-[#0a0a0a] text-neutral-700 dark:text-neutral-300 hover:text-neutral-900 dark:hover:text-white hover:border-neutral-300 dark:hover:border-neutral-700 text-xs transition-all shadow-2xs focus:outline-none focus:ring-1 focus:ring-neutral-400"
        aria-expanded={isOpen}
        aria-haspopup="true"
        aria-label={`Select language. Currently ${currentInfo.nativeName}`}
      >
        <Globe className="w-3.5 h-3.5 text-neutral-500 dark:text-neutral-400" />
        <span className="font-medium text-xs">{currentInfo.nativeName}</span>
        <ChevronDown
          className={`w-3 h-3 text-neutral-400 transition-transform duration-150 ${
            isOpen ? "rotate-180" : ""
          }`}
        />
      </button>

      {isOpen && (
        <div
          role="menu"
          aria-orientation="vertical"
          className="absolute right-0 mt-1.5 w-48 rounded-lg border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-[#0c0c0c] shadow-lg py-1 z-50 animate-in fade-in zoom-in-95 duration-100 backdrop-blur-md"
        >
          <div className="px-3 py-1.5 border-b border-neutral-100 dark:border-neutral-800/80 text-[10px] font-mono uppercase tracking-wider text-neutral-500 dark:text-neutral-400">
            Select Language
          </div>

          <div className="max-h-72 overflow-y-auto py-1">
            {orderedLocaleKeys.map((key) => {
              const lang = languages[key];
              const isSelected = activeLang === key;

              return (
                <button
                  key={key}
                  role="menuitem"
                  onClick={() => handleSelectLanguage(key)}
                  className={`w-full flex items-center justify-between px-3 py-1.5 text-left text-xs transition-colors ${
                    isSelected
                      ? "bg-neutral-100 dark:bg-neutral-800/90 text-neutral-950 dark:text-white font-medium"
                      : "text-neutral-700 dark:text-neutral-300 hover:bg-neutral-50 dark:hover:bg-neutral-900/60 hover:text-neutral-950 dark:hover:text-white"
                  }`}
                >
                  <div className="flex flex-col">
                    <span className="font-medium leading-tight">{lang.nativeName}</span>
                    <span className="text-[10px] text-neutral-500 dark:text-neutral-400 leading-tight">
                      {lang.name}
                    </span>
                  </div>
                  {isSelected && (
                    <Check className="w-3.5 h-3.5 text-orange-500 flex-shrink-0" />
                  )}
                </button>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
}


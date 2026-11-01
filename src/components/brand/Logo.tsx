import React from "react";

interface LogoProps {
  size?: "sm" | "md" | "lg" | "xl";
  showText?: boolean;
  className?: string;
}

export function Logo({ size = "md", showText = true, className = "" }: LogoProps) {
  const iconSizes = {
    sm: "w-7 h-7",
    md: "w-8 h-8",
    lg: "w-10 h-10",
    xl: "w-12 h-12",
  };

  const textSizes = {
    sm: "text-base",
    md: "text-lg",
    lg: "text-xl",
    xl: "text-2xl",
  };

  return (
    <div className={`flex items-center gap-2.5 select-none ${className}`}>
      {/* Vercel-Style Geometric Podcast Emblem */}
      <div
        className={`relative ${iconSizes[size]} rounded-lg bg-[#171717] dark:bg-white flex items-center justify-center p-1.5 shadow-sm transition-transform duration-200 group-hover:scale-105 flex-shrink-0`}
      >
        <svg
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-full text-white dark:text-black"
        >
          {/* Vercel Triangle Silhouette with Studio Audio Waveform */}
          <path
            d="M12 3L22 20.5H2L12 3Z"
            fill="currentColor"
          />
          {/* Negative-space Soundwave lines cut into the triangle */}
          <line x1="8.5" y1="17.5" x2="8.5" y2="15" stroke="var(--bg-page, #fafafa)" strokeWidth="1.5" strokeLinecap="round" className="stroke-white dark:stroke-black" />
          <line x1="10.25" y1="17.5" x2="10.25" y2="12" stroke="var(--bg-page, #fafafa)" strokeWidth="1.5" strokeLinecap="round" className="stroke-white dark:stroke-black" />
          <line x1="12" y1="17.5" x2="12" y2="9.5" stroke="var(--bg-page, #fafafa)" strokeWidth="1.5" strokeLinecap="round" className="stroke-white dark:stroke-black" />
          <line x1="13.75" y1="17.5" x2="13.75" y2="12" stroke="var(--bg-page, #fafafa)" strokeWidth="1.5" strokeLinecap="round" className="stroke-white dark:stroke-black" />
          <line x1="15.5" y1="17.5" x2="15.5" y2="15" stroke="var(--bg-page, #fafafa)" strokeWidth="1.5" strokeLinecap="round" className="stroke-white dark:stroke-black" />
        </svg>
      </div>

      {/* Brand Wordmark */}
      {showText && (
        <div className="flex items-center gap-2">
          <span className={`${textSizes[size]} font-semibold tracking-[-0.03em] text-[#171717] dark:text-[#ededed]`}>
            Pod Studio
          </span>
          <span className="font-mono text-[10px] uppercase font-medium tracking-wider px-1.5 py-0.5 rounded-[6px] border border-neutral-200 dark:border-neutral-800 bg-neutral-100 dark:bg-neutral-900 text-neutral-600 dark:text-neutral-400">
            TOOLS
          </span>
        </div>
      )}
    </div>
  );
}

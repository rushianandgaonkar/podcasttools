import React from "react";

interface LogoProps {
  size?: "sm" | "md" | "lg" | "xl";
  showText?: boolean;
  className?: string;
}

export function Logo({ size = "md", showText = true, className = "" }: LogoProps) {
  const iconSizes = {
    sm: "w-7 h-7",
    md: "w-9 h-9",
    lg: "w-11 h-11",
    xl: "w-14 h-14",
  };

  const textSizes = {
    sm: "text-base",
    md: "text-lg",
    lg: "text-xl",
    xl: "text-2xl",
  };

  return (
    <div className={`flex items-center gap-2.5 select-none ${className}`}>
      {/* Studio Mic & Soundwave Emblem */}
      <div
        className={`relative ${iconSizes[size]} rounded-xl bg-gradient-to-br from-indigo-500 via-purple-500 to-orange-500 p-[1.5px] shadow-sm flex-shrink-0 group`}
      >
        <div className="w-full h-full bg-[#0B0B18] rounded-[10px] flex items-center justify-center overflow-hidden relative">
          {/* Subtle audio waveform background tint */}
          <div className="absolute inset-0 bg-gradient-to-t from-indigo-500/10 via-transparent to-orange-500/10" />

          {/* Clean Studio Microphone Icon with dynamic sound pulses */}
          <svg
            viewBox="0 0 24 24"
            fill="none"
            role="img"
            aria-label="Pod Studio Logo"
            xmlns="http://www.w3.org/2000/svg"
            className="w-5/6 h-5/6 relative z-10 transition-transform duration-300 group-hover:scale-105"
          >
            {/* Left Sound Wave */}
            <path
              d="M3.5 10V14M1.5 11.5V12.5"
              stroke="#818CF8"
              strokeWidth="1.8"
              strokeLinecap="round"
            />
            {/* Microphone Body */}
            <rect
              x="8"
              y="2.5"
              width="8"
              height="11"
              rx="4"
              className="fill-indigo-950/80 stroke-orange-400"
              strokeWidth="1.6"
            />
            {/* Mic Grille Lines */}
            <line x1="9.5" y1="5.5" x2="14.5" y2="5.5" stroke="#FB923C" strokeWidth="1.2" strokeLinecap="round" />
            <line x1="9.5" y1="8" x2="14.5" y2="8" stroke="#FB923C" strokeWidth="1.2" strokeLinecap="round" />
            
            {/* Mic Stand Cradle */}
            <path
              d="M5.5 9.5C5.5 13.0899 8.41015 16 12 16C15.5899 16 18.5 13.0899 18.5 9.5"
              stroke="#A5B4FC"
              strokeWidth="1.8"
              strokeLinecap="round"
            />
            {/* Mic Stem and Base */}
            <path
              d="M12 16V20M8.5 20.5H15.5"
              stroke="#A5B4FC"
              strokeWidth="1.8"
              strokeLinecap="round"
            />
            {/* Right Sound Wave */}
            <path
              d="M20.5 10V14M22.5 11.5V12.5"
              stroke="#FB923C"
              strokeWidth="1.8"
              strokeLinecap="round"
            />
          </svg>
        </div>
      </div>

      {/* Brand Wordmark */}
      {showText && (
        <div className="flex items-center gap-2">
          <span className={`${textSizes[size]} font-semibold whitespace-nowrap tracking-[-0.03em] text-[#141413] dark:text-[#faf9f5]`}>
            Pod Studio
          </span>
          <span className="hidden sm:inline font-mono text-[10px] uppercase font-medium tracking-wider px-1.5 py-0.5 rounded-[6px] border border-neutral-200 dark:border-neutral-800 bg-neutral-100 dark:bg-neutral-900 text-neutral-600 dark:text-neutral-400">
            TOOLS
          </span>
        </div>
      )}
    </div>
  );
}

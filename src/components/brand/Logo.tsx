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
    sm: "text-lg",
    md: "text-xl",
    lg: "text-2xl",
    xl: "text-3xl",
  };

  return (
    <div className={`flex items-center gap-2.5 select-none ${className}`}>
      {/* Studio Mic & Soundwave Emblem */}
      <div
        className={`relative ${iconSizes[size]} rounded-xl bg-gradient-to-br from-indigo-600 via-purple-600 to-orange-500 p-[1.5px] shadow-lg shadow-indigo-500/20 flex-shrink-0 group`}
      >
        <div className="w-full h-full bg-[#0B0B18] rounded-[10px] flex items-center justify-center overflow-hidden relative">
          {/* Subtle audio waveform background */}
          <div className="absolute inset-0 bg-gradient-to-t from-indigo-500/10 via-transparent to-orange-500/10" />

          {/* SVG Mic Icon with dynamic sound pulses */}
          <svg
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="w-5/6 h-5/6 relative z-10 transition-transform duration-300 group-hover:scale-105"
          >
            {/* Left Sound Wave */}
            <path
              d="M3 10V14M1 11V13"
              stroke="#818CF8"
              strokeWidth="2"
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
              strokeWidth="1.8"
            />
            {/* Mic Grille Lines */}
            <line x1="9.5" y1="6" x2="14.5" y2="6" stroke="#FB923C" strokeWidth="1.2" strokeLinecap="round" />
            <line x1="9.5" y1="8.5" x2="14.5" y2="8.5" stroke="#FB923C" strokeWidth="1.2" strokeLinecap="round" />
            
            {/* Mic Stand Cradle */}
            <path
              d="M5.5 10C5.5 13.5899 8.41015 16.5 12 16.5C15.5899 16.5 18.5 13.5899 18.5 10"
              stroke="#A5B4FC"
              strokeWidth="2"
              strokeLinecap="round"
            />
            {/* Mic Stem and Base */}
            <path
              d="M12 16.5V20.5M8.5 21.5H15.5"
              stroke="#A5B4FC"
              strokeWidth="2"
              strokeLinecap="round"
            />
            {/* Right Sound Wave */}
            <path
              d="M21 10V14M23 11V13"
              stroke="#FB923C"
              strokeWidth="2"
              strokeLinecap="round"
            />
          </svg>
        </div>
      </div>

      {/* Brand Wordmark */}
      {showText && (
        <div className="flex flex-col">
          <div className="flex items-center tracking-tight font-extrabold leading-none">
            <span className={`${textSizes[size]} text-white`}>Pod</span>
            <span
              className={`${textSizes[size]} bg-gradient-to-r from-orange-400 via-amber-300 to-indigo-300 bg-clip-text text-transparent ml-1`}
            >
              Studio
            </span>
            <span className="ml-1.5 px-1.5 py-0.5 text-[10px] uppercase font-bold tracking-wider rounded-md bg-orange-500/10 text-orange-400 border border-orange-500/20">
              Tools
            </span>
          </div>
          <span className="text-[10px] text-slate-400 font-medium tracking-wide mt-0.5">
            Creator Suite
          </span>
        </div>
      )}
    </div>
  );
}


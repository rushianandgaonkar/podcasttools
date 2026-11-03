"use client";

import * as React from "react";
import { ChevronLeft, ChevronRight, ArrowUpRight } from "lucide-react";

export type GalleryImage = {
  src: string;
  alt: string;
  title: string;
  location?: string;
  credit?: string;
  href?: string;
  category?: string;
  description?: string;
};

export type State = {
  active?: number;
  open?: boolean;
  expanded?: number;
  reveal?: number;
  previous?: number;
  blend?: number;
  selected?: string;
  query?: string;
  notice?: string;
  highlighted?: boolean;
};

export type Props = {
  title?: string;
  subtitle?: string;
  state?: State;
  onStateChange?: (state: State) => void;
  onAction?: (action: string) => void;
  seeking?: boolean;
  className?: string;
  images?: GalleryImage[];
};

export const sampleImages: GalleryImage[] = [
  {
    src: "/images/tools/podcasttools_01_title-generator.png",
    alt: "Podcast Episode Title Generator interface and formula cards",
    title: "Podcast Episode Title Generator",
    location: "Ideation / 01",
    credit: "Pod Studio Tools",
    href: "/tools/episode-title-generator",
    description: "Generate high-CTR, click-worthy podcast episode titles using tested psychological formulas.",
  },
  {
    src: "/images/tools/podcasttools_02_show-notes-generator.png",
    alt: "Podcast Show Notes Generator Markdown and HTML builder interface",
    title: "Podcast Show Notes Generator",
    location: "Content / 02",
    credit: "Pod Studio Tools",
    href: "/tools/show-notes-generator",
    description: "Create structured, SEO-friendly podcast show notes with timestamps, guest bios, and links.",
  },
  {
    src: "/images/tools/podcasttools_03_name-domain-checker.png",
    alt: "Podcast Name Generator and domain availability checker",
    title: "Podcast Name Generator",
    location: "Ideation / 03",
    credit: "Pod Studio Tools",
    href: "/tools/podcast-name-generator",
    description: "Discover memorable, brandable podcast name ideas across 6 distinct creative styles.",
  },
  {
    src: "/images/tools/podcasttools_04_episode-outline-builder.png",
    alt: "Podcast Episode Outline and run of show timing builder",
    title: "Podcast Episode Outline Builder",
    location: "Content / 04",
    credit: "Pod Studio Tools",
    href: "/tools/episode-outline-builder",
    description: "Structure your episode with an interactive run-of-show planner and segment timers.",
  },
  {
    src: "/images/tools/podcasttools_05_guest-interview-questions.png",
    alt: "Podcast Guest Interview Question Generator interface",
    title: "Podcast Interview Question Generator",
    location: "Ideation / 05",
    credit: "Pod Studio Tools",
    href: "/tools/guest-question-generator",
    description: "Generate deep, engaging podcast interview questions tailored to your guest.",
  },
  {
    src: "/images/tools/podcasttools_06_sponsorship-cpm-calculator.png",
    alt: "Podcast Sponsorship and CPM ad revenue calculator dashboard",
    title: "Podcast Sponsorship & Monetization Calculator",
    location: "Growth / 06",
    credit: "Pod Studio Tools",
    href: "/tools/monetization-calculator",
    description: "Calculate potential ad revenue based on download numbers and 2026 industry CPM rates.",
  },
  {
    src: "/images/tools/podcasttools_07_cover-art-previewer.png",
    alt: "Apple Podcasts and Spotify Cover Art Previewer and specs validator",
    title: "Podcast Cover Art Preview & Size Checker",
    location: "Technical / 07",
    credit: "Pod Studio Tools",
    href: "/tools/cover-art-preview",
    description: "Test how your artwork looks at Apple Podcasts and Spotify specs and tiny thumbnail sizes.",
  },
  {
    src: "/images/tools/podcasttools_08_rss-feed-validator.png",
    alt: "Podcast RSS Feed Validator and XML linter compliance checker",
    title: "Podcast RSS Feed Validator & Linter",
    location: "Technical / 08",
    credit: "Pod Studio Tools",
    href: "/tools/rss-feed-validator",
    description: "Validate your podcast RSS XML feed for required iTunes tags and compliance.",
  },
  {
    src: "/images/tools/podcasttools_09_chapter-timestamp-generator.png",
    alt: "Podcast Timestamp and Chapter Marker generator for YouTube and Spotify",
    title: "Podcast Timestamp & Chapter Marker Generator",
    location: "Technical / 09",
    credit: "Pod Studio Tools",
    href: "/tools/episode-timestamp-generator",
    description: "Format episode chapters and timecodes into one-click copyable formats for YouTube and Spotify.",
  },
  {
    src: "/images/tools/podcasttools_10_hook-intro-script-generator.png",
    alt: "Podcast Hook and Intro Script Generator framework interface",
    title: "Podcast Intro Script Generator",
    location: "Content / 10",
    credit: "Pod Studio Tools",
    href: "/tools/intro-script-generator",
    description: "Generate punchy, listener-retaining podcast intro scripts with proven hooks.",
  },
  {
    src: "/images/tools/podcasttools_11_audience-download-growth.png",
    alt: "Podcast Audience and Download Growth Estimator analytics model",
    title: "Podcast Audience & Download Growth Estimator",
    location: "Growth / 11",
    credit: "Pod Studio Tools",
    href: "/tools/audience-growth-estimator",
    description: "Model realistic podcast audience growth over 12 months based on cadence and retention.",
  },
  {
    src: "/images/tools/podcasttools_12_show-episode-description.png",
    alt: "Podcast Show and Episode Description Generator interface",
    title: "Podcast Show & Episode Description Generator",
    location: "Content / 12",
    credit: "Pod Studio Tools",
    href: "/tools/description-generator",
    description: "Craft searchable, conversion-focused podcast descriptions that boost directory ranking.",
  },
  {
    src: "/images/tools/podcasttools_13_apple-spotify-category-finder.png",
    alt: "Apple Podcasts and Spotify Category and genre taxonomy finder",
    title: "Apple Podcasts & Spotify Category Finder",
    location: "Technical / 13",
    credit: "Pod Studio Tools",
    href: "/tools/category-finder",
    description: "Explore official Apple Podcasts taxonomy to find low-competition genres where you can rank.",
  },
  {
    src: "/images/tools/podcasttools_14_social-hook-clip-quotes.png",
    alt: "Podcast Social Hook and Viral Clip Quote Generator interface",
    title: "Podcast Hook & Cold Open Generator",
    location: "Ideation / 14",
    credit: "Pod Studio Tools",
    href: "/tools/hook-generator",
    description: "Create irresistible cold opens and curiosity hooks that retain listeners in minute one.",
  },
  {
    src: "/images/tools/podcasttools_15_transcript-cleaner-formatter.png",
    alt: "Podcast Transcript Formatter and Whisper cleaner interface",
    title: "Podcast Transcript Formatter & Cleaner",
    location: "Content / 15",
    credit: "Pod Studio Tools",
    href: "/tools/transcript-formatter",
    description: "Clean raw automated AI audio transcripts into formatted paragraphs with speaker tags.",
  },
  {
    src: "/images/tools/podcasttools_16_trailer-script-builder.png",
    alt: "Podcast Trailer Script Builder 5-part framework interface",
    title: "Podcast Trailer Script Builder",
    location: "Content / 16",
    credit: "Pod Studio Tools",
    href: "/tools/trailer-script-builder",
    description: "Write a compelling 60 to 90-second launch trailer script that converts listeners into subscribers.",
  },
  {
    src: "/images/tools/podcasttools_17_review-response-shoutout.png",
    alt: "Podcast Review Response and listener shoutout script generator",
    title: "Podcast Review Response Generator",
    location: "Growth / 17",
    credit: "Pod Studio Tools",
    href: "/tools/review-response-generator",
    description: "Generate heartfelt shoutouts and diplomatic replies to 5-star praises and feedback.",
  },
  {
    src: "/images/tools/podcasttools_18_guest-pitch-collab-outreach.png",
    alt: "Podcast Guest Pitch and Collab Outreach proposal builder interface",
    title: "Podcast Guest Pitch & Collab Outreach Builder",
    location: "Growth / 18",
    credit: "Pod Studio Tools",
    href: "/tools/collab-finder",
    description: "Craft high-converting guest pitches and cross-promotion swap proposals tailored to hosts.",
  },
];

function useStateValue(
  initial: State,
  controlled: State | undefined,
  notify: Props["onStateChange"],
) {
  const [local, update] = React.useState(initial);
  const value = controlled ?? local;
  const set = (patch: Partial<State>) => {
    const next = { ...value, ...patch };
    update(next);
    notify?.(next);
  };
  return [value, set] as const;
}

const clamp = (n: number, min: number, max: number) =>
  Math.max(min, Math.min(max, Number.isFinite(n) ? n : min));

export default function ThumbnailImageViewer({
  title = "Explore All 18 Features",
  subtitle = "Interactive visual tour across the Pod Studio creator suite.",
  images = sampleImages,
  state,
  onStateChange,
  onAction,
  seeking = false,
  className = "",
}: Props) {
  const [v, set] = useStateValue({ active: 0 }, state, onStateChange);
  const active = clamp(v.active ?? 0, 0, Math.max(0, images.length - 1));
  const current = images[active];
  const tabs = React.useRef<HTMLDivElement>(null);
  const id = React.useId().replace(/:/g, "");

  const choose = (n: number) => {
    const next = (n + images.length) % Math.max(1, images.length);
    set({ active: next });
    onAction?.(images[next]?.title ?? "");
  };

  return (
    <section
      className={`w-full max-w-[840px] mx-auto rounded-2xl border border-border bg-card text-card-foreground p-5 sm:p-7 shadow-sm transition-colors ${className}`}
      data-seeking={seeking}
    >
      {/* Header */}
      <header className="flex items-start justify-between gap-4 mb-5">
        <div>
          <span className="text-[10px] font-semibold uppercase tracking-[0.18em] text-muted-foreground font-mono">
            POD STUDIO / 18 SUITE FEATURES
          </span>
          <h2 className="text-xl sm:text-2xl font-semibold tracking-tight text-foreground mt-1 mb-1">
            {title}
          </h2>
          <p className="text-xs text-muted-foreground max-w-[440px] leading-relaxed">
            {subtitle}
          </p>
        </div>
        <div className="font-mono text-xs font-semibold text-foreground bg-muted/80 px-2.5 py-1 rounded-md border border-border/50 shrink-0">
          {String(active + 1).padStart(2, "0")}
          <span className="text-muted-foreground font-normal">
            {" "}
            / {String(images.length).padStart(2, "0")}
          </span>
        </div>
      </header>

      {/* Main Image Stage */}
      <div
        className="relative aspect-[16/10] rounded-xl overflow-hidden bg-muted isolate group shadow-inner border border-border/40"
        id={`${id}-panel`}
        role="tabpanel"
        aria-labelledby={`${id}-tab-${active}`}
      >
        {current ? (
          <img
            key={current.src}
            src={current.src}
            alt={current.alt}
            draggable={false}
            className="w-full h-full object-cover select-none transition-all duration-300"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center text-xs text-muted-foreground">
            No images to display.
          </div>
        )}

        {/* Bottom gradient vignette */}
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-black/75 via-black/35 to-transparent" />

        {/* Location badge & description overlay */}
        <div className="absolute left-4 sm:left-5 bottom-4 sm:bottom-5 right-24 z-10 text-white drop-shadow">
          {current?.location && (
            <span className="inline-block text-[10px] sm:text-[11px] font-mono uppercase tracking-wider bg-white/20 backdrop-blur-xs px-2 py-0.5 rounded text-white/95 mb-1.5 border border-white/20">
              {current.location}
            </span>
          )}
          {current?.description && (
            <p className="text-xs sm:text-sm text-white/90 line-clamp-2 max-w-md font-normal leading-snug">
              {current.description}
            </p>
          )}
        </div>

        {/* Navigation Buttons */}
        <div className="absolute right-4 bottom-4 flex items-center gap-1.5 z-10">
          <button
            type="button"
            aria-label="Previous image"
            disabled={images.length < 2}
            onClick={() => choose(active - 1)}
            className="w-8 h-8 rounded-full bg-background/90 text-foreground backdrop-blur-sm shadow flex items-center justify-center hover:scale-105 active:scale-95 transition-all disabled:opacity-40 disabled:pointer-events-none border border-border/30"
          >
            <ChevronLeft className="w-4 h-4" />
          </button>
          <button
            type="button"
            aria-label="Next image"
            disabled={images.length < 2}
            onClick={() => choose(active + 1)}
            className="w-8 h-8 rounded-full bg-background/90 text-foreground backdrop-blur-sm shadow flex items-center justify-center hover:scale-105 active:scale-95 transition-all disabled:opacity-40 disabled:pointer-events-none border border-border/30"
          >
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Caption, Credit Row & Direct Action Link */}
      <div className="flex items-center justify-between gap-4 my-4 flex-wrap" aria-live="polite">
        <div className="min-w-0">
          <h3 className="text-sm sm:text-base font-semibold tracking-tight text-foreground truncate">
            {current?.title}
          </h3>
          <span className="text-[11px] text-muted-foreground whitespace-nowrap block mt-0.5">
            Asset / {current?.credit ?? "Stock Collection"}
          </span>
        </div>

        {current?.href && (
          <a
            href={current.href}
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-foreground text-background text-xs font-medium hover:opacity-90 transition-opacity shrink-0"
          >
            Open Tool
            <ArrowUpRight className="w-3.5 h-3.5" />
          </a>
        )}
      </div>

      {/* Thumbnails list with smooth scrolling */}
      <div
        className="flex items-center gap-2 sm:gap-2.5 overflow-x-auto pb-1.5 pt-1 scrollbar-thin"
        role="tablist"
        aria-label="Choose tool photograph"
        ref={tabs}
        onKeyDown={(e) => {
          let next = active;
          if (e.key === "ArrowRight") next = (active + 1) % images.length;
          else if (e.key === "ArrowLeft") next = (active - 1 + images.length) % images.length;
          else if (e.key === "Home") next = 0;
          else if (e.key === "End") next = images.length - 1;
          else return;
          e.preventDefault();
          choose(next);
          tabs.current?.querySelectorAll<HTMLButtonElement>("button")[next]?.focus();
        }}
      >
        {images.map((im, i) => {
          const isSelected = active === i;
          return (
            <button
              key={im.src || i}
              type="button"
              id={`${id}-tab-${i}`}
              role="tab"
              aria-selected={isSelected}
              aria-controls={`${id}-panel`}
              aria-label={im.title}
              tabIndex={isSelected ? 0 : -1}
              onClick={() => choose(i)}
              className={`relative flex-none w-[68px] sm:w-[84px] aspect-[3/2] rounded-lg overflow-hidden transition-all duration-200 outline-none focus-visible:ring-2 focus-visible:ring-ring ${
                isSelected
                  ? "ring-2 ring-primary ring-offset-2 ring-offset-background opacity-100 shadow-sm"
                  : "opacity-50 hover:opacity-85 border border-border/60"
              }`}
            >
              <img src={im.src} alt={im.title || "Podcast creator tool interface screenshot"} draggable={false} className="w-full h-full object-cover" />
              <span className="absolute bottom-1 left-1 text-[9px] font-mono font-semibold text-white drop-shadow-[0_1px_2px_rgba(0,0,0,0.8)]">
                {String(i + 1).padStart(2, "0")}
              </span>
            </button>
          );
        })}
      </div>

      {/* Footer */}
      <footer className="flex items-center justify-between gap-4 flex-wrap mt-5 pt-3.5 border-t border-border text-[11px] text-muted-foreground">
        <span>All 18 tools run 100% client-side in browser memory.</span>
        <span className="font-mono text-[10px]">Navigate with arrows or thumbnail strip</span>
      </footer>
    </section>
  );
}


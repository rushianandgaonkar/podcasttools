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
    src: "https://images.unsplash.com/photo-1590602847861-f357a9332bbc?auto=format&fit=crop&w=1200&q=80",
    alt: "Professional studio microphone on boom arm in recording booth",
    title: "Podcast Episode Title Generator",
    location: "Ideation / 01",
    credit: "Jonathan Farber / Unsplash",
    href: "/tools/episode-title-generator",
    description: "Generate high-CTR, click-worthy podcast episode titles using tested psychological formulas.",
  },
  {
    src: "https://images.unsplash.com/photo-1589903308904-1010c2294adc?auto=format&fit=crop&w=1200&q=80",
    alt: "Podcast recording setup with studio microphone and digital notes",
    title: "Podcast Show Notes Generator",
    location: "Content / 02",
    credit: "CoWomen / Unsplash",
    href: "/tools/show-notes-generator",
    description: "Create structured, SEO-friendly podcast show notes with timestamps, guest bios, and links.",
  },
  {
    src: "https://images.unsplash.com/photo-1519671482749-fd09be7ccebf?auto=format&fit=crop&w=1200&q=80",
    alt: "Vibrant neon studio signage in recording suite",
    title: "Podcast Name Generator",
    location: "Ideation / 03",
    credit: "Unsplash",
    href: "/tools/podcast-name-generator",
    description: "Discover memorable, brandable podcast name ideas across 6 distinct creative styles.",
  },
  {
    src: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1200&q=80",
    alt: "Structured digital workspace and timeline planner",
    title: "Podcast Episode Outline Builder",
    location: "Content / 04",
    credit: "Christopher Gower / Unsplash",
    href: "/tools/episode-outline-builder",
    description: "Structure your episode with an interactive run-of-show planner and segment timers.",
  },
  {
    src: "https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&w=1200&q=80",
    alt: "Collaborative studio interview conversation across meeting table",
    title: "Podcast Interview Question Generator",
    location: "Ideation / 05",
    credit: "Unsplash",
    href: "/tools/guest-question-generator",
    description: "Generate deep, engaging podcast interview questions tailored to your guest.",
  },
  {
    src: "https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?auto=format&fit=crop&w=1200&q=80",
    alt: "Audio console faders and studio broadcast metering",
    title: "Podcast Sponsorship & Monetization Calculator",
    location: "Growth / 06",
    credit: "Felipe Ramos / Unsplash",
    href: "/tools/monetization-calculator",
    description: "Calculate potential ad revenue based on download numbers and 2026 industry CPM rates.",
  },
  {
    src: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&w=1200&q=80",
    alt: "Studio headphones and graphic artwork inspection setup",
    title: "Podcast Cover Art Preview & Size Checker",
    location: "Technical / 07",
    credit: "Will Francis / Unsplash",
    href: "/tools/cover-art-preview",
    description: "Test how your artwork looks at Apple Podcasts and Spotify specs and tiny thumbnail sizes.",
  },
  {
    src: "https://images.unsplash.com/photo-1535406208535-1429839cfd13?auto=format&fit=crop&w=1200&q=80",
    alt: "Professional audio mixing console with illuminated sliders and EQ dials",
    title: "Podcast RSS Feed Validator & Linter",
    location: "Technical / 08",
    credit: "Alexander Popov / Unsplash",
    href: "/tools/rss-feed-validator",
    description: "Validate your podcast RSS XML feed for required iTunes tags and compliance.",
  },
  {
    src: "https://images.unsplash.com/photo-1478737270239-2f02b77fc618?auto=format&fit=crop&w=1200&q=80",
    alt: "Acoustic recording room with sound waveform monitoring",
    title: "Podcast Timestamp & Chapter Marker Generator",
    location: "Technical / 09",
    credit: "Austin Neill / Unsplash",
    href: "/tools/episode-timestamp-generator",
    description: "Format episode chapters and timecodes into one-click copyable formats for YouTube and Spotify.",
  },
  {
    src: "https://images.unsplash.com/photo-1507676184212-d03ab07a01bf?auto=format&fit=crop&w=1200&q=80",
    alt: "Vintage broadcast studio condenser microphone",
    title: "Podcast Intro Script Generator",
    location: "Content / 10",
    credit: "Unsplash",
    href: "/tools/intro-script-generator",
    description: "Generate punchy, listener-retaining podcast intro scripts with proven hooks.",
  },
  {
    src: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=1200&q=80",
    alt: "Analytics dashboard and audience growth metrics display",
    title: "Podcast Audience & Download Growth Estimator",
    location: "Growth / 11",
    credit: "Unsplash",
    href: "/tools/audience-growth-estimator",
    description: "Model realistic podcast audience growth over 12 months based on cadence and retention.",
  },
  {
    src: "https://images.unsplash.com/photo-1526478806334-5fd488fcaabc?auto=format&fit=crop&w=1200&q=80",
    alt: "Creator desk with audio gear and writing materials",
    title: "Podcast Show & Episode Description Generator",
    location: "Content / 12",
    credit: "Unsplash",
    href: "/tools/description-generator",
    description: "Craft searchable, conversion-focused podcast descriptions that boost directory ranking.",
  },
  {
    src: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=1200&q=80",
    alt: "Studio monitoring headphones and directory listening setup",
    title: "Apple Podcasts & Spotify Category Finder",
    location: "Technical / 13",
    credit: "Paul Esch-Laurent / Unsplash",
    href: "/tools/category-finder",
    description: "Explore official Apple Podcasts taxonomy to find low-competition genres where you can rank.",
  },
  {
    src: "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&w=1200&q=80",
    alt: "Dramatic studio performance lighting with atmospheric haze",
    title: "Podcast Hook & Cold Open Generator",
    location: "Ideation / 14",
    credit: "Unsplash",
    href: "/tools/hook-generator",
    description: "Create irresistible cold opens and curiosity hooks that retain listeners in minute one.",
  },
  {
    src: "https://images.unsplash.com/photo-1593697821252-0c9137d9fc45?auto=format&fit=crop&w=1200&q=80",
    alt: "Sound editor working on audio tracks and speech transcription",
    title: "Podcast Transcript Formatter & Cleaner",
    location: "Content / 15",
    credit: "Unsplash",
    href: "/tools/transcript-formatter",
    description: "Clean raw automated AI audio transcripts into formatted paragraphs with speaker tags.",
  },
  {
    src: "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?auto=format&fit=crop&w=1200&q=80",
    alt: "Broadcast production console and soundstage mixing deck",
    title: "Podcast Trailer Script Builder",
    location: "Content / 16",
    credit: "Unsplash",
    href: "/tools/trailer-script-builder",
    description: "Write a compelling 60 to 90-second launch trailer script that converts listeners into subscribers.",
  },
  {
    src: "https://images.unsplash.com/photo-1501386761578-eac5c94b800a?auto=format&fit=crop&w=1200&q=80",
    alt: "Enthusiastic listeners wearing headphones outdoors",
    title: "Podcast Review Response Generator",
    location: "Growth / 17",
    credit: "Unsplash",
    href: "/tools/review-response-generator",
    description: "Generate heartfelt shoutouts and diplomatic replies to 5-star praises and feedback.",
  },
  {
    src: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1200&q=80",
    alt: "Roundtable creative team discussing collaboration and podcast outreach",
    title: "Podcast Guest Pitch & Collab Outreach Builder",
    location: "Growth / 18",
    credit: "Unsplash",
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
              <img src={im.src} alt="" draggable={false} className="w-full h-full object-cover" />
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


import React from "react";
import { notFound } from "next/navigation";
import Link from "next/link";
import { Metadata } from "next";
import { siteConfig, guidesRegistry } from "@/config/site";
import { createPageMetadata } from "@/lib/metadata";
import { Clock, ChevronRight, ArrowRight, BookOpen, Sparkles, CheckCircle2 } from "lucide-react";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return guidesRegistry.map((g) => ({ slug: g.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const guide = guidesRegistry.find((g) => g.slug === slug);

  if (!guide) {
    return { title: "Guide Not Found" };
  }

  return createPageMetadata({
    title: guide.title,
    description: guide.description,
    path: `/guides/${guide.slug}`,
  });
}

export default async function GuideDetailPage({ params }: Props) {
  const { slug } = await params;
  const guide = guidesRegistry.find((g) => g.slug === slug);

  if (!guide) {
    notFound();
  }

  return (
    <div className="w-full py-8 sm:py-16 bg-[#0A0A16]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        {/* Breadcrumbs */}
        <nav aria-label="Breadcrumb" className="flex items-center gap-1.5 text-xs text-slate-400">
          <Link href="/" className="hover:text-white transition-colors">
            Home
          </Link>
          <ChevronRight className="w-3.5 h-3.5 text-slate-600" />
          <Link href="/guides" className="hover:text-white transition-colors">
            Guides
          </Link>
          <ChevronRight className="w-3.5 h-3.5 text-slate-600" />
          <span className="text-orange-400 font-medium truncate">{guide.title}</span>
        </nav>

        {/* Header */}
        <div className="space-y-4 pb-8 border-b border-studio-border/60">
          <div className="flex items-center gap-3 text-xs">
            <span className="px-2.5 py-0.5 rounded-full bg-orange-500/10 border border-orange-500/20 text-orange-400 font-semibold">
              {guide.category}
            </span>
            <span className="flex items-center gap-1 text-slate-400 font-mono text-[11px]">
              <Clock className="w-3.5 h-3.5" />
              {guide.readTime}
            </span>
            <span className="text-slate-500">• Published {guide.publishedAt}</span>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight">
            {guide.title}
          </h1>

          <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
            {guide.description}
          </p>
        </div>

        {/* Guide Content depending on slug */}
        <article className="prose prose-invert max-w-none space-y-8 text-xs sm:text-sm text-slate-300 leading-relaxed font-sans">
          {slug === "podcast-sponsorship-cpm-guide-2026" && (
            <>
              <section className="space-y-3">
                <h2 className="text-xl font-bold text-white">Understanding Podcast CPM Pricing</h2>
                <p>
                  In the podcast advertising industry, sponsorship inventory is priced using the <strong className="text-white">CPM metric</strong> (Cost Per Mille, Latin for thousand downloads). A CPM represents the fee a sponsor pays for every 1,000 verified downloads an episode achieves over its initial 30 to 45-day release window (as measured by IAB v2 certified hosting analytics).
                </p>
                <div className="p-4 rounded-xl bg-studio-card border border-studio-border font-mono text-xs text-orange-300">
                  Total Ad Cost = (Estimated 30-Day Downloads / 1,000) × CPM Rate
                </div>
              </section>

              <section className="space-y-3">
                <h2 className="text-xl font-bold text-white">2026 Industry CPM Benchmarks</h2>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  <div className="p-4 rounded-xl bg-studio-card border border-studio-border">
                    <span className="text-xs font-semibold text-slate-400 block mb-1">Pre-Roll (15-30s)</span>
                    <div className="text-xl font-bold text-white">$15 – $18 CPM</div>
                    <p className="text-[11px] text-slate-400 mt-1">First 5 minutes of episode</p>
                  </div>
                  <div className="p-4 rounded-xl bg-studio-card border border-orange-500/40">
                    <span className="text-xs font-semibold text-orange-400 block mb-1">Mid-Roll (60s Host-Read)</span>
                    <div className="text-xl font-bold text-orange-400">$25 – $35 CPM</div>
                    <p className="text-[11px] text-slate-400 mt-1">Center of episode, highest retention</p>
                  </div>
                  <div className="p-4 rounded-xl bg-studio-card border border-studio-border">
                    <span className="text-xs font-semibold text-slate-400 block mb-1">Post-Roll (15s)</span>
                    <div className="text-xl font-bold text-white">$10 – $14 CPM</div>
                    <p className="text-[11px] text-slate-400 mt-1">Outro audio segment</p>
                  </div>
                </div>
              </section>

              {/* Direct Tool CTA */}
              <div className="p-6 rounded-2xl bg-gradient-to-r from-studio-card via-studio-card to-orange-500/10 border border-orange-500/30 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div className="space-y-1">
                  <h3 className="text-base font-bold text-white">Calculate Your Show&apos;s Revenue</h3>
                  <p className="text-xs text-slate-400">
                    Input your downloads, release schedule, and ad slots into our free calculator.
                  </p>
                </div>
                <Link
                  href="/tools/monetization-calculator"
                  className="px-5 py-2.5 rounded-xl bg-orange-500 hover:bg-orange-600 text-white font-bold text-xs inline-flex items-center gap-1.5 shadow-md shadow-orange-500/20 whitespace-nowrap self-start sm:self-auto"
                >
                  Open Sponsorship Calculator <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </>
          )}

          {slug === "apple-spotify-cover-art-specs-guide" && (
            <>
              <section className="space-y-3">
                <h2 className="text-xl font-bold text-white">Official Apple Podcasts &amp; Spotify Artwork Specifications</h2>
                <p>
                  Both Apple Podcasts and Spotify have strict technical requirements for podcast cover art. Submitting artwork that violates these specifications will cause your show to be rejected or fail directory indexing.
                </p>
                <div className="space-y-2">
                  <div className="flex items-start gap-2 p-3 rounded-xl bg-studio-card border border-studio-border">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 mt-0.5 flex-shrink-0" />
                    <div>
                      <strong className="text-white">Square 1:1 Aspect Ratio:</strong> Width and height must be strictly identical.
                    </div>
                  </div>
                  <div className="flex items-start gap-2 p-3 rounded-xl bg-studio-card border border-studio-border">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 mt-0.5 flex-shrink-0" />
                    <div>
                      <strong className="text-white">Resolution Range:</strong> Minimum 1400 x 1400 px, Maximum 3000 x 3000 px. We strongly recommend publishing at 3000 x 3000 px for Retina display clarity.
                    </div>
                  </div>
                  <div className="flex items-start gap-2 p-3 rounded-xl bg-studio-card border border-studio-border">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 mt-0.5 flex-shrink-0" />
                    <div>
                      <strong className="text-white">File Format &amp; Color Space:</strong> JPEG or PNG in sRGB color space. (Do not upload CMYK print files).
                    </div>
                  </div>
                </div>
              </section>

              {/* Direct Tool CTA */}
              <div className="p-6 rounded-2xl bg-gradient-to-r from-studio-card via-studio-card to-orange-500/10 border border-orange-500/30 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div className="space-y-1">
                  <h3 className="text-base font-bold text-white">Test Your Cover Art Client-Side</h3>
                  <p className="text-xs text-slate-400">
                    Preview your artwork on dark mode Apple/Spotify mockups and run an instant spec check.
                  </p>
                </div>
                <Link
                  href="/tools/cover-art-preview"
                  className="px-5 py-2.5 rounded-xl bg-orange-500 hover:bg-orange-600 text-white font-bold text-xs inline-flex items-center gap-1.5 shadow-md shadow-orange-500/20 whitespace-nowrap self-start sm:self-auto"
                >
                  Preview Artwork <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </>
          )}

          {slug === "how-to-write-clickable-episode-titles" && (
            <>
              <section className="space-y-3">
                <h2 className="text-xl font-bold text-white">Why Episode Titles Dictate 70% of Play Decisions</h2>
                <p>
                  Most podcast creators spend 10 hours recording and editing an episode, and then spend 10 seconds typing a title like &ldquo;Episode 42 with John Doe&rdquo;. On Apple Podcasts and Spotify, listeners scroll past dozens of shows in seconds. Your title is your billboard.
                </p>
              </section>

              <section className="space-y-3">
                <h2 className="text-xl font-bold text-white">The 5 Core Title Archetypes</h2>
                <div className="space-y-2">
                  <div className="p-3.5 rounded-xl bg-studio-card border border-studio-border">
                    <strong className="text-orange-400 block text-xs uppercase mb-1">1. The Curiosity Gap</strong>
                    <p className="text-xs text-slate-300">
                      &ldquo;The Uncomfortable Truth About [Topic] Nobody Admits&rdquo; — teases insider knowledge without being cheap clickbait.
                    </p>
                  </div>
                  <div className="p-3.5 rounded-xl bg-studio-card border border-studio-border">
                    <strong className="text-indigo-400 block text-xs uppercase mb-1">2. The Contrarian Challenge</strong>
                    <p className="text-xs text-slate-300">
                      &ldquo;Why [Common Practice] Is Actually Ruining Your [Goal]&rdquo; — challenges dogma and commands attention.
                    </p>
                  </div>
                  <div className="p-3.5 rounded-xl bg-studio-card border border-studio-border">
                    <strong className="text-emerald-400 block text-xs uppercase mb-1">3. The Specific Case Study</strong>
                    <p className="text-xs text-slate-300">
                      &ldquo;From Zero to $50k MRR in 12 Months: The Exact Cold Email Playbook&rdquo; — promises concrete, actionable ROI.
                    </p>
                  </div>
                </div>
              </section>

              {/* Direct Tool CTA */}
              <div className="p-6 rounded-2xl bg-gradient-to-r from-studio-card via-studio-card to-orange-500/10 border border-orange-500/30 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div className="space-y-1">
                  <h3 className="text-base font-bold text-white">Generate 30+ Formula-Backed Titles</h3>
                  <p className="text-xs text-slate-400">
                    Enter your episode topic and guest name into our title generator for instant ideas.
                  </p>
                </div>
                <Link
                  href="/tools/episode-title-generator"
                  className="px-5 py-2.5 rounded-xl bg-orange-500 hover:bg-orange-600 text-white font-bold text-xs inline-flex items-center gap-1.5 shadow-md shadow-orange-500/20 whitespace-nowrap self-start sm:self-auto"
                >
                  Generate Titles Now <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </>
          )}
        </article>
      </div>
    </div>
  );
}

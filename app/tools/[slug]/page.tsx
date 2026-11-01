import React from "react";
import { notFound } from "next/navigation";
import Link from "next/link";
import { Metadata } from "next";
import { siteConfig, toolRegistry, ToolDefinition } from "@/config/site";
import { createToolMetadata } from "@/lib/metadata";
import { ToolDispatcher } from "@/components/tools/ToolDispatcher";
import { ToolIcon } from "@/components/tools/ToolIcon";
import {
  Sparkles,
  ShieldCheck,
  CheckCircle2,
  ArrowRight,
  ChevronRight,
  HelpCircle,
  Zap,
} from "lucide-react";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return toolRegistry.map((tool) => ({
    slug: tool.slug,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  return createToolMetadata(slug);
}

export default async function ToolPage({ params }: Props) {
  const { slug } = await params;
  const tool = toolRegistry.find((t) => t.slug === slug);

  if (!tool) {
    notFound();
  }

  // Related tools from the same category or featured
  const relatedTools = toolRegistry
    .filter((t) => t.slug !== tool.slug && (t.category === tool.category || t.featured))
    .slice(0, 3);

  // Structured Data Schema
  const webAppSchema = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    name: tool.title,
    url: `${siteConfig.url}/tools/${tool.slug}`,
    description: tool.description,
    applicationCategory: "MultimediaApplication",
    operatingSystem: "All modern web browsers",
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "USD",
    },
    browserRequirements: "Requires JavaScript",
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: siteConfig.url,
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Tools",
        item: `${siteConfig.url}/tools`,
      },
      {
        "@type": "ListItem",
        position: 3,
        name: tool.title,
        item: `${siteConfig.url}/tools/${tool.slug}`,
      },
    ],
  };

  return (
    <div className="w-full py-8 sm:py-14 bg-[#0A0A16]">
      {/* Schema Injection */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webAppSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        {/* Breadcrumb Navigation */}
        <nav aria-label="Breadcrumb" className="flex items-center gap-1.5 text-xs text-slate-400">
          <Link href="/" className="hover:text-white transition-colors">
            Home
          </Link>
          <ChevronRight className="w-3.5 h-3.5 text-slate-600" />
          <Link href="/tools" className="hover:text-white transition-colors">
            Tools
          </Link>
          <ChevronRight className="w-3.5 h-3.5 text-slate-600" />
          <span className="text-orange-400 font-medium truncate">{tool.shortTitle}</span>
        </nav>

        {/* Tool Header */}
        <div className="space-y-4">
          <div className="flex flex-wrap items-center gap-2">
            <span className="text-[11px] font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-studio-card border border-studio-border text-slate-300">
              {tool.categoryLabel}
            </span>
            {tool.badge && (
              <span className="text-[11px] font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-orange-500/10 text-orange-400 border border-orange-500/20">
                {tool.badge}
              </span>
            )}
            <div className="flex items-center gap-1 text-[11px] text-emerald-400 bg-emerald-500/10 px-2.5 py-0.5 rounded-full border border-emerald-500/20">
              <ShieldCheck className="w-3.5 h-3.5" /> 100% Client-Side Privacy
            </div>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight">
            {tool.title}
          </h1>

          <p className="text-sm sm:text-base text-slate-400 leading-relaxed max-w-3xl">
            {tool.longDescription}
          </p>
        </div>

        {/* Primary Interactive Tool Workspace */}
        <div className="pt-2">
          <ToolDispatcher slug={tool.slug} />
        </div>

        {/* How-To & Features Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-10 border-t border-studio-border/60">
          <div className="p-6 rounded-2xl bg-studio-card border border-studio-border space-y-3">
            <h2 className="text-sm font-bold uppercase tracking-wider text-white flex items-center gap-2">
              <Zap className="w-4 h-4 text-orange-400" />
              How to Use This Tool in 3 Steps
            </h2>
            <ol className="space-y-2.5 text-xs text-slate-300">
              <li className="flex items-start gap-2">
                <span className="w-5 h-5 rounded-full bg-orange-500/10 text-orange-400 flex items-center justify-center font-bold text-[10px] flex-shrink-0 mt-0.5">
                  1
                </span>
                <span>Enter your episode subject, guest details, or audio parameters into the input fields above.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="w-5 h-5 rounded-full bg-orange-500/10 text-orange-400 flex items-center justify-center font-bold text-[10px] flex-shrink-0 mt-0.5">
                  2
                </span>
                <span>Review the instant results, toggle categories or formulas, and adjust parameters to fit your show.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="w-5 h-5 rounded-full bg-orange-500/10 text-orange-400 flex items-center justify-center font-bold text-[10px] flex-shrink-0 mt-0.5">
                  3
                </span>
                <span>Click one-click copy or export to TXT/Markdown, and paste directly into your podcast hosting service.</span>
              </li>
            </ol>
          </div>

          <div className="p-6 rounded-2xl bg-studio-card border border-studio-border space-y-3">
            <h2 className="text-sm font-bold uppercase tracking-wider text-white flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-emerald-400" />
              Zero-Server Privacy Guarantee
            </h2>
            <p className="text-xs text-slate-300 leading-relaxed">
              Unlike AI tools that transmit your episode ideas and drafts to third-party cloud servers, this tool operates 100% inside your local browser runtime.
            </p>
            <ul className="space-y-1.5 text-xs text-slate-400">
              <li className="flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 flex-shrink-0" />
                No account or sign up required
              </li>
              <li className="flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 flex-shrink-0" />
                Zero audio or text uploads to remote databases
              </li>
              <li className="flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 flex-shrink-0" />
                Fast, instant execution with offline compatibility
              </li>
            </ul>
          </div>
        </div>

        {/* Related Tools Internal Linking Grid */}
        <div className="pt-8 border-t border-studio-border/60 space-y-4">
          <div className="flex items-center justify-between">
            <h2 className="text-base font-bold text-white">
              Related Podcast Tools You Might Like
            </h2>
            <Link
              href="/tools"
              className="text-xs text-orange-400 hover:text-orange-300 font-semibold inline-flex items-center gap-1"
            >
              All Tools <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {relatedTools.map((rel) => (
              <Link
                key={rel.id}
                href={`/tools/${rel.slug}`}
                className="p-4 rounded-xl bg-studio-card border border-studio-border hover:border-orange-500/40 hover:bg-studio-elevated transition-all group flex flex-col justify-between"
              >
                <div>
                  <div className="w-8 h-8 rounded-lg bg-studio-darkest text-orange-400 flex items-center justify-center mb-2.5 group-hover:scale-110 transition-transform">
                    <ToolIcon name={rel.icon} className="w-4 h-4" />
                  </div>
                  <h3 className="text-xs font-bold text-white group-hover:text-orange-400 transition-colors mb-1 line-clamp-1">
                    {rel.title}
                  </h3>
                  <p className="text-[11px] text-slate-400 line-clamp-2 leading-relaxed">
                    {rel.description}
                  </p>
                </div>
                <span className="text-[10px] font-semibold text-orange-400 mt-3 inline-flex items-center gap-0.5">
                  Open Tool &rarr;
                </span>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

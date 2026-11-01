import React from "react";
import { Metadata } from "next";
import { createPageMetadata } from "@/lib/metadata";

export const metadata: Metadata = createPageMetadata({
  title: "Terms of Service — Pod Studio",
  description:
    "Review the terms of use for Pod Studio. Free for personal and commercial podcast creation.",
  path: "/terms",
});

export default function TermsPage() {
  return (
    <div className="w-full py-12 sm:py-20 bg-[#0A0A16]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        <div className="space-y-3">
          <h1 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Terms of Service
          </h1>
          <p className="text-xs sm:text-sm text-slate-400">
            Last updated: November 1, 2026 • Effective Date: November 1, 2026
          </p>
        </div>

        <div className="p-8 rounded-2xl bg-studio-card border border-studio-border space-y-6 text-xs sm:text-sm text-slate-300 leading-relaxed">
          <section className="space-y-2">
            <h2 className="text-base font-bold text-white">1. Acceptance of Terms</h2>
            <p>
              By accessing and using Pod Studio (<strong className="text-white">podstudiotools.com</strong>), you agree to comply with and be bound by these Terms of Service. If you do not agree to these terms, please do not use the service.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-base font-bold text-white">2. Free Commercial &amp; Personal License</h2>
            <p>
              All output generated through our tools—including episode titles, show notes, transcripts, outlines, interview questions, and scripts—belongs entirely to you. You are granted an irrevocable, royalty-free, worldwide license to publish, broadcast, monetize, and distribute these assets across any audio platform, hosting service, or media channel.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-base font-bold text-white">3. Third-Party Platform Disclaimer</h2>
            <p>
              Apple Podcasts, Spotify, YouTube, Buzzsprout, Libsyn, and other third-party platforms maintain their own independent terms, content guidelines, and technical specifications. While our tools are built against verified 2026 official platform criteria, Pod Studio is an independent toolkit and is not affiliated with, endorsed by, or sponsored by Apple Inc., Spotify AB, or Google LLC.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-base font-bold text-white">4. No Ranking or Financial Guarantees</h2>
            <p>
              Our calculators and generator tools provide estimates and frameworks based on industry standard averages (e.g., CPM benchmarks, compounding download estimates). Pod Studio does not guarantee specific chart positions, sponsorship revenues, or listener numbers, as podcast success depends on numerous factors outside algorithmic control.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-base font-bold text-white">5. Service Availability &amp; Modifications</h2>
            <p>
              We strive to keep Pod Studio fast and available at all times. We reserve the right to add, update, or refine tools and algorithms to keep pace with changing podcast distribution standards.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}

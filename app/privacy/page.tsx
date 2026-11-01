import React from "react";
import { Metadata } from "next";
import { createPageMetadata } from "@/lib/metadata";
import { ShieldCheck, CheckCircle2 } from "lucide-react";

export const metadata: Metadata = createPageMetadata({
  title: "Privacy Policy — Pod Studio",
  description:
    "Read Pod Studio's transparent, 100% client-side privacy policy. Learn how our tools process calculations, artwork, and notes locally in your browser.",
  path: "/privacy",
});

export default function PrivacyPage() {
  return (
    <div className="w-full py-12 sm:py-20 bg-[#0A0A16]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        <div className="space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-semibold">
            <ShieldCheck className="w-3.5 h-3.5" /> Privacy First Architecture
          </div>
          <h1 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Privacy Policy
          </h1>
          <p className="text-xs sm:text-sm text-slate-400">
            Last updated: November 1, 2026 • Effective Date: November 1, 2026
          </p>
        </div>

        <div className="p-8 rounded-2xl bg-studio-card border border-studio-border space-y-8 text-xs sm:text-sm text-slate-300 leading-relaxed">
          <section className="space-y-3">
            <h2 className="text-base font-bold text-white">1. Executive Summary: The Client-Side Model</h2>
            <p>
              Pod Studio (&ldquo;we&rdquo;, &ldquo;us&rdquo;, or &ldquo;our&rdquo;) provides free online utilities for podcast creators at <strong className="text-white">podstudiotools.com</strong>.
            </p>
            <p>
              Our architectural foundation is simple: <strong className="text-emerald-400">your creative ideas and audio assets belong to you</strong>. Unlike cloud-based AI tools that upload and store your text, outlines, and audio transcripts on remote databases for training or profiling, Pod Studio executes calculations and formatting <strong className="text-white">100% locally inside your web browser</strong>.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-base font-bold text-white">2. Data Handling by Tool Category</h2>
            <div className="space-y-2">
              <div className="p-3.5 rounded-xl bg-studio-darkest border border-studio-border space-y-1">
                <span className="font-semibold text-white block">Cover Art Preview &amp; Image Testing</span>
                <p className="text-slate-400 text-xs">
                  When you drop or select a podcast cover art image in the Cover Art Preview tool, the file is loaded into your browser&apos;s volatile memory via the HTML5 FileReader API. The image data is never uploaded, stored, or transmitted over any network connection. When you close or refresh the page, the image memory is purged automatically.
                </p>
              </div>

              <div className="p-3.5 rounded-xl bg-studio-darkest border border-studio-border space-y-1">
                <span className="font-semibold text-white block">Episode Titles, Show Notes, Scripts &amp; Hooks</span>
                <p className="text-slate-400 text-xs">
                  All text generation and string formatting formulas execute deterministically on your client device using client-side JavaScript. No episode topics, guest names, or proprietary notes are logged, recorded, or sent to server endpoints.
                </p>
              </div>

              <div className="p-3.5 rounded-xl bg-studio-darkest border border-studio-border space-y-1">
                <span className="font-semibold text-white block">RSS Feed XML Validator</span>
                <p className="text-slate-400 text-xs">
                  Pasted podcast XML is parsed strictly in-memory using the browser&apos;s native DOMParser interface. No feed URLs or XML payloads are archived.
                </p>
              </div>

              <div className="p-3.5 rounded-xl bg-studio-darkest border border-studio-border space-y-1">
                <span className="font-semibold text-white block">Monetization &amp; Audience Estimators</span>
                <p className="text-slate-400 text-xs">
                  Download quantities, sponsorship rates, and financial calculations run in local state memory. No financial or analytics metrics are tracked or tied to your identity.
                </p>
              </div>
            </div>
          </section>

          <section className="space-y-3">
            <h2 className="text-base font-bold text-white">3. Local Storage &amp; Cookies</h2>
            <p>
              Pod Studio does not use tracking cookies. Optional browser <code className="text-orange-400 font-mono">localStorage</code> is used exclusively when you explicitly click to bookmark or save a favorite item (such as a podcast name idea) so that your selections remain accessible if you return to the page. You can clear this at any time by clearing your browser cache.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-base font-bold text-white">4. Third-Party Integrations &amp; Analytics</h2>
            <p>
              We do not sell, rent, or monetize your personal data. We do not load advertising tracking pixels or retargeting scripts. If anonymous web traffic measurements are utilized in the future, they will operate without cross-site tracking or personal data collection.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-base font-bold text-white">5. Contact Information</h2>
            <p>
              If you have any questions or concerns regarding this policy, please email our engineering team directly at:{" "}
              <a href="mailto:support@podstudiotools.com" className="text-orange-400 underline font-mono">
                support@podstudiotools.com
              </a>.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}

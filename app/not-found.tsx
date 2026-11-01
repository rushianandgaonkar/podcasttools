import React from "react";
import Link from "next/link";
import { MicOff, ArrowRight, Sparkles } from "lucide-react";

export default function NotFound() {
  return (
    <div className="w-full min-h-[70vh] flex items-center justify-center py-16 bg-[#0A0A16]">
      <div className="max-w-md mx-auto px-4 text-center space-y-6">
        <div className="w-16 h-16 rounded-2xl bg-orange-500/10 text-orange-400 border border-orange-500/20 flex items-center justify-center mx-auto shadow-lg shadow-orange-500/10">
          <MicOff className="w-8 h-8" />
        </div>

        <div className="space-y-2">
          <span className="text-xs font-mono font-bold text-orange-400 uppercase tracking-widest">
            404 — Audio Signal Lost
          </span>
          <h1 className="text-3xl font-extrabold text-white tracking-tight">
            Page Not Found
          </h1>
          <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
            The podcast creator tool or guide you are looking for doesn&apos;t exist or may have been moved.
          </p>
        </div>

        <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3">
          <Link
            href="/"
            className="w-full sm:w-auto px-5 py-2.5 rounded-xl bg-orange-500 hover:bg-orange-600 text-white font-bold text-xs shadow-md shadow-orange-500/20 transition-all flex items-center justify-center gap-1.5"
          >
            Back to Homepage <ArrowRight className="w-3.5 h-3.5" />
          </Link>
          <Link
            href="/tools"
            className="w-full sm:w-auto px-5 py-2.5 rounded-xl bg-studio-card hover:bg-studio-elevated text-slate-300 hover:text-white border border-studio-border font-semibold text-xs transition-colors flex items-center justify-center gap-1.5"
          >
            <Sparkles className="w-3.5 h-3.5 text-orange-400" /> Browse All 18 Tools
          </Link>
        </div>
      </div>
    </div>
  );
}

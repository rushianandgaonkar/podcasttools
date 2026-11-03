"use client";

import React, { useState, useRef } from "react";
import { Image as ImageIcon, Upload, CheckCircle2, AlertTriangle, XCircle, RotateCcw, Smartphone, ShieldCheck } from "lucide-react";

export function CoverArtPreview() {
  const [imageSrc, setImageSrc] = useState<string | null>(null);
  const [imageMeta, setImageMeta] = useState<{
    width: number;
    height: number;
    sizeKb: number;
    name: string;
    type: string;
  } | null>(null);

  const [previewTab, setPreviewTab] = useState<"apple" | "spotify" | "mobile" | "tiny">("apple");
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const sizeKb = Math.round(file.size / 1024);
    const reader = new FileReader();

    reader.onload = (event) => {
      const src = event.target?.result as string;
      const img = new Image();
      img.onload = () => {
        setImageSrc(src);
        setImageMeta({
          width: img.naturalWidth,
          height: img.naturalHeight,
          sizeKb,
          name: file.name,
          type: file.type,
        });
      };
      img.src = src;
    };

    reader.readAsDataURL(file);
  };

  const handleLoadSample = () => {
    // Generate a default high-res canvas SVG sample
    const sampleCanvas = document.createElement("canvas");
    sampleCanvas.width = 3000;
    sampleCanvas.height = 3000;
    const ctx = sampleCanvas.getContext("2d");
    if (ctx) {
      // Background gradient
      const grad = ctx.createLinearGradient(0, 0, 3000, 3000);
      grad.addColorStop(0, "#0F0F26");
      grad.addColorStop(0.5, "#1E1B4B");
      grad.addColorStop(1, "#31103F");
      ctx.fillStyle = grad;
      ctx.fillRect(0, 0, 3000, 3000);

      // Accent circle
      ctx.beginPath();
      ctx.arc(1500, 1500, 800, 0, 2 * Math.PI);
      ctx.fillStyle = "rgba(249, 115, 22, 0.15)";
      ctx.fill();

      // Text Title
      ctx.fillStyle = "#FFFFFF";
      ctx.font = "bold 260px sans-serif";
      ctx.textAlign = "center";
      ctx.fillText("DEEP SIGNAL", 1500, 1400);

      ctx.fillStyle = "#F97316";
      ctx.font = "bold 130px sans-serif";
      ctx.fillText("WITH SARAH CHEN", 1500, 1650);

      ctx.fillStyle = "#94A3B8";
      ctx.font = "90px sans-serif";
      ctx.fillText("TECH • FUTURE • AUDIO", 1500, 1850);

      setImageSrc(sampleCanvas.toDataURL("image/jpeg", 0.9));
      setImageMeta({
        width: 3000,
        height: 3000,
        sizeKb: 420,
        name: "deep-signal-cover.jpg",
        type: "image/jpeg",
      });
    }
  };

  const isSquare = imageMeta ? imageMeta.width === imageMeta.height : false;
  const isOptimalSize = imageMeta
    ? imageMeta.width >= 1400 && imageMeta.width <= 3000 && isSquare
    : false;
  const isRecommended3000 = imageMeta
    ? imageMeta.width === 3000 && imageMeta.height === 3000
    : false;
  const isFileSizeOk = imageMeta ? imageMeta.sizeKb <= 1024 : false;

  return (
    <div className="w-full space-y-6">
      {/* Upload & Spec Status Section */}
      <div className="p-6 rounded-2xl bg-studio-card border border-studio-border">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
          {/* Upload Area */}
          <div>
            <div
              onClick={() => fileInputRef.current?.click()}
              className="border-2 border-dashed border-studio-border hover:border-orange-500/60 rounded-2xl p-6 text-center cursor-pointer bg-studio-darkest/60 hover:bg-studio-darkest transition-all group"
            >
              <input
                ref={fileInputRef}
                type="file"
                accept="image/png, image/jpeg, image/jpg"
                onChange={handleFileUpload}
                className="hidden"
              />
              <div className="w-12 h-12 rounded-xl bg-orange-500/10 text-orange-400 border border-orange-500/20 flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform">
                <Upload className="w-6 h-6" />
              </div>
              <p className="text-sm font-bold text-neutral-900 dark:text-white mb-1">
                Drop your podcast cover art here or click to browse
              </p>
              <p className="text-xs text-neutral-600 dark:text-neutral-400">
                Supports PNG & JPG (Square 1400x1400px to 3000x3000px)
              </p>
              <div className="mt-3 inline-flex items-center gap-1.5 text-[11px] text-emerald-600 dark:text-emerald-400 bg-emerald-500/10 px-2.5 py-0.5 rounded-full border border-emerald-500/20">
                <ShieldCheck className="w-3.5 h-3.5" /> 100% Client-Side. Never uploaded to cloud.
              </div>
            </div>

            <div className="mt-3 text-center">
              <button
                onClick={handleLoadSample}
                className="text-xs text-orange-600 dark:text-orange-400 hover:text-orange-500 font-medium inline-flex items-center gap-1 cursor-pointer"
              >
                <RotateCcw className="w-3.5 h-3.5" /> Or test with our sample 3000x3000px artwork
              </button>
            </div>
          </div>

          {/* Validation Checklist Card */}
          <div className="p-5 rounded-xl bg-studio-darkest border border-studio-border space-y-3">
            <h3 className="text-xs font-bold uppercase tracking-wider text-neutral-700 dark:text-neutral-300">
              Apple & Spotify 2026 Spec Audit
            </h3>

            {imageMeta ? (
              <div className="space-y-2 text-xs">
                {/* Check 1: 1:1 Aspect ratio */}
                <div className="flex items-center justify-between">
                  <span className="text-neutral-700 dark:text-neutral-300">1:1 Square Ratio:</span>
                  <span className={`font-semibold flex items-center gap-1 ${isSquare ? "text-emerald-600 dark:text-emerald-400" : "text-red-500"}`}>
                    {isSquare ? <CheckCircle2 className="w-4 h-4" /> : <XCircle className="w-4 h-4" />}
                    {imageMeta.width} x {imageMeta.height} px
                  </span>
                </div>

                {/* Check 2: Resolution bounds */}
                <div className="flex items-center justify-between">
                  <span className="text-neutral-700 dark:text-neutral-300">Apple/Spotify Min (1400px):</span>
                  <span className={`font-semibold flex items-center gap-1 ${isOptimalSize ? "text-emerald-600 dark:text-emerald-400" : "text-red-500"}`}>
                    {isOptimalSize ? <CheckCircle2 className="w-4 h-4" /> : <XCircle className="w-4 h-4" />}
                    {isOptimalSize ? "Passed" : "Under 1400px (Rejected)"}
                  </span>
                </div>

                {/* Check 3: Optimal 3000x3000px */}
                <div className="flex items-center justify-between">
                  <span className="text-neutral-700 dark:text-neutral-300">Recommended 3000x3000px:</span>
                  <span className={`font-semibold flex items-center gap-1 ${isRecommended3000 ? "text-emerald-600 dark:text-emerald-400" : "text-amber-500"}`}>
                    {isRecommended3000 ? <CheckCircle2 className="w-4 h-4" /> : <AlertTriangle className="w-4 h-4" />}
                    {isRecommended3000 ? "Perfect" : "Valid, but 3000px optimal"}
                  </span>
                </div>

                {/* Check 4: File size */}
                <div className="flex items-center justify-between">
                  <span className="text-neutral-700 dark:text-neutral-300">File Weight:</span>
                  <span className={`font-semibold flex items-center gap-1 ${isFileSizeOk ? "text-emerald-600 dark:text-emerald-400" : "text-amber-500"}`}>
                    {isFileSizeOk ? <CheckCircle2 className="w-4 h-4" /> : <AlertTriangle className="w-4 h-4" />}
                    {imageMeta.sizeKb} KB {imageMeta.sizeKb > 1024 && "(Large)"}
                  </span>
                </div>
              </div>
            ) : (
              <p className="text-xs text-neutral-500 py-4 text-center">
                Upload your image to run the instant specification audit.
              </p>
            )}
          </div>
        </div>
      </div>

      {/* Mockup Previews Tab Switcher */}
      {imageSrc && (
        <div className="space-y-4">
          <div className="flex items-center gap-2 overflow-x-auto pb-1">
            <span className="text-xs font-semibold text-neutral-600 dark:text-neutral-400 mr-2">Preview Mode:</span>
            {[
              { id: "apple", label: "Apple Podcasts Feed" },
              { id: "spotify", label: "Spotify Now Playing" },
              { id: "tiny", label: "50x50px Search Thumbnail (Legibility Test)" },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setPreviewTab(tab.id as any)}
                className={`text-xs px-3.5 py-1.5 rounded-xl font-medium transition-all cursor-pointer ${
                  previewTab === tab.id
                    ? "bg-orange-500 text-white shadow-md shadow-orange-500/20"
                    : "bg-studio-card text-neutral-600 dark:text-neutral-300 hover:text-neutral-900 dark:hover:text-white border border-studio-border"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* Preview Container */}
          <div className="p-8 rounded-2xl bg-studio-card border border-studio-border flex items-center justify-center min-h-[400px]">
            {previewTab === "apple" && (
              <div className="dark-surface w-full max-w-md bg-[#1C1C1E] rounded-3xl p-6 text-white shadow-2xl border border-white/10">
                <div className="text-xs font-bold uppercase tracking-wider text-[#A1A1A6] mb-4">
                  Apple Podcasts • Show Page
                </div>
                <div className="flex gap-4 items-center">
                  <img
                    src={imageSrc}
                    alt="Apple Podcasts show page artwork preview"
                    className="w-32 h-32 rounded-2xl shadow-lg flex-shrink-0 object-cover"
                  />
                  <div className="space-y-1">
                    <span className="text-[10px] uppercase font-bold tracking-wider text-[#FF6482]">
                      New Show
                    </span>
                    <h4 className="text-base font-bold text-white line-clamp-2">
                      Deep Signal with Sarah Chen
                    </h4>
                    <p className="text-xs text-[#A1A1A6]">Weekly Episodes • Tech</p>
                  </div>
                </div>
              </div>
            )}

            {previewTab === "spotify" && (
              <div className="dark-surface w-full max-w-sm bg-gradient-to-b from-[#2B1B3D] to-[#121212] rounded-3xl p-6 text-white shadow-2xl border border-white/10">
                <div className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-6 text-center">
                  Spotify • Now Playing
                </div>
                <img
                  src={imageSrc}
                  alt="Spotify player now playing cover art preview"
                  className="w-full aspect-square rounded-xl shadow-2xl object-cover mb-6"
                />
                <div className="space-y-1 mb-4">
                  <h4 className="text-base font-bold text-white">Ep. 1: Future of Audio</h4>
                  <p className="text-xs text-slate-400">Deep Signal with Sarah Chen</p>
                </div>
                {/* Audio scrubber mock */}
                <div className="w-full bg-white/20 h-1 rounded-full overflow-hidden mb-2">
                  <div className="bg-white w-1/3 h-full" />
                </div>
                <div className="flex justify-between text-[10px] text-slate-400 font-mono">
                  <span>14:20</span>
                  <span>45:00</span>
                </div>
              </div>
            )}

            {previewTab === "tiny" && (
              <div className="space-y-4 text-center max-w-md">
                <h4 className="text-xs font-bold uppercase tracking-wider text-neutral-700 dark:text-neutral-300">
                  Thumbnail Legibility Stress Test
                </h4>
                <p className="text-xs text-neutral-600 dark:text-neutral-400">
                  This simulates how your cover appears on a smartphone screen in Apple Podcasts search results. If your text is unreadable here, consider increasing your title font size and contrast.
                </p>
                <div className="flex items-center justify-center gap-6 pt-4">
                  <div className="text-center space-y-1">
                    <img
                      src={imageSrc}
                      alt="Apple Podcasts search results 50x50px miniature thumbnail preview"
                      style={{ width: "50px", height: "50px" }}
                      className="rounded-lg shadow object-cover mx-auto"
                    />
                    <span className="text-[10px] text-neutral-500 font-mono">50 x 50 px</span>
                  </div>
                  <div className="text-center space-y-1">
                    <img
                      src={imageSrc}
                      alt="Spotify mobile player 80x80px album thumbnail preview"
                      style={{ width: "80px", height: "80px" }}
                      className="rounded-xl shadow object-cover mx-auto"
                    />
                    <span className="text-[10px] text-neutral-500 font-mono">80 x 80 px</span>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}


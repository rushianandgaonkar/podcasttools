#!/usr/bin/env node
/**
 * Generates the 1200x630 Open Graph / Twitter share cards.
 *
 *   public/og-image.png              → site-wide default card
 *   public/og/tools/<slug>.png       → one card per tool
 *   public/og/guides/<slug>.png      → one card per guide
 *   public/apple-touch-icon.png      → 180x180 iOS home-screen icon
 *
 * Requirements (one-time, dev only — NOT a runtime dependency):
 *   npm i -D playwright && npx playwright install chromium
 *   Node 22.18+ (reads src/config/site.ts directly via type stripping)
 *
 * Usage:
 *   node scripts/generate-og-images.mjs
 *   OG_FONT_DIR=/path/to/geist/woff2 node scripts/generate-og-images.mjs   (offline fonts)
 *
 * Re-run after adding a tool or guide, or when titles change.
 */
import { chromium } from "playwright";
import { mkdir, readFile } from "node:fs/promises";
import { existsSync, readFileSync } from "node:fs";
import path from "node:path";
import { pathToFileURL, fileURLToPath } from "node:url";
import sharp from "sharp";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const { toolRegistry, toolCategories, guidesRegistry } = await import(
  pathToFileURL(path.join(root, "src/config/site.ts")).href
);

const W = 1200;
const H = 630;
const fontDir = process.env.OG_FONT_DIR;
const fontData = (file) =>
  `data:font/woff2;base64,${readFileSync(path.join(fontDir, file)).toString("base64")}`;

const fontCss = fontDir
  ? `
@font-face{font-family:Geist;font-weight:400;src:url("${fontData("Geist-Regular.woff2")}")}
@font-face{font-family:Geist;font-weight:500;src:url("${fontData("Geist-Medium.woff2")}")}
@font-face{font-family:Geist;font-weight:600;src:url("${fontData("Geist-SemiBold.woff2")}")}
@font-face{font-family:Geist;font-weight:700;src:url("${fontData("Geist-Bold.woff2")}")}
@font-face{font-family:"Geist Mono";font-weight:500;src:url("${fontData("GeistMono-Medium.woff2")}")}`
  : `@import url("https://fonts.googleapis.com/css2?family=Geist:wght@400;500;600;700&family=Geist+Mono:wght@500&display=block");`;

const accentFor = (categoryId) =>
  toolCategories.find((c) => c.id === categoryId)?.accent ?? "#a9583e";

const imgCache = new Map();
const imgUrl = (webPath) => {
  // tool.image → /images/tools/<name>-lg.webp, inlined as a data URI
  // (pages rendered with setContent() cannot load file:// URLs)
  const file = path.join(root, "public", webPath.replace(/^\//, ""));
  if (!existsSync(file)) return "";
  if (!imgCache.has(file)) {
    imgCache.set(file, `data:image/webp;base64,${readFileSync(file).toString("base64")}`);
  }
  return imgCache.get(file);
};

const iconSvg = await readFile(path.join(root, "public/icon.svg"), "utf8");
const iconDataUri = `data:image/svg+xml;base64,${Buffer.from(iconSvg).toString("base64")}`;

const esc = (s) =>
  String(s).replace(/[&<>"]/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" })[c]);

function page({ eyebrow, accent, title, subtitle, images, footer }) {
  const art =
    images.length === 1
      ? `<div class="art single"><img src="${images[0]}"/></div>`
      : `<div class="art stack">${images
          .slice(0, 3)
          .map((src, i) => `<img class="s${i}" src="${src}"/>`)
          .join("")}</div>`;
  return `<!doctype html><html><head><meta charset="utf-8"><style>
${fontCss}
*{box-sizing:border-box;margin:0;padding:0}
html,body{width:${W}px;height:${H}px;overflow:hidden}
body{font-family:Geist,system-ui,sans-serif;background:#141413;color:#faf9f5;position:relative}
.bloom{position:absolute;inset:0;background:
 radial-gradient(520px 380px at 88% 20%, ${accent}55, transparent 70%),
 radial-gradient(600px 420px at 10% 110%, #cc785c40, transparent 70%),
 radial-gradient(460px 320px at 60% 120%, #8f463040, transparent 70%)}
.grid{position:absolute;inset:0;background-image:linear-gradient(#ffffff0a 1px,transparent 1px),linear-gradient(90deg,#ffffff0a 1px,transparent 1px);background-size:40px 40px;mask-image:linear-gradient(90deg,#000 0%,transparent 70%)}
.wrap{position:absolute;inset:0;padding:64px 0 56px 72px;display:flex;flex-direction:column;width:700px}
.brand{display:flex;align-items:center;gap:14px;font-weight:600;font-size:26px;letter-spacing:-.02em}
.brand img{width:44px;height:44px;border-radius:10px}
.brand span{font-family:"Geist Mono",monospace;font-size:13px;font-weight:500;border:1px solid #333;border-radius:6px;padding:3px 8px;color:#a1a1a1;letter-spacing:.06em}
.eyebrow{margin-top:44px;display:inline-flex;align-items:center;gap:10px;font-family:"Geist Mono",monospace;font-size:17px;font-weight:500;text-transform:uppercase;letter-spacing:.08em;color:#d4d4d4}
.eyebrow i{width:10px;height:10px;border-radius:99px;background:${accent};box-shadow:0 0 16px ${accent}}
h1{margin-top:18px;font-size:${title.length > 40 ? 50 : 58}px;line-height:1.06;font-weight:700;letter-spacing:-.035em;color:#fff}
p{margin-top:20px;font-size:23px;line-height:1.4;color:#a1a1a1;max-width:600px;display:-webkit-box;-webkit-line-clamp:2;-webkit-box-orient:vertical;overflow:hidden}
.foot{margin-top:auto;display:flex;align-items:center;gap:22px;font-family:"Geist Mono",monospace;font-size:16px;font-weight:500;color:#8f8f8f}
.foot b{color:#ededed;font-weight:500}
.foot .dot{width:4px;height:4px;border-radius:9px;background:#525252}
.art{position:absolute;right:0;top:0;bottom:0;width:470px}
.art.single img{position:absolute;right:56px;top:50%;width:360px;height:450px;object-fit:cover;object-position:50% 30%;border-radius:28px;transform:translateY(-50%) rotate(3deg);border:1px solid #ffffff22;box-shadow:0 30px 80px #000c, 0 0 0 8px #ffffff08}
.art.stack img{position:absolute;width:250px;height:312px;object-fit:cover;object-position:50% 30%;border-radius:22px;border:1px solid #ffffff22;box-shadow:0 24px 60px #000c}
.art.stack .s0{right:200px;top:70px;transform:rotate(-8deg)}
.art.stack .s1{right:60px;top:150px;transform:rotate(6deg);z-index:2}
.art.stack .s2{right:150px;top:300px;transform:rotate(-2deg);z-index:3}
.bar{position:absolute;left:0;right:0;bottom:0;height:6px;background:linear-gradient(90deg,#e9c2b0,#cc785c,#8f4630)}
</style></head><body>
<div class="bloom"></div><div class="grid"></div>
${art}
<div class="wrap">
  <div class="brand"><img src="${iconDataUri}"/>Pod Studio <span>TOOLS</span></div>
  <div class="eyebrow"><i></i>${esc(eyebrow)}</div>
  <h1>${esc(title)}</h1>
  <p>${esc(subtitle)}</p>
  <div class="foot">${footer.map((f) => `<b>${esc(f)}</b>`).join('<span class="dot"></span>')}</div>
</div>
<div class="bar"></div>
</body></html>`;
}

const FOOT = ["Free", "100% in-browser", "No signup", "podstudiotools.com"];
const jobs = [];

jobs.push({
  out: "public/og-image.png",
  html: page({
    eyebrow: `${toolRegistry.length} free podcast tools`,
    accent: "#cc785c",
    title: "Create, polish & monetize your podcast.",
    subtitle: "Episode titles, show notes, CPM revenue, cover art checks, RSS validation and more.",
    images: [toolRegistry[0], toolRegistry[5], toolRegistry[6]].map((t) => imgUrl(t.image)),
    footer: FOOT,
  }),
});

for (const tool of toolRegistry) {
  const cat = toolCategories.find((c) => c.id === tool.category);
  jobs.push({
    out: `public/og/tools/${tool.slug}.png`,
    html: page({
      eyebrow: cat?.label ?? tool.categoryLabel,
      accent: accentFor(tool.category),
      title: tool.title,
      subtitle: tool.description,
      images: [imgUrl(tool.image)],
      footer: FOOT,
    }),
  });
}

// Guides → pick the illustration of the most related tool
const guideArt = {
  "podcast-sponsorship-cpm-guide-2026": ["monetization-calculator", "#16a34a"],
  "apple-spotify-cover-art-specs-guide": ["cover-art-preview", "#0284c7"],
  "how-to-write-clickable-episode-titles": ["episode-title-generator", "#7c3aed"],
};
for (const guide of guidesRegistry) {
  const [toolSlug, accent] = guideArt[guide.slug] ?? ["episode-title-generator", "#cc785c"];
  const tool = toolRegistry.find((t) => t.slug === toolSlug);
  jobs.push({
    out: `public/og/guides/${guide.slug}.png`,
    html: page({
      eyebrow: `Guide · ${guide.category} · ${guide.readTime}`,
      accent,
      title: guide.title,
      subtitle: guide.description,
      images: [imgUrl(tool.image)],
      footer: ["Pod Studio Guides", "podstudiotools.com"],
    }),
  });
}

await mkdir(path.join(root, "public/og/tools"), { recursive: true });
await mkdir(path.join(root, "public/og/guides"), { recursive: true });

const browser = await chromium.launch();
const ctx = await browser.newContext({ viewport: { width: W, height: H }, deviceScaleFactor: 1 });
const pg = await ctx.newPage();
for (const job of jobs) {
  await pg.setContent(job.html, { waitUntil: "load" });
  await pg.evaluate(() => document.fonts.ready);
  const buf = await pg.screenshot({ type: "png" });
  // palette-quantised PNG keeps cards ~100-200 KB while staying crisp for text
  await sharp(buf).png({ palette: true, quality: 90, effort: 10 }).toFile(path.join(root, job.out));
  console.log(`✓ ${job.out}`);
}

// 180x180 apple-touch-icon (iOS ignores SVG touch icons)
await pg.setViewportSize({ width: 180, height: 180 });
await pg.setContent(
  `<html><body style="margin:0;background:#141413"><img src="${iconDataUri}" style="width:180px;height:180px;display:block"/></body></html>`,
  { waitUntil: "load" }
);
await sharp(await pg.screenshot({ type: "png" })).png().toFile(path.join(root, "public/apple-touch-icon.png"));
console.log("✓ public/apple-touch-icon.png");

await browser.close();

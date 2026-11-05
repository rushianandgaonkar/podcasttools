#!/usr/bin/env node
/**
 * Converts the master tool illustrations (PNG) into lightweight responsive WebP files.
 *
 *   Source : assets/tool-illustrations/*.png   (masters — NOT deployed)
 *   Output : public/images/tools/<name>-sm.webp (480px wide)
 *            public/images/tools/<name>-lg.webp (960px wide, never upscaled)
 *            src/config/toolImages.generated.json (real pixel sizes for srcset/width/height)
 *
 * Usage: node scripts/optimize-tool-images.mjs
 * Re-run whenever you add or replace an illustration in assets/tool-illustrations/.
 */
import sharp from "sharp";
import { readdir, mkdir, writeFile, stat } from "node:fs/promises";
import path from "node:path";

const root = path.resolve(path.dirname(new URL(import.meta.url).pathname.replace(/^\/([A-Za-z]:)/, "$1")), "..");
const srcDir = path.join(root, "assets", "tool-illustrations");
const outDir = path.join(root, "public", "images", "tools");
const manifestPath = path.join(root, "src", "config", "toolImages.generated.json");

const VARIANTS = [
  { suffix: "sm", width: 480, quality: 74 },
  { suffix: "lg", width: 960, quality: 78 },
];

await mkdir(outDir, { recursive: true });
const files = (await readdir(srcDir)).filter((f) => /\.(png|jpe?g)$/i.test(f)).sort();
const manifest = {};
let before = 0;
let after = 0;

for (const file of files) {
  const name = file.replace(/\.(png|jpe?g)$/i, "");
  const input = path.join(srcDir, file);
  before += (await stat(input)).size;
  manifest[name] = {};
  for (const v of VARIANTS) {
    const out = path.join(outDir, `${name}-${v.suffix}.webp`);
    const info = await sharp(input)
      .resize({ width: v.width, withoutEnlargement: true })
      .webp({ quality: v.quality, effort: 6, smartSubsample: true })
      .toFile(out);
    after += info.size;
    manifest[name][v.suffix] = { src: `/images/tools/${name}-${v.suffix}.webp`, width: info.width, height: info.height };
  }
  console.log(`✓ ${name}`);
}

await writeFile(manifestPath, JSON.stringify(manifest, null, 2) + "\n");
console.log(`\n${files.length} illustrations: ${(before / 1048576).toFixed(1)} MB PNG -> ${(after / 1048576).toFixed(2)} MB WebP (both sizes)`);

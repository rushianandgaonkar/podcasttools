import fs from "fs";
import path from "path";

const samplePages = [
  { name: "EN Title Generator", path: "dist/tools/episode-title-generator/index.html", expectedFirstQ: "How do I come up with a catchy podcast episode title?" },
  { name: "EN Show Notes", path: "dist/tools/show-notes-generator/index.html", expectedFirstQ: "How do I write podcast show notes?" },
  { name: "EN Name Generator", path: "dist/tools/podcast-name-generator/index.html", expectedFirstQ: "How can I find a unique name for my podcast?" },
  { name: "ES Title Generator", path: "dist/es/tools/episode-title-generator/index.html", expectedFirstQ: "¿Cómo creo un título atractivo para un episodio de podcast?" },
  { name: "JA Monetization", path: "dist/ja/tools/monetization-calculator/index.html", expectedFirstQ: "ポッドキャストが1エピソードあたり10,000回ダウンロードされると、どのくらい稼げますか？" },
  { name: "FR Category Finder", path: "dist/fr/tools/category-finder/index.html", expectedFirstQ: "Comment choisir la meilleure catégorie pour son podcast ?" },
  { name: "DE Cover Art", path: "dist/de/tools/cover-art-preview/index.html", expectedFirstQ: "Welche Maße und Vorgaben gelten für ein Podcast-Cover?" },
  { name: "PT Transcript Formatter", path: "dist/pt/tools/transcript-formatter/index.html", expectedFirstQ: "Como limpar e formatar a transcrição de um podcast?" },
  { name: "KO Trailer Script", path: "dist/ko/tools/trailer-script-builder/index.html", expectedFirstQ: "팟캐스트 예고편(트레일러)에는 어떤 내용이 들어가야 하나요?" },
  { name: "IT Collab Finder", path: "dist/it/tools/collab-finder/index.html", expectedFirstQ: "Come si scrive un'email per proporsi come ospite in un podcast?" },
];

let allPassed = true;

for (const p of samplePages) {
  if (!fs.existsSync(p.path)) {
    console.error(`FAIL: File not found: ${p.path}`);
    allPassed = false;
    continue;
  }
  const html = fs.readFileSync(p.path, "utf8");
  
  // Extract JSON-LD scripts
  const scripts = [...html.matchAll(/<script type="application\/ld\+json">(.*?)<\/script>/gs)];
  let faqSchema = null;
  for (const s of scripts) {
    try {
      const parsed = JSON.parse(s[1]);
      if (parsed["@type"] === "FAQPage") {
        faqSchema = parsed;
        break;
      }
    } catch (e) {}
  }

  if (!faqSchema) {
    console.error(`FAIL: ${p.name} missing FAQPage schema`);
    allPassed = false;
    continue;
  }

  if (!faqSchema.mainEntity || faqSchema.mainEntity.length !== 5) {
    console.error(`FAIL: ${p.name} schema entity count is ${faqSchema.mainEntity?.length}, expected 5`);
    allPassed = false;
    continue;
  }

  const firstQ = faqSchema.mainEntity[0].name;
  if (firstQ !== p.expectedFirstQ) {
    console.error(`FAIL: ${p.name} first question mismatch. Got: "${firstQ}", expected: "${p.expectedFirstQ}"`);
    allPassed = false;
    continue;
  }

  // Also check that the visible accordion has 5 details elements in the FAQ section
  const detailsCount = (html.match(/<details class="group rounded-xl border/g) || []).length;
  if (detailsCount !== 5) {
    console.error(`FAIL: ${p.name} visible details count is ${detailsCount}, expected 5`);
    allPassed = false;
    continue;
  }

  console.log(`PASS: ${p.name} -> 5 FAQs verified in Schema and HTML accordion.`);
}

// Check comprehensive inventory: 18 tools * 8 locales = 144 tool pages
const locales = ["en", "es", "ja", "fr", "de", "pt", "ko", "it"];
const slugs = [
  "episode-title-generator",
  "show-notes-generator",
  "podcast-name-generator",
  "episode-outline-builder",
  "guest-question-generator",
  "monetization-calculator",
  "cover-art-preview",
  "rss-feed-validator",
  "episode-timestamp-generator",
  "intro-script-generator",
  "audience-growth-estimator",
  "description-generator",
  "category-finder",
  "hook-generator",
  "transcript-formatter",
  "trailer-script-builder",
  "review-response-generator",
  "collab-finder",
];

let totalChecked = 0;
for (const locale of locales) {
  for (const slug of slugs) {
    const pagePath = locale === "en" ? `dist/tools/${slug}/index.html` : `dist/${locale}/tools/${slug}/index.html`;
    if (!fs.existsSync(pagePath)) {
      console.error(`FAIL: Missing built page: ${pagePath}`);
      allPassed = false;
    } else {
      const html = fs.readFileSync(pagePath, "utf8");
      const detailsCount = (html.match(/<details class="group rounded-xl border/g) || []).length;
      if (detailsCount !== 5) {
        console.error(`FAIL: ${pagePath} details count ${detailsCount} != 5`);
        allPassed = false;
      }
      totalChecked++;
    }
  }
}

console.log(`\nTotal tool pages audited: ${totalChecked}/144. All passed: ${allPassed}`);
if (!allPassed) process.exit(1);


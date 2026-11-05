# SEO & Content Patch — Notes for the Implementing Agent

Date: 2026-11-05 · Scope: on-page SEO, unique content, full page-level localization (8 languages)

## How to apply

```bash
git checkout -b seo/content-and-i18n
git apply --whitespace=nowarn podstudio-seo-content.patch   # or: git am / git apply --3way
npm install
npm run build          # expect 227 pages, no errors
npx astro check --minimumSeverity error   # only the 8 pre-existing errors (silk-shader.tsx, worker/index.ts)
npm run deploy         # when satisfied
```

No new dependencies. No binary files changed.

## What changed

### Architecture (no visual redesign)
- English and `[lang]` route files were near-duplicates that had drifted apart. They are now thin
  wrappers around shared views in `src/components/views/`:
  `HomePageView`, `ToolsIndexView`, `ToolPageView`, `GuidesIndexView`, `GuidePageView`, `AboutPageView`.
- Bug fixed: localized tool pages used React `className` on plain HTML in `.astro`, so the
  header icon/category badge rendered unstyled on all 126 non-English tool pages.

### New content files (all 8 locales, type-checked so no locale can miss a key)
- `src/i18n/pageCopy.ts` — every page-level string that was hard-coded in English
  (meta titles/descriptions, eyebrows, breadcrumbs, trust cards, About page, footer, grid controls).
- `src/i18n/toolContent/*` — unique landing copy per tool: SEO `<title>`, meta description,
  2-paragraph overview, 4 tool-specific steps, 3 tips. Replaces the generic 3-step block that was
  identical on all 144 tool pages. Steps were checked against each component's real inputs.
- `src/i18n/guideExtras/*` — each guide expanded from ~190 to ~750 words: 4 new sections + 3 FAQs,
  short SEO titles, realistic read time (5 min). Removed unbacked claims
  ("12 psychological formulas", "70% of play decisions").

### On-page SEO
- Homepage H1 is now keyword-led ("Free podcast tools to create, polish & monetize your show") in all
  languages; hero copy no longer uses "deterministic / zero-server / bulletproof".
- Titles ≤ ~60 chars and meta descriptions ~150 chars for home, /tools, /guides, /about, every tool and guide.
- Structured data: `Organization` + `WebSite` now carry `@id` and `alternateName`
  ("Pod Studio Tools", "podstudiotools.com") to separate the brand from similarly named sites;
  `ItemList` on /tools and /guides; `Article` + `BreadcrumbList` + `FAQPage` on guides;
  `AboutPage`; `WebApplication` gains `isAccessibleForFree` + `provider`; localized breadcrumbs.
- Footer now links all 18 tools (was 12), grouped by category.
- "Open {tool}" descriptive link text on related-tool cards.
- Sitemap excludes `/400`, `/404`, `/500`.
- `/tools?q=…` now pre-fills the tool filter (the WebSite `SearchAction` previously pointed at a URL that ignored `q`).
- Tool badges ("Essential", "Popular", …) localized.
- "Podcast Name Generator & Domain Checker" renamed to "Podcast Name Generator" (it never checked
  domains); the matching FAQ answers no longer apologise for the old title.

## Verify after deploying
1. Google Search Console + Bing Webmaster Tools: verify domain, submit `/sitemap-index.xml`.
2. Rich Results Test on `/`, `/tools/show-notes-generator`, `/guides/podcast-sponsorship-cpm-guide-2026`.
3. URL Inspection → request indexing for `/`, `/tools`, and the 5 most important tool pages.

## Known gaps (not in this patch — recommended Phase 2)
1. **Tool UI translations.** 16 of 18 interactive tools still render English labels and English
   generated output on non-English pages (only `EpisodeTitleGenerator`, `MonetizationCalculator`
   and `GuestQuestionGenerator` are localized). ~230 labels + ~100 output templates.
   Follow the existing pattern in `src/i18n/toolUiTranslations.ts` (one dictionary per tool, `lang` prop
   already passed through `ToolDispatcher`).
2. **Mobile overflow.** Pages scroll horizontally by ~9–15 px at 390 px width (pre-existing, not caused
   by this patch). Find the overflowing element in the hero/tool workspace and add `overflow-x-hidden` or fix its width.
3. `HeroQuickTool` sample topics and title previews on the homepage are English on all locales.
4. More guides: aim for 1–2 new guides per week, each linking to a tool (e.g. show notes template,
   RSS feed errors explained, how to get podcast sponsors, best podcast categories).

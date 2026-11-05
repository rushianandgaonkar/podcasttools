# Pod Studio — Podcast Creator Toolkit (`podstudiotools.com`)

The all-in-one free toolkit for podcast creators to brainstorm episode titles, format professional show notes, generate outlines, estimate CPM sponsorship earnings, and validate Apple & Spotify cover art specifications—100% client-side in their browser.

Built with **Astro 5 (SSG)**, **React 19 Islands**, and **Tailwind CSS**. Guided by official Astro documentation via the `astro-docs` MCP server.

## 🚀 Key Architectural Highlights

- **Astro 5 Static Output (SSG):** All 29 static pages (home, tools directory, 18 tool pages, guides directory, 3 guide deep dives, about, contact, privacy, terms, 404) are pre-rendered into static HTML at build time for instant loading and 100/100 Core Web Vitals crawlability.
- **Interactive React 19 Islands:** Client hydration is scoped precisely using `client:load` on interactive islands (`<HomeToolGrid />`, `<HeroQuickTool />`, `<ToolDispatcher />`, `<Navbar />`), delivering zero unnecessary JavaScript to static text sections.
- **100% Client-Side Privacy:** No audio files, episode outlines, or scripts are sent to remote servers. All calculations and formatting run exclusively in browser memory.
- **Single Source of Truth:** Central tool and guide registry in `src/config/site.ts` powering dynamic routes (`getStaticPaths`), metadata, sitemaps, category filtering, and internal linking.
- **Clean SEO Infrastructure:** Pre-rendered `robots.txt` and `@astrojs/sitemap` generating `sitemap-index.xml` and `sitemap-0.xml` in `dist/`.
- **Structured Data:** Full JSON-LD `Organization`, `WebSite`, `BreadcrumbList`, and `WebApplication` schemas embedded in HTML.

## 🛠️ Included Creator Tools (18 Tools)

### Ideation & Branding
1. **Podcast Episode Title Generator** (`/tools/episode-title-generator`) — 30+ formulas tested for high listener CTR.
2. **Podcast Name Generator** (`/tools/podcast-name-generator`) — Thematic naming engine across 5 brand styles.
3. **Guest Interview Question Generator** (`/tools/guest-question-generator`) — Icebreakers, tactical deep dives, and contrarian takes.
4. **Podcast Hook & Cold Open Generator** (`/tools/hook-generator`) — Retention hooks to stop listener drop-off.

### Content & Scripting
5. **Podcast Show Notes Generator** (`/tools/show-notes-generator`) — Markdown, HTML, and plain text formatted show notes.
6. **Episode Outline Builder** (`/tools/episode-outline-builder`) — Segment run-of-show planner with time budgeting.
7. **Podcast Intro Script Generator** (`/tools/intro-script-generator`) — Hook and intro scripts for solo, interview, and narrative shows.
8. **Show & Episode Description Generator** (`/tools/description-generator`) — Searchable channel and episode descriptions.
9. **Podcast Transcript Formatter** (`/tools/transcript-formatter`) — Clean raw Whisper/Otter text, strip fillers, and label speakers.
10. **Podcast Trailer Script Builder** (`/tools/trailer-script-builder`) — 5-part audio trailer framework.

### Audio & Technical
11. **Podcast Cover Art Preview & Checker** (`/tools/cover-art-preview`) — 3000x3000px validation & Apple/Spotify mockups.
12. **Podcast RSS Feed Validator** (`/tools/rss-feed-validator`) — Client-side XML linter for iTunes tags & audio enclosures.
13. **Podcast Timestamp Generator** (`/tools/episode-timestamp-generator`) — YouTube and Spotify clickable chapter markers.
14. **Apple & Spotify Category Finder** (`/tools/category-finder`) — Searchable 2026 taxonomy with competition ratings.

### Growth & Monetization
15. **Sponsorship & Monetization Calculator** (`/tools/monetization-calculator`) — Pre-roll, mid-roll, and post-roll CPM calculations.
16. **Audience & Download Growth Estimator** (`/tools/audience-growth-estimator`) — 12-month compounding projections & Libsyn benchmarks.
17. **Podcast Review Response Generator** (`/tools/review-response-generator`) — On-air shoutout scripts and social replies.
18. **Guest Pitch & Collab Outreach Builder** (`/tools/collab-finder`) — High-converting host outreach emails and feed drop swaps.

## 💻 Development & Build

```bash
# Install dependencies
npm install

# Start local Astro development server
npm run dev

# Run Astro typecheck
npx astro check

# Build production static bundle (outputs to dist/)
npm run build

# Preview production build locally
npm run preview
```

## 🎨 Visual Assets

| What | Source (edit this) | Generated output | Regenerate |
|---|---|---|---|
| Tool illustrations | `assets/tool-illustrations/*.png` (masters, not deployed) | `public/images/tools/*-sm.webp`, `*-lg.webp`, `src/config/toolImages.generated.json` | `node scripts/optimize-tool-images.mjs` |
| Share cards (OG/Twitter) | `src/config/site.ts` (titles, categories) | `public/og-image.png`, `public/og/tools/*.png`, `public/og/guides/*.png`, `public/apple-touch-icon.png` | `node scripts/generate-og-images.mjs`* |

\* One-time setup for the OG script: `npm i -D playwright && npx playwright install chromium` (Node 22.18+).

Brand, category and chart colours are documented in `DESIGN.md` → *Pod Studio Brand Layer*.

## 📋 Quality & Compliance Status
- **CG-01 to CG-14:** All 14 Critical Integrity Gates PASS (documented in `docs/seo/critical-release-gates.md`).
- **61 SEO Tasks:** Fully mapped and completed (documented in `docs/seo/implementation-status.md`).

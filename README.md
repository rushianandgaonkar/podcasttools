# Pod Studio — Podcast Creator Toolkit (`podstudiotools.com`)

The all-in-one free toolkit for podcast creators to brainstorm episode titles, format professional show notes, generate outlines, estimate CPM sponsorship earnings, and validate Apple & Spotify cover art specifications—100% client-side in their browser.

## 🚀 Key Architectural Highlights

- **100% Client-Side Privacy:** No audio files, episode outlines, or scripts are sent to remote servers. All calculations and formatting run in browser memory.
- **Pre-rendered Static HTML (SSG):** All 18 tool pages, category hubs, and guides are pre-rendered at build time with Next.js 15 for sub-second page loads and search engine crawlability.
- **Single Source of Truth:** Central tool registry in `config/site.ts` powering metadata generation, dynamic sitemaps, category filtering, and related links.
- **Clean SEO Infrastructure:** Dynamic `app/sitemap.ts` and `app/robots.ts` with explicit AI bot permissions (GPTBot, ClaudeBot, PerplexityBot).
- **Structured Data:** Full JSON-LD `WebApplication`, `BreadcrumbList`, `Organization`, and `WebSite` schemas.

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

# Start local development server
npm run dev

# Build production static bundle
npm run build

# Start production server
npm start
```

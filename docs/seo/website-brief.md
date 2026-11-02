# Website Brief — Pod Studio (`podstudiotools.com`)

- **Name:** Pod Studio
- **One-line purpose:** The all-in-one free toolkit for podcast creators to brainstorm titles, format show notes, generate outlines, estimate monetization, and validate RSS feeds 100% in their browser.
- **Audience:** Indie podcasters, narrative audio producers, interview hosts, corporate podcast teams, and aspiring creators launching their first show.
- **Existing or new:** New greenfield project.
- **Unique value:** 
  1. **100% Client-Side & Private:** No audio uploads to cloud servers, no account required, instant execution.
  2. **Comprehensive Studio Suite:** Everything from episode ideation to technical RSS validation in one unified, modern dark audio studio interface.
  3. **Zero Paywalls:** No artificial token limits or premium tiers for basic creator utilities.
- **Primary tasks and tool flows:**
  - Episode Title Generator (formula-backed headline generator for high click-through rates)
  - Show Notes Generator (structured markdown & HTML show notes with timestamps, guest bios, and resource links)
  - Podcast Name Generator (thematic naming engine by niche, tone, and format)
  - Guest Question Generator (interview question builder tailored to guest industry and episode topic)
  - Sponsorship & Monetization Calculator (CPM and download-tier based revenue projections)
  - Cover Art Preview & Validator (inspect 3000x3000px artwork in Spotify, Apple, and mobile mockups)
  - RSS Feed Validator (client-side podcast XML feed linter and compliance checker)
- **First three prioritized URLs:**
  1. `/` (Homepage & Tool Hub)
  2. `/tools/episode-title-generator` (Primary high-volume search query)
  3. `/tools/show-notes-generator` (Core content creator workflow)
- **Target language:** Multilingual (8 Languages: English `en`, Español `es`, 日本語 `ja`, Français `fr`, Deutsch `de`, Português `pt`, 한국어 `ko`, Italiano `it`) with full reciprocal `hreflang` annotations and localized routing.
- **Chosen stack:** Astro 5 (Static SSG, `output: "static"`), React 19 Islands (`@astrojs/react`), Tailwind CSS v4, Lucide React, TypeScript.
  - *Reasoning:* Static SSG pre-renders all 225 localized routes into pure, indexable static HTML with zero hydration lag for search engine crawlers and sub-second Core Web Vitals (LCP < 1.2s, INP < 50ms, CLS = 0); 100% client-side React islands ensure complete user privacy with zero cloud data transmission.
- **Design system:** Minimalist high-contrast aesthetic modeled after Vercel's Geist design language, supporting seamless light and dark themes with full WCAG AAA contrast compliance.
- **Primary domain:** `https://podstudiotools.com` (canonical, HTTPS, non-www).
- **Deployment strategy:** Cloudflare Pages (static HTML output from `dist/` with global CDN edge distribution).
- **Analytics and search property:** Privacy-safe GA4 plan / Cloudflare Web Analytics baseline (zero cookies, zero PII).
- **Policy/data handling:** Explicit disclosure that all audio assets, transcripts, and inputs are processed exclusively inside volatile browser memory.


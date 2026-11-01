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
- **Target language:** English (`en-US`).
- **Chosen stack:** Next.js 15 (App Router, Static Pre-rendering), TypeScript, Tailwind CSS, Lucide React.
  - *Reasoning:* Static pre-rendering ensures optimal crawlability by search engines and sub-second load times; 100% client-side tool calculations keep operational costs zero and provide complete privacy.
- **Primary domain:** `https://podstudiotools.com` (canonical, HTTPS, non-www).
- **Deployment strategy:** Cloudflare Pages / Vercel with static HTML pre-rendering.
- **Analytics and search property:** Privacy-safe GA4 plan / Cloudflare Web Analytics (no cookies, zero PII).
- **Policy/data handling:** Explicit disclosure that all data processing runs in local browser memory.


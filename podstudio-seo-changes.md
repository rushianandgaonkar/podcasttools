# Pod Studio (podstudiotools.com): SEO changes

Source: on-page check of all 18 tool pages plus Ahrefs keyword data (US), 2026-11-08.

## Rules for every change

- Do **not** change any URL slug. If one must change (e.g. a merge), add a 301 redirect from the old URL.
- Keep each `<title>` under about 60 characters and each meta description under about 155.
- Each page targets one main keyword: put it in the title, the H1, the first sentence, and at least one H2.
- Don't remove the existing "How to use" sections or FAQs; they're good.
- After deploying, resubmit the sitemap in Google Search Console and request indexing for the changed pages.

---

## Phase 1: On-page fixes (ship now)

### 1. Stop the two hook pages competing with each other

Today the Intro Script page's H1 is "Podcast Hook & Intro Script Generator" and the Hook page's H1 is "Podcast Hook & Cold Open Generator". Keyword data: "podcast intro script" is KD Easy with many variants (examples, template, generator); "podcast cold open" and "podcast hook generator" have almost no searches.

**/tools/intro-script-generator**

- [x] Title and H1: **"Podcast Intro Script Generator"** (title can stay "Podcast Intro Script Generator + Intro Examples | Pod Studio").
- [x] Remove "Hook" from the H1.
- [x] Rewrite the meta description; it currently starts "Write hook-driven hooks". Suggested: "Write a podcast intro script in minutes. See intro examples and a free template for solo, co-host and interview shows. Free, no sign-up."
- [x] Make sure "podcast intro script examples" and "podcast intro script template" each appear in an H2.

**/tools/hook-generator** (choose one option)

- [x] **Option A (default):** reposition as a social clip hook generator (TikTok, Reels, Shorts), matching the homepage card. Update title, H1, meta description and copy so the page and the homepage card say the same thing.
- [ ] **Option B:** merge it into the Intro Script page and 301-redirect /tools/hook-generator to /tools/intro-script-generator. Remove it from the homepage, tools list and footer.

### 2. Income calculator naming

"podcast income calculator", "podcast cpm calculator" and "podcast revenue calculator" are all KD Easy, under 100 searches.

**/tools/monetization-calculator**

- [x] Title: "Podcast Income & CPM Calculator: Ad Revenue | Pod Studio"
- [x] H1: "Podcast Income & CPM Calculator"
- [x] H2 "What the Monetization Calculator does" → "What the Podcast Income & CPM Calculator does"
- [x] Homepage tool card and footer link: use the same name.

### 3. Fix inconsistent H2s

- [x] **/tools/collab-finder:** H2 "What the Guest Pitch & Collab Outreach does" → "What the Guest Pitch Builder does".
- [x] **/tools/description-generator:** H2 "What the Show Description Generator does" → "What the Show & Episode Description Generator does".

### 4. Meta descriptions

- [x] Trim to about 150 characters: /tools/episode-title-generator (161), /tools/rss-feed-validator (156), /tools/description-generator (156).
- [x] **/tools/episode-timestamp-generator:** replace the keyword-stuffed meta ("podcast timestamp format and YouTube chapters generator timecodes…") with: "Create clickable podcast chapters and YouTube timestamps in seconds. Free, no sign-up."

### 5. Heading clutter

- [x] **/tools/podcast-name-generator:** the 24 sample name cards are each an H3. Change them to non-heading elements (e.g. `<p>` or `<span>` with the same styling).
- [x] **/tools/category-finder:** category names appear twice as H3s (~30 total). Keep H3s only in the "Apple Podcasts categories list" section; make the explorer's category names non-heading elements.

### 6. Thin pages

- [x] **/tools/cover-art-preview:** about 250 words before the FAQ. Add an H2 "Podcast cover art size requirements" covering Apple and Spotify specs (3000x3000 px, JPG/PNG, RGB, text safe area) and link to /guides/apple-spotify-cover-art-specs-guide.
- [x] **/tools/hook-generator:** about 420 words. If you keep it (Option A), add hook examples.

### 7. Quick keyword additions to existing pages

- [x] **/tools/podcast-name-generator** (KD Easy, 10,000+, the site's strongest keyword): mention "AI" and "random" modes in the copy ("podcast name generator ai" and "random podcast name generator" are KD Easy, 100+ each). Add niche sections: sports, funny, true crime, business.
- [x] **/tools/guest-question-generator** ("podcast interview questions", KD Easy, 100+): add business and funny question sets.
- [x] **/tools/episode-outline-builder** ("podcast script template", KD Easy, 100+): offer the template as a Google Docs link and a PDF download (both KD Easy variants).

---

## Phase 2: New guides (in this order)

| # | New guide | Main keyword | KD | Volume/mo |
| --- | --- | --- | --- | --- |
| 1 | How to start a podcast on Spotify | how to start a podcast on spotify | Medium | 10,000+ |
| 2 | How to start a podcast for free | how to start a podcast for free | Medium | 1,000+ |
| 3 | Best podcast equipment for beginners | podcast equipment for beginners | Easy | 100+ |
| 4 | How to start a podcast on YouTube | how to start a podcast on youtube | Easy | 100+ |
| 5 | How to start a podcast with no audience | how to start a podcast with no audience | Easy | 100+ |
| 6 | How to start a podcast and make money | how to start a podcast and make money | Easy | 100+ |

Notes:

- Link every new guide to /guides/how-to-start-a-podcast and to the matching tools (name generator, script template, cover art checker, income calculator).
- Add a link from /guides/how-to-start-a-podcast to each new guide.
- The equipment guide has buyer intent; it's the best place for affiliate links.
- Skip "best podcast hosting" for now (KD Hard).

## Leave as is

Show notes generator, RSS validator, chapters/timestamps, trailer script, description generator, categories, transcript formatter and pitch builder: under 100 searches each. Do only the Phase 1 fixes above.

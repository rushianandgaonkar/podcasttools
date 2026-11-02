# Analytics & Measurement Plan (Stage 09)
**Project:** Pod Studio (`podstudiotools.com`)  
**Specification Reference:** `WEBSITE_GENERATION_AGENT_PART2.md` (seo-search-console-analytics)  
**Status Date:** November 1, 2026  
**Auditor:** Antigravity SEO & Web Engineering Agent  

---

## 1. Privacy-First Event Taxonomy

Pod Studio prioritizes creator privacy. In alignment with our zero-cloud execution model, the analytics measurement framework strictly captures anonymous interaction milestones. **No file names, episode topics, audio transcripts, guest names, or user text entries are ever collected.**

| Event Name | Trigger | Parameters | Purpose |
|---|---|---|---|
| `tool_view` | User opens a tool workspace URL | `tool_slug`, `locale`, `category` | Measures relative tool demand |
| `tool_started` | User inputs topic, uploads cover image, or pastes RSS link | `tool_slug`, `locale` | Measures tool initiation rate |
| `tool_completed` | Results successfully generated or validated | `tool_slug`, `locale`, `format` | Primary utility completion metric |
| `tool_failed` | Validation error, invalid RSS XML, or unparsable image | `tool_slug`, `error_type` | Diagnostic bug tracking |
| `copy_result` | User clicks "Copy" or "Copy All" | `tool_slug`, `item_type` | Core workflow adoption metric |
| `export_txt` | User downloads TXT or Markdown output | `tool_slug` | High-value retention signal |
| `theme_toggle` | User toggles light/dark mode | `theme_selected` | UI preference metric |
| `language_switched` | User changes locale in navbar or footer | `from_lang`, `to_lang` | Localization utility metric |

---

## 2. Privacy & Data Integrity Controls

- **Zero Content Logging:** Calculations, text inputs, formulas, and file blobs run in volatile browser memory. GA4 / telemetry scripts do not receive payload contents.
- **IP Anonymization:** Standard GA4 client-side IP anonymization enabled by default.
- **Cookie-Free Local State:** User preference (dark/light theme) is stored solely in client `localStorage` under `theme`. No persistent user tracking cookies are placed without explicit consent.
- **Safe Staging Isolation:** Staging environments (`*.pages.dev`, `localhost`) have tracking disabled to prevent data pollution.

---

## 3. Search Engine Console & Verification State

| Service | Target Asset | Verification Method | Status | Owner Next Action |
|---|---|---|---|---|
| **Google Search Console** | `podstudiotools.com` | Domain Property (DNS TXT) | `BLOCKED` | Add TXT record in Cloudflare DNS upon domain launch |
| **GSC Sitemap Submission** | `https://podstudiotools.com/sitemap-index.xml` | GSC Dashboard | `BLOCKED` | Submit index once Domain Property verified |
| **Bing Webmaster Tools** | `podstudiotools.com` | Import from verified GSC | `BLOCKED` | One-click import after GSC authorization |
| **Google Analytics 4** | Web Stream (`G-XXXXXXXXXX`) | Configured in site layout | `READY` | Wire measurement ID upon production cutover |

---

## 4. Weekly & Monthly Cadence (Operational Runbook)

### Weekly Inspection (SEO-057)
1. **Index Coverage Review:** Check Search Console for any 404, 5xx, or soft-404 errors across the 225 multilingual routes.
2. **CTR & Impression Outliers:** Identify high-impression queries with CTR < 3% to refine meta title/description hooks.
3. **Tool Failure Rate:** Review `tool_failed` error events to catch breaking third-party RSS changes or artwork format edge cases.

### Monthly Review (SEO-058)
1. **Industry Benchmark Refresh:** Compare sponsorship calculator CPM baselines against current IAB and industry advertising reports.
2. **Apple & Spotify Spec Audit:** Check for any directory requirement updates (e.g. artwork dimensions, feed namespace tags).
3. **Keyword Map Synchronization:** Compare 28-day organic queries against `docs/seo/keyword-map.md` to spot emerging search intent.


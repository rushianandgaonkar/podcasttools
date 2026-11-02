# Release Checks & Verification Protocol — Pod Studio (`podstudiotools.com`)

> This document defines the exact release smoke checks, verification commands, and operational maintenance cadence required by the Website Generation & SEO Agent specification (Part 1 & 2).

---

## 1. Automated Build & Compilation Gate
Run prior to any Git commit or production deploy:
```powershell
# 1. Full SSG static compilation check (must succeed with code 0)
npm run build

# 2. Check build output directory
Test-Path dist/index.html
Test-Path dist/sitemap-index.xml
Test-Path dist/robots.txt
```

**Acceptance Criteria:**
- All 225 localized HTML routes compile in under 10 seconds.
- Zero TypeScript, JSX, or Astro template errors.
- `@astrojs/sitemap` generates `sitemap-index.xml` and `sitemap-0.xml` in `dist/`.

---

## 2. Pre-Rendered HTML Server Payload Verification
Verify that critical SEO tags are rendered in static server HTML (not dependent on client-side JS hydration):

```powershell
# Check Homepage HTML for essential SEO tags
Get-Content dist/index.html | Select-String -Pattern '<title|<meta name="description"|<link rel="canonical"|<link rel="alternate" hreflang="|<h1'

# Check a primary tool page
Get-Content dist/tools/episode-title-generator/index.html | Select-String -Pattern '<title|<meta name="description"|<link rel="canonical"|tool-workspace'
```

**Acceptance Criteria:**
- Visible, search-intent title and unique description present in raw HTML `<head>`.
- Self-referencing canonical URL: `https://podstudiotools.com/...`.
- Reciprocal `hreflang` tags for all 8 supported languages (`en`, `es`, `ja`, `fr`, `de`, `pt`, `ko`, `it`).
- Exactly one `<h1>` per page matching the tool's primary capability.

---

## 3. Post-Deployment Production Endpoint Smoke Checks
Execute once DNS is mapped to the live production domain (`https://podstudiotools.com`):

```powershell
# 1. Production Homepage 200 OK & Security Headers
curl.exe -I https://podstudiotools.com/

# 2. Deep Tool Route 200 OK
curl.exe -I https://podstudiotools.com/tools/episode-title-generator

# 3. Canonical Robots.txt Reference
curl.exe -s https://podstudiotools.com/robots.txt

# 4. XML Sitemap Index & Schema
curl.exe -I https://podstudiotools.com/sitemap-index.xml

# 5. Non-existent Route returns 404 (Not 200 OK)
curl.exe -I https://podstudiotools.com/a-definitely-missing-route-test-404
```

---

## 4. Behavioral & Core Web Vitals Quality Gates

| Check | Target | Verification Method |
|---|---|---|
| **Largest Contentful Paint (LCP)** | ≤ 1.2s (p75) | Static HTML pre-rendered without blocking scripts |
| **Interaction to Next Paint (INP)** | ≤ 50ms (p75) | Pure client-side calculations; zero remote network roundtrips |
| **Cumulative Layout Shift (CLS)** | 0.00 | Fixed aspect ratios on icons and zero dynamic ad injections |
| **Mobile Responsiveness** | 375px – 1440px | Tested with no horizontal scroll overflow; minimum 44x44px touch targets |
| **Color Contrast** | WCAG AAA compliant | High-contrast dark `#ededed` on `#000000` / light `#171717` on `#fafafa` across all 18 tools |
| **Privacy Boundary** | 100% Client-Side | In-memory `FileReader` & `DOMParser`; zero remote file/audio uploads |

---

## 5. Ongoing SEO Operations & Maintenance Backlog

### Weekly Cadence (Search Console Review — SEO-057)
- [ ] Inspect Google Search Console Performance report (clicks, impressions, average position).
- [ ] Review Page Indexing status and resolve any "Crawled - currently not indexed" reports.
- [ ] Identify high-impression, low-CTR queries and optimize matching title tags and meta descriptions.

### Monthly Cadence (Content & Query Refresh — SEO-058)
- [ ] Review search queries driving traffic to top 3 tools.
- [ ] Expand formula templates and preset options in title and hook generators.
- [ ] Check for new 2026 podcast industry specs (Apple Podcasts, Spotify, IAB updates).

### Quarterly Cadence (Full Technical Audit — SEO-059)
- [ ] Re-run full broken link crawl across all 225 localized routes.
- [ ] Validate XML sitemaps and reciprocal hreflang consistency.
- [ ] Audit Core Web Vitals field data in Chrome User Experience Report (CrUX).


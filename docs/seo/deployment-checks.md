# Cloudflare Deployment & Domain Hygiene Checks (Stage 08)
**Project:** Pod Studio (`podstudiotools.com`)  
**Specification Reference:** `WEBSITE_GENERATION_AGENT_PART2.md` (seo-cloudflare-deployment)  
**Status Date:** November 1, 2026  
**Auditor:** Antigravity SEO & Web Engineering Agent  

---

## 1. Architecture Decision: Cloudflare Pages (Static SSG)

- **Target Platform:** Cloudflare Pages
- **Build Output:** Static HTML/CSS/JS export in `dist/` (`output: "static"` in `astro.config.mjs`).
- **Rationale:** 
  - All 225 pages across 8 languages pre-render to pure HTML at build time in ~8 seconds.
  - Zero dynamic server-side rendering or database queries required.
  - Global edge CDN distribution ensures TTFB < 50ms and LCP < 1.0s worldwide.
  - Seamless integration with GitHub repository (`rushianandgaonkar/podcasttools`).

---

## 2. Configuration & Asset Rules

### Build & Output Settings
- **Framework Preset:** Astro
- **Build Command:** `npm run build`
- **Build Output Directory:** `dist`
- **Node.js Version:** `20.x` or higher

### Security & Staging Headers (`public/_headers`)
Static headers deployed directly from `public/_headers` to ensure zero staging indexing:

```text
# Staging and preview host isolation (prevent accidental duplicate indexing)
https://*.pages.dev/*
  X-Robots-Tag: noindex, nofollow, noarchive

# Production Security & Caching Standards
/*
  X-Frame-Options: DENY
  X-Content-Type-Options: nosniff
  Referrer-Policy: strict-origin-when-cross-origin
  Strict-Transport-Security: max-age=31536000; includeSubDomains; preload
  Permissions-Policy: camera=(), microphone=(), geolocation=()

# Immutable Static Asset Caching
/_astro/*
  Cache-Control: public, max-age=31536000, immutable
```

---

## 3. PowerShell Verification Commands (Post-Deploy Checklist)

Execute these commands once custom domain DNS is pointed to Cloudflare:

```powershell
# 1. Verify Production HTTPS Canonical Response (Expected: HTTP/2 200)
curl.exe -I https://podstudiotools.com/

# 2. Verify Canonical Sub-Route Response
curl.exe -I https://podstudiotools.com/tools/episode-title-generator/

# 3. Verify Robots.txt (Expected: HTTP/2 200, contains Sitemap directive)
curl.exe -i https://podstudiotools.com/robots.txt

# 4. Verify Sitemap Index (Expected: HTTP/2 200, application/xml)
curl.exe -i https://podstudiotools.com/sitemap-index.xml

# 5. Verify Staging Noindex Header (Expected: X-Robots-Tag: noindex, nofollow)
curl.exe -I https://podcasttools.pages.dev/

# 6. Verify 404 Response Code (Expected: HTTP/2 404)
curl.exe -I https://podstudiotools.com/this-path-must-return-404
```

---

## 4. Rollback & Fail-Safe Plan

1. **Cloudflare Pages Instant Rollback:** Cloudflare Pages stores every immutable build deployment. If any defect is detected, rollback to the prior known-good deployment with one click in the Cloudflare dashboard without rebuilding.
2. **Git Stability:** The `main` branch on GitHub `https://github.com/rushianandgaonkar/podcasttools.git` tracks verified working release commits.


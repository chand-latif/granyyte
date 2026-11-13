---
name: seo-report
description: Monthly Granyyte SEO review against the seo/ baseline (Search Console, Semrush if units, Vercel). Use when Chand says "/seo-report", "monthly SEO check", or "how are rankings doing".
---

# /seo-report: monthly review (playbook Phase 8)

Read-only on every MCP. Output: `seo/reports/<YYYY-MM>.md`, then update `seo/calendar.md`.

1. **Search Console** (`sc-domain:granyyte.com`):
   - `search_analytics` by page and by query, last 28 days with `compare: true`.
   - `search_insights` recipes: `striking_distance` (maxPosition 30, minImpressions 2), `low_ctr`, `cannibalization`, `movers`.
   - `list_sitemaps`: confirm the sitemap was read recently with 0 errors.
2. **Compare with `seo/baseline-*.csv` and `seo/protected.md`.** Flag any protected page whose clicks or impressions dropped more than ~20%, right at the top of the report.
3. **New queries and striking-distance wins** go into the next calendar block or become additive FAQs on the ranking page (add only; protected fields never change without Chand's OK).
4. **Posts older than 60 days** with impressions but no clicks: propose a refresh (title idea, more depth, more faqs, set `updated:`).
5. **Semrush** (only if units exist, estimate first): organic positions for `keyword-map.csv` primaries. Work through `seo/semrush-todo.md` if it's still open.
6. **Vercel**: latest production deployment status for project `granyyte`, plus Web Analytics top pages/referrers if the MCP exposes them.
7. Write the report: wins, drops, actions for next month, and what Chand needs to do by hand (request indexing, GBP posts, reviews).

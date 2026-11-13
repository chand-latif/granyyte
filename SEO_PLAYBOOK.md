# Granyyte SEO Playbook (for Claude Code)

> Put this file in the repo root as `SEO_PLAYBOOK.md`. Start each session with:
> "Read CLAUDE.md, AGENTS.md and SEO_PLAYBOOK.md. We are on Phase N. Do only that phase, then stop and report."
>
> Source strategy: Jono Catliff's "Claude Code SEO" method (keyword research, blog posts at scale, service pages, on-page and technical SEO, a reusable `/blog` skill). It's adapted here to this repo, which is already a static, SEO-first Next.js 16 site. **This is an enhancement plan, not a rebuild.**

---

## 0. Ground rules (apply to every phase)

These override anything else in this playbook.

1. **Protect what already ranks.** On any page that gets Search Console clicks or impressions, do NOT change: the URL or slug, the H1, the `metaTitle`, or the primary keyword wording, and do NOT remove FAQ questions, sections or keywords. Only *add* (new FAQs, new sections, new secondary keywords, new internal links). If a change to a protected element looks clearly worth it, propose it with the data and wait for Chand's approval.
2. **Known protected keywords** (confirm and extend from Search Console in Phase 1): "flutterflow developer in pakistan", "certified flutterflow developer in pakistan" and close variants (page: `/flutterflow-developer-pakistan`), "import export website development in sialkot" (page: `/web-development-sialkot`), plus every other query found in Phase 1 with clicks or a position ≤ 20.
3. **No design changes.** Don't touch `globals.css` tokens, layout, animation, or the FX components. New UI pieces must reuse existing components and MDX styles. Desktop animation stays exactly as it is.
4. **CLAUDE.md wins on copy.** Every rendered string follows the Writing rules: no em or en dashes, no banned words, no stock AI phrasing, "we" voice, sentence-case headings. Run the CLAUDE.md check commands before finishing any phase that touches copy.
5. **No prices of ours, anywhere.** That includes FAQs, titles and JSON-LD. Third-party market figures are fine. Skip any keyword that only makes sense with our own price on the page ("app development cost in Pakistan rate per hour" and similar). Remember `/blog/mobile-app-development-cost` was retired for this reason and redirects to `/services/mobile-app-development`.
6. **No URL deletions or renames.** If a URL ever has to change, add a permanent redirect in `next.config.ts` in the same change.
7. **Data, not guesses.** Keyword choices come from Search Console and Semrush data saved in `seo/`. Never invent statistics, client names or results. Only use facts in `src/content/projects.ts`, `src/config/site.ts` and `seo/references/`.
8. **Verify, then stop.** `npm run build` must pass clean (it also runs the posts manifest guard). Commit locally with conventional messages, no `Co-Authored-By` trailer. **Never push.** Chand pushes, and Vercel deploys from `main`.
9. **Read-only tools.** The Search Console, Semrush and Vercel MCPs are connected. Use them to read data only: no settings changes, no deploys, no sitemap removals. Check the Semrush unit balance before any bulk pull and keep pulls small.

---

## 1. Connected tools and pre-flight check

All three are connected as MCP servers in Claude Code: **Google Search Console**, **Semrush**, and **Vercel**. Always use the MCP tools for data. Don't ask Chand for exports and don't scrape web pages for data the MCPs can return.

**What each one is for**

| MCP | Use it for | Don't |
|---|---|---|
| **Search Console** | Performance data (queries, pages, query+page, countries, devices, date ranges), URL inspection / index status, sitemap status | Treat it as able to "Request indexing" (only the GSC UI can do that; Chand clicks it) |
| **Semrush** | Keyword research (overview, related, questions, difficulty, intent, CPC), SERP top results, domain organic keywords, competitor keyword gap, granyyte.com's own Semrush visibility | Run large or historical pulls without checking units first |
| **Vercel** | Deployment status and build logs after Chand pushes, project and domain info, and Web Analytics / Speed Insights data if the MCP exposes it | Change project settings, env vars or domains, or trigger deploys (read-only use) |

**Pre-flight (run at the start of every session, and report the results in a few lines):**

1. Run `/mcp` or list the tools, and confirm all three servers respond.
2. **Search Console:** list properties and pick the granyyte.com one (`sc-domain:granyyte.com` if it's a Domain property, otherwise `https://www.granyyte.com/`). Note which form, and use it consistently. Confirm the sitemap `https://www.granyyte.com/sitemap.xml` is submitted and read without errors.
3. **Semrush:** check the API unit balance. Budget per session: keep it to roughly a few thousand units unless Chand approves more. Before any pull of over ~100 rows, state the estimated unit cost. Prefer the US, UK and UAE databases, then Pakistan. Cache every result in `seo/raw/semrush/` so the same data is never paid for twice.
4. **Vercel:** identify the granyyte project and the production domain (`www.granyyte.com`), and the latest production deployment status. Check whether analytics data is reachable through the MCP. If it isn't, say so once and carry on without it (Search Console is the primary SEO source).

**Caching rule:** save raw MCP responses (CSV or JSON) under `seo/raw/<tool>/<YYYY-MM-DD>-<what>.csv` before analysing them. Analysis files in `seo/` are built from those. `seo/raw/` may be gitignored. Commit the processed files.

**If an MCP call fails** after one retry: stop that step, tell Chand which server and what error, and carry on with the parts that don't need it. Never fabricate numbers to fill the gap.

---

## Phase 1: Research and baseline (read-only, no site edits)

Goal: know exactly what ranks, what's close to ranking, and what to write. Output goes to `seo/`. **No files under `src/` change in this phase.**

### 1a. Search Console baseline (Search Console MCP)
Pull the last 16 months and the last 3 months, by query, by page, and by query+page (also a country split for the top 50 queries, to see international vs Pakistan traffic). Run a URL inspection on every protected page and record its index status and canonical. Also pull granyyte.com's organic keywords from **Semrush** to catch rankings Search Console shows only as low-impression rows. Save:

- `seo/baseline-queries.csv`: query, clicks, impressions, CTR, position
- `seo/baseline-pages.csv`: page, clicks, impressions, CTR, position
- `seo/baseline-query-page.csv`: query, page, clicks, impressions, position

This baseline is the "before" snapshot. Every later change is measured against it.

### 1b. Protected pages list
Create `seo/protected.md`: every page with clicks, or with impressions at position ≤ 20. For each one list the URL, the source file and field (e.g. `seo-pages.ts → flutterflow-developer-pakistan`), the queries it ranks for, and its current H1, metaTitle and FAQ questions. These are frozen except for additions (rule 1).

### 1c. Opportunity analysis
From the baseline, produce `seo/opportunities.md` with four lists:

1. **Striking distance:** queries at position 5–20 with real impressions. These are the fastest wins. Note which page ranks and what's missing on it (the query isn't in an H2 or FAQ, the page is thin on that angle, no internal links point to it).
2. **Low CTR:** queries with high impressions and CTR below ~2% on page 1. Only *propose* title or description tweaks here, since these pages are protected. Chand approves each one.
3. **Gaps:** queries getting impressions where the ranking page is a poor match (e.g. an informational question ranking on a service page). These become new blog posts.
4. **Cannibalisation:** queries where two or more of our URLs split impressions. Recommend which URL should own the query and how to differentiate the other. Never delete a page to fix this.

### 1d. Keyword research (Semrush MCP)
Run, in this order, keeping unit use small (estimate units before each pull and cache every result):

- **Seed topics:** Flutter, FlutterFlow, app development (cost-free angles), MVP and startup apps, hiring offshore and Pakistani developers, custom software vs SaaS, CRM and internal tools, AI agents and AI apps, web development and SEO-ready websites, industry software (surveying, pharmacy and delivery, import/export, inventory, schools).
- **Markets:** US, UK and UAE databases first (international is the priority), then Pakistan for the local cluster.
- **Filters** (from the video): keyword difficulty ≤ 30 (allow up to ~40 for very strong fits), volume ≥ 50 (≥ 100 preferred; low-volume B2B terms can still convert, so keep high-intent ones), and intent classified.
- **Questions:** the Questions tab for each seed. These make good blog titles.
- **Competitors:** 3–5 agencies that rank for our seeds (find them in the Search Console and Semrush SERP data). Run a keyword gap and note the keywords they rank for that we don't.
- **Money keywords:** sort commercial-intent keywords by CPC. These are candidates for service and landing pages, not blog posts.

Drop: other companies' brand names, learner and job-seeker queries ("how to become a flutter developer", "flutterflow course"), and anything that needs our own price to answer.

Save:
- `seo/keywords-blog.csv`: keyword, volume, KD, intent, country, suggested hub, cluster (secondary keywords), and the existing page it should link to
- `seo/keywords-money.csv`: keyword, volume, KD, CPC, country, and whether an existing page already covers it

### 1e. Keyword map and content calendar
- `seo/keyword-map.csv`: **one row per URL** (existing and planned), with its single primary keyword and its secondary keywords. Every blog post's frontmatter `targetKeyword` must match its row. No keyword is primary on two URLs. The manifest script already enforces this for posts; this file extends it to all pages.
- `seo/calendar.md`: a 12-week plan at 7–8 posts a week (see Phase 6 for the ramp-up). About 70% international and 30% local (Pakistan and Sialkot). Each line: week, working title, target keyword, hub, money page it funnels to.

**Stop. Report a short summary to Chand: top 10 striking-distance wins, top 20 blog keywords, any proposed new money pages, any cannibalisation. Wait for approval before Phase 2.**

---

## Phase 2: Voice and reference library

The video's key point: AI first drafts are boring, and boring posts don't rank because readers leave. The CLAUDE.md writing rules already handle style. What's missing is **material**.

Create `seo/references/` and fill it with Chand (ask him for each file; don't invent):

- `voice.md`: patterns pulled from 5–10 of Chand's LinkedIn and Facebook posts (he'll paste them). Cover sentence length, openings, phrases he actually uses, how he makes a point, and his humour. Write it as rules a writer can follow.
- `stories.md`: real, publishable project stories. Start from `src/content/projects.ts` (Bilge AI with 15,000+ users, Zwipe, Poland Portal, Space Maintenance and the surveyor platform, Mainxpert, Mindful Mantra, Thafath, Sacred Diary) plus any others Chand adds. Include what went wrong as well as what went right. No confidential client details.
- `stats.md`: real numbers only. Also replace the placeholder `stats` in `src/config/site.ts` once Chand confirms them (a separate, explicit change).
- `opinions.md`: Chand's strong takes (when not to use FlutterFlow, no-code limits, cheap freelancers, AI hype, why fixed-price, etc.).
- `faq-bank.md`: questions real leads and clients have asked. These are gold for FAQs.

**Stop. Show Chand the files for corrections.**

---

## Phase 3: Strengthen existing ranking pages (additive only)

Work page by page through `seo/protected.md` and the striking-distance list, starting with the FlutterFlow and Sialkot pages.

For each page, in its source file (`seo-pages.ts`, `services.ts`, `topics.ts`, or the post's MDX):

1. **Add secondary keywords** from `keyword-map.csv` naturally: new FAQ entries (keywords verbatim in the question, which is what has ranked so far, per the `seo-pages.ts` header), a new `whyPoints` item, or an extra intro paragraph. Keep the existing ones untouched.
2. **Add depth where the page is thin** compared with the top 3 Google results for its main query (word count, subtopics covered, FAQs). Match or beat their coverage without copying.
3. **Add internal links:** make sure at least 3 relevant blog posts point to each money page (`relatedService` in frontmatter does this automatically through `getPostsForService`).
4. **Respect the Sialkot rule:** the 3 Sialkot `localBusiness` pages get extra FAQs and keywords (JSON-LD `knowsAbout` stays the place for "company"/"IT company" variants), but no big new visible prose blocks. That's an existing decision in CLAUDE.md.
5. **Bump dates honestly:** if a marketing page gets a *material* content edit, bump `CONTENT_UPDATED` in `src/app/sitemap.ts`. For posts, set `updated:` in frontmatter.

Before each commit, show a diff summary per page: what was added, and confirmation that nothing protected was removed or reworded.

**Stop after each batch of ~3 pages for Chand's review.**

---

## Phase 4: Blog engine upgrades (small, no visual change)

The blog system is already solid (manifest guard, hubs, related posts, per-post OG images, BlogPosting and Breadcrumb JSON-LD). Add only:

1. **FAQ support for posts.** Add an optional `faqs` frontmatter field (list of `{question, answer}`). In `src/app/blog/[slug]/page.tsx`, render it after the post body using the **existing** MDX h2/h3/p styles (no new design), and emit `FAQPage` JSON-LD from the same data so the schema always matches the visible text. Update `scripts/build-posts-manifest.mjs` and the `Post` type to accept it. Then convert the existing "A few things people ask us" section in `software-house-in-sialkot.mdx` to the new field, keeping the same questions and answers.
2. **Post frontmatter extras** (optional fields, validated by the manifest script): `secondaryKeywords` (for our own tracking, not rendered) and `faqs`.
3. **llms.txt.** Add a static `public/llms.txt` (or a route) with a plain summary of who Granyyte is, the services, and links to the main money pages and topic hubs. `robots.ts` already allows all crawlers, including AI ones. Keep it that way.
4. **Hubs.** Two existing hubs (`offshore-hiring`, `mvp-startups`) have no posts yet, so their pages aren't generated. The first posts in the calendar should fill them. Add new hubs in `topics.ts` only if Phase 1 data shows a real cluster (likely candidates: `ai-agents`, `web-development`, `pakistan-sialkot-business`). Every hub needs its own intro copy and a money page.
5. **Scale note.** At 7–8 posts a week the blog reaches ~100 posts in about 3 months. CLAUDE.md records a baseline of 123 posts building in ~35s. When the count passes ~250, implement the documented plan (compile post bodies at request time and prerender a subset with `generateStaticParams` + ISR). Don't do it early.

No hero images and no stock photos (Chand's decision). Per-post OG images already exist. Inline visuals are optional: real project screenshots from `public/projects/`, or simple tables and diagrams in MDX.

**Run `npm run build`, then stop for review.**

---

## Phase 5: The `/blog` skill (repeatable post production)

Create a project skill at `.claude/skills/blog/SKILL.md` that runs this whole workflow for one post:

0. **Check the tools.** Confirm the Semrush and Search Console MCPs respond, and note the Semrush unit balance. Budget roughly a few hundred units per post.
1. **Pick the keyword.** Take the next unused row from `seo/calendar.md` (or the next in `seo/keywords-blog.csv`). Check it against `seo/keyword-map.csv` and existing posts' `targetKeyword` so it never duplicates.
2. **Cluster.** Choose 5–12 secondary keywords from the CSV and from Semrush's related keywords and questions.
3. **Study the top results.** Use the Semrush MCP's SERP data for the keyword (in the target country's database) to get the top organic URLs, then fetch and analyse the top 3 organic articles (skip Reddit, Quora, forums and directories): word count, H2/H3 outline, subtopics, FAQs, tables. Set a target outline that matches or beats their average coverage. Never copy their wording.
4. **Write the MDX** in `src/content/posts/<slug>.mdx` with full frontmatter: `title`, `description` (140–160 chars), `date`, `tags`, `hub`, `targetKeyword`, `relatedService` (and `relatedServiceLabel` if needed), `faqs`.
   - Voice from `seo/references/voice.md`. Include at least one real story or project from `stories.md`, at least one opinion or honest tradeoff, and only real numbers.
   - Primary keyword in the title, in the first 100 words, and in one H2. Secondary keywords spread naturally.
   - 3–5 internal links (money page, hub, related posts, `/work/<project>`) and 1–3 external links to authoritative sources (official docs, Google, Apple, Flutter).
   - 4–8 FAQs in `faqs`, using real question phrasings from Semrush and `faq-bank.md`.
   - A clear next step to the money page or `/contact`.
5. **Run the CLAUDE.md checks:** dash grep, banned-word grep, no prices.
6. **Build:** `npm run build` (the manifest guard catches duplicate keywords and bad hubs).
7. **Report and stop.** Show Chand the title, keyword, word count, outline, internal links, and the first two paragraphs. **Don't commit until Chand approves.** Then commit locally as `feat(blog): <slug>`.

Also create:
- `.claude/skills/seo-page/SKILL.md`: the same flow for a new landing page entry in `seo-pages.ts`, only for keywords in `keywords-money.csv` that Chand approved and that no existing page owns. Each page needs genuinely distinct copy (the file header already warns about near-duplicates). Cap: 1–2 new landing pages a month.
- `.claude/skills/seo-report/SKILL.md`: a monthly run of Phase 7.

---

## Phase 6: Publishing cadence (7–8 posts a week)

- **Ramp up, don't spike** (the video's warning: a sudden flood of pages looks like spam):
  week 1 → 3 posts, week 2 → 5, week 3 → 6, week 4 onward → 7–8.
- **Workflow:** `/blog` drafts → Chand reviews → local commit → Chand pushes (about one post a day is ideal; pushing a batch is fine) → Vercel deploys → **post-deploy check** (below) → Chand requests indexing for the new URL in the Search Console UI (there's a daily quota; the MCP can't do this).
- **Post-deploy check** (Claude runs it when Chand says "pushed"):
  1. **Vercel MCP:** confirm the production deployment for that commit is `READY`. If it failed, read the build log and fix it locally.
  2. Fetch the live URL and confirm a 200 status, the right `<title>`, the canonical, and the JSON-LD present.
  3. **Search Console MCP:** confirm the sitemap was re-read. Then list the new URLs for Chand to request indexing on.
  4. About 3–7 days later: URL inspection on those URLs, and report any that still aren't indexed, with the reason GSC gives.
- **Quality bar beats quota.** If a post doesn't have a real story, opinion or specific detail, it waits. Google penalises scaled, low-value content, and real experience is our edge.
- **Mix:** ~70% international (hiring, Flutter/FlutterFlow, MVPs, custom software, AI agents, industry software), ~30% local (Pakistan and Sialkot business software, import/export websites, inventory and school systems). Local posts funnel to the Sialkot pages. Don't add Sialkot content to the nav, homepage or international pages.
- Optional later: scheduled publishing (a `publishAt` frontmatter date filtered at build time, plus a daily Vercel deploy hook). Only if Chand wants it.

---

## Phase 7: Technical and performance check (measure first)

1. Check **Vercel Speed Insights** through the Vercel MCP first (real-user Core Web Vitals per route), if it's available. Then run Lighthouse (or PageSpeed Insights) on mobile and desktop for: `/`, one service page, `/flutterflow-developer-pakistan`, `/web-development-sialkot`, `/blog`, and one post. Save results to `seo/lighthouse-<date>.md`.
2. Fix SEO, accessibility and best-practice issues freely if they don't change the look (missing labels, contrast fixes only if invisible to the design, image `sizes`, font loading, metadata gaps).
3. **Performance:** the preloader, particle canvas, cursor, Lenis and grain are intentional. Mobile is already de-juiced. Only propose changes that keep the desktop experience identical (e.g. lazy-loading FX after first paint, reducing JS on blog post routes, making sure the preloader doesn't delay LCP for crawlers). List each proposal with its expected score impact and wait for approval.
4. Confirm: one H1 per page, a canonical on every route, the sitemap includes all posts and hubs, no `noindex` anywhere unexpected, and `www` canonical consistency (see `site.ts`).

---

## Phase 8: Monthly review loop (`/seo-report`)

Once a month, pull fresh data from all three MCPs: Search Console (performance and index coverage of new URLs), Semrush (granyyte.com organic positions for the tracked keywords in `keyword-map.csv`, run as a small, unit-checked pull), and Vercel (top pages, referrers, and contact-page visits if analytics is available). Compare with `seo/baseline-*.csv`:

- Clicks, impressions and position for every protected page. **Flag any drop larger than ~20% straight away.**
- New queries appearing, and new striking-distance wins → add them to the next calendar block.
- Posts older than 60 days with impressions but no clicks → refresh them (better title proposal, more depth, more FAQs; set `updated:`).
- Hubs ready for more posts, and money keywords ready for a landing page.

Save as `seo/reports/<YYYY-MM>.md`, then update `seo/calendar.md`.

---

## Off-site (Chand, outside the repo; optional)

- **Google Business Profile** for the Sialkot office. It's separate from the site, so it doesn't make the site look Sialkot-focused.
- **Agency directories:** Clutch, GoodFirms, DesignRush, plus the FlutterFlow expert directory if listed.
- **Client links:** ask clients to credit "Built by Granyyte" with a link where appropriate.
- **Share every post** on LinkedIn and Facebook.
- **Avoid** paid link packages and link networks entirely.

---

## File map (what this playbook creates)

```
SEO_PLAYBOOK.md
seo/
  raw/                      # exports (optional, may be gitignored)
  baseline-queries.csv
  baseline-pages.csv
  baseline-query-page.csv
  protected.md
  opportunities.md
  keywords-blog.csv
  keywords-money.csv
  keyword-map.csv
  calendar.md
  references/ voice.md stories.md stats.md opinions.md faq-bank.md
  lighthouse-<date>.md
  reports/<YYYY-MM>.md
public/llms.txt
.claude/skills/blog/SKILL.md
.claude/skills/seo-page/SKILL.md
.claude/skills/seo-report/SKILL.md
```

@AGENTS.md

# Granyyte — Project Guide

Marketing + portfolio website for **Granyyte**, a software development agency (mobile apps, web
platforms, custom software) owned by **Chand Latif** (Founder & CEO). Live domain: **granyyte.com**.
Built as an SEO-first, static site so it ranks organically. Content originated from Chand's old
Lovable portfolio (chandlatif.lovable.app), rewritten in an agency "we" voice.

## ✍️ Writing rules (READ BEFORE TOUCHING ANY COPY)

All visitor-facing copy must read like Chand wrote it, not like a model generated it. This applies
to every rendered string: `src/content/*.ts`, `src/content/posts/*.mdx`, JSX text, page metadata,
form labels, error messages, and FAQ answers. Code comments are exempt (that is where the existing
em dashes live, and why the check below filters them out).

### Hard bans

1. **No em dashes (`—`) or en dashes (`–`) in copy. Ever.** This is the single biggest AI tell.
   Use a comma, a full stop, a colon, or brackets. Recast the sentence if none of those fit.
   Currently the rendered copy contains **zero** of either. Keep it that way.
2. **No banned vocabulary:** delve, leverage (as a verb), robust, seamless, elevate, unlock,
   empower, landscape (figurative), realm, testament, tapestry, game-changer, cutting-edge,
   best-in-class, bespoke, curated, meticulous, navigate (figurative), foster, harness, embark.
3. **No stock AI sentence shapes:**
   - "In today's fast-paced world…", "In the world of…", "When it comes to…"
   - "It's not just X, it's Y" (and the "isn't merely… it's" variant)
   - "Whether you're X or Y…" as an opener
   - "Not only… but also"
   - "Let's dive in", "Look no further", "Rest assured", "It's worth noting"
   - Moreover / Furthermore / Additionally as paragraph openers
   - A closing paragraph that restates the whole page ("In conclusion…")
4. **No relentless rule-of-three.** "Fast, reliable, and scalable" three times on one page is a
   tell. Use two items, or four, or an uneven list.
5. **No emoji in body copy** and no emoji bullets. (Lime accents and icons do that job.)

### What good copy looks like here

- **Contractions**, always: "you'll", "we're", "won't", "doesn't".
- **Uneven rhythm.** A long explanatory sentence, then a short one. Fragments are fine when they
  land. Uniform 20-word sentences are the giveaway.
- **Concrete over abstract.** "Live on the App Store for a client in Turkey" beats "proven track
  record". Pull real specifics from the 9 case studies in `src/content/projects.ts` and the
  FlutterFlow certification. Named details are the thing a content farm cannot fake.
- **Admit a tradeoff.** Copy that says when *not* to hire us, or when native beats Flutter, reads
  human and builds more trust than uniform enthusiasm.
- **Say the plain thing.** "We'll tell you honestly which one you need" beats "we pride ourselves
  on transparent consultation".
- **Sentence case for headings**, not Title Case On Every Word.

### Check before finishing

```bash
# Dashes inside rendered strings (must return nothing; the second grep drops code comments)
grep -rn '"[^"]*[—–][^"]*"' src/content/ src/components/ src/app/ --include=*.ts --include=*.tsx \
  | grep -vE ':[0-9]+: *(//|\*|/\*)'
grep -rn '[—–]' src/content/posts/*.mdx

# Banned vocabulary in copy
grep -rniE "delve|leverage|robust|seamless|elevate|unlock|empower|tapestry|cutting-edge|in today's|fast-paced|dive in|moreover|furthermore" src/content/
```

See also: **Pricing is confidential** below, and the agency "we" voice (never "I", except the
About-page founder bio and the blog byline).

## Commit convention

Plain, conventional-commit messages (`feat:`, `fix:`, `perf:`, `style:`). **Do NOT** add a
`Co-Authored-By` trailer. Commit locally only when there's a reason to — Chand pushes to GitHub
himself. The repo default branch is `main`.

## Stack

- **Next.js 16.2.10**, App Router, **Turbopack**, TypeScript, fully static (SSG). ⚠️ This Next.js
  has breaking changes vs. training data — see `@AGENTS.md`; check `node_modules/next/dist/docs/`
  before writing framework code.
- **Tailwind CSS v4** (config-less, tokens live in `globals.css` via `@theme`).
- **Motion** (`motion/react`, formerly framer-motion) for all animation.
- **Lenis** smooth scroll (`ReactLenis` root, in `fx/smooth-scroll.tsx`).
- **MDX** blog via `@next/mdx` + `remark-gfm`. Turbopack needs the string plugin form:
  `remarkPlugins: [["remark-gfm"]]` in `next.config.ts` (passing the imported fn breaks the build).
- **Resend** for the contact form email (server action).
- **lucide-react v1** for icons — note v1 **removed brand icons** (e.g. `Linkedin`); use the inline
  `LinkedInIcon` SVG already defined in `footer.tsx` / `testimonials.tsx`.

## Single source of truth

Edit these first — most content changes are one-file edits:

- `src/config/site.ts` — name, url, tagline, founder, **contact** (emails/phone/whatsapp/location),
  socials, `stats` (still placeholder — marked TODO for real numbers), `techStack`.
  - `contact.email` = **company** address `chandlatif@granyyte.com` (Cloudflare routing → forwards
    to the Gmail). This is the canonical business email: used by the contact-form recipient and the
    JSON-LD schema.
  - `contact.emailDirect` = `chandlatif.dev@gmail.com`, the founder's direct line. Both emails are
    shown on the footer + contact page so visitors choose company vs. personal.
- `src/content/projects.ts` — portfolio. `Project` type has `icon?`, `screenshot?`, `logo?`,
  `links?: {appStore?, playStore?, web?}`, plus optional `private?`, `features?`, `workflow?` for
  long-form case studies (private = "Private" pill instead of store links). Order: bilge-ai
  (multi-model AI, leads per positioning), surveyor-job-management-system (private internal ops
  platform for Space Maintenance — surveyor-ICP case study), space-maintenance (web),
  poland-portal, mainxpert, mindful-mantra, zwipe, thafath (Android only), sacred-diary. Real store
  links + real images in `public/projects/`. (Alligned REI was removed per request.)
- `src/content/services.ts` — 3 services (mobile / web / custom software), each drives an SEO
  subpage + FAQ schema.
- `src/content/seo-pages.ts` — 9 long-tail SEO landing pages rendered by `src/app/[slug]/page.tsx`
  at root URLs: 4× "… from Pakistan", `affordable-app-development`, `surveyor-management-software`,
  and 3× "… in Sialkot" (`mobile-app-development-sialkot`, `web-development-sialkot`,
  `software-development-sialkot` — local-market cluster covering app/web/import-export/inventory/
  school/attendance queries; keywords go verbatim into FAQ questions). Target location queries.
  ⚠️ **No prices anywhere on this site** — see "Pricing is confidential" below. Linked site-wide
  from the footer "Hire from Pakistan" + "In Sialkot"
  columns and from each service page's "Deep dives" box. `dynamicParams = false` — unknown root
  slugs 404. The 3 Sialkot pages carry `localBusiness: true`, which adds an **invisible**
  `ProfessionalService`+`geo` JSON-LD block (`src/app/[slug]/page.tsx`) plus a minimal cross-link
  line between the 3 pages — deliberately no new visible prose/blog content, since Chand doesn't
  want the site reading as Sialkot-focused to his international clients. "Company"/"IT company"
  query variants are captured via JSON-LD `knowsAbout` (`sialkotKnowsAbout` in `seo-pages.ts`),
  not FAQ copy.
- `src/content/testimonials.ts` — **LinkedIn video embeds** (iframe `urn:li:ugcPost` URLs), not text.
- `src/content/posts/*.mdx` — blog posts. **One file per post**: YAML frontmatter is the only
  metadata source (`title`, `description`, `date`, optional `updated`, `tags`, `hub`,
  `targetKeyword`, optional `relatedService` + `relatedServiceLabel`). There is no hand-maintained manifest — the
  `prebuild`/`predev` script `scripts/build-posts-manifest.mjs` generates
  `src/content/posts.generated.ts` (never edit it), deriving `readingTime` from word count. That
  script is also the guard rail: it **fails the build** on a missing field, an unknown `hub`, or
  two posts sharing a `targetKeyword` (self-cannibalisation). Run it alone with `npm run posts:build`.
  `software-house-in-sialkot.mdx` is a deliberate, visible Sialkot post (2026-09-15, Chand's call);
  it targets house/company/agency queries and funnels to `/software-development-sialkot`.
- `src/content/topics.ts` — the 5 blog topic hubs rendered at `/blog/topic/<slug>`. Each carries
  its own intro copy and points at a money page, so a hub isn't a thin list-of-links page. A post's
  `hub` must match a slug here, and a hub with no posts doesn't generate.

## Blog content layer

`src/lib/content/posts.ts` is the **only** module that knows where posts come from. Pages, the
sitemap, `feed.xml`, and every JSON-LD block import from it and must never read
`src/content/posts/` directly. Swapping the source later (a git-backed CMS, say) means rewriting
those functions and nothing else.

The one exception is the post *body*: ``import(`@/content/posts/${slug}.mdx`)`` in
`blog/[slug]/page.tsx`. That template literal makes the bundler compile **every** MDX file into the
route, which is what keeps the route fully static. Past a few hundred posts this is the first thing
to change — compile the body at request time, then prerender only a subset via
`generateStaticParams` + ISR (Next's documented "Subset of paths at build time"). Measured
baseline: **123 posts → 176 pages in ~35s**. Don't use `experimental.mdxRs`; the bundled docs mark
it not production-ready.

Internal linking is derived, not hand-listed: a post declares `relatedService`, and
`getPostsForService()` gives service/landing pages their "Further reading" links back. The 3
Sialkot `localBusiness` pages are deliberately excluded (no extra visible prose there).

## Pricing is confidential

**Never put a Granyyte rate, price, tier, or "from $X" anywhere on this site** (2026-09-11 decision).
Rates are discussed only once a lead makes contact. This covers visible copy, `metaTitle` /
`metaDescription`, FAQ **questions** as well as answers, spec rows, and JSON-LD. The `SeoPage`
type's old `pricing` tier table is gone; the optional `quoteNote` that replaced it describes the
**process** only ("fixed price against a written scope, proposal within 1-2 days").

What is still allowed, and is used deliberately: **third-party market figures** — what a US/UK
agency charges ($15-40k), US consulting engagements ($30k), SaaS subscription costs ($36k/yr),
the "$99 template" scam reference. Those aren't our rates and they carry the value argument.

Timelines (**2-4 weeks**, proposal in **1-2 days**) are unaffected and stay. "Affordable",
"fixed-price", and "a fraction of western rates" as positioning language are fine — just never a
number of ours. `priceRange: "$"` remains in the `ProfessionalService` JSON-LD (a coarse Google
band, not a rate); remove it if Chand wants even that gone.

## Routes (`src/app/`)

`/` home · `/about` · `/services` + `/services/[slug]` · `/work` + `/work/[slug]` · `/contact`.
Blog: `/blog` (page 1) · `/blog/page/[n]` (2..n, 12 per page, each **self-canonical** — never point
page 2 at `/blog`) · `/blog/topic/[slug]` (hubs) · `/blog/[slug]`. Plus conventions: `sitemap.ts`,
`robots.ts`, `opengraph-image.tsx`, `blog/[slug]/opengraph-image.tsx` (per-post share card),
`feed.xml/route.ts` (RSS), `not-found.tsx`, `template.tsx` (page-transition wipe overlay).
`actions/contact.ts` = Resend server action.

⚠️ `sitemap.ts` deliberately uses a `CONTENT_UPDATED` constant, **not `new Date()`** — a lastmod
that is always "today" is one search engines learn to ignore. Bump it on material content edits.
Blog URLs derive their own dates from frontmatter via `getLatestModified()`.

## Design system

Dark + electric lime, "engineering-grade" aesthetic. Tokens in `src/app/globals.css`:
`--color-base #0a0a0b`, `--color-lime #c8f31d`, fonts Space Grotesk (display) / Inter (body) /
JetBrains Mono (labels) / Instrument Serif. Utilities: `bg-dot-grid`, `bg-lime-glow`, `text-stroke`,
`bg-grain`, orb keyframes. Logo mark: `src/components/ui/logo.tsx` (`LogoMark`, inline SVG, viewBox
cropped to `"50 40 120 120"`; color follows `currentColor`, use `text-lime`). Sits before the
"Granyyte." wordmark in navbar + footer, sized larger than the word, responsive-smaller on mobile.

### Critical CSS gotchas (both cause "scroll gets stuck halfway")

1. `overflow-x: clip` must live on `html` **only, never `body`** — on body it makes body the sticky
   containing block and breaks the `stack-cards.tsx` scroll-stacking effect. The stacking-cards
   effect is intentional and wanted — keep it.
2. **Never set a fixed height (`h-full` / `height: 100%`) on `<html>` or `<body>`.** Lenis watches
   the html element with a ResizeObserver to recompute its scroll limit; a pinned html height means
   that observer never fires as content grows, so Lenis keeps a stale short limit and scroll jams
   halfway. For the sticky-footer layout use `min-h-dvh` on `body` (viewport-based) — not
   `h-full` on html + `min-h-full` on body.

## FX / performance (`src/components/fx/`)

Heavy: `particle-field.tsx` (canvas), `ambient-background.tsx` (animated blur orbs), film grain,
custom cursor, velocity marquee, preloader, scramble/flip/animated text, magnetic, spotlight-card.

**Mobile/iOS is deliberately de-juiced** (fixed real iOS heat/jank/glitch): on
`(pointer: coarse), (max-width: 767px)` the particle canvas and ambient orbs early-bail to
static/lite, and grain/orb animations are disabled in `globals.css`. **Desktop animation must stay
untouched** — Chand cares a lot about the desktop "awwwards-level" feel; only trim on mobile.

`animated-text.tsx` has a `trigger` prop: use `trigger="mount"` for page-header titles
(`whileInView` was unreliable and left the h1 invisible).

## Contact form / email

`actions/contact.ts`: `from = RESEND_FROM || "Granyyte Website <onboarding@resend.dev>"`,
`to = CONTACT_TO || site.contact.email`, `replyTo = submitter's email`. Degrades gracefully with a
"email us directly" message if `RESEND_API_KEY` is missing. `.env.local` (gitignored) holds the
Resend key. Env is read at **process start** — after editing `.env.local` you must restart the dev
server for it to take effect.

## SEO

Per-page `metadata` + canonicals; JSON-LD via `ui/json-ld.tsx` (Organization/WebSite in layout,
ProfessionalService on contact, Service+FAQPage on service pages, Article on posts, Person on about,
BreadcrumbList on nested). Keep it static, semantic, single h1/page.

## Verify before finishing

`npm run build` must pass clean (SSG, zero type errors). For visual/responsive checks use Chrome
automation; the dev window maxes at 1536px, so simulate mobile (390px) via an iframe rather than
resizing. Note the `template.tsx` black transition overlay means a fresh navigation often needs a
second screenshot to see settled content — expected, not a bug.

## Still open / TODO

- Real `stats` numbers in `site.ts` (currently placeholders).
- Favicon still the default `src/app/favicon.ico` — could use the G `LogoMark`.
- Video testimonials have no client-name captions yet.
- Rotate the Resend API key (was exposed in a screenshot).

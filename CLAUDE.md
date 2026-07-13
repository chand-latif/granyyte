@AGENTS.md

# Granyyte — Project Guide

Marketing + portfolio website for **Granyyte**, a software development agency (mobile apps, web
platforms, custom software) owned by **Chand Latif** (Founder & CEO). Live domain: **granyyte.com**.
Built as an SEO-first, static site so it ranks organically. Content originated from Chand's old
Lovable portfolio (chandlatif.lovable.app), rewritten in an agency "we" voice.

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
  `links?: {appStore?, playStore?, web?}`. Order: space-maintenance (featured, web), bilge-ai
  (multi-model AI, iOS+Android), poland-portal, mainxpert, mindful-mantra, zwipe, thafath (Android
  only), sacred-diary. Real store links + real images in `public/projects/`. (Alligned REI was
  removed per request.)
- `src/content/services.ts` — 3 services (mobile / web / custom software), each drives an SEO
  subpage + FAQ schema.
- `src/content/seo-pages.ts` — 5 long-tail SEO landing pages rendered by `src/app/[slug]/page.tsx`
  at root URLs (4× "… from Pakistan" + `affordable-app-development`). Target location + price
  queries ($100–$2000 tiers; **honest**: full apps from $500, small deliverables from $100 — never
  claim a full app under $500). Linked site-wide from the footer "Hire from Pakistan" column and
  from each service page's "Deep dives" box. `dynamicParams = false` — unknown root slugs 404.
- `src/content/testimonials.ts` — **LinkedIn video embeds** (iframe `urn:li:ugcPost` URLs), not text.
- `src/content/posts.ts` + `src/content/posts/*.mdx` — 3 starter blog posts.

## Routes (`src/app/`)

`/` home · `/about` · `/services` + `/services/[slug]` · `/work` + `/work/[slug]` · `/blog` +
`/blog/[slug]` · `/contact`. Plus conventions: `sitemap.ts`, `robots.ts`, `opengraph-image.tsx`,
`not-found.tsx`, `template.tsx` (page-transition wipe overlay). `actions/contact.ts` = Resend server
action.

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

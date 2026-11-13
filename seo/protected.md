# Protected pages (baseline 2026-11-13)

Source: Search Console, sc-domain:granyyte.com, 2025-07-18 to 2026-11-11 (`baseline-pages.csv`).
Note: GSC hides most click-earning queries for privacy (page totals show ~67 clicks, but only ~6 clicks appear at query level). So treat the **page** as protected even when no query is visible.

Rule: on these pages, never change the slug, H1 (`title` + `accent`), `metaTitle`, or existing FAQ questions. **Only add.** Any change to a protected field gets proposed with data first.

| URL | Source | Clicks / impr / pos | Known queries | H1 | metaTitle |
|---|---|---|---|---|---|
| `/` | `src/app/page.tsx` | 20 / 295 (www + non-www) | software house in sialkot (@16), software houses in sialkot, software companies in sialkot (@1), chand latif | (homepage hero) | site default |
| `/flutterflow-developer-pakistan` | `seo-pages.ts → flutterflow-developer-pakistan` | 9 / 63 / 19.9 | hidden (certified flutterflow developer in pakistan family) | Certified FlutterFlow developer / from Pakistan. | Certified FlutterFlow Developer in Pakistan \| FlutterFlow Development Services |
| `/mobile-app-development-sialkot` | `seo-pages.ts → mobile-app-development-sialkot` | 9 / 119 / 7.3 | app developer (@6), hidden | Mobile app developer / in Sialkot. | Mobile App Development in Sialkot \| Certified App Developer |
| `/software-development-sialkot` | `seo-pages.ts → software-development-sialkot` | 6 / 265 / 31.9 | software developer in sialkot (@20, 2 clicks), software house in sialkot (@67), software maker near me (@8) | Software development / in Sialkot. | Custom Software Development in Sialkot \| Inventory, School & Attendance Systems |
| `/work/bilge-ai` | `projects.ts → bilge-ai` | 5 / 344 / 9.4 | bilge ai, bilgeai, bilge app | Bilge AI | (project name) |
| `/web-development-sialkot` | `seo-pages.ts → web-development-sialkot` | 4 / 244 / 42.1 | website developer in sialkot (@20, 1 click), web developer in sialkot (@28), import export website development in sialkot (hidden) | Website developer / in Sialkot. | Website Development in Sialkot \| Web Developer for Exporters & Local Business |
| `/affordable-app-development` | `seo-pages.ts → affordable-app-development` | 3 / 39 / 14.2 | hidden | Affordable app development / without the corner-cutting. | Affordable App Development \| Senior Quality, Fixed-Price Builds |
| `/about` | `src/app/about` | 2 / 85 / 5.3 | chand latif (@3) | | |
| `/crm-development-pakistan` | `seo-pages.ts → crm-development-pakistan` | 2 / 30 / 21.9 | crm developer near me (@5) | CRM & custom software development / from Pakistan. | CRM & Custom Software Development in Pakistan \| Built Around Your Workflow |
| `/mobile-app-development-pakistan` | `seo-pages.ts → mobile-app-development-pakistan` | 1 / 221 / 36.2 | app developer in pakistan, mobile app developers in pakistan | Mobile app development / from Pakistan. | Mobile App Development in Pakistan \| Hire an Expert App Developer |
| `/web-development-pakistan` | `seo-pages.ts → web-development-pakistan` | 1 / 94 / 32.6 | website developer in pakistan (@35) | Website development / from Pakistan. | Website Development in Pakistan \| Hire an Expert Web Developer |
| `/surveyor-management-software` | `seo-pages.ts → surveyor-management-software` | 1 / 8 / 37.8 | best job tracking system for surveyors (1 click) | Job management software / for surveyor-led firms. | Surveyor Job Management Software \| Custom Internal Tools for Surveying Firms |
| `/services`, `/services/mobile-app-development`, `/contact`, `/work` | app routes / `services.ts` | 1 click each | | | |
| `/work/surveyor-job-management-system` | `projects.ts` | 0 / 36 / 5.1 | how do admin packages for surveyors scale with job volume? (@4.8) | | Surveyor Job Management Software: Case Study |
| `/blog/software-house-in-sialkot` | post MDX | 0 / 8 / 11.6 | software house sialkot (@8), sialkot software house (@9) | Software house in Sialkot: what working with Granyyte is like | same |
| `/blog/flutterflow-vs-native-development` | post MDX | 0 / 7 / 13 | native mobile apps vs flutter & flutterflow (@9-23) | FlutterFlow vs. Native Development: What to Choose in 2026 | same |

Existing FAQ questions on every `seo-pages.ts` entry are frozen as of commit `76e2630`. `git diff` against it must show additions only.

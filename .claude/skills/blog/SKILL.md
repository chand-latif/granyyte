---
name: blog
description: Draft one Granyyte blog post end to end (keyword pick, SERP study, MDX with faqs frontmatter, copy checks, build). Use when Chand says "/blog", "write the next post", or names a post topic.
---

# /blog: one post, start to finish

Read first: `CLAUDE.md` (Writing rules + Pricing), `seo/references/voice.md` (humour dial + local positioning), `seo/references/stories.md`, `seo/keyword-map.csv`, `seo/calendar.md`.

## 0. Tools
- Search Console MCP (`sc-domain:granyyte.com`): confirm it responds.
- Semrush MCP: check it responds. If it returns `no_api_units`, say so in one line and continue with the GSC + SERP fallback below. Never invent volumes or KD.

## 1. Pick the keyword
- Take the next row in `seo/calendar.md` that isn't marked drafted, unless Chand named a topic.
- Make sure the keyword isn't the primary for another URL in `seo/keyword-map.csv` or another post's `targetKeyword` (`grep -rn targetKeyword src/content/posts`).
- Pull GSC queries containing the main term (`search_analytics`, 480 days, filter `query contains`) for real phrasings.

## 2. Cluster
5-12 secondary keywords: GSC phrasings first, then Semrush related/questions if units exist. These go in `secondaryKeywords`.

## 3. Study the top results
- Semrush SERP for the keyword in the right database if available. Otherwise WebSearch for the keyword and take the top 3 organic articles (skip Reddit, Quora, forums, directories, competitor listicles).
- Note word count, H2 outline, FAQs. Target outline: match or beat their coverage. Never copy wording.

## 4. Write `src/content/posts/<slug>.mdx`
Frontmatter: `title` (sentence case), `description` (140-160 chars), `date` (today), `tags`, `hub` (must exist in `topics.ts`), `targetKeyword`, `secondaryKeywords`, `relatedService` (+ `relatedServiceLabel`), `faqs` (4-8 items, plain text answers, no links, real question phrasings).

Body rules:
- Primary keyword in the title, in the first 100 words, and in one H2.
- Funny blog voice per `voice.md`: a joke or wry aside every few paragraphs, never instead of the answer.
- At least one real story from `stories.md`, one honest tradeoff ("when you should not hire us / buy the package instead").
- Real facts only. A hypothetical must be clearly hypothetical. No anecdote presented as real unless Chand supplied it.
- 3-5 internal links (money page, hub-related posts, `/work/<slug>`), 1-3 external links to authoritative sources (official docs, Google, Apple, Flutter, HSE...).
- End with a short italic CTA to the money page or `/contact`. Don't write a FAQ section in the body; `faqs` renders after it automatically.
- Local (Sialkot) posts use the "10-20k PKR template" positioning; market prices only, never ours.

## 5. Checks
Run the CLAUDE.md dash + banned-word greps, plus `grep -nE "(\$|Rs\.?|PKR) ?[0-9]"` on the new file (any hit must be a third-party market figure).

## 6. Build
`npm run build` (the manifest guard catches duplicate keywords, bad hubs and malformed faqs).

## 7. Report and stop
Show Chand: title, keyword, word count, H2 outline, internal links, the first two paragraphs. Update `seo/keyword-map.csv` and mark the row drafted in `seo/calendar.md`. **Don't commit until Chand approves**, then `git commit -m "feat(blog): <slug>"` (no Co-Authored-By, never push).

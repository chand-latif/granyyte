# Semrush pulls for next iteration

On 2026-11-13 Semrush returned `no_api_units`, so nothing in this iteration uses Semrush data. Once units are added (semrush.com/mcp-access), run these in order. Estimate units first and cache every response to `seo/raw/semrush/`.

1. **granyyte.com organic keywords** (database pk, then us). This catches rankings GSC hides.
2. **Keyword overview (volume, KD, CPC, intent)** for every primary and secondary keyword in `keyword-map.csv`. Databases: pk for the Sialkot/Pakistan rows; us, uk, ae for the international rows.
3. **SERP top 10** for: software house in sialkot, web design company in sialkot, mobile app developers in pakistan, flutterflow developer, surveyor job management software. Note who ranks and their word counts.
4. **Questions report** for seeds: flutterflow, flutter app development, mvp development, hire app developer, custom crm, inventory management software, school management software, ai agent development.
5. **Competitor gap**: granyyte.com vs the top 3 Sialkot software houses from step 3, plus 2 Pakistani Flutter agencies from the "best flutter development companies in pakistan" SERP.
6. **Money keywords sorted by CPC** (commercial intent, KD ≤ 40). These are candidates for new `seo-pages.ts` entries (cap: 1-2 a month).
7. Re-rank `calendar.md` weeks 3-12 using volume/KD, keeping the GSC-proven topics on top.

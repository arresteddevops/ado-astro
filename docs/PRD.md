# PRD: arresteddevops.com — Hugo → Astro migration

**Status:** Grilled 2026-08-25 — decisions locked, ready for issue breakdown
**Owner:** Matt Stratton
**Repo:** [arresteddevops/ado-astro](https://github.com/arresteddevops/ado-astro) · Legacy: [ado-hugo](https://github.com/arresteddevops/ado-hugo)
**Design:** Broadcast Pop system — [design canvas](https://claude.ai/code/artifact/531527e4-b7a7-42bc-8a30-2ffbf9c1f712)
**Glossary:** [CONTEXT.md](../CONTEXT.md) · **Decisions:** [docs/adr/](./adr/)

## Problem / why

The current site runs Hugo + the castanet theme (also maintained by Matt). Every Netlify
build does `hugo mod get -u`, pulling the theme's latest main — builds are not
reproducible and theme changes can break production. The design is dated, and extending
it means writing Hugo templates against a theme that exists mostly for this one site.
Moving to Astro gets a modern component model, a fresh design, and a repo that owns its
own presentation.

## Goals

1. Broadcast Pop redesign across all page types.
2. Zero broken URLs (one deliberate exception: guest version URLs 301 — ADR-0002).
3. The Feed keeps working for every existing subscriber, unchanged URL (ADR-0001).
4. All content migrated with full fidelity, including temporal guest bios.
5. Reproducible builds on Netlify.

## Non-goals

- Changing where audio is hosted (stays on Blubrry via Media Prefix).
- New content types or editorial workflow changes. No CMS.
- Comments (dropped — see Decisions).

## Decisions (grilled)

| # | Area | Decision |
|---|------|----------|
| 1 | Feed | Astro endpoint at `/episode/index.xml`, all 205 items, GUID = enclosure URL, validated by parsed-item diff against production before cutover. **ADR-0001** |
| 2 | Redirects | Generated Netlify `_redirects`: episode Aliases + Redirect Stubs + guest version URLs → real 301s. No meta-refresh stubs. |
| 3 | Guest model | Person-centric: one Guest entity per human with embedded Bio Snapshots keyed by legacy stems; episode frontmatter unchanged; version URLs 301 to person pages. **ADR-0002** |
| 4 | Conversion | One-time checked-in script (TOML→YAML, guest folding, field renames); converted content committed here; re-runnable during coexistence. **ADR-0003** |
| 5 | Comments | Dropped. No Disqus, no replacement. |
| 6 | Contact | Netlify Forms form + direct-channel cards (per design). |
| 7 | Search | Pagefind, with GUEST/EPISODE type filters per design. |
| 8 | Analytics | Keep Google Analytics (G-45939822). Drop the Mailchimp signup. |
| 9 | Legacy pages | All 8 ported and restyled (books, podcasts, cfp, thanks-pals, copyright, privacy, subscribe, sponsorship). |
| 10 | Upcoming feature | Dropped (`upcoming` frontmatter not carried into the schema). |
| 11 | Styling | Vanilla CSS with design tokens as custom properties + scoped Astro styles. No Tailwind. |
| 12 | Images | Astro image pipeline (`astro:assets`) for all art; **build-time OG image generation** for episodes without bespoke social images; stable-URL social cards stay in `public/`. |
| 13 | Cutover | New Netlify site; validate (feed diff + link crawl) against real builds; DNS swap when green; rollback = DNS back. `/index.xml` 301s to `/episode/index.xml`. ado-hugo freezes and is archived. |

## Hard constraints

- **The Feed**: `/episode/index.xml`, iTunes tags from `[params.feed]` config
  (subtitle "There's always DevOps in the Banana Stand"), per-episode enclosures from
  `media_prefix + podcast_file` with `podcast_bytes` length and `podcast_duration`.
  GUID = enclosure URL. All 205 items. Explicit flag honored per episode.
- **URLs**: flat permalinks `/:filename/`; Aliases like `/205`; Redirect Stubs like
  `/bananastand` (sourced from `static/_redirects`, 49 rules — `content/redirect/*.md`
  is dead content, see CONTEXT.md); `/host/<slug>/`; `/guest/<person>/` (new canonical,
  old versions 301).
- **Content model**: episodes (205), guests (332 versions → ~273 persons after folding,
  plus a handful of placeholder stubs for broken episode references), hosts (6), sponsors
  (33, from `data/sponsors/*.yml` — `content/sponsor/*.md` and `data/hosts/*.yml` are
  both dead/stale, see CONTEXT.md), pages (8). Zod schemas enforce referential integrity
  via `reference()` (episode → guest/host/sponsor stems must resolve).
- **Shortcodes**: `bloglink`, `booklink`, `podcast`, `staticsearch` used in a handful of
  episodes + pages — inventory and map to components/plain markdown during conversion.
- **Transcripts**: `transcript` frontmatter → toggleable transcript on episode pages.

## Content debts (Matty to supply)

- Origin story copy for the About page (draft copy is in the design canvas — needs Matty's punch-up).
- ~~Trevor Hess bio~~ — pulled from ado-hugo content/host/thess.md.
- Decision on the "banana stand" hero headline stays (iTunes subtitle suggests yes).

## Build requirements

- Hit targets ≥44px for all interactive elements (mockup pills are undersized; the
  build must not be).
- WCAG AA contrast throughout (mockup palette validated).
- Lighthouse ≥95 performance/accessibility on homepage and episode page.
- **Every page works on mobile, not just resizes.** The design canvas was drawn at
  1280px desktop width only — none of it was mobile-checked. Each page needs a real
  mobile pass (not just "does it not break"): the header/nav collapses to a proper
  menu, cards restack instead of squeezing, tap targets stay ≥44px at small widths
  too, and the episode player/search/forms are usable one-handed. Check phone width
  (~390px) as a standard step before calling any page done, same as the golden-path
  browser check.

## Migration phases (issue per phase)

1. **Scaffold**: Astro + pnpm + Netlify config, design tokens, base layout (header/footer/nav).
2. **Content conversion**: conversion script (TOML→YAML, guest folding per ADR-0002,
   shortcode mapping), collections + zod schemas, converted content committed.
3. **Pages**: episode detail (audio/video), episode list + pagination (9/page), guest
   list/detail, host detail, about, the 8 static pages, contact (Netlify Forms).
4. **Feed**: `/episode/index.xml` endpoint + automated diff validation against production.
5. **Redirects**: generated `_redirects` (aliases, stubs, guest versions, `/index.xml`),
   link-check pass against old sitemap.
6. **Search**: Pagefind + filtered search UI.
7. **Images & polish**: astro:assets migration, build-time OG generation fallback, GA,
   accessibility pass, hit-target audit.
8. **Cutover**: parallel Netlify site validation, DNS swap, post-cutover monitoring
   (feed + 404s), archive ado-hugo.

## Success criteria

- Feed diff: same episodes, same GUIDs, same enclosure URLs/lengths as production.
- Link check: 0 broken URLs crawling the old sitemap against the new site (301s count
  as pass for guest versions/aliases).
- Lighthouse ≥95 performance/accessibility on homepage and episode page.
- All 205 episodes render with playable audio; spot-check 10 across eras; era-correct
  bios verified on episodes referencing old Bio Snapshots (e.g. `pcheslock` vs
  `pcheslock2`).

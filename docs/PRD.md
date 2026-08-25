# PRD: arresteddevops.com — Hugo → Astro migration

**Status:** Draft — pending grill session
**Owner:** Matt Stratton
**Repo:** [arresteddevops/ado-astro](https://github.com/arresteddevops/ado-astro) · Legacy: [ado-hugo](https://github.com/arresteddevops/ado-hugo)
**Design:** Broadcast Pop system — [design canvas](https://claude.ai/code/artifact/531527e4-b7a7-42bc-8a30-2ffbf9c1f712)

## Problem / why

The current site runs Hugo + the castanet theme (also maintained by Matt). Every Netlify
build does `hugo mod get -u`, pulling the theme's latest main — builds are not reproducible
and theme changes can break production. The design is dated (Bootstrap-era castanet), and
extending it means writing Hugo templates against a theme that exists mostly for this one
site. Moving to Astro gets a modern component model, a fresh design, and a repo that owns
its own presentation.

## Goals

1. Pixel-fresh redesign (Broadcast Pop) across all page types.
2. Zero broken URLs — every existing path keeps working.
3. The podcast RSS feed keeps working for every existing subscriber, unchanged URL.
4. All 205 episodes, 332 guests, hosts, sponsors, pages, and transcripts migrated with
   full fidelity, including frontmatter metadata.
5. Reproducible builds on Netlify.

## Non-goals

- Changing where audio is hosted (stays on Blubrry via `media_prefix`).
- New content types or editorial workflow changes.
- A CMS. Content stays markdown in the repo.

## Hard constraints

### URLs (breakage = failure)

- Flat permalinks: `/:filename/` for episodes, pages, about (e.g. `/ai-sdlc/`).
- Episode aliases: every episode has short aliases like `/205`, `/aisdlc` (Hugo `aliases`).
- Sponsor pages at `/:filename` (no trailing slash in Hugo config — verify actual behavior).
- ~16 vanity redirects from `content/redirect/` (e.g. `/bananastand`, `/itunes`, `/guestform`).
- Guest pages: `/guest/<slug>/`, hosts: `/host/<slug>/`.

### The podcast feed (the single most load-bearing URL)

- Canonical feed: **`/episode/index.xml`** — podcast apps (Apple, Spotify via RSS,
  subscribeonandroid, Google's feed proxy) point at this exact path.
- iTunes-compatible: `<itunes:*>` tags fed from `[params.feed]` in the Hugo config
  (subtitle "There's always DevOps in the Banana Stand", author list, owner, image,
  categories) and per-episode `podcast_file` / `podcast_duration` / `podcast_bytes` /
  `explicit` frontmatter, with enclosure URLs built as `media_prefix + podcast_file`.
- Migration approach: generate the feed in Astro (endpoint route at the same path),
  validated against the current feed with a diff of parsed items (order, GUIDs,
  enclosures). **GUID stability must be verified** — changed GUIDs re-download episodes
  for subscribers.
- Home feed `/index.xml` and JSON search index also exist; decide keep/redirect per-feed.

### Content model (from ado-hugo)

| Collection | Count | Key frontmatter |
|---|---|---|
| episode | 205 | Description, Date, PublishDate, podcast_file/duration/bytes, episode (number), episode_image, episode_banner, images (social), guests[], hosts[], sponsors[], aliases[], youtube, transcript, explicit, upcoming, truncate, media_override |
| guest | 332 | Title, socials (Twitter/GitHub/LinkedIn/etc), Thumbnail, guest_group |
| host | 6 | same shape as guest |
| sponsor | ~12 | sponsor metadata + `data/sponsors/` |
| page | 8 | books, cfp, copyright, podcasts, privacy, sponsorship, subscribe, thanks-pals |
| redirect | 16 | vanity URL stubs |

- Frontmatter is TOML in Hugo; Astro content collections use YAML/JSON — a one-time
  conversion script is part of the migration, with a schema (zod) that fails the build on
  missing/invalid fields.
- Shortcodes used inside episode bodies: `bloglink`, `booklink`, `podcast`,
  `staticsearch` — must be inventoried (grep all content) and mapped to Astro
  components (MDX) or rewritten at conversion time.
- Guest/host references are by filename stem (`guests = ["hfoxwell"]`) — enforce
  referential integrity in the collection schema.
- `guest_group` links multiple profiles of the same person (e.g. Pete Cheslock ×3 eras);
  the new site should decide: keep separate profiles or merge with history.

### Features to port

- **Search**: current = client-side JSON index (`outputs: JSON`) + `staticsearch`.
  Astro options: Pagefind (build-time, zero-config) or keep a JSON index + client JS.
  New design adds GUEST/EPISODE type badges + filters.
- **Transcripts**: `transcript` frontmatter points at `/static/transcripts/*.md`;
  "Display Transcript" toggle on episode pages.
- **Audio player**: current is a bare `<audio>`-style player; new design has a styled
  player. No third-party embed.
- **YouTube embed** on episodes with `youtube` frontmatter.
- **Episode pagination** on the homepage (9 per page, 23 pages currently).
- **Social/OG images** per episode (`images` frontmatter).
- **Google Analytics** (G-45939822) — confirm keep/replace.
- **Mailchimp list** signup — confirm keep.

### Open questions (grill fodder)

1. **Disqus comments** — castanet renders Disqus (`disqusShortname = "arresteddevops"`).
   Keep, replace (giscus?), or drop?
2. **Contact form** — new design shows a Netlify Forms form. Ship it or email-only?
3. **`/index.xml` home feed** — anyone consuming it? Redirect to `/episode/index.xml`?
4. **Guest profile duplicates** (`guest_group`) — merge or keep?
5. **Old `page` content** (books, podcasts, thanks-pals) — all still wanted?
6. **Trailing-slash + alias behavior on Netlify** — Hugo aliases generate meta-refresh
   HTML pages; Netlify `_redirects` is cleaner. Decide redirect mechanism.
7. **Origin story copy** for the new About page; Trevor Hess bio.
8. **Image pipeline** — episode art lives in `static/`; use Astro assets/image
   optimization or copy as-is?
9. **Upcoming episodes** (`upcoming = true`) — keep the feature?

## Technical decisions (proposed)

- **Framework**: Astro (latest), static output, deployed on Netlify.
- **Package manager**: pnpm.
- **Content**: Astro content collections with zod schemas; episodes/guests/hosts/sponsors
  as collections; MDX only if shortcode usage demands it.
- **Feed**: custom Astro endpoint at `/episode/index.xml` mirroring castanet's template.
- **Redirects**: Netlify `_redirects` file generated at build from episode aliases +
  redirect stubs.
- **Search**: Pagefind unless the grill surfaces a reason not to.
- **Styling**: vanilla CSS with design tokens from the Broadcast Pop system (no Tailwind
  unless argued for); fonts Bricolage Grotesque + Archivo via Google Fonts.
- **CI**: Netlify deploy previews per PR; a link-check + feed-diff step before merge
  during migration.

## Migration phases (to become GitHub issues)

1. **Scaffold**: Astro + Netlify config, design tokens, base layout (header/footer).
2. **Content conversion**: TOML→YAML script, collections + schemas, shortcode mapping.
3. **Pages**: episode detail (audio/video), episode list + pagination, guest list/detail,
   host detail, about, static pages.
4. **Feed**: `/episode/index.xml` endpoint + diff validation against production.
5. **Redirects**: aliases + vanity redirects via `_redirects`, link-check pass.
6. **Search**: Pagefind integration + new search UI.
7. **Polish**: OG images, analytics, accessibility pass, performance budget.
8. **Cutover**: DNS/Netlify site swap, monitor feed + 404s, keep ado-hugo archived.

## Success criteria

- Feed diff: same episodes, same GUIDs, same enclosure URLs as production.
- Link check: 0 broken internal URLs from a crawl of the old sitemap against the new site.
- Lighthouse: ≥95 performance/accessibility on homepage and episode page.
- All 205 episodes render with playable audio; spot-check 10 across eras.

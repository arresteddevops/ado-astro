# Site-Wide Listen-Links Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Make "where to listen" available on every page and rebuild `/subscribe/` as the canonical destination, replacing its WordPress-era markup.

**Architecture:** One `ListenLinks.astro` component renders the platform set in two variants — `full` (card grid, subscribe page) and `compact` (pill row, footer + episode pages + homepage). Platform data moves from a flat object to an ordered array in `src/consts.ts` so both variants read the same source. `/subscribe/` becomes a dedicated `.astro` page like `sponsorship` and `contact`.

**Tech Stack:** Astro 7, pnpm, TypeScript, Astro content collections. No test framework, no linter.

**Spec:** `docs/adr/0005-listen-links-are-site-wide.md`

**Design:** https://claude.ai/artifact/VR2evYAPSEdHdqj7TSr8i3

## How verification works in this repo

**There is no test framework, and this plan does not add one.** No vitest, no
playwright, no `test` script — do not introduce any. This is a static site, and
the real verification is:

1. `pnpm run build` — Astro fails the build on schema violations, broken imports,
   and bad references. A green build is a real signal here, not a formality.
2. Explicit assertions with `grep` against the generated `dist/` output.

So the red/green cycle in each task is: **write the grep assertion first and watch
it fail against the current `dist/`, then implement, then watch it pass.** That is
the honest equivalent of a failing test in this codebase.

Run from the repo root. `pnpm run build` takes ~15s.

## Global Constraints

- **Package manager is pnpm.** Never `npm` or `yarn`.
- **Canonical feed URL is `/episode/index.xml`** and must not change. Link it
  directly — never route our own pages through the `/feed/podcast/` alias.
- **`--color-red` (`#e04f39`) must NOT be used for normal-size text** — it is
  3.57:1 on cream. Use `--color-red-deep` (`#b8341f`, 5.37:1). `#e04f39` is fine
  for non-text fills, borders, shadows, and large text 30px+ bold.
- **`--color-text-on-navy-muted` (`#9aa3c0`) is only legible on navy** (5.55:1). On
  cream it is 2.28:1 — never use it there. The cream-safe muted token is
  `--color-text-muted` (`#4a5378`).
- **Every link and button clears a 44px hit target** (`--hit-target-min`).
- **Scoped `<style>` never reaches client-injected HTML.** Per CLAUDE.md: markup
  inserted at runtime via `innerHTML`/`insertAdjacentHTML` gets no scoped-CSS hash
  and renders unstyled with no error. Anything client-rendered needs
  `<style is:global>`.
- **Use existing design tokens**, never raw hex, in `.astro` files. Tokens live in
  `src/styles/tokens.css`.
- **Do not add YouTube Music or change the Overcast URL.** Both are unverified. See
  the ADR's open items.
- **Never push to `main`** — a pre-push hook blocks it. Work on a branch.

---

### Task 1: Restructure the platform data

`SUBSCRIBE_LINKS` is a flat object with five stale entries. The inline placements
need an ordered subset, which an object cannot express.

**Files:**
- Modify: `src/consts.ts:1-9`
- Modify: `src/pages/index.astro:6` (import), `:59-66` (usage)

**Interfaces:**
- Produces: `SUBSCRIBE_LINKS: Platform[]` where
  `type Platform = { id: string; name: string; url: string; featured: boolean }`.
  Consumed by Tasks 2, 3, 4, 5.
- Removes: the old object form. `SUBSCRIBE_LINKS.apple` etc. stop existing, which
  is why `index.astro` is edited in this same task — leaving it broken between
  tasks would fail the build.

- [ ] **Step 1: Write the failing assertion**

The built homepage currently carries the dead Apple affiliate tag. Prove it:

```bash
pnpm run build && grep -c "at=11lsCi" dist/index.html
```

Expected now: `1` (the stale URL is live).
Target after this task: `0`.

- [ ] **Step 2: Replace the export in `src/consts.ts`**

Replace lines 1–9 (the comment and the `SUBSCRIBE_LINKS` object) with:

```ts
// Where the show can be listened to. Order is deliberate: it drives both the
// subscribe page's grid and the compact row used in the footer, on episode
// pages, and on the homepage. `featured` marks the entries that appear in the
// compact row — see docs/adr/0005-listen-links-are-site-wide.md.
export type Platform = {
  id: string;
  name: string;
  url: string;
  featured: boolean;
};

export const SUBSCRIBE_LINKS: Platform[] = [
  { id: "apple", name: "Apple Podcasts", url: "https://podcasts.apple.com/us/podcast/arrested-devops/id773888088", featured: true },
  { id: "spotify", name: "Spotify", url: "https://open.spotify.com/show/7hHA2ZlfOmbwv96wEBaMR2", featured: true },
  { id: "pocketcasts", name: "Pocket Casts", url: "https://pca.st/VqEP", featured: true },
  // Overcast derives show URLs from the Apple ID. Unverified — overcast.fm
  // serves a login wall, so this could not be confirmed from outside.
  { id: "overcast", name: "Overcast", url: "https://overcast.fm/itunes773888088", featured: false },
  { id: "iheart", name: "iHeartRadio", url: "https://www.iheart.com/podcast/256-arrested-devops-43075205", featured: false },
  { id: "amazon", name: "Amazon Music", url: "https://www.amazon.com/dp/B08K5862TB", featured: false },
  { id: "audible", name: "Audible", url: "https://www.audible.com/podcast/Arrested-DevOps/B08K56VQJ1", featured: false },
];

// The feed is not a "platform" — it has its own treatment in every placement
// (filled pill, not an outline one) and must stay the canonical path, never the
// /feed/podcast/ compatibility alias.
export const FEED_PATH = "/episode/index.xml";
```

- [ ] **Step 3: Update the homepage to the new shape**

In `src/pages/index.astro`, change the import on line 6:

```astro
import { SUBSCRIBE_LINKS, FEED_PATH } from "../consts";
```

Replace the five hardcoded `<a>` tags (lines 61–65) with:

```astro
    {SUBSCRIBE_LINKS.filter((p) => p.featured).map((p) => (
      <a class="pill outline small" href={p.url}>{p.name}</a>
    ))}
    <a class="pill rss" href={FEED_PATH}>RSS</a>
```

Note this drops the old generic "Android" pill, per the ADR.

- [ ] **Step 4: Run the assertion**

```bash
pnpm run build && grep -c "at=11lsCi" dist/index.html
grep -o 'podcasts.apple.com/us/podcast/arrested-devops/id773888088' dist/index.html | head -1
grep -c 'subscribeonandroid' dist/index.html
```

Expected: `0` for the affiliate tag, the Apple URL present, `0` for subscribeonandroid.

- [ ] **Step 5: Commit**

```bash
git add src/consts.ts src/pages/index.astro
git commit -m "Restructure SUBSCRIBE_LINKS into an ordered platform array

Flat object couldn't express which platforms appear in the compact inline
row or in what order. Also corrects the Apple URL (http itunes.apple.com
with a dead at=11lsCi affiliate tag) and drops the subscribeonandroid
wrapper, per ADR 0005."
```

---

### Task 2: The `ListenLinks` component

**Files:**
- Create: `src/components/ListenLinks.astro`

**Interfaces:**
- Consumes: `SUBSCRIBE_LINKS`, `FEED_PATH`, `Platform` from Task 1.
- Produces: `<ListenLinks variant="full" | "compact" />`. Default is `"compact"`.
  Consumed by Tasks 3, 4, 5.

- [ ] **Step 1: Write the failing assertion**

```bash
test -f src/components/ListenLinks.astro && echo EXISTS || echo MISSING
```

Expected now: `MISSING`.

- [ ] **Step 2: Create the component**

```astro
---
import { SUBSCRIBE_LINKS, FEED_PATH } from "../consts";

interface Props {
  /** "full" is the subscribe page's card grid; "compact" is the inline pill row. */
  variant?: "full" | "compact";
  /** Heading label above the row. Set null to omit it. */
  label?: string | null;
}

const { variant = "compact", label = "LISTEN ON" } = Astro.props;
const platforms = variant === "full" ? SUBSCRIBE_LINKS : SUBSCRIBE_LINKS.filter((p) => p.featured);
---

{variant === "full" ? (
  <div class="grid">
    {platforms.map((p) => (
      <a class="card" href={p.url}>{p.name}</a>
    ))}
  </div>
) : (
  <div class="row">
    {label && <span class="label">{label}</span>}
    {platforms.map((p) => (
      <a class="pill outline small" href={p.url}>{p.name}</a>
    ))}
    <a class="pill rss" href={FEED_PATH}>RSS</a>
    <a class="more" href="/subscribe/">All platforms</a>
  </div>
)}

<style>
  .row {
    display: flex;
    gap: 12px;
    align-items: center;
    flex-wrap: wrap;
  }

  .label {
    font-size: 13px;
    font-weight: 800;
    letter-spacing: 0.1em;
    color: var(--color-text-muted);
  }

  .pill.outline {
    border: 2px solid var(--color-navy);
  }

  .pill.small {
    padding: 9px 18px;
    font-size: 13px;
  }

  .pill.rss {
    background: var(--color-red-deep);
    color: var(--color-cream);
    border: 2px solid var(--color-red-deep);
    padding: 9px 18px;
    font-size: 13px;
  }

  .pill.rss:hover {
    color: var(--color-cream);
  }

  .more {
    display: inline-flex;
    align-items: center;
    min-height: var(--hit-target-min);
    font-weight: 700;
    font-size: 13px;
    color: var(--color-red-deep);
    border-bottom: 2px solid var(--color-red-deep);
  }

  .grid {
    display: grid;
    grid-template-columns: repeat(4, minmax(0, 1fr));
    gap: 20px;
  }

  .card {
    display: flex;
    align-items: center;
    min-height: 88px;
    padding: 22px;
    border: var(--border-width) solid var(--color-navy);
    border-radius: var(--radius-card);
    background: var(--color-cream-card);
    box-shadow: var(--shadow-offset) var(--color-navy);
    font-family: var(--font-display);
    font-weight: 800;
    font-size: 19px;
    line-height: 1.15;
  }

  .card:hover {
    color: var(--color-red-deep);
  }

  @media (max-width: 900px) {
    .grid {
      grid-template-columns: repeat(2, minmax(0, 1fr));
    }
  }

  @media (max-width: 480px) {
    .grid {
      grid-template-columns: 1fr;
    }
  }
</style>
```

The `.pill` base class (44px min-height, radius, weight) comes from
`src/styles/global.css` and is global — do not redeclare it here.

- [ ] **Step 3: Verify it builds**

Nothing renders it yet, so this only proves it compiles:

```bash
pnpm run build
```

Expected: build succeeds.

- [ ] **Step 4: Commit**

```bash
git add src/components/ListenLinks.astro
git commit -m "Add ListenLinks component with full and compact variants

One definition of 'where to listen', replacing the homepage's hand-rolled
row. Compact shows the three featured platforms plus RSS and a link
through to the full grid; full renders all of them as cards."
```

---

### Task 3: Point the homepage at the component

Proves both variants work before they are wired into layout-level surfaces.

**Files:**
- Modify: `src/pages/index.astro:6`, `:59-66`, and its `<style>` block

**Interfaces:**
- Consumes: `<ListenLinks />` from Task 2.

- [ ] **Step 1: Write the failing assertion**

```bash
pnpm run build && grep -c 'All platforms' dist/index.html
```

Expected now: `0`.

- [ ] **Step 2: Replace the markup**

In `src/pages/index.astro`, change the import on line 6 to:

```astro
import ListenLinks from "../components/ListenLinks.astro";
```

Remove `SUBSCRIBE_LINKS` / `FEED_PATH` from the consts import if nothing else on
the page uses them. Replace the whole `<section class="subscribe-row">` block with:

```astro
  <section class="subscribe-row">
    <ListenLinks variant="compact" />
  </section>
```

Delete the now-unused `.pill.outline`, `.pill.small`, `.pill.rss`, `.pill.rss:hover`
and `.label` rules from the page's `<style>` block — they live in the component
now. Keep `.subscribe-row` itself; it supplies the page padding.

- [ ] **Step 3: Run the assertion**

```bash
pnpm run build
grep -c 'All platforms' dist/index.html
grep -o 'class="pill rss"[^>]*href="/episode/index.xml"' dist/index.html | head -1
```

Expected: `1` for the more-link, and the RSS pill pointing at the canonical feed.

- [ ] **Step 4: Check it visually**

```bash
pnpm run preview
```

Open `http://localhost:4321/` and confirm the row still reads as it did — pills
aligned, no unstyled text. Then Ctrl-C.

- [ ] **Step 5: Commit**

```bash
git add src/pages/index.astro
git commit -m "Point the homepage listen row at ListenLinks

Removes the second definition of 'where to listen'. The page keeps
.subscribe-row for padding; the pill styles move into the component."
```

---

### Task 4: Extend the footer

`src/components/Footer.astro` already exists and is already wired into
`BaseLayout.astro`. **Extend it. Do not replace it.** Its brand name, copyright
line, and Privacy / Copyright / email links must survive unchanged — the design
canvas dropped them, which would be a regression.

**Files:**
- Modify: `src/components/Footer.astro`

**Interfaces:**
- Consumes: `<ListenLinks />` from Task 2.

- [ ] **Step 1: Write the failing assertion**

Assert both that the listen block is absent AND that the existing links are
present, so the second half catches a regression:

```bash
pnpm run build
grep -c 'All platforms' dist/about/index.html
grep -c 'href="/privacy"' dist/about/index.html
```

Expected now: `0` for the listen block, `1` for the privacy link. After this task:
`1` and `1`.

- [ ] **Step 2: Add the listen block above the existing footer content**

In `src/components/Footer.astro`, add the import at the top of the frontmatter:

```astro
import ListenLinks from "./ListenLinks.astro";
```

Change the `<footer>` body to wrap the existing content, adding the listen block
above it:

```astro
<footer class="site-footer">
  <div class="listen">
    <span class="listen-title">Get every episode</span>
    <ListenLinks variant="compact" label={null} />
  </div>
  <div class="legal">
    <span class="brand-name">ARRESTED DEVOPS</span>
    <p>
      &copy; 2013&ndash;{year} &middot; <a href="/privacy">Privacy</a> &middot;
      <a href="/copyright">Copyright</a> &middot;
      <a href="mailto:shows@arresteddevops.com">shows@arresteddevops.com</a>
    </p>
  </div>
</footer>
```

- [ ] **Step 3: Update the styles**

The footer is navy, so the component's cream-oriented pill colors need overriding.
Replace the `.site-footer` rule and add the new rules:

```css
  .site-footer {
    background: var(--color-navy);
    color: var(--color-text-on-navy);
    padding: 36px var(--page-padding);
    display: flex;
    flex-direction: column;
    gap: 28px;
  }

  .listen {
    display: flex;
    flex-direction: column;
    gap: 14px;
  }

  .listen-title {
    font-family: var(--font-display);
    font-weight: 800;
    font-size: 22px;
    color: var(--color-yellow);
  }

  /* ListenLinks is built for the cream page background; on navy its outline
     pills and more-link need the inverted palette. Deep global selectors
     because the component's own styles are scoped to it. */
  .listen :global(.pill.outline) {
    border-color: var(--color-cream);
    color: var(--color-cream);
  }

  .listen :global(.pill.outline:hover) {
    background: var(--color-cream);
    color: var(--color-navy);
  }

  .listen :global(.more) {
    color: var(--color-yellow);
    border-bottom-color: var(--color-yellow);
  }

  .legal {
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
    gap: 12px;
  }
```

Keep the existing `.brand-name`, `p`, `a`, and `a:hover` rules exactly as they are.

- [ ] **Step 4: Run the assertion**

```bash
pnpm run build
grep -c 'All platforms' dist/about/index.html
grep -c 'href="/privacy"' dist/about/index.html
grep -c 'href="/copyright"' dist/about/index.html
grep -c 'shows@arresteddevops.com' dist/about/index.html
```

Expected: `1` for each. The last three prove nothing was dropped.

- [ ] **Step 5: Check the footer on navy**

```bash
pnpm run preview
```

Open `http://localhost:4321/about/`, scroll to the footer, and confirm the pills
are legible against navy — cream outlines, yellow more-link, no dark-on-dark. Then
Ctrl-C.

- [ ] **Step 6: Commit**

```bash
git add src/components/Footer.astro
git commit -m "Add the compact listen block to the footer

Extends the existing footer rather than replacing it — brand, copyright,
Privacy/Copyright/email all stay. Pills get an inverted palette because
the footer is navy and ListenLinks is built for the cream page."
```

---

### Task 5: Episode pages

**Files:**
- Modify: `src/pages/[episode].astro` — import, plus a block after the `media`
  section and before `<article class="show-notes">` (currently around line 184)

**Interfaces:**
- Consumes: `<ListenLinks />` from Task 2.

- [ ] **Step 1: Write the failing assertion**

```bash
pnpm run build && grep -c 'All platforms' dist/ci-control/index.html
```

Expected now: `1` — the footer already supplies one from Task 4. After this task:
`2` (one in the episode body, one in the footer).

- [ ] **Step 2: Add the import**

In the frontmatter of `src/pages/[episode].astro`, alongside the other component
imports:

```astro
import ListenLinks from "../components/ListenLinks.astro";
```

- [ ] **Step 3: Add the block**

Immediately before `<article class="show-notes" data-pagefind-body>`:

```astro
  <section class="subscribe-cta">
    <ListenLinks variant="compact" label="SUBSCRIBE" />
  </section>
```

- [ ] **Step 4: Add the style**

In the page's `<style>` block:

```css
  .subscribe-cta {
    padding: 0 var(--page-padding) 32px;
    max-width: var(--content-max-width);
  }
```

- [ ] **Step 5: Run the assertion**

```bash
pnpm run build
grep -c 'All platforms' dist/ci-control/index.html
grep -c 'SUBSCRIBE<' dist/ci-control/index.html
```

Expected: `2` and `1`.

- [ ] **Step 6: Confirm it did not leak into the feed**

The episode body feeds `<content:encoded>`. This block is page markup, not episode
content, so the feed must be unchanged:

```bash
grep -c 'All platforms' dist/episode/index.xml
grep -c '<item>' dist/episode/index.xml
```

Expected: `0` and `207`. **If the first is not 0, stop** — the CTA has leaked into
the podcast feed, which is load-bearing.

- [ ] **Step 7: Commit**

```bash
git add "src/pages/[episode].astro"
git commit -m "Add the subscribe row to episode pages

The moment-of-intent surface: someone just listened and liked it. Sits
between the player and the show notes. Verified it stays out of
content:encoded so the feed is unchanged."
```

---

### Task 6: Rebuild `/subscribe/` and put it in the nav

**Files:**
- Create: `src/pages/subscribe.astro`
- Delete: `src/content/pages/subscribe.md`
- Modify: `src/pages/[page].astro:11` (the `dedicatedPages` set)
- Modify: `src/components/Header.astro:2-8` (`navItems`)

**Interfaces:**
- Consumes: `<ListenLinks variant="full" />` from Task 2, `FEED_PATH` from Task 1.

- [ ] **Step 1: Write the failing assertion**

```bash
pnpm run build
grep -c 'onclick="this.focus' dist/subscribe/index.html
grep -c 'BeyondPod' dist/subscribe/index.html
grep -c 'href="/subscribe"' dist/index.html
```

Expected now: `1`, `1`, `0` — the WordPress input and the dead BeyondPod link are
live, and nothing links to the page. After: `0`, `0`, and at least `1`.

- [ ] **Step 2: Add `subscribe` to the dedicated-pages set**

In `src/pages/[page].astro`, line 11:

```ts
  const dedicatedPages = new Set(["sponsorship", "contact", "subscribe"]);
```

- [ ] **Step 3: Delete the old content file**

```bash
git rm src/content/pages/subscribe.md
```

- [ ] **Step 4: Create `src/pages/subscribe.astro`**

```astro
---
import BaseLayout from "../layouts/BaseLayout.astro";
import ListenLinks from "../components/ListenLinks.astro";
import { FEED_PATH } from "../consts";
---

<BaseLayout
  title="Subscribe"
  description="Subscribe to Arrested DevOps on Apple Podcasts, Spotify, Pocket Casts, Overcast, iHeartRadio, Amazon Music, Audible, or any app that takes an RSS feed."
>
  <section class="intro">
    <div class="heading">
      <h1>Subscribe</h1>
      <span class="badge">EVERY OTHER WEEK</span>
    </div>
    <p class="lede">
      Pick your app and new episodes land automatically. Already have a podcast
      player you like? Grab the feed below and paste it in.
    </p>
  </section>

  <section class="platforms">
    <ListenLinks variant="full" />
  </section>

  <section class="feed">
    <div class="feed-card">
      <h2>The feed</h2>
      <p>Every podcast app takes a feed URL. Copy this one and paste it into whatever you already use.</p>
      <div class="feed-row">
        <code id="feed-url">https://www.arresteddevops.com{FEED_PATH}</code>
        <button type="button" id="copy-feed" data-url={`https://www.arresteddevops.com${FEED_PATH}`}>
          Copy
        </button>
      </div>
    </div>
  </section>
</BaseLayout>

<script>
  const button = document.getElementById("copy-feed");
  button?.addEventListener("click", async () => {
    const url = button.dataset.url;
    if (!url) return;
    try {
      await navigator.clipboard.writeText(url);
      button.textContent = "Copied";
    } catch {
      // Clipboard API rejects on insecure contexts and when permission is
      // denied. The URL is visible and selectable either way, so say so
      // rather than failing silently.
      button.textContent = "Select and copy";
    }
    setTimeout(() => { button.textContent = "Copy"; }, 2000);
  });
</script>

<style>
  .intro {
    padding: 56px var(--page-padding) 0;
    max-width: var(--content-max-width);
  }

  .heading {
    display: flex;
    align-items: flex-end;
    gap: 20px;
    flex-wrap: wrap;
    margin-bottom: 14px;
  }

  h1 {
    margin: 0;
    font-family: var(--font-display);
    font-weight: 800;
    font-size: 60px;
    line-height: 1;
  }

  .badge {
    display: inline-flex;
    align-items: center;
    padding: 7px 16px;
    border-radius: var(--radius-pill);
    background: var(--color-yellow);
    color: var(--color-navy);
    font-weight: 800;
    font-size: 12px;
    letter-spacing: 0.08em;
    transform: rotate(-2deg);
  }

  .lede {
    margin: 0 0 40px;
    font-size: 19px;
    line-height: 1.6;
    max-width: 620px;
    color: var(--color-text-muted);
    text-wrap: pretty;
  }

  .platforms,
  .feed {
    padding: 0 var(--page-padding) 40px;
    max-width: var(--content-max-width);
  }

  .feed-card {
    border: var(--border-width) solid var(--color-navy);
    border-radius: var(--radius-card-lg);
    padding: 32px;
    background: var(--color-navy);
    color: var(--color-text-on-navy);
    box-shadow: var(--shadow-offset) var(--color-yellow);
  }

  .feed-card h2 {
    margin: 0 0 8px;
    font-family: var(--font-display);
    font-weight: 800;
    font-size: 26px;
  }

  .feed-card p {
    margin: 0 0 22px;
    font-size: 16px;
    line-height: 1.6;
    color: var(--color-text-on-navy-muted);
    max-width: 540px;
  }

  .feed-row {
    display: flex;
    gap: 12px;
    align-items: stretch;
    flex-wrap: wrap;
  }

  #feed-url {
    flex-grow: 1;
    min-width: 280px;
    display: flex;
    align-items: center;
    min-height: 52px;
    padding: 12px 20px;
    border-radius: var(--radius-pill);
    background: var(--color-cream);
    color: var(--color-navy);
    font-size: 15px;
    overflow-x: auto;
  }

  #copy-feed {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    min-height: 52px;
    padding: 12px 28px;
    border: none;
    border-radius: var(--radius-pill);
    background: var(--color-yellow);
    color: var(--color-navy);
    font-family: var(--font-body);
    font-weight: 700;
    font-size: 15px;
    cursor: pointer;
  }

  @media (max-width: 640px) {
    h1 {
      font-size: 38px;
    }
  }
</style>
```

The button's label is swapped via `textContent`, not `innerHTML`, so the
scoped-CSS trap in CLAUDE.md does not apply — no new markup is injected. Keep it
that way.

- [ ] **Step 5: Add Subscribe to the nav**

In `src/components/Header.astro`, add to `navItems` after `About`:

```ts
  { label: "Subscribe", href: "/subscribe" },
```

- [ ] **Step 6: Run the assertions**

```bash
pnpm run build
grep -c 'onclick="this.focus' dist/subscribe/index.html
grep -c 'BeyondPod' dist/subscribe/index.html
grep -c 'href="/subscribe"' dist/index.html
grep -c 'podcasts.apple.com' dist/subscribe/index.html
grep -c 'feed/podcast' dist/subscribe/index.html
```

Expected: `0`, `0`, at least `1`, at least `1`, and `0`. The last one proves the
page links the canonical feed rather than the compatibility alias.

- [ ] **Step 7: Check the copy button actually works**

```bash
pnpm run preview
```

Open `http://localhost:4321/subscribe/`. Click Copy — the label should change to
"Copied" and revert after ~2s. Paste somewhere to confirm the URL landed. Tab to
the button with the keyboard and press Enter to confirm it is reachable without a
mouse. Then Ctrl-C.

- [ ] **Step 8: Commit**

```bash
git add src/pages/subscribe.astro src/pages/\[page\].astro src/components/Header.astro
git commit -m "Rebuild /subscribe as a dedicated page and put it in the nav

Replaces WordPress-era markup: a dead BeyondPod link, a broken Podcast
Republic href, unclosed <li> tags, a NULL155 plugin artifact, and an
onclick text input standing in for a copy button. The page was also
orphaned — nothing linked to it, which is why it rotted. Now in the nav."
```

---

### Task 7: Whole-site verification

Nothing new is built here. This catches what per-task checks cannot: regressions
across the whole output.

**Files:** none modified.

- [ ] **Step 1: Clean build**

```bash
rm -rf dist && pnpm run build
```

Expected: succeeds, ~542 pages, no warnings from the redirect generator.

- [ ] **Step 2: Confirm the feed is untouched**

The podcast feed is load-bearing. Compare against production:

```bash
curl -s https://www.arresteddevops.com/episode/index.xml -o /tmp/prod-feed.xml
diff <(grep -v lastBuildDate /tmp/prod-feed.xml) <(grep -v lastBuildDate dist/episode/index.xml) && echo "FEED IDENTICAL"
```

Expected: `FEED IDENTICAL`. `lastBuildDate` is excluded because it moves every
build. **Any other difference means stop and investigate** — no task in this plan
should change the feed.

- [ ] **Step 3: Confirm no dead subscribe URLs survive anywhere**

```bash
grep -rl 'at=11lsCi\|subscribeonandroid\|BeyondPod\|itunestoppodcastplayer\|NULL155' dist/ || echo "NONE"
```

Expected: `NONE`.

- [ ] **Step 4: Confirm the listen block reaches every page**

The footer carries it, so every page should have one:

```bash
for f in dist/index.html dist/about/index.html dist/guest/index.html dist/subscribe/index.html dist/ci-control/index.html; do
  printf "%-34s %s\n" "$f" "$(grep -c 'episode/index.xml' "$f")"
done
```

Expected: at least `1` each; the episode page and `/subscribe/` higher.

- [ ] **Step 5: Check contrast and hit targets in a browser**

```bash
pnpm run preview
```

At `http://localhost:4321/`, open DevTools and run Lighthouse on Accessibility for
the homepage and `/subscribe/`. The repo's Netlify config **fails the deploy below
0.95** on performance and accessibility, so anything under that will block the PR
regardless. Confirm ≥95 on both. Then Ctrl-C.

- [ ] **Step 6: Check it at phone width**

Still in preview, set the viewport to 390px. Confirm on `/subscribe/`: the grid
drops to one column, the feed URL does not overflow horizontally, and the copy
button is reachable. Confirm the footer pills wrap rather than overflow.

- [ ] **Step 7: Commit anything the checks turned up**

If steps 1–6 required fixes, commit them. If not, skip.

---

## Out of scope — do not do these

- **Do not add YouTube Music.** No verified URL exists. Adding one means adding an
  entry to `SUBSCRIBE_LINKS` with `featured: false` once Matty supplies it.
- **Do not change the Overcast URL** without a logged-in check.
- **Do not add nav columns to the footer.** The canvas drew them; the ADR
  explicitly drops them.
- **Do not touch the podcast feed.**
- **Do not add a test framework.**

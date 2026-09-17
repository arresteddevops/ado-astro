# Listen-links are site-wide; /subscribe becomes a thin canonical page

Issue #62 started as "the /subscribe page looks like junk." Auditing it during the
Search Console cleanup (#61, #63) turned up something more structural: **nothing on the
site links to `/subscribe/` at all.** It is in the sitemap, so Google can reach it, but
no human can navigate there. That is why it rotted — it kept its WordPress-era markup
through two migrations because nobody ever saw it.

Fixing the page alone would leave that intact. So the decision is about where "where to
listen" lives, not about one page's markup.

## Decision

Listen-links appear **inline, site-wide** — in a new site footer and on every episode
page — rather than living only on a subscribe page people have to find. `/subscribe/`
survives as the one rich, canonical destination: it owns the speakable URL
(`arresteddevops.com/subscribe`), lists every platform, and carries the feed URL. It is
no longer the only place to subscribe.

The reasoning: people decide to subscribe while listening to an episode, not while
browsing a subscribe page. The episode page is the moment of intent, and it was the one
surface with no way to act on it.

`Subscribe` also joins the primary nav in `Header.astro`, which is the minimum fix for
the orphaning.

### Inline placements show three platforms, not eight

The full platform list is eight entries. Eight inline pills on every page is a wide band
of near-identical controls, and it buries the feed URL. So the inline treatment (footer
and episode pages) shows **Apple Podcasts, Spotify, Pocket Casts, and RSS**, plus an
"All 8 platforms" link through to `/subscribe/`, which carries the complete grid. Those
three cover the overwhelming bulk of podcast listening; anyone on Audible or iHeart
clicks once.

## The platform list

`SUBSCRIBE_LINKS` in `src/consts.ts` was carried over from the legacy Hugo config and is
both stale and incomplete. Corrected and extended:

| Platform | URL | Note |
|---|---|---|
| Apple Podcasts | `https://podcasts.apple.com/us/podcast/arrested-devops/id773888088` | was `http://itunes.apple.com/...` with `at=11lsCi`, a dead Apple affiliate tag |
| Spotify | `https://open.spotify.com/show/7hHA2ZlfOmbwv96wEBaMR2` | unchanged |
| Pocket Casts | `https://pca.st/VqEP` | unchanged |
| Overcast | `https://overcast.fm/itunes773888088` | **unverified** — see open items |
| iHeartRadio | `https://www.iheart.com/podcast/256-arrested-devops-43075205` | new |
| Amazon Music | `https://www.amazon.com/dp/B08K5862TB` | new; tracking params stripped from the supplied URL |
| Audible | `https://www.audible.com/podcast/Arrested-DevOps/B08K56VQJ1` | new |
| RSS | `/episode/index.xml` | unchanged |

Two removals. The generic `android` entry (a `subscribeonandroid.com` wrapper) is a
2015-era pattern made redundant by listing real platforms. YouTube is dropped because
the show no longer publishes video episodes.

The shape changes from a flat object to an ordered array of
`{ id, name, url, featured }`, because the inline placements need to render a subset in
a deliberate order and the current object gives no way to express either.

## What gets built

`/subscribe/` becomes a dedicated `src/pages/subscribe.astro`, joining `sponsorship` and
`contact` in the `dedicatedPages` set in `[page].astro`; `src/content/pages/subscribe.md`
is deleted. A new `ListenLinks.astro` renders the platform set in a `full` variant (the
subscribe page's card grid) and a `compact` variant (footer and episode pages), and the
homepage's hand-rolled `subscribe-row` is refactored onto it so there is one definition
of "where to listen" rather than the current two. A new `Footer.astro` is added to
`BaseLayout.astro` — the site has never had a footer.

The feed block gets a real copy button rather than the current
`onclick="this.focus();this.select();"` text input, which is poor for keyboard and
screen reader users. The button must degrade gracefully: the Clipboard API rejects on
insecure contexts and when permission is denied, so the feed URL stays visible and
selectable as text regardless.

Design is settled in the Broadcast Pop canvas for this work:
https://claude.ai/artifact/VR2evYAPSEdHdqj7TSr8i3

## Constraints this must respect

The canonical feed URL stays `/episode/index.xml` and the subscribe page links it
**directly**. The `/feed/podcast/` alias added in #63 is a safety net for external
subscribers who already hold the old URL, not something our own pages should route
through.

`--color-red` (`#e04f39`) is 3.57:1 on cream and must not be used for normal-size text —
`--color-red-deep` (`#b8341f`) is the 5.37:1 variant. Controls clear the 44px hit-target
floor. And per CLAUDE.md, any markup the copy button inserts at runtime gets no scoped
CSS, so anything client-rendered needs `<style is:global>`.

## Open items

Two URLs are unconfirmed and must not ship guessed:

- **YouTube Music** — Matty is sorting out distribution. Note that YouTube Music serves
  its SPA shell with HTTP 200 for arbitrary paths, so a guessed URL cannot be validated
  by fetching it.
- **Overcast** — `overcast.fm/itunes773888088` follows Overcast's documented Apple-ID
  convention, but `overcast.fm` returns a login wall (HTTP 200, no show content), so it
  could not be verified from outside. Needs a logged-in check before launch.

Ship with whatever is verified; add the rest when confirmed.

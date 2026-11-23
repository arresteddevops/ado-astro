# Move the podcast feed to Blubrry Publisher

**Status: proposed.** Nothing here is decided until the open items below are answered and
the dry-run import is clean. Issue #167 holds the research and Blubrry's replies.

ADR-0001 rebuilt the feed in Astro so the site, not a host, owns it. This proposes
reversing that: import the feed into Blubrry Publisher and redirect `/episode/index.xml`
to the Publisher feed. We would do it for one workflow, not for demand: Apple Podcasts
HLS video, the mp3, and the YouTube upload from a single publish. Blubrry says HLS only
works through Publisher and is not compatible with an externally generated feed like ours.

A second effect, not the reason: the feed is 1.96 MB raw and about 622 KB gzipped because
it embeds every episode body in `<content:encoded>`, and it is the leading suspect for the
Netlify bandwidth step-up since late September (unproven, no per-path data). A feed served
by Blubrry stops costing us that bandwidth.

## Hard constraints (unchanged from CLAUDE.md)

- The feed URL `/episode/index.xml` keeps working for every existing subscriber.
- For every existing episode, the audio enclosure URL and the GUID do not change. The GUID
  today is `media_prefix + podcast_file`.

## Decision (when accepted)

1. **Import, don't recreate.** Blubrry imports the current feed into Publisher, keeping
   every GUID and enclosure URL. Before any redirect, a private test import (or test show)
   is compared against the live feed item by item: GUID, enclosure URL, length, `pubDate`,
   title, explicit flag, order. Any difference stops the cutover.
2. **Redirect the feed.** A forced Netlify redirect (`/episode/index.xml` to the Publisher
   feed, `301!` or `force = true`) because the Astro build writes a real file at that path,
   so an unforced rule loses to the file. Verify with `curl -sI` that it returns a 301.
   Then stop building the endpoint, or leave it building as a rollback until the exit
   plan below is proven.
3. **The feed stops carrying `content:encoded`.** Blubrry does not use it going forward.
   The site keeps the full show notes on episode pages. Which feed field carries the
   episode body, and its length limit, is an open item.
4. **Video is for new episodes only.** Blubrry's back-catalog route is to republish an old
   episode as a new post, which gets a new GUID. That breaks the constraint above, so it is
   off the table. If Blubrry can attach video to an imported episode without a republish,
   revisit this.
5. **New episodes are published from Publisher.** The `create-episode` skill and the
   publish checklist change to match. The episode file in this repo stays the source of
   truth for the site and show notes (ADR-0003); Publisher holds the audio, video and feed.
6. **Record Publisher GUIDs in the repo** (a field on each episode, or one data file) so a
   later exit can rebuild the feed with the same GUIDs. Without this, leaving Blubrry
   means re-deriving GUIDs from Blubrry's data.
7. **Go-live gating (ADR-0006) moves to Blubrry scheduling.** The site and the feed would
   no longer share one gate. Blubrry says episodes can be scheduled, but exact-time
   release is not a priority, so a gap between the site going live and the feed going live
   is acceptable. The scheduled function, `go-live.yml` and `check-feed.mjs` need to be
   retired or reduced to the site only. See open items for the "run both" option.

## Why not the alternatives

- **Keep our feed, add video elsewhere.** Apple's video delivery needs the HLS workflow,
  which Blubrry limits to Publisher. Adding video to our own feed by hand is a larger
  build with no hosting help.
- **Trim `content:encoded` to the newest 20 to 25 episodes and stay put.** Fixes the
  bandwidth if the feed is the cause, and keeps ADR-0001 intact. It does nothing for video.
  This is the fallback if the migration stalls or the Netlify plan question resolves in our
  favour.
- **Move to a different host.** Matty has been on Blubrry for over 10 years, the media
  files and GUIDs already live there, and the HLS offer is Blubrry's.

## Consequences

- ADR-0001 is superseded for the feed. The site no longer produces the feed; the
  Astro endpoint is removed once the cutover is proven.
- More dependence on Blubrry. Exit is possible: the main feed can be redirected away from
  Publisher at any time, but HLS stops working, and the stored GUIDs (item 6) are what make
  the exit safe.
- Some podcast apps ignore a 301 and keep polling the old URL for a long time. Those
  requests become small redirect responses from Netlify, so the bandwidth drop is
  large but gradual, and not zero.
- Show notes could live in two places (the episode page, and Publisher's body field).
  Keep Publisher's copy short, link to the episode page, and treat the repo as the source.
- Audio processing may change. We use Auphonic and publish about 64 kbps mono. Blubrry's
  generated mp3 may differ in bitrate and loudness. If Media Mastering replaces Auphonic
  (an add-on, about $10 a month per Matty, the same as Auphonic today), that is a cost
  wash, not a saving.
- Files that assume our feed and need updating at cutover: `src/pages/episode/index.xml.ts`,
  `scripts/check-feed.mjs`, `scripts/lib/go-live.mjs` (feed side), the go-live function
  and workflow, the `create-episode` skill, and the redirect rules.

## Open items

Fill these in from Blubrry's replies and Apple's review. The status stays "proposed" until
items 1 to 4 are answered.

1. **Private test import.** Can Blubrry import our feed into a test show so we can run the
   diff before any redirect? Result and diff: _pending_.
2. **Publisher on Advanced 6.** Is it included, or enabled on a test show? _pending_.
3. **Mastering.** Does Blubrry master a pre-normalized Descript MP4, to what loudness
   target, and at what bitrate and channel count is the generated mp3? _pending_.
4. **Show notes field.** Which feed field carries the episode body once `content:encoded`
   is gone, and is there a length limit? _pending_.
5. **YouTube visibility.** Can the video stay unlisted or private until the episode goes
   live? _pending_.
6. **Back catalog.** Can an imported episode take video without a republish and a new
   GUID? _pending_.
7. **Apple video delivery.** The HLS Video request went to Podcasts Connect on Nov 23,
   2026. Review reportedly takes up to two weeks. Status: _pending_.
8. **Go-live.** Retire ADR-0006's gate for the feed, or run both (site gate plus Blubrry
   schedule)? Decide after seeing how Publisher scheduling behaves on a test episode.
9. **Netlify support ticket.** The plan and allowance mismatch (Starter Legacy, 1 TB shown,
   $55 October invoice) is separate from this decision, but its answer tells us how much
   the bandwidth side effect is worth. _pending_.
10. **Dry run.** Publish one future episode end to end (audio, HLS, YouTube) before the
    redirect goes live, and confirm the audio enclosure and GUID of every existing
    episode still match.

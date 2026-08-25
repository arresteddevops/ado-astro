# Person-centric guest model with embedded bio snapshots

The legacy site stores one file per Guest Version (a person-at-a-point-in-time snapshot,
e.g. `pcheslock.md` / `pcheslock2.md`), grouped by `guest_group`, each with its own URL.
We restructure to one entity per human: a person file holding its bio snapshots keyed by
the old file stems. Episode frontmatter is unchanged — `guests = ["pcheslock2"]` resolves
to (person `pcheslock`, snapshot 2), so episode pages keep the era-correct bio for free.
Old Guest Version URLs (`/guest/pcheslock2/`) 301 to the person page — the one deliberate
exception to the zero-URL-changes rule, judged safe because version URLs have negligible
inbound traffic (`static/_redirects` in the legacy repo already has this exact pattern
for `ashafer2`, so it's a validated precedent, not a novel risk). A migration script
folds the 332 version files into person files using `guest_group` — the deprecated `Aka`
field turned out to be used by zero files, so no fallback logic for it was needed.

**Canonical snapshot ordering.** The in-file `Date`/`date` field can't be trusted to pick
the newest snapshot in a group — the largest groups (`mstratton`, `bkromhout`) share one
identical bulk-migration timestamp across every member. Ordering instead comes from the
filename's numeric suffix (`pcheslock` < `pcheslock2` < `pcheslock3`), cross-checked
against git first-commit date where it matters.

**Broken references.** 15 of 332 episode `guests[]` entries point at a stem with no
matching file (typos like `smurawksi`, or numbering gaps). The migration script corrects
identifiable typos to the real stem and creates a minimal placeholder person for the rest,
so no episode silently loses a guest chip — flagged for a real bio to be filled in later.

**Host/Guest stay fully separate.** A handful of guest files belong to people who later
became hosts (`bkromhout4.md`, `mstratton3.md`, `thess2.md` — pre-hosting appearances).
These do **not** merge into the Host entity: Host and Guest are independent collections,
and the same human legitimately holds both (a host can appear as a guest on a different
episode, e.g. a year-end wrap-up). These files fold via the same plain `guest_group`
logic as every other guest file — no special-casing needed.

Rejected: porting castanet's model as-is (kept the awkward many-URLs-per-person shape we
were trying to escape), a hybrid with both version pages and person pages (two URLs
claiming to be the same guest), and merging Host entities with Guest entities for the
same human (collapses a real, intentional dual-role into one identity).

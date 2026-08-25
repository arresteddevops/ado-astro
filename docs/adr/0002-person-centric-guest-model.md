# Person-centric guest model with embedded bio snapshots

The legacy site stores one file per Guest Version (a person-at-a-point-in-time snapshot,
e.g. `pcheslock.md` / `pcheslock2.md`), grouped by `guest_group`, each with its own URL.
We restructure to one entity per human: a person file holding its bio snapshots keyed by
the old file stems. Episode frontmatter is unchanged — `guests = ["pcheslock2"]` resolves
to (person `pcheslock`, snapshot 2), so episode pages keep the era-correct bio for free.
Old Guest Version URLs (`/guest/pcheslock2/`) 301 to the person page — the one deliberate
exception to the zero-URL-changes rule, judged safe because version URLs have negligible
inbound traffic. A migration script folds the 332 version files into person files using
`guest_group` (and the deprecated `Aka` field where present).

Rejected: porting castanet's model as-is (kept the awkward many-URLs-per-person shape we
were trying to escape), and a hybrid with both version pages and person pages (two URLs
claiming to be the same guest).

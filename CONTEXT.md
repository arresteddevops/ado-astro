# Arrested DevOps website

The Astro rebuild of arresteddevops.com — a podcast website whose content model is
episodes, the people on them, and the podcast feed that distributes them.

## Language

**Episode**:
One published show, identified by its markdown file. Carries audio metadata (file,
duration, bytes), an episode number, and references to Guest Versions, Hosts, and
Sponsors by file stem.

**Guest**:
A human who has appeared on the show. One entity (and one URL) per human, holding that
person's Bio Snapshots. See ADR-0002.
_Avoid_: guest group, guest version (legacy castanet terms for what is now a Guest and
its Bio Snapshots)

**Bio Snapshot**:
A Guest's bio, photo, and affiliation as they were at the time of an appearance,
embedded in the Guest entity and keyed by its legacy file stem (`pcheslock2`). Episodes
reference a Bio Snapshot by that key, so episode pages show the era-correct bio.
_Avoid_: guest profile, Aka

**Host**:
A recurring presenter with a page under `/host/`. Same file shape as a Guest Version.

**The Feed**:
The iTunes-compatible podcast RSS feed at `/episode/index.xml`. Every podcast app
subscription points at it. Its item GUIDs are the enclosure URL (Media Prefix +
episode audio filename) and must never change.

**Media Prefix**:
The Blubrry base URL prepended to an episode's audio filename to form the enclosure
URL. Audio is hosted on Blubrry, never by the site.

**Alias**:
A short vanity path carried in an episode's frontmatter (`/205`, `/aisdlc`) that must
redirect to the episode's canonical URL.

**Redirect Stub**:
A standalone vanity redirect defined under `content/redirect/` in the legacy repo
(`/bananastand`, `/itunes`). Same obligation as an Alias, different source.

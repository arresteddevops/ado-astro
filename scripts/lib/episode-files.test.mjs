import { test } from "node:test";
import assert from "node:assert/strict";
import fs from "node:fs";
import os from "node:os";
import path from "node:path";
import { readEpisodes, liveEpisodeNumbers } from "./episode-files.mjs";

function fixtureRoot() {
  const root = fs.mkdtempSync(path.join(os.tmpdir(), "ado-episodes-"));
  const dir = path.join(root, "src/content/episodes");
  fs.mkdirSync(dir, { recursive: true });
  fs.writeFileSync(
    path.join(dir, "old-one.md"),
    `---
title: Old One
date: 2017-05-08T00:59:40.000Z
episodeNumber: "84"
guests:
  - person: ashafer
    snapshot: ashafer
hosts:
  - mstratton
---
body
`,
  );
  fs.writeFileSync(
    path.join(dir, "future-one.md"),
    `---
title: Future One
date: 2099-11-11
episodeNumber: "9999"
hosts:
  - mstratton
---
body
`,
  );
  return root;
}

test("readEpisodes reads slug, date, number and person ids from frontmatter", () => {
  const eps = readEpisodes(fixtureRoot()).sort((a, b) => a.slug.localeCompare(b.slug));
  assert.deepEqual(
    eps.map((e) => e.slug),
    ["future-one", "old-one"],
  );
  const old = eps.find((e) => e.slug === "old-one");
  assert.equal(old.date.toISOString(), "2017-05-08T00:59:40.000Z");
  assert.equal(old.episodeNumber, "84");
  assert.deepEqual(old.guestIds, ["ashafer"]);
  assert.deepEqual(old.hostIds, ["mstratton"]);
  const future = eps.find((e) => e.slug === "future-one");
  assert.equal(future.date.toISOString(), "2099-11-11T00:00:00.000Z");
  assert.deepEqual(future.guestIds, []);
});

test("liveEpisodeNumbers drops episodes that haven't gone live when the gate is on", () => {
  const eps = readEpisodes(fixtureRoot());
  assert.deepEqual([...liveEpisodeNumbers(eps, { now: new Date("2026-10-19"), gate: true })], ["84"]);
});

test("liveEpisodeNumbers keeps everything when the gate is off", () => {
  const eps = readEpisodes(fixtureRoot());
  const out = liveEpisodeNumbers(eps, { now: new Date("2026-10-19"), gate: false });
  assert.deepEqual([...out].sort(), ["84", "9999"]);
});

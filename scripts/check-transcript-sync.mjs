// Smallest check that fails if the transcript-sync timing math breaks (issue #21).
//
//   node scripts/check-transcript-sync.mjs
//
// Imports the .ts directly (node strips types natively).

import assert from "node:assert/strict";
import { parseMarker, fillTimes, findActive } from "../src/lib/transcript-sync.ts";

// markers: after a speaker label, at paragraph start, and absent
assert.equal(parseMarker("Bridget: [00:00:00] hi"), 0);
assert.equal(parseMarker("Bridget: [00:01:35] hi"), 95);
assert.equal(parseMarker("[01:02:03] hi"), 3723);
assert.equal(parseMarker("no marker here"), null);
// a bracketed timestamp quoted deep in a paragraph is not a marker
assert.equal(parseMarker(`${"x".repeat(200)} [00:09:00]`), null);

// interior gap: paragraphs 0-2 (10+10+30 = 50 chars) fill 0..60s by length
const t = fillTimes([0, null, null, 60], [10, 10, 30, 10]);
assert.deepEqual(t.map(Math.round), [0, 12, 24, 60]);

// trailing paragraphs run at 15 chars/s from the last marker
const tail = fillTimes([0, 60, null], [10, 30, 30]);
assert.deepEqual(tail.map(Math.round), [0, 60, 62]);
const tail2 = fillTimes([0, 60, null, null], [10, 30, 15, 15]);
assert.deepEqual(tail2.map(Math.round), [0, 60, 62, 63]);

// no leading marker: starts at 0
assert.equal(fillTimes([null, 60], [10, 10])[0], 0);

// out-of-order marker never produces an unsorted array
const bad = fillTimes([0, 120, 60], [10, 10, 10]);
assert.ok(bad.every((v, i) => i === 0 || v >= bad[i - 1]));

// active lookup
assert.equal(findActive([0, 15, 30, 60], -1), 0);
assert.equal(findActive([0, 15, 30, 60], 15), 1);
assert.equal(findActive([0, 15, 30, 60], 29.9), 1);
assert.equal(findActive([0, 15, 30, 60], 999), 3);

console.log("check-transcript-sync: ok");

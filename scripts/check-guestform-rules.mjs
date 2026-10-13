#!/usr/bin/env node
// Self-check for src/lib/guestform-rules.mjs — the only real logic in the
// guest intake form. Run: node scripts/check-guestform-rules.mjs
import assert from "node:assert/strict";
import {
  HANDLE_PATTERN,
  headshotFileProblem,
  headshotSizeProblem,
} from "../src/lib/guestform-rules.mjs";

const MB = 1024 * 1024;

// File type + byte size (checked before we bother decoding the image).
assert.equal(headshotFileProblem({ type: "image/jpeg", bytes: 5 * MB }), null, "exactly 5 MB is allowed");
assert.equal(headshotFileProblem({ type: "image/png", bytes: 1 }), null, "png is allowed");
assert.match(headshotFileProblem({ type: "image/jpeg", bytes: 5 * MB + 1 }), /5 MB/, "5 MB + 1 byte is rejected");
assert.match(headshotFileProblem({ type: "image/heic", bytes: MB }), /JPG or PNG/, "HEIC is rejected with a plain message");
assert.match(headshotFileProblem({ type: "image/webp", bytes: MB }), /JPG or PNG/, "webp is rejected");
assert.match(headshotFileProblem({ type: "", bytes: MB }), /JPG or PNG/, "unknown type is rejected");

// Decoded dimensions (shorter side must be >= 400, any aspect ratio).
assert.equal(headshotSizeProblem({ width: 400, height: 400 }), null, "400x400 is allowed");
assert.equal(headshotSizeProblem({ width: 400, height: 1600 }), null, "non-square is fine if the short side is 400");
assert.match(headshotSizeProblem({ width: 399, height: 400 }), /at least 400px/, "399 wide is rejected");
assert.match(headshotSizeProblem({ width: 1000, height: 399 }), /at least 400px/, "399 tall is rejected");

// The HTML `pattern` attribute: whole-value match, compiled with the `v` flag
// exactly as browsers do (a bare "-" in a class is a SyntaxError under `v`,
// and the browser would then silently ignore the pattern).
const handle = new RegExp(`^(?:${HANDLE_PATTERN})$`, "v");
for (const ok of ["mattstratton", "o.brien", "name.bsky.social", "my-handle_1", "A1"]) {
  assert.ok(handle.test(ok), `handle should be accepted: ${ok}`);
}
for (const bad of ["@mattstratton", "https://github.com/x", "linkedin.com/in/x", "has space", "", "a/b", "x?y=1"]) {
  assert.ok(!handle.test(bad), `handle should be rejected: ${JSON.stringify(bad)}`);
}

console.log("guestform rules: ok");

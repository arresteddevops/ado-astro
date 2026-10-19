import { test, before, after } from "node:test";
import assert from "node:assert/strict";
import http from "node:http";
import path from "node:path";
import { execFile } from "node:child_process";
import { readEpisodes, liveEpisodeNumbers } from "./lib/episode-files.mjs";

const REPO_ROOT = path.resolve(path.dirname(new URL(import.meta.url).pathname), "..");
const SCRIPT = path.join(REPO_ROOT, "scripts/go-live-check.mjs");
const live = [...liveEpisodeNumbers(readEpisodes(REPO_ROOT), { gate: true })];
const feedFor = (numbers) => numbers.map((n) => `<item><itunes:episode>${n}</itunes:episode></item>`).join("\n");

// execFile (async) because the stub server lives in this process; a sync spawn would deadlock it.
let server;
let respond = () => ({ status: 200, body: "" });
before(async () => {
  server = http.createServer((_req, res) => {
    const { status, body } = respond();
    res.writeHead(status).end(body);
  });
  await new Promise((r) => server.listen(0, "127.0.0.1", r));
});
after(() => server.close());

const run = (args) =>
  new Promise((resolve) => {
    const env = { ...process.env, CONTEXT: "production", GO_LIVE_FEED_URL: `http://127.0.0.1:${server.address().port}/` };
    delete env.GO_LIVE_NOW;
    execFile("node", [SCRIPT, ...args], { env, timeout: 10_000 }, (err, stdout, stderr) =>
      resolve({ code: err ? err.code : 0, stdout, stderr }),
    );
  });

test("due fails cleanly (message, no stack trace) when the live feed is a 503", async () => {
  respond = () => ({ status: 503, body: "" });
  const out = await run(["due"]);
  assert.equal(out.code, 1);
  assert.match(out.stderr, /could not read the live feed/);
  assert.match(out.stderr, /503/);
  assert.doesNotMatch(out.stderr, /\n\s+at /);
});

test("due reports false when the live feed already has every live episode", async () => {
  respond = () => ({ status: 200, body: feedFor(live) });
  const out = await run(["due"]);
  assert.equal(out.code, 0);
  assert.match(out.stdout, /due=false/);
});

test("due reports true when a live episode is absent from the live feed", async () => {
  respond = () => ({ status: 200, body: feedFor(live.slice(1)) });
  const out = await run(["due"]);
  assert.equal(out.code, 0);
  assert.match(out.stdout, /due=true/);
});

test("a flag passed without a value is a usage error, not a silent NaN", async () => {
  const out = await run(["verify", "--timeout-seconds"]);
  assert.equal(out.code, 2);
  assert.match(out.stderr, /--timeout-seconds/);
});

import test from "node:test";
import assert from "node:assert/strict";
import { run } from "../netlify/functions/go-live.mjs";

const ep = { date: new Date("2026-11-18"), episodeNumber: "216" };
const feed = (n) => `<itunes:episode>${n}</itunes:episode>`;
const mk = (feedXml) => {
  const calls = [];
  const fetchImpl = async (url, opts) => {
    calls.push(url);
    return url === "hook" ? { ok: true } : { ok: true, text: async () => feedXml };
  };
  return { calls, fetchImpl };
};

test("due: live episode missing from feed posts the hook", async () => {
  const { calls, fetchImpl } = mk(feed(215));
  const now = new Date("2026-11-18T11:30:00Z");
  assert.equal(await run({ episodes: [ep], now, fetchImpl, hook: "hook" }), "triggered");
  assert.ok(calls.includes("hook"));
});

test("before go-live (06:00 ET = 11:00Z): no-op", async () => {
  const { calls, fetchImpl } = mk(feed(215));
  const now = new Date("2026-11-18T10:59:00Z");
  assert.equal(await run({ episodes: [ep], now, fetchImpl, hook: "hook" }), "not due");
  assert.ok(!calls.includes("hook"));
});

test("already in the feed: no-op", async () => {
  const { fetchImpl } = mk(feed(216));
  const now = new Date("2026-11-18T12:00:00Z");
  assert.equal(await run({ episodes: [ep], now, fetchImpl, hook: "hook" }), "not due");
});

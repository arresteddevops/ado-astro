import { test } from "node:test";
import assert from "node:assert/strict";
import { goLiveInstant, gateEnabled, isLive, unreleasedPersonIds, pinnedNow, currentTime } from "./go-live.mjs";

const iso = (d) => d.toISOString();

test("goLiveInstant is 6am EST (11:00Z) in winter", () => {
  assert.equal(iso(goLiveInstant(new Date("2026-11-11"))), "2026-11-11T11:00:00.000Z");
});

test("goLiveInstant is 6am EDT (10:00Z) in summer", () => {
  assert.equal(iso(goLiveInstant(new Date("2026-07-15"))), "2026-07-15T10:00:00.000Z");
});

test("goLiveInstant on the spring-forward day is EDT", () => {
  assert.equal(iso(goLiveInstant(new Date("2026-03-08"))), "2026-03-08T10:00:00.000Z");
});

test("goLiveInstant on the fall-back day is EST", () => {
  assert.equal(iso(goLiveInstant(new Date("2026-11-01"))), "2026-11-01T11:00:00.000Z");
});

test("goLiveInstant uses the UTC calendar day of a date with a time component", () => {
  assert.equal(iso(goLiveInstant(new Date("2026-11-12T01:00:00Z"))), "2026-11-12T11:00:00.000Z");
});

test("isLive is false 1ms before the go-live instant and true at it", () => {
  const date = new Date("2026-11-11");
  const at = goLiveInstant(date);
  assert.equal(isLive(date, { now: new Date(at.getTime() - 1), gate: true }), false);
  assert.equal(isLive(date, { now: at, gate: true }), true);
});

test("isLive is true for a far-future date when the gate is off", () => {
  assert.equal(isLive(new Date("2099-01-01"), { now: new Date("2026-01-01"), gate: false }), true);
});

test("gateEnabled is on for production and for no context", () => {
  assert.equal(gateEnabled({ CONTEXT: "production" }), true);
  assert.equal(gateEnabled({}), true);
});

test("gateEnabled is off for deploy previews and branch deploys", () => {
  assert.equal(gateEnabled({ CONTEXT: "deploy-preview" }), false);
  assert.equal(gateEnabled({ CONTEXT: "branch-deploy" }), false);
});

test("gateEnabled is off in dev", () => {
  assert.equal(gateEnabled({}, true), false);
});

const NOW = new Date("2026-10-19T12:00:00Z");
const past = new Date("2026-01-01");
const future = new Date("2026-11-11");

test("unreleasedPersonIds returns a guest who only appears in a future episode", () => {
  const out = unreleasedPersonIds([{ date: future, guestIds: ["newbie"], hostIds: [] }], { now: NOW, gate: true });
  assert.deepEqual([...out.guests], ["newbie"]);
});

test("unreleasedPersonIds skips a guest with one live and one future episode", () => {
  const out = unreleasedPersonIds(
    [
      { date: past, guestIds: ["regular"], hostIds: [] },
      { date: future, guestIds: ["regular"], hostIds: [] },
    ],
    { now: NOW, gate: true },
  );
  assert.equal(out.guests.size, 0);
});

test("unreleasedPersonIds returns a host who only appears in future episodes", () => {
  const out = unreleasedPersonIds([{ date: future, guestIds: [], hostIds: ["newhost"] }], { now: NOW, gate: true });
  assert.deepEqual([...out.hosts], ["newhost"]);
});

test("pinnedNow samples the clock once, so every consumer in a build agrees on 'now'", () => {
  const ticks = [new Date("2026-11-11T10:59:59Z"), new Date("2026-11-11T11:00:01Z")];
  const now = pinnedNow(() => ticks.shift());
  const first = now();
  assert.equal(now().getTime(), first.getTime());
  assert.equal(first.toISOString(), "2026-11-11T10:59:59.000Z");
  assert.equal(ticks.length, 1);
});

test("currentTime honors GO_LIVE_NOW so every process in one build agrees on 'now'", () => {
  assert.equal(currentTime({ GO_LIVE_NOW: "2026-11-11T10:59:59Z" }).toISOString(), "2026-11-11T10:59:59.000Z");
});

test("currentTime falls back to the real clock when GO_LIVE_NOW is unset", () => {
  assert.ok(Math.abs(currentTime({}).getTime() - Date.now()) < 5000);
});

test("currentTime throws on an unparseable GO_LIVE_NOW instead of silently using the real clock", () => {
  assert.throws(() => currentTime({ GO_LIVE_NOW: "not-a-date" }), /GO_LIVE_NOW/);
});

test("isLive's default clock follows GO_LIVE_NOW", () => {
  const date = new Date("2026-11-11");
  const at = goLiveInstant(date);
  const prev = process.env.GO_LIVE_NOW;
  try {
    process.env.GO_LIVE_NOW = new Date(at.getTime() - 1).toISOString();
    assert.equal(isLive(date, { gate: true }), false);
    process.env.GO_LIVE_NOW = at.toISOString();
    assert.equal(isLive(date, { gate: true }), true);
  } finally {
    if (prev === undefined) delete process.env.GO_LIVE_NOW;
    else process.env.GO_LIVE_NOW = prev;
  }
});

test("unreleasedPersonIds is empty when the gate is off", () => {
  const out = unreleasedPersonIds([{ date: future, guestIds: ["newbie"], hostIds: ["newhost"] }], {
    now: NOW,
    gate: false,
  });
  assert.equal(out.guests.size + out.hosts.size, 0);
});

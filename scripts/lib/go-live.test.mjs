import { test } from "node:test";
import assert from "node:assert/strict";
import { goLiveInstant, gateEnabled, isLive, unreleasedPersonIds } from "./go-live.mjs";

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

test("unreleasedPersonIds is empty when the gate is off", () => {
  const out = unreleasedPersonIds([{ date: future, guestIds: ["newbie"], hostIds: ["newhost"] }], {
    now: NOW,
    gate: false,
  });
  assert.equal(out.guests.size + out.hosts.size, 0);
});

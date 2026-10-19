// Episode go-live gate (issue #131, design: docs/superpowers/specs/2026-10-19-
// future-dated-episodes-design.md). Plain JS so both the Astro code and the
// pre-build scripts (which can't import `astro:content`) share one rule: an
// episode is live from 06:00 America/New_York on the UTC calendar day of its
// `date`.

const NY_HOUR = new Intl.DateTimeFormat("en-US", {
  timeZone: "America/New_York",
  hour: "numeric",
  hourCycle: "h23",
});

/**
 * @param {Date} date an episode's `date` (bare date or full timestamp)
 * @returns {Date} the instant it goes live
 */
export function goLiveInstant(date) {
  const y = date.getUTCFullYear();
  const m = date.getUTCMonth();
  const d = date.getUTCDate();
  // 6am Eastern is 10:00Z in EDT and 11:00Z in EST; the one whose NY hour is 6 wins.
  const edt = new Date(Date.UTC(y, m, d, 10));
  return Number(NY_HOUR.format(edt)) === 6 ? edt : new Date(Date.UTC(y, m, d, 11));
}

/**
 * Off for Netlify deploy previews, branch deploys and `astro dev`, so authors
 * can review unpublished episodes; on everywhere else (production, local builds).
 * @param {{ CONTEXT?: string }} [env]
 * @param {boolean} [dev]
 */
export function gateEnabled(env = process.env, dev = false) {
  if (dev) return false;
  return env.CONTEXT !== "deploy-preview" && env.CONTEXT !== "branch-deploy";
}

/**
 * @param {Date} date
 * @param {{ now?: Date, gate?: boolean }} [opts]
 */
export function isLive(date, { now = new Date(), gate = gateEnabled() } = {}) {
  return !gate || now >= goLiveInstant(date);
}

/**
 * Ids that appear in at least one episode, none of which is live yet. Such a
 * guest/host gets no page or redirects, or their page would leak the episode.
 * @param {{ date: Date, guestIds: string[], hostIds: string[] }[]} episodes
 * @param {{ now?: Date, gate?: boolean }} [opts]
 * @returns {{ guests: Set<string>, hosts: Set<string> }}
 */
export function unreleasedPersonIds(episodes, opts = {}) {
  const live = { guests: new Set(), hosts: new Set() };
  const seen = { guests: new Set(), hosts: new Set() };
  for (const ep of episodes) {
    const isEpLive = isLive(ep.date, opts);
    for (const id of ep.guestIds) {
      seen.guests.add(id);
      if (isEpLive) live.guests.add(id);
    }
    for (const id of ep.hostIds) {
      seen.hosts.add(id);
      if (isEpLive) live.hosts.add(id);
    }
  }
  return {
    guests: new Set([...seen.guests].filter((id) => !live.guests.has(id))),
    hosts: new Set([...seen.hosts].filter((id) => !live.hosts.has(id))),
  };
}

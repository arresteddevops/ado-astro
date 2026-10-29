import { getCollection, type CollectionEntry } from "astro:content";
import { gateEnabled, isLive, pinnedNow, unreleasedPersonIds } from "../../scripts/lib/go-live.mjs";

export const EPISODES_PER_PAGE = 9;

// Every consumer that lists or generates pages for episodes goes through
// here, so an episode that hasn't gone live yet (see scripts/lib/go-live.mjs,
// issue #131) is invisible everywhere at once.
const gate = () => gateEnabled(process.env, import.meta.env.DEV);
// One "now" for the whole build, shared by pages, listings and the feed.
const buildNow = pinnedNow();

export async function getLiveEpisodes(): Promise<CollectionEntry<"episodes">[]> {
  const opts = { now: buildNow(), gate: gate() };
  return getCollection("episodes", (episode) => isLive(episode.data.date, opts));
}

// Guest/host ids whose every episode is unreleased - they get no page, or
// the person page would leak the episode's existence.
export async function getUnreleasedPersonIds(): Promise<{ guests: Set<string>; hosts: Set<string> }> {
  const episodes = await getCollection("episodes");
  return unreleasedPersonIds(
    episodes.map((e) => ({
      date: e.data.date,
      guestIds: e.data.guests.map((g) => g.person.id),
      hostIds: e.data.hosts.map((h) => h.id),
    })),
    { now: buildNow(), gate: gate() },
  );
}

export async function getEpisodesNewestFirst(): Promise<CollectionEntry<"episodes">[]> {
  const episodes = await getLiveEpisodes();
  return episodes.sort((a, b) => b.data.date.valueOf() - a.data.date.valueOf());
}

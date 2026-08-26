import { getCollection, type CollectionEntry } from "astro:content";

export const GUESTS_PER_PAGE = 24;

// Excludes placeholder stubs - a handful of guest ids are referenced by a
// real episode but never had a real profile even in the legacy Hugo site
// (bio is literally "needs manual research"). They still need a working
// /guest/<id>/ page so the episode's guest card links somewhere real, but
// they don't belong in listings or the guest count until someone
// actually researches who they are.
export async function getGuestsSorted(): Promise<CollectionEntry<"guests">[]> {
  const guests = await getCollection("guests");
  return guests.filter((g) => !g.data.placeholder).sort((a, b) => a.data.name.localeCompare(b.data.name));
}

// Keyed by guest person id -> every episode whose guests[] points at them,
// so both the guest list (needs a count) and guest detail pages (need the
// list) share one pass over the episodes collection.
export async function getEpisodesByGuestId(): Promise<Map<string, CollectionEntry<"episodes">[]>> {
  const episodes = await getCollection("episodes");
  const map = new Map<string, CollectionEntry<"episodes">[]>();
  for (const episode of episodes) {
    for (const g of episode.data.guests) {
      const id = g.person.id;
      if (!map.has(id)) map.set(id, []);
      map.get(id)!.push(episode);
    }
  }
  return map;
}

import { getCollection, type CollectionEntry } from "astro:content";

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

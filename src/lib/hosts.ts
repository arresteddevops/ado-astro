import { getCollection, type CollectionEntry } from "astro:content";

export async function getEpisodesByHostId(): Promise<Map<string, CollectionEntry<"episodes">[]>> {
  const episodes = await getCollection("episodes");
  const map = new Map<string, CollectionEntry<"episodes">[]>();
  for (const episode of episodes) {
    for (const hostRef of episode.data.hosts) {
      const id = hostRef.id;
      if (!map.has(id)) map.set(id, []);
      map.get(id)!.push(episode);
    }
  }
  return map;
}

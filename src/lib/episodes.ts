import { getCollection, type CollectionEntry } from "astro:content";

export const EPISODES_PER_PAGE = 9;

export async function getEpisodesNewestFirst(): Promise<CollectionEntry<"episodes">[]> {
  const episodes = await getCollection("episodes");
  return episodes.sort((a, b) => b.data.date.valueOf() - a.data.date.valueOf());
}

// Reads src/content/episodes/*.md frontmatter straight from disk, for the
// scripts that can't import `astro:content` (see scripts/lib/go-live.mjs).
import fs from "node:fs";
import path from "node:path";
import YAML from "yaml";
import { isLive } from "./go-live.mjs";

/**
 * @param {string} repoRoot
 * @returns {{ slug: string, date: Date, episodeNumber: string, guestIds: string[], hostIds: string[], data: any }[]}
 */
export function readEpisodes(repoRoot) {
  const dir = path.join(repoRoot, "src/content/episodes");
  return fs
    .readdirSync(dir)
    .filter((f) => f.endsWith(".md"))
    .map((file) => {
      const raw = fs.readFileSync(path.join(dir, file), "utf8");
      const match = raw.match(/^---\n([\s\S]*?)\n---/);
      const data = YAML.parse(match ? match[1] : raw);
      return {
        slug: path.basename(file, ".md"),
        // `yaml` leaves timestamps as strings; both "2026-11-11" and full ISO parse here.
        date: new Date(data.date),
        episodeNumber: String(data.episodeNumber),
        guestIds: (data.guests ?? []).map((g) => g.person),
        hostIds: data.hosts ?? [],
        data,
      };
    });
}

/**
 * @param {ReturnType<typeof readEpisodes>} episodes
 * @param {{ now?: Date, gate?: boolean }} [opts]
 * @returns {Set<string>}
 */
export function liveEpisodeNumbers(episodes, opts) {
  return new Set(episodes.filter((e) => isLive(e.date, opts)).map((e) => e.episodeNumber));
}

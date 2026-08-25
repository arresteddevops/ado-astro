import { defineCollection, reference, z } from "astro:content";
import { glob } from "astro/loaders";

const episodes = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/episodes" }),
  schema: z.object({
    title: z.string(),
    description: z.string().default(""), // some legacy episodes have a blank Description
    date: z.coerce.date(),
    publishDate: z.coerce.date().optional(),
    episodeNumber: z.string(),
    podcastFile: z.string(),
    podcastDuration: z.string().optional(),
    podcastBytes: z.number().optional(),
    episodeImage: z.string(),
    episodeBanner: z.string().optional(),
    images: z.array(z.string()).default([]),
    // Guests carry which specific Bio Snapshot the episode pointed at (the
    // legacy stem, e.g. "pcheslock2"), not just the folded person — that's
    // the whole point of ADR-0002: episode pages show the era-correct bio.
    guests: z
      .array(z.object({ person: reference("guests"), snapshot: z.string() }))
      .default([]),
    hosts: z.array(reference("hosts")).default([]),
    sponsors: z.array(reference("sponsors")).default([]),
    aliases: z.array(z.string()).default([]),
    youtube: z.string().optional(),
    transcript: z.string().optional(),
    explicit: z.enum(["yes", "no"]).default("no"),
  }),
});

// A Guest is one entity per human. `snapshots` holds every bio-at-a-point-in-time,
// keyed by the legacy file stem, so episode `guests[]` references resolve to the
// era-correct bio. See ADR-0002.
const guests = defineCollection({
  loader: glob({ pattern: "**/*.yaml", base: "./src/content/guests" }),
  schema: z.object({
    name: z.string(),
    snapshots: z
      .array(
        z.object({
          key: z.string(),
          bio: z.string(),
          thumbnail: z.string().optional(),
          website: z.string().optional(),
          twitter: z.string().optional(),
          github: z.string().optional(),
          linkedin: z.string().optional(),
          facebook: z.string().optional(),
          instagram: z.string().optional(),
          pinterest: z.string().optional(),
          youtube: z.string().optional(),
          twitch: z.string().optional(),
          threads: z.string().optional(),
          bluesky: z.string().optional(),
          pronouns: z.string().optional(),
        }),
      )
      .min(1),
    // True when this person had no matching content/guest/*.md file at all — an
    // episode referenced a stem that didn't exist. Flagged for a real bio later.
    placeholder: z.boolean().default(false),
  }),
});

const hosts = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/hosts" }),
  schema: z.object({
    name: z.string(),
    thumbnail: z.string().optional(),
    website: z.string().optional(),
    twitter: z.string().optional(),
    github: z.string().optional(),
    linkedin: z.string().optional(),
    facebook: z.string().optional(),
    instagram: z.string().optional(),
    pinterest: z.string().optional(),
    youtube: z.string().optional(),
    twitch: z.string().optional(),
    pronouns: z.string().optional(),
  }),
});

const sponsors = defineCollection({
  loader: glob({ pattern: "**/*.yaml", base: "./src/content/sponsors" }),
  schema: z.object({
    name: z.string(),
    url: z.string().optional(),
    ad: z.string().optional(),
  }),
});

const pages = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/pages" }),
  schema: z.object({
    title: z.string(),
    description: z.string().optional(),
  }),
});

export const collections = { episodes, guests, hosts, sponsors, pages };

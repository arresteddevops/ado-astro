import fs from "node:fs";
import path from "node:path";
import type { ImageMetadata } from "astro";

// Content-collection frontmatter stores plain legacy path strings (not
// static imports), so Astro's usual "import the image" pattern doesn't
// apply — these globs give us a lookup table instead. See CLAUDE.md.
const episodeImages = import.meta.glob<{ default: ImageMetadata }>("/src/assets/episode-img/*", {
  eager: true,
});
const miscImages = import.meta.glob<{ default: ImageMetadata }>("/src/assets/img/**/*", {
  eager: true,
});

// episodeImage/episodeBanner frontmatter values are legacy paths like
// "episode/img/ai-sdlc.png" — only the filename matters, since that whole
// tree was flattened into src/assets/episode-img/ during migration.
export function getEpisodeAsset(value: string | undefined): ImageMetadata | undefined {
  if (!value) return undefined;
  const filename = value.split("/").pop();
  return episodeImages[`/src/assets/episode-img/${filename}`]?.default;
}

// Guest/host thumbnails and sponsor ad images are legacy paths rooted at
// static/img/ (e.g. "img/guests/bkromhout.png", "/img/sponsors/fly.png"),
// mirrored 1:1 under src/assets/img/.
export function getMiscAsset(value: string | undefined): ImageMetadata | undefined {
  if (!value) return undefined;
  const relative = value.replace(/^\//, "").replace(/^img\//, "");
  return miscImages[`/src/assets/img/${relative}`]?.default;
}

// The pre-made per-episode social card (if the frontmatter reference
// actually resolves to a real file — a few legacy entries are stale), or
// else the build-time-generated fallback card (see
// scripts/generate-og-images.mjs) — either way this needs to be a stable
// site-relative public/ path, not an optimized astro:assets import.
export function getEpisodeOgImage(episodeId: string, images: string[]): string {
  const first = images[0];
  if (first) {
    const target = path.resolve(process.cwd(), "public", first.replace(/^\//, ""));
    if (fs.existsSync(target)) return first.startsWith("/") ? first : `/${first}`;
  }
  return `/img/social/og/${episodeId}.png`;
}

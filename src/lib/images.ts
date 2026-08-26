import fs from "node:fs";
import path from "node:path";
import sharp from "sharp";
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

// scripts/generate-og-images.mjs writes exactly this path for every
// episode at build time, whether the source was a bespoke frontmatter
// image or a generated fallback card — so the site-relative public/ path
// below is always the right one, no existence check needed here.
export function getEpisodeOgImage(episodeId: string): string {
  return `/img/social/og/${episodeId}.jpg`;
}

// Real pixel dimensions of a public/-relative image, for accurate
// og:image:width/height (see issue #44; these varied a lot across
// legacy bespoke social images, so a hardcoded 1200x630 would lie for
// some episodes). Only works for plain public/ files, not optimized
// astro:assets output (those pass their own known ImageMetadata width/
// height through instead).
export async function getPublicImageDimensions(
  publicPath: string,
): Promise<{ width: number; height: number } | undefined> {
  const target = path.resolve(process.cwd(), "public", publicPath.replace(/^\//, ""));
  if (!fs.existsSync(target)) return undefined;
  const { width, height } = await sharp(target).metadata();
  return width && height ? { width, height } : undefined;
}

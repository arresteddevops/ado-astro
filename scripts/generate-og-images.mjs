#!/usr/bin/env node
// Build-time OG image pipeline for every episode, plus one sitewide
// default. Two sources feed it: a working bespoke social image
// (`images[0]` in frontmatter, carried over from the legacy site), or a
// branded Broadcast Pop card generated from episode data when there's no
// bespoke image (or it's a stale reference; see issue #7). Either way,
// the result is recompressed to a JPEG under public/img/social/og/<slug>.jpg
// - see issue #44: many legacy bespoke images were 700KB-1.7MB, well over
// WhatsApp's 500KB link-preview limit, purely from uncompressed PNG
// encoding (dimensions were already correct; this never resizes or crops).
//
// Run before `astro build` (see package.json) so the generated files are
// copied into dist/ along with the rest of public/.

import fs from "node:fs";
import path from "node:path";
import satori from "satori";
import { Resvg } from "@resvg/resvg-js";
import sharp from "sharp";
import YAML from "yaml";

const scriptDir = path.dirname(new URL(import.meta.url).pathname);
const REPO_ROOT = path.resolve(scriptDir, "..");
const OUT_DIR = path.join(REPO_ROOT, "public/img/social/og");

const CREAM = "#fdf3e0";
const NAVY = "#1e2a52";
const YELLOW = "#f5c518";
const RED_DEEP = "#b8341f";
const TEXT_MUTED = "#4a5378";

const fonts = [
  { name: "Archivo", data: fs.readFileSync(path.join(scriptDir, "fonts/archivo.ttf")), weight: 500 },
  { name: "Bricolage Grotesque", data: fs.readFileSync(path.join(scriptDir, "fonts/bricolage.ttf")), weight: 800 },
];

function readFrontmatter(filePath, isYaml) {
  const raw = fs.readFileSync(filePath, "utf8");
  if (isYaml) return YAML.parse(raw);
  const match = raw.match(/^---\n([\s\S]*?)\n---/);
  return YAML.parse(match[1]);
}

// Build a name lookup so we can show real guest names, not stems.
const guestNames = new Map();
for (const file of fs.readdirSync(path.join(REPO_ROOT, "src/content/guests"))) {
  const id = path.basename(file, ".yaml");
  const data = readFrontmatter(path.join(REPO_ROOT, "src/content/guests", file), true);
  guestNames.set(id, data.name);
}

function findBespokeImage(episodeData) {
  const first = episodeData.images?.[0];
  if (!first) return null;
  const target = path.join(REPO_ROOT, "public", first.replace(/^\//, ""));
  return fs.existsSync(target) ? target : null;
}

// Prefer the banner (wide, close to the 1200x630 OG aspect) over the
// square/portrait episodeImage. Either way, this is real episode art, so
// once Matty adds it the next build upgrades the card automatically - no
// separate "make a bespoke OG image" step needed.
function findBackgroundPhoto(episodeData) {
  for (const field of [episodeData.episodeBanner, episodeData.episodeImage]) {
    if (!field) continue;
    const target = path.join(REPO_ROOT, "src/assets/episode-img", path.basename(field));
    if (fs.existsSync(target)) return target;
  }
  return null;
}

function toDataUri(filePath) {
  const ext = path.extname(filePath).slice(1).toLowerCase();
  const mime = ext === "jpg" ? "jpeg" : ext;
  return `data:image/${mime};base64,${fs.readFileSync(filePath).toString("base64")}`;
}

function card({ episodeNumber, title, guestLine, photoDataUri }) {
  // With a photo backing the card, dark scrim + light text; without one,
  // the original flat cream card with navy text.
  const textColor = photoDataUri ? CREAM : NAVY;
  const mutedColor = photoDataUri ? "#d8dcec" : TEXT_MUTED;

  return {
    type: "div",
    props: {
      style: {
        width: "1200px",
        height: "630px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        position: "relative",
        background: photoDataUri ? NAVY : CREAM,
        border: `16px solid ${NAVY}`,
        padding: "64px",
        fontFamily: "Archivo",
        overflow: "hidden",
      },
      children: [
        photoDataUri && {
          type: "img",
          props: {
            src: photoDataUri,
            style: { position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover" },
          },
        },
        photoDataUri && {
          type: "div",
          props: {
            style: {
              position: "absolute",
              inset: 0,
              display: "flex",
              background: "linear-gradient(180deg, rgba(20,28,56,0.55) 0%, rgba(20,28,56,0.8) 35%, rgba(20,28,56,0.94) 100%)",
            },
          },
        },
        {
          type: "div",
          props: {
            style: { position: "relative", display: "flex", alignItems: "center", gap: "16px" },
            children: [
              {
                type: "div",
                props: {
                  style: {
                    width: "44px",
                    height: "44px",
                    borderRadius: "50%",
                    background: YELLOW,
                    display: "flex",
                  },
                },
              },
              {
                type: "div",
                props: {
                  style: { fontSize: "28px", fontWeight: 800, color: textColor, fontFamily: "Bricolage Grotesque" },
                  children: "ARRESTED DEVOPS",
                },
              },
            ],
          },
        },
        episodeNumber !== undefined
          ? {
              type: "div",
              props: {
                style: { position: "relative", display: "flex", flexDirection: "column", gap: "24px" },
                children: [
                  {
                    type: "div",
                    props: {
                      style: {
                        display: "flex",
                        background: YELLOW,
                        color: NAVY,
                        fontSize: "22px",
                        fontWeight: 800,
                        padding: "10px 24px",
                        borderRadius: "999px",
                        alignSelf: "flex-start",
                        letterSpacing: "0.05em",
                      },
                      children: `EPISODE ${episodeNumber}`,
                    },
                  },
                  {
                    type: "div",
                    props: {
                      style: {
                        fontSize: "56px",
                        fontWeight: 800,
                        color: textColor,
                        fontFamily: "Bricolage Grotesque",
                        lineHeight: 1.1,
                        display: "flex",
                      },
                      children: title,
                    },
                  },
                  guestLine
                    ? {
                        type: "div",
                        props: {
                          style: { fontSize: "28px", fontWeight: 500, color: mutedColor, display: "flex" },
                          children: guestLine,
                        },
                      }
                    : null,
                ].filter(Boolean),
              },
            }
          : {
              // Sitewide default card: no episode badge/title, just a tagline.
              type: "div",
              props: {
                style: {
                  position: "relative",
                  fontSize: "34px",
                  fontWeight: 600,
                  color: TEXT_MUTED,
                  fontFamily: "Archivo",
                },
                children: "There's always DevOps in the banana stand.",
              },
            },
        {
          type: "div",
          props: {
            style: { position: "relative", display: "flex", height: "8px", background: RED_DEEP, borderRadius: "4px" },
          },
        },
      ].filter(Boolean),
    },
  };
}

async function renderCard({ episodeNumber, title, guestLine, photoDataUri }) {
  const svg = await satori(card({ episodeNumber, title, guestLine, photoDataUri }), {
    width: 1200,
    height: 630,
    fonts,
  });
  const resvg = new Resvg(svg);
  return resvg.render().asPng();
}

// Recompress to JPEG regardless of source (mozjpeg at q85 is the sweet
// spot: comfortably under WhatsApp's 500KB cap with no visible quality
// loss, verified against the largest legacy bespoke images). Flatten
// first since these source PNGs can carry an alpha channel JPEG can't.
async function toCompressedJpeg(pngBuffer) {
  return sharp(pngBuffer).flatten({ background: CREAM }).jpeg({ quality: 85, mozjpeg: true }).toBuffer();
}

async function generate(episodeData, slug) {
  const bespoke = findBespokeImage(episodeData);
  let pngBuffer;
  if (bespoke) {
    pngBuffer = fs.readFileSync(bespoke);
  } else {
    // Skip the guest line when the title already says "with <guest>" (a
    // common title pattern) - repeating it right below is just clutter.
    const guestLine =
      (episodeData.guests ?? []).length > 0 && !/\bwith\b/i.test(episodeData.title)
        ? `with ${episodeData.guests.map((g) => guestNames.get(g.person) ?? g.person).join(" and ")}`
        : "";
    const photo = findBackgroundPhoto(episodeData);
    pngBuffer = await renderCard({
      episodeNumber: episodeData.episodeNumber,
      title: episodeData.title,
      guestLine,
      photoDataUri: photo ? toDataUri(photo) : null,
    });
  }
  const jpeg = await toCompressedJpeg(pngBuffer);
  fs.writeFileSync(path.join(OUT_DIR, `${slug}.jpg`), jpeg);
}

async function generateDefault() {
  const pngBuffer = await renderCard({ episodeNumber: undefined, title: "Arrested DevOps", guestLine: "" });
  const jpeg = await toCompressedJpeg(pngBuffer);
  fs.writeFileSync(path.join(OUT_DIR, "default.jpg"), jpeg);
}

fs.mkdirSync(OUT_DIR, { recursive: true });

let generated = 0;
for (const file of fs.readdirSync(path.join(REPO_ROOT, "src/content/episodes"))) {
  const slug = path.basename(file, ".md");
  const data = readFrontmatter(path.join(REPO_ROOT, "src/content/episodes", file), false);
  await generate(data, slug);
  generated += 1;
}
await generateDefault();

console.log(`Generated ${generated} episode OG card(s) + 1 default in public/img/social/og/.`);

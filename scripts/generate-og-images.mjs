#!/usr/bin/env node
// Build-time OG image generation for episodes with no working bespoke
// social image (missing `images[]`, or pointing at a file that doesn't
// actually exist — see issue #7). Writes branded Broadcast Pop cards to
// public/img/social/og/<slug>.png, a stable path.
//
// Run before `astro build` (see package.json) so the generated files are
// copied into dist/ along with the rest of public/.

import fs from "node:fs";
import path from "node:path";
import satori from "satori";
import { Resvg } from "@resvg/resvg-js";
import YAML from "yaml";

const scriptDir = path.dirname(new URL(import.meta.url).pathname);
const REPO_ROOT = path.resolve(scriptDir, "..");
const OUT_DIR = path.join(REPO_ROOT, "public/img/social/og");

const CREAM = "#fdf3e0";
const NAVY = "#1e2a52";
const YELLOW = "#f5c518";
const RED_DEEP = "#b8341f";
const TEXT_MUTED = "#4a5378";

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

function hasWorkingImage(episodeData) {
  const first = episodeData.images?.[0];
  if (!first) return false;
  const target = path.join(REPO_ROOT, "public", first.replace(/^\//, ""));
  return fs.existsSync(target);
}

// Prefer the banner (wide, close to the 1200x630 OG aspect) over the
// square/portrait episodeImage. Either way, this is real episode art, so
// once Matty adds it the next build upgrades the card automatically — no
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
        {
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
                  children: `EPISODE ${episodeNumber ?? "—"}`,
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

async function generate(episodeData, slug) {
  // Skip it when the title already says "with <guest>" (a common title
  // pattern) — repeating it right below just as clutter, not new info.
  const guestLine =
    (episodeData.guests ?? []).length > 0 && !/\bwith\b/i.test(episodeData.title)
      ? `with ${episodeData.guests.map((g) => guestNames.get(g.person) ?? g.person).join(" and ")}`
      : "";
  const photo = findBackgroundPhoto(episodeData);
  const photoDataUri = photo ? toDataUri(photo) : null;

  const svg = await satori(
    card({ episodeNumber: episodeData.episodeNumber, title: episodeData.title, guestLine, photoDataUri }),
    {
      width: 1200,
      height: 630,
      fonts: [
        { name: "Archivo", data: fs.readFileSync(path.join(scriptDir, "fonts/archivo.ttf")), weight: 500 },
        {
          name: "Bricolage Grotesque",
          data: fs.readFileSync(path.join(scriptDir, "fonts/bricolage.ttf")),
          weight: 800,
        },
      ],
    },
  );

  const resvg = new Resvg(svg);
  const png = resvg.render().asPng();
  fs.writeFileSync(path.join(OUT_DIR, `${slug}.png`), png);
}

fs.mkdirSync(OUT_DIR, { recursive: true });

let generated = 0;
for (const file of fs.readdirSync(path.join(REPO_ROOT, "src/content/episodes"))) {
  const slug = path.basename(file, ".md");
  const data = readFrontmatter(path.join(REPO_ROOT, "src/content/episodes", file), false);
  if (hasWorkingImage(data)) continue;
  await generate(data, slug);
  generated += 1;
}

console.log(`Generated ${generated} OG card(s) in public/img/social/og/.`);

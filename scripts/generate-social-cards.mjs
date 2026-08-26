#!/usr/bin/env node
// Build-time OG cards for every guest and host, plus the sponsorship,
// about, and homepage pages. These previously either got a raw,
// unresized source photo as og:image (some guest photos are 1680x2987
// phone portraits - no platform renders that reasonably) or the fully
// generic sitewide default card, which doesn't identify the person or
// page at all. See issue #44 follow-up.
//
// Person cards lead with real, person-specific content - an actual
// snippet of their bio (not a generic "Guest on Arrested DevOps" tag)
// plus their real episode reference - rather than just swapping in a
// nicer-looking but equally content-free template.
//
// Run before `astro build` (see package.json) so the generated files are
// copied into dist/ along with the rest of public/.

import fs from "node:fs";
import path from "node:path";
import satori from "satori";
import { Resvg } from "@resvg/resvg-js";
import YAML from "yaml";
import { toCompressedJpeg } from "./lib/encode.mjs";
import { plainTextSnippet } from "./lib/text.mjs";

const scriptDir = path.dirname(new URL(import.meta.url).pathname);
const REPO_ROOT = path.resolve(scriptDir, "..");
const OUT_DIR = path.join(REPO_ROOT, "public/img/social/og");

const CREAM = "#fdf3e0";
const NAVY = "#1e2a52";
const YELLOW = "#f5c518";
const RED = "#e04f39";
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

function toDataUri(filePath) {
  const ext = path.extname(filePath).slice(1).toLowerCase();
  const mime = ext === "jpg" ? "jpeg" : ext;
  return `data:image/${mime};base64,${fs.readFileSync(filePath).toString("base64")}`;
}

// Mirrors src/lib/images.ts's getMiscAsset resolution (legacy paths
// rooted at static/img/, mirrored 1:1 under src/assets/img/), but reads
// straight from the filesystem since this is a plain Node script, not
// an Astro/Vite context that can use import.meta.glob.
function resolveMiscAsset(value) {
  if (!value) return null;
  const relative = value.replace(/^\//, "").replace(/^img\//, "");
  const target = path.join(REPO_ROOT, "src/assets/img", relative);
  return fs.existsSync(target) ? target : null;
}

// Same 3-color cycle PersonCard.astro uses for its initials-avatar
// fallback, keyed by a stable hash instead of render-order index so a
// person's card color doesn't depend on where they land in a list.
const PALETTE = [
  { bg: YELLOW, fg: NAVY },
  { bg: RED, fg: CREAM },
  { bg: NAVY, fg: YELLOW },
];
function paletteFor(id) {
  let hash = 0;
  for (const ch of id) hash = (hash * 31 + ch.charCodeAt(0)) >>> 0;
  return PALETTE[hash % PALETTE.length];
}

function initials(name) {
  return name
    .split(/\s+/)
    .filter(Boolean)
    .slice(0, 2)
    .map((p) => p[0]?.toUpperCase())
    .join("");
}

function wordmark() {
  return {
    type: "div",
    props: {
      style: { display: "flex", alignItems: "center", gap: "12px" },
      children: [
        { type: "div", props: { style: { width: "32px", height: "32px", borderRadius: "50%", background: YELLOW, display: "flex" } } },
        {
          type: "div",
          props: {
            style: { fontSize: "20px", fontWeight: 800, color: TEXT_MUTED, fontFamily: "Bricolage Grotesque", letterSpacing: "0.02em" },
            children: "ARRESTED DEVOPS",
          },
        },
      ],
    },
  };
}

function personCard({ id, name, badgeText, bio, photoPath }) {
  const photoDataUri = photoPath ? toDataUri(photoPath) : null;
  const { bg, fg } = paletteFor(id);

  const textPanel = {
    type: "div",
    props: {
      style: {
        width: photoDataUri ? "716px" : "1136px",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        padding: "56px",
      },
      children: [
        wordmark(),
        {
          type: "div",
          props: {
            style: { display: "flex", flexDirection: "column", gap: "18px" },
            children: [
              !photoDataUri && {
                type: "div",
                props: {
                  style: {
                    width: "96px",
                    height: "96px",
                    borderRadius: "50%",
                    background: bg,
                    color: fg,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontFamily: "Bricolage Grotesque",
                    fontWeight: 800,
                    fontSize: "36px",
                  },
                  children: initials(name),
                },
              },
              {
                type: "div",
                props: {
                  style: {
                    display: "flex",
                    background: YELLOW,
                    color: NAVY,
                    fontSize: "18px",
                    fontWeight: 800,
                    padding: "8px 20px",
                    borderRadius: "999px",
                    alignSelf: "flex-start",
                    letterSpacing: "0.05em",
                  },
                  children: badgeText,
                },
              },
              {
                type: "div",
                props: {
                  style: {
                    fontSize: "48px",
                    fontWeight: 800,
                    color: NAVY,
                    fontFamily: "Bricolage Grotesque",
                    lineHeight: 1.1,
                    display: "flex",
                  },
                  children: name,
                },
              },
              {
                type: "div",
                props: {
                  style: { fontSize: "22px", fontWeight: 500, color: TEXT_MUTED, lineHeight: 1.4, display: "flex" },
                  children: plainTextSnippet(bio, 130),
                },
              },
            ].filter(Boolean),
          },
        },
        { type: "div", props: { style: { display: "flex", height: "8px", background: RED_DEEP, borderRadius: "4px" } } },
      ],
    },
  };

  return {
    type: "div",
    props: {
      style: {
        width: "1200px",
        height: "630px",
        display: "flex",
        background: CREAM,
        border: `16px solid ${NAVY}`,
      },
      children: [
        textPanel,
        photoDataUri && {
          type: "img",
          props: {
            src: photoDataUri,
            style: { width: "452px", height: "598px", objectFit: "cover" },
          },
        },
      ].filter(Boolean),
    },
  };
}

function statCard({ badgeLabel, headline, stats }) {
  return {
    type: "div",
    props: {
      style: {
        width: "1200px",
        height: "630px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        background: CREAM,
        border: `16px solid ${NAVY}`,
        padding: "64px",
      },
      children: [
        wordmark(),
        {
          type: "div",
          props: {
            style: { display: "flex", flexDirection: "column", gap: "20px" },
            children: [
              {
                type: "div",
                props: {
                  style: {
                    display: "flex",
                    background: RED_DEEP,
                    color: CREAM,
                    fontSize: "18px",
                    fontWeight: 800,
                    padding: "8px 20px",
                    borderRadius: "999px",
                    alignSelf: "flex-start",
                    letterSpacing: "0.08em",
                  },
                  children: badgeLabel,
                },
              },
              {
                type: "div",
                props: {
                  style: {
                    fontSize: "46px",
                    fontWeight: 800,
                    color: NAVY,
                    fontFamily: "Bricolage Grotesque",
                    lineHeight: 1.15,
                    display: "flex",
                    maxWidth: "980px",
                  },
                  children: headline,
                },
              },
            ],
          },
        },
        {
          type: "div",
          props: {
            style: { display: "flex", gap: "24px" },
            children: stats.map((s) => ({
              type: "div",
              props: {
                style: {
                  display: "flex",
                  flexDirection: "column",
                  gap: "4px",
                  border: `2px solid ${NAVY}`,
                  borderRadius: "16px",
                  padding: "18px 24px",
                  background: "#fdf9ef",
                },
                children: [
                  { type: "div", props: { style: { fontFamily: "Bricolage Grotesque", fontWeight: 800, fontSize: "34px", color: NAVY, display: "flex" }, children: s.number } },
                  { type: "div", props: { style: { fontSize: "14px", fontWeight: 800, letterSpacing: "0.05em", color: TEXT_MUTED, display: "flex" }, children: s.label } },
                ],
              },
            })),
          },
        },
      ],
    },
  };
}

async function renderToJpeg(node) {
  const svg = await satori(node, { width: 1200, height: 630, fonts });
  const resvg = new Resvg(svg);
  const png = resvg.render().asPng();
  return toCompressedJpeg(png);
}

// Guest id -> sorted episode numbers, for a real "EPISODE 206" / "3
// EPISODES" badge instead of a generic "Guest on Arrested DevOps" tag.
function buildEpisodeCountsByGuest() {
  const counts = new Map();
  const episodesDir = path.join(REPO_ROOT, "src/content/episodes");
  for (const file of fs.readdirSync(episodesDir)) {
    const data = readFrontmatter(path.join(episodesDir, file), false);
    for (const g of data.guests ?? []) {
      const list = counts.get(g.person) ?? [];
      list.push(Number(data.episodeNumber));
      counts.set(g.person, list);
    }
  }
  for (const list of counts.values()) list.sort((a, b) => a - b);
  return counts;
}

function episodeBadge(numbers) {
  if (!numbers || numbers.length === 0) return "ON ARRESTED DEVOPS";
  if (numbers.length === 1) return `EPISODE ${numbers[0]}`;
  return `${numbers.length} EPISODES`;
}

async function generateGuestCards() {
  const episodeCounts = buildEpisodeCountsByGuest();
  const guestsDir = path.join(REPO_ROOT, "src/content/guests");
  let count = 0;
  for (const file of fs.readdirSync(guestsDir)) {
    const id = path.basename(file, ".yaml");
    const data = readFrontmatter(path.join(guestsDir, file), true);
    // No real name/bio to put on a card - see src/lib/guests.ts, these
    // are excluded from listings too.
    if (data.placeholder) continue;
    const latest = data.snapshots[data.snapshots.length - 1];
    const jpeg = await renderToJpeg(
      personCard({
        id,
        name: data.name,
        badgeText: episodeBadge(episodeCounts.get(id)),
        bio: latest.bio,
        photoPath: resolveMiscAsset(latest.thumbnail),
      }),
    );
    fs.writeFileSync(path.join(OUT_DIR, `guest-${id}.jpg`), jpeg);
    count++;
  }
  return count;
}

async function generateHostCards() {
  const hostsDir = path.join(REPO_ROOT, "src/content/hosts");
  let count = 0;
  for (const file of fs.readdirSync(hostsDir)) {
    const id = path.basename(file, ".md");
    const raw = fs.readFileSync(path.join(hostsDir, file), "utf8");
    const data = readFrontmatter(path.join(hostsDir, file), false);
    const body = raw.replace(/^---\n[\s\S]*?\n---/, "").trim();
    const jpeg = await renderToJpeg(
      personCard({
        id,
        name: data.name,
        badgeText: "HOST",
        bio: body,
        photoPath: resolveMiscAsset(data.thumbnail),
      }),
    );
    fs.writeFileSync(path.join(OUT_DIR, `host-${id}.jpg`), jpeg);
    count++;
  }
  return count;
}

async function generateSponsorshipCard() {
  const jpeg = await renderToJpeg(
    statCard({
      badgeLabel: "SPONSOR ARRESTED DEVOPS",
      headline: "Put your product in front of the people who run production.",
      stats: [
        { number: "8,000+", label: "DOWNLOADS PER EPISODE" },
        { number: "2,000+", label: "APP SUBSCRIBERS" },
        { number: "SRE + ENG", label: "CORE AUDIENCE" },
      ],
    }),
  );
  fs.writeFileSync(path.join(OUT_DIR, "sponsorship.jpg"), jpeg);
}

async function generateShowIdentityCards(episodeCount, guestCount) {
  const yearsOnAir = new Date().getFullYear() - 2013;

  const home = await renderToJpeg(
    statCard({
      badgeLabel: "LISTEN NOW",
      headline: "Honest conversations about how teams actually build, run, and un-break software.",
      stats: [
        { number: String(episodeCount), label: "EPISODES" },
        { number: String(guestCount), label: "GUESTS" },
        { number: String(yearsOnAir), label: "YEARS ON AIR" },
      ],
    }),
  );
  fs.writeFileSync(path.join(OUT_DIR, "home.jpg"), home);

  const about = await renderToJpeg(
    statCard({
      badgeLabel: "THE SHOW",
      headline: "It's a podcast about DevOps. And also about people.",
      stats: [
        { number: String(episodeCount), label: "EPISODES" },
        { number: String(guestCount), label: "GUESTS" },
        { number: String(yearsOnAir), label: "YEARS ON AIR" },
      ],
    }),
  );
  fs.writeFileSync(path.join(OUT_DIR, "about.jpg"), about);
}

fs.mkdirSync(OUT_DIR, { recursive: true });

const episodeCount = fs.readdirSync(path.join(REPO_ROOT, "src/content/episodes")).length;
// Excludes placeholder stubs, matching src/lib/guests.ts's getGuestsSorted()
// so this stat agrees with what the guest list page actually shows.
const guestCount = fs
  .readdirSync(path.join(REPO_ROOT, "src/content/guests"))
  .filter((file) => !readFrontmatter(path.join(REPO_ROOT, "src/content/guests", file), true).placeholder).length;

const guestCards = await generateGuestCards();
const hostCards = await generateHostCards();
await generateSponsorshipCard();
await generateShowIdentityCards(episodeCount, guestCount);

console.log(
  `Generated ${guestCards} guest card(s), ${hostCards} host card(s), and 3 page cards (sponsorship, home, about) in public/img/social/og/.`,
);

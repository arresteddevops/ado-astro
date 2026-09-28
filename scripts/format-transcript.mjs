#!/usr/bin/env node
// Mechanically renders a cached AssemblyAI diarized transcript into the
// src/content/transcripts/*.md convention (see ai-sdlc.md): bold real-name
// label only on speaker change, consecutive same-speaker utterances merged
// into one block, inline [HH:MM:SS] timestamps roughly every 60s. Used by
// the add-transcript skill — it supplies the speaker->name map, this script
// does the mechanical part deterministically instead of hand-formatting it.
//
// Usage: node scripts/format-transcript.mjs <slug> '{"A":"Matty","B":"Trevor"}'

import fs from "node:fs";

function hms(ms) {
  const s = Math.floor(ms / 1000);
  const h = String(Math.floor(s / 3600)).padStart(2, "0");
  const m = String(Math.floor((s % 3600) / 60)).padStart(2, "0");
  const sec = String(s % 60).padStart(2, "0");
  return `${h}:${m}:${sec}`;
}

const slug = process.argv[2];
const map = JSON.parse(process.argv[3]);

const d = JSON.parse(fs.readFileSync(`.cache/transcripts/${slug}.json`, "utf8"));

const blocks = [];
let lastName = null;
let lastTsMs = -Infinity;
let paras = [];
let currentPara = "";

for (const u of d.utterances) {
  const name = map[u.speaker];
  if (!name) throw new Error(`unmapped speaker ${u.speaker}`);
  const needsTs = u.start - lastTsMs >= 60000;

  // Compare by resolved name, not raw diarization letter — two letters that
  // map to the same person (a mid-call speaker split, or an ad-read letter
  // folded into the surrounding host) merge into one continuous block.
  if (name !== lastName) {
    if (currentPara) paras.push(currentPara);
    if (paras.length) blocks.push({ paras });
    paras = [];
    lastName = name;
    let prefix = `**${name}:** `;
    if (needsTs) {
      prefix += `[${hms(u.start)}] `;
      lastTsMs = u.start;
    }
    currentPara = prefix + u.text;
  } else if (needsTs) {
    paras.push(currentPara);
    currentPara = `[${hms(u.start)}] ${u.text}`;
    lastTsMs = u.start;
  } else {
    currentPara += " " + u.text;
  }
}
if (currentPara) paras.push(currentPara);
if (paras.length) blocks.push({ paras });

const out = blocks.map((b) => b.paras.join("\n\n")).join("\n\n");
fs.writeFileSync(`src/content/transcripts/${slug}.md`, out + "\n");
console.log(`wrote src/content/transcripts/${slug}.md (${blocks.length} speaker-blocks)`);

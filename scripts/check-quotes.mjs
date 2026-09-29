// Checks that every quoted passage in an episode's show notes can be traced
// to its transcript. Issue #84 guardrail: the failure mode of a rewrite is a
// misquoted line, not a wrong speaker label.
//
//   node scripts/check-quotes.mjs <slug> [<slug>...]
//
// Transcripts are raw ASR (stutters, false starts), and show notes lightly
// tidy those inside quotes, so this is a fuzzy match, not a substring match:
// each word of the quote must appear in order, with up to GAP filler words
// allowed between neighbors, and roughly 1 word in 6 may be missing entirely
// ("in the wrong place" vs "in a wrong place"). "..." splits a quote into segments
// checked separately. Quotes under 3 words are skipped (scare quotes).
// Exits 1 if any quote can't be traced.
//
// ponytail: catches misquotes and invented quotes, not invented paraphrase.
// Reading the draft against the transcript is still on you.

import fs from "node:fs";

const GAP = 4;

const norm = (s) =>
  s
    .toLowerCase()
    .replace(/[\u2014\u2013-]/g, " ") // em dashes and hyphens: transcripts and show notes disagree on them
    .replace(/[^\p{L}\p{N}\s]/gu, "")
    .replace(/\s+/g, " ")
    .trim();

function traceable(words, tokens) {
  const budget = Math.floor(words.length / 6);
  for (let i = 0; i < tokens.length; i++) {
    if (tokens[i] !== words[0]) continue;
    let pos = i;
    let misses = 0;
    for (let k = 1; k < words.length && misses <= budget; k++) {
      let next = -1;
      for (let j = pos + 1; j <= pos + 1 + GAP && j < tokens.length; j++) {
        if (tokens[j] === words[k]) {
          next = j;
          break;
        }
      }
      if (next < 0) misses++;
      else pos = next;
    }
    if (misses <= budget) return true;
  }
  return false;
}

let bad = 0;
for (const slug of process.argv.slice(2)) {
  const ep = fs.readFileSync(`src/content/episodes/${slug}.md`, "utf8");
  const body = ep.replace(/^---\n[\s\S]*?\n---\n?/, "");
  const tokens = norm(
    fs
      .readFileSync(`src/content/transcripts/${slug}.md`, "utf8")
      .replace(/\*\*[^*]+:\*\*/g, " ") // speaker labels
      .replace(/\[\d\d:\d\d:\d\d\]/g, " "), // inline timestamps
  ).split(" ");
  // Per line so an unbalanced quote can't cascade across the whole file.
  for (const line of body.split("\n")) {
    for (const m of line.matchAll(/["\u201c]([^"\u201c\u201d]{8,400}?)["\u201d]/g)) {
      for (const seg of m[1].split(/\.{3}|\u2026/).map(norm)) {
        const words = seg.split(" ").filter(Boolean);
        if (words.length < 3) continue;
        if (!traceable(words, tokens)) {
          bad++;
          console.log(`${slug}: NOT TRACEABLE: "${seg}"`);
        }
      }
    }
  }
}
if (!bad) console.log("all quotes traceable to transcripts");
process.exit(bad ? 1 : 0);

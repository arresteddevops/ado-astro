// Pure timing logic for the episode page's "transcript follows playback".
// Transcripts carry a plain-text [HH:MM:SS] marker roughly every 60s, not on
// every paragraph, so untimed paragraphs get a time interpolated by length.
// Issue #21. Check: node scripts/check-transcript-sync.mjs

// ~180 wpm. Only used after the last marker, where there is no next marker to
// interpolate toward.
const CHARS_PER_SEC = 15;

// A marker sits either right after the "Name:" label or at the paragraph start.
const MARKER = /^.{0,80}?\[(\d\d):(\d\d):(\d\d)\]/s;

/** Seconds from a paragraph's leading [HH:MM:SS] marker, or null if it has none. */
export function parseMarker(text: string): number | null {
  const m = MARKER.exec(text);
  return m ? Number(m[1]) * 3600 + Number(m[2]) * 60 + Number(m[3]) : null;
}

/**
 * One start time (seconds) per paragraph. `marks` is parseMarker() per paragraph,
 * `lens` the paragraph text lengths. Paragraphs between two markers are spread
 * across that gap by character count; paragraphs after the last marker run at
 * CHARS_PER_SEC. ponytail: speech rate isn't constant, so mid-block times can be
 * ~10-20s off. Per-paragraph timestamps in the transcripts would fix that.
 */
export function fillTimes(marks: (number | null)[], lens: number[]): number[] {
  const n = marks.length;
  const times: number[] = [];
  let start = 0;
  let t0 = marks[0] ?? 0;
  for (let b = 1; b <= n; b++) {
    if (b < n && marks[b] === null) continue;
    const t1 = b < n ? marks[b]! : null;
    const total = lens.slice(start, b).reduce((a, c) => a + c, 0) || 1;
    let acc = 0;
    for (let k = start; k < b; k++) {
      times[k] = t1 === null ? t0 + acc / CHARS_PER_SEC : t0 + (t1 - t0) * (acc / total);
      acc += lens[k];
    }
    start = b;
    t0 = t1 ?? 0;
  }
  // The binary search below needs sorted times; a hand-edited out-of-order marker shouldn't break it.
  for (let k = 1; k < n; k++) times[k] = Math.max(times[k], times[k - 1]);
  return times;
}

/** Index of the last paragraph that has started by `t` (0 before the first). */
export function findActive(times: number[], t: number): number {
  let lo = 0;
  let hi = times.length - 1;
  while (lo < hi) {
    const mid = (lo + hi + 1) >> 1;
    if (times[mid] <= t) lo = mid;
    else hi = mid - 1;
  }
  return lo;
}

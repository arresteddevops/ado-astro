// Shared by src/pages/guestform.astro (HTML attributes + the browser-side
// headshot check) and scripts/check-guestform-rules.mjs, so the numbers can't
// drift apart. Plain .mjs (not .ts) so node can import it directly.

export const MAX_HEADSHOT_BYTES = 5 * 1024 * 1024;
export const MIN_HEADSHOT_SIDE = 400;
export const HEADSHOT_TYPES = ["image/jpeg", "image/png"];

// An HTML `pattern` must match the whole value. Browsers compile it with the
// `v` flag, where a bare "-" inside a character class is a syntax error and
// the browser then silently ignores the pattern — hence the escaped hyphen.
export const HANDLE_PATTERN = "[A-Za-z0-9._\\-]+";

/**
 * Cheap checks that don't need the image decoded.
 * @param {{ type: string, bytes: number }} file
 * @returns {string | null} a message for the guest, or null if fine.
 */
export function headshotFileProblem({ type, bytes }) {
  if (!HEADSHOT_TYPES.includes(type)) {
    return "Headshot needs to be a JPG or PNG.";
  }
  if (bytes > MAX_HEADSHOT_BYTES) {
    return `Headshot is ${(bytes / 1024 / 1024).toFixed(1)} MB; the limit is 5 MB.`;
  }
  return null;
}

/**
 * Checks on the decoded image.
 * @param {{ width: number, height: number }} dims
 * @returns {string | null} a message for the guest, or null if fine.
 */
export function headshotSizeProblem({ width, height }) {
  if (Math.min(width, height) < MIN_HEADSHOT_SIDE) {
    return `Headshot is ${width}×${height}px; the shorter side needs to be at least ${MIN_HEADSHOT_SIDE}px.`;
  }
  return null;
}

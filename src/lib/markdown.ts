import { marked } from "marked";

// Guest/host bios live as plain strings in content-collection data fields
// (not file bodies), so Astro's render() doesn't apply to them — some do
// contain real markdown (links especially). All source content is our own
// migrated data, never user input, so set:html on these results is safe.

/** Full block-level render (real <p> tags) — for a bio shown on its own page. */
export function renderMarkdown(text: string): string {
  return marked.parse(text, { async: false });
}

/** Inline-only render (links/emphasis, no wrapping <p>) — for bio snippets
    embedded inside a card's own paragraph. */
export function renderInlineMarkdown(text: string): string {
  return marked.parseInline(text, { async: false });
}

/** Strips markdown syntax down to plain text, then truncates at a word
    boundary. For card snippets: truncating raw markdown risks cutting a
    `[link](url` in half, and truncating rendered HTML risks cutting a tag
    in half — plain text has neither problem. (CSS line-clamp would avoid
    this JS truncation entirely, but Astro's CSS minifier strips standalone
    -webkit- prefixed properties, so -webkit-line-clamp never survives the
    build — not worth fighting, this is simpler and more robust anyway.) */
export function plainTextSnippet(markdown: string, maxLength = 140): string {
  const plain = markdown
    .replace(/\[([^\]]*)\]\([^)]*\)/g, "$1") // [text](url) -> text
    .replace(/[*_`#]/g, "") // bold/italic/code/heading markers
    .replace(/\s+/g, " ")
    .trim();
  if (plain.length <= maxLength) return plain;
  const cut = plain.slice(0, maxLength);
  const lastSpace = cut.lastIndexOf(" ");
  return `${cut.slice(0, lastSpace > 0 ? lastSpace : maxLength)}…`;
}

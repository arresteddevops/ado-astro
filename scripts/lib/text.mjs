// Plain-JS mirror of src/lib/markdown.ts's plainTextSnippet - build
// scripts run as vanilla Node ESM and can't import a .ts file directly,
// so this stays a small, deliberate duplication rather than a build step.
export function plainTextSnippet(markdown, maxLength = 140) {
  const plain = markdown
    .replace(/\[([^\]]*)\]\([^)]*\)/g, "$1")
    .replace(/[*_`#]/g, "")
    .replace(/\s+/g, " ")
    .trim();
  if (plain.length <= maxLength) return plain;
  const cut = plain.slice(0, maxLength);
  const lastSpace = cut.lastIndexOf(" ");
  return `${cut.slice(0, lastSpace > 0 ? lastSpace : maxLength)}…`;
}

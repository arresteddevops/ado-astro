# Content source of truth moves to ado-astro via one-time conversion

Hugo content (TOML frontmatter) is converted once by a checked-in script — TOML→YAML,
guest folding per ADR-0002, field renames — and the converted markdown is committed to
this repo, which becomes the source of truth. We rejected build-time conversion from
ado-hugo (permanent coupling to the legacy repo and Hugo conventions). Consequence:
during the coexistence window, new episodes published to ado-hugo must be re-converted
(the script is idempotent and re-runnable); after cutover, ado-hugo freezes and is
archived.

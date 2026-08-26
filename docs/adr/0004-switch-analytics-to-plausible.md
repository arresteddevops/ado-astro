# Switch analytics from Google Analytics to Plausible

The PRD's original decision (row 8) was to keep the existing Google Analytics setup
(`G-45939822`) as-is. That measurement ID was carried over unverified from the legacy
Hugo config's `[services.googleAnalytics]` block — nobody confirmed it was actually
Matty's own GA property, and it wasn't; ownership couldn't be established. Rather than
try to recover or re-verify a GA property with unknown provenance, we drop GA entirely
and switch to Plausible (issue #51), which Matty already has a real, verified account
for.

Implementation: `@plausible-analytics/tracker` (official npm package), initialized
client-side in `BaseLayout.astro` against the `PLAUSIBLE_DOMAIN` constant in
`src/consts.ts` (`arresteddevops.com`, matching the site's Plausible Cloud dashboard
entry exactly — Plausible does no fuzzy domain matching, so this has to stay in sync
with the dashboard by hand). Default tracker options are used: auto pageview capture on,
outbound-link/file-download/form-submission tracking off, no tracking on localhost.

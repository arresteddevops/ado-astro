# Guest Intake Form Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Replace the Google Form → Google Doc guest intake with a Netlify Forms page at `/guestform/` whose submissions (including an uploaded headshot) `create-guest` pulls via the `netlify` CLI.

**Architecture:** One new static Astro page (`/guestform/`) modeled on `contact.astro`, plus a tiny thanks page. The headshot size/type rules and the handle `pattern` live in one plain-`.mjs` module so the page, the browser-side check, and a node self-check all share the same numbers. `create-guest`'s SKILL.md is rewritten to read a submission from Netlify instead of a Google Doc, treating the submission as untrusted input.

**Tech Stack:** Astro 7, pnpm, Netlify Forms, `netlify` CLI. No test framework, no linter.

**Spec:** `docs/superpowers/specs/2026-10-13-guest-intake-form-design.md`

## Global Constraints

- Form path is `/guestform/` — **not** `/guest/` (that is the guest profile directory).
- Remove the `/guestform` line (line 9) from `src/data/redirect-stubs.txt`; it is a forced `301!` and would shadow the new page. Never hand-edit `public/_redirects` (regenerated on every build by `scripts/generate-redirects.mjs`).
- Form wiring copied from `contact.astro`: `name="guestform"`, `method="POST"`, `enctype="multipart/form-data"`, `data-netlify="true"`, `netlify-honeypot="bot-field"`, hidden `form-name` input, `action="/guestform-thanks/"`.
- Fields (name → required): `name` yes, `email` yes (never published; stays in the Netlify submission only), `pronouns` no, `bio` yes, `website` no (full URL), `linkedin`/`github`/`twitter`/`bluesky` no (**handle only**), `headshot` no (file).
- Handle-only is enforced natively with an HTML `pattern`, no JS.
- Headshot: `accept="image/jpeg,image/png"`, one file, ≤ 5 MB, shorter side ≥ 400 px, aspect ratio not enforced. Netlify caps the whole request at 8 MB with a 30 s upload timeout.
- Scoped `<style>` never reaches client-injected HTML (CLAUDE.md). Keep any runtime-updated element in the template at build time so scoped styles apply.
- The new thanks page (`/guestform-thanks/`) is excluded from the sitemap, like `/thank-you/` (`astro.config.mjs` sitemap `filter`).
- `create-guest` cleanup is an offer, never automatic (submissions hold emails and photos).
- Keep a short legacy Google-Doc fallback in the skill until the old form is turned off.
- Build needs **Node 22**; the default shell is Node 20. Prefix commands with `PATH="$HOME/.nvm/versions/node/v22.22.2/bin:$PATH"`.
- No test framework exists and this change does not add one. Verification is `pnpm run build`, `grep` on `dist/`, and one assert-style node self-check.
- Package manager is pnpm. Commits end with `Co-Authored-By: Claude Sonnet 5.5 <noreply@anthropic.com>`.

## Review Focus

Failure modes the spec implies but a happy-path test wouldn't catch, most likely first:

1. **iPhone/other non-JPG/PNG file** (HEIC, WebP, empty `type`) must produce a plain-English message, not a silent failure or an opaque Netlify error. → pinned in Task 1 (`headshotFileProblem` cases).
2. **Limit boundaries**: exactly 5 MB and exactly 400 px must be accepted; 5 MB + 1 byte and 399 px rejected; a non-square image whose short side ≥ 400 accepted. → pinned in Task 1.
3. **The `pattern` silently not applying.** Browsers compile `pattern` with the `v` flag, where a bare trailing `-` in a character class is a syntax error and the browser then ignores the pattern with no visible error. It must compile under `v`, accept `o.brien` / `name.bsky.social`, and reject `@x`, URLs, spaces, empty. → pinned in Task 1.
4. **Stale/bad selections**: picking a bad file then a good one (or clearing the input) must clear the error and un-block submit; a slow decode of an earlier pick must not overwrite a newer pick. → guarded in Task 2's script (identity check after `await`), pinned by Task 2's manual preview check.
5. **Direct POSTs bypass every client-side check**, and odd names break id derivation (`../../x`, a single name like "Cher", diacritics). The skill must validate id, handles, website, headshot type/host, and use a YAML block scalar for the bio. → pinned in Task 4 (hostile dummy submission).

---

## File Structure

| File | Action | Responsibility |
| --- | --- | --- |
| `src/lib/guestform-rules.mjs` | create | Single source for headshot limits, `headshotFileProblem`, `headshotSizeProblem`, `HANDLE_PATTERN`. Plain `.mjs` so node can import it for the self-check and Astro can import it in both frontmatter and the client script. |
| `scripts/check-guestform-rules.mjs` | create | Assert-style self-check for the module above. |
| `src/pages/guestform.astro` | create | The form page + headshot client script. |
| `src/pages/guestform-thanks.astro` | create | Post-submit page. |
| `src/data/redirect-stubs.txt` | modify (delete line 9) | Stop shadowing the new page. |
| `astro.config.mjs` | modify (line 13) | Exclude the thanks page from the sitemap. |
| `.claude/skills/create-guest/SKILL.md` | rewrite | Read a Netlify submission instead of a Google Doc; legacy fallback kept. |
| `docs/superpowers/specs/2026-10-13-guest-intake-form-design.md` | modify (Task 3) | Record the results of the previously-unverified assumptions. |

---

### Task 1: Shared rules module + self-check

**Files:**
- Create: `src/lib/guestform-rules.mjs`
- Create: `scripts/check-guestform-rules.mjs`

**Interfaces:**
- Produces (used by Task 2 and the self-check):
  - `MAX_HEADSHOT_BYTES: number` (5 MiB), `MIN_HEADSHOT_SIDE: number` (400), `HEADSHOT_TYPES: string[]`
  - `HANDLE_PATTERN: string` — HTML `pattern` value, matched against the whole value
  - `headshotFileProblem({ type: string, bytes: number }): string | null`
  - `headshotSizeProblem({ width: number, height: number }): string | null`
  - Both return a guest-facing message, or `null` when fine.

- [ ] **Step 1: Commit the spec and plan so the branch has the design it implements**

```bash
git add docs/superpowers/specs/2026-10-13-guest-intake-form-design.md docs/superpowers/plans/2026-10-13-guest-intake-form.md
git commit -m "docs: spec and plan for guest intake form (#25)" -m "Co-Authored-By: Claude Sonnet 5.5 <noreply@anthropic.com>"
```

- [ ] **Step 2: Write the failing self-check**

Create `scripts/check-guestform-rules.mjs`:

```js
#!/usr/bin/env node
// Self-check for src/lib/guestform-rules.mjs — the only real logic in the
// guest intake form. Run: node scripts/check-guestform-rules.mjs
import assert from "node:assert/strict";
import {
  HANDLE_PATTERN,
  headshotFileProblem,
  headshotSizeProblem,
} from "../src/lib/guestform-rules.mjs";

const MB = 1024 * 1024;

// File type + byte size (checked before we bother decoding the image).
assert.equal(headshotFileProblem({ type: "image/jpeg", bytes: 5 * MB }), null, "exactly 5 MB is allowed");
assert.equal(headshotFileProblem({ type: "image/png", bytes: 1 }), null, "png is allowed");
assert.match(headshotFileProblem({ type: "image/jpeg", bytes: 5 * MB + 1 }), /5 MB/, "5 MB + 1 byte is rejected");
assert.match(headshotFileProblem({ type: "image/heic", bytes: MB }), /JPG or PNG/, "HEIC is rejected with a plain message");
assert.match(headshotFileProblem({ type: "image/webp", bytes: MB }), /JPG or PNG/, "webp is rejected");
assert.match(headshotFileProblem({ type: "", bytes: MB }), /JPG or PNG/, "unknown type is rejected");

// Decoded dimensions (shorter side must be >= 400, any aspect ratio).
assert.equal(headshotSizeProblem({ width: 400, height: 400 }), null, "400x400 is allowed");
assert.equal(headshotSizeProblem({ width: 400, height: 1600 }), null, "non-square is fine if the short side is 400");
assert.match(headshotSizeProblem({ width: 399, height: 400 }), /at least 400px/, "399 wide is rejected");
assert.match(headshotSizeProblem({ width: 1000, height: 399 }), /at least 400px/, "399 tall is rejected");

// The HTML `pattern` attribute: whole-value match, compiled with the `v` flag
// exactly as browsers do (a bare "-" in a class is a SyntaxError under `v`,
// and the browser would then silently ignore the pattern).
const handle = new RegExp(`^(?:${HANDLE_PATTERN})$`, "v");
for (const ok of ["mattstratton", "o.brien", "name.bsky.social", "my-handle_1", "A1"]) {
  assert.ok(handle.test(ok), `handle should be accepted: ${ok}`);
}
for (const bad of ["@mattstratton", "https://github.com/x", "linkedin.com/in/x", "has space", "", "a/b", "x?y=1"]) {
  assert.ok(!handle.test(bad), `handle should be rejected: ${JSON.stringify(bad)}`);
}

console.log("guestform rules: ok");
```

- [ ] **Step 3: Run it to verify it fails**

Run: `node scripts/check-guestform-rules.mjs`
Expected: FAIL with `ERR_MODULE_NOT_FOUND` for `src/lib/guestform-rules.mjs`.

- [ ] **Step 4: Write the module**

Create `src/lib/guestform-rules.mjs`:

```js
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
```

- [ ] **Step 5: Run it to verify it passes**

Run: `node scripts/check-guestform-rules.mjs`
Expected: PASS — prints `guestform rules: ok`.

- [ ] **Step 6: Commit**

```bash
git add src/lib/guestform-rules.mjs scripts/check-guestform-rules.mjs
git commit -m "feat(guestform): shared headshot/handle rules with self-check (#25)" -m "Co-Authored-By: Claude Sonnet 5.5 <noreply@anthropic.com>"
```

---

### Task 2: The form page, thanks page, redirect-stub removal, sitemap filter

**Files:**
- Create: `src/pages/guestform.astro`
- Create: `src/pages/guestform-thanks.astro`
- Modify: `src/data/redirect-stubs.txt` (delete line 9)
- Modify: `astro.config.mjs:13`

**Interfaces:**
- Consumes: `HANDLE_PATTERN`, `MAX_HEADSHOT_BYTES`, `MIN_HEADSHOT_SIDE`, `headshotFileProblem`, `headshotSizeProblem` from `src/lib/guestform-rules.mjs` (Task 1).
- Produces: a Netlify form named `guestform` with fields `name`, `email`, `pronouns`, `bio`, `website`, `linkedin`, `github`, `twitter`, `bluesky`, `headshot` (Task 3 posts to it; Task 4 reads those exact field names).

- [ ] **Step 1: Install dependencies in the worktree and write the failing assertions**

```bash
PATH="$HOME/.nvm/versions/node/v22.22.2/bin:$PATH" pnpm install --frozen-lockfile
PATH="$HOME/.nvm/versions/node/v22.22.2/bin:$PATH" pnpm run build
```

Then run these assertions against the current build. They are the red half of red/green here:

```bash
test -f dist/guestform/index.html \
  && grep -q 'data-netlify="true"' dist/guestform/index.html \
  && grep -q 'enctype="multipart/form-data"' dist/guestform/index.html \
  && grep -q 'name="headshot"' dist/guestform/index.html \
  && grep -q 'accept="image/jpeg,image/png"' dist/guestform/index.html \
  && grep -q 'value="guestform"' dist/guestform/index.html \
  && test -f dist/guestform-thanks/index.html \
  && ! grep -q '^/guestform ' public/_redirects \
  && ! grep -q 'guestform-thanks' dist/sitemap-0.xml \
  && echo "ALL ASSERTIONS PASS"
```

Expected: FAIL (no output; the first `test -f` fails because `dist/guestform/index.html` doesn't exist, and `public/_redirects` still has the `/guestform` rule).

- [ ] **Step 2: Delete the redirect stub**

In `src/data/redirect-stubs.txt`, delete exactly this line (line 9):

```
/guestform  https://docs.google.com/forms/d/1zqG3fEyugSQLt-yKJNsPpgqDr0Akl8hD_z4DaGdzuOI/viewform?usp=send_form 301!
```

- [ ] **Step 3: Exclude the thanks page from the sitemap**

In `astro.config.mjs`, change the filter on line 13 from:

```js
      filter: (page) => !page.endsWith("/404/") && !page.endsWith("/thank-you/"),
```

to:

```js
      filter: (page) =>
        !page.endsWith("/404/") && !page.endsWith("/thank-you/") && !page.endsWith("/guestform-thanks/"),
```

- [ ] **Step 4: Create the thanks page**

Create `src/pages/guestform-thanks.astro`:

```astro
---
import BaseLayout from "../layouts/BaseLayout.astro";
---

<BaseLayout title="Guest Info Sent" description="Thanks for sending your guest info to Arrested DevOps.">
  <section class="intro">
    <div class="badge">GOT IT</div>
    <h1>Your bio and headshot are in the pile.</h1>
    <p class="lede">
      Thanks for filling that out. Your email stays with us; the bio, links, and photo are what
      end up on your guest page. If something's off, reply to whoever scheduled your episode.
    </p>
    <div class="actions">
      <a class="pill" href="/">Back to the show</a>
      <a class="pill outline" href="/guest/">Meet past guests</a>
    </div>
  </section>
</BaseLayout>

<style>
  h1 {
    margin: 0;
    font-family: var(--font-display);
    font-weight: 800;
  }

  .intro {
    padding: 96px var(--page-padding) 120px;
    display: flex;
    flex-direction: column;
    gap: 20px;
    max-width: 800px;
  }

  .badge {
    display: inline-flex;
    background: var(--color-red-deep);
    color: var(--color-cream);
    font-weight: 800;
    font-size: 13px;
    letter-spacing: 0.12em;
    padding: 8px 16px;
    border-radius: var(--radius-pill);
    transform: rotate(-2deg);
    align-self: flex-start;
  }

  h1 {
    font-size: 48px;
    line-height: 1.1;
    letter-spacing: -0.02em;
    text-wrap: pretty;
  }

  .lede {
    margin: 0;
    font-size: 18px;
    line-height: 1.6;
    color: var(--color-text-muted);
  }

  .actions {
    display: flex;
    gap: 16px;
    margin-top: 8px;
  }

  .pill {
    display: inline-flex;
    align-items: center;
    min-height: var(--hit-target-min);
    padding: 12px 24px;
    border-radius: var(--radius-pill);
    font-weight: 800;
    font-size: 15px;
  }

  .pill:not(.outline) {
    background: var(--color-yellow);
    color: var(--color-navy);
  }

  .pill.outline {
    border: 2px solid var(--color-navy);
    color: var(--color-text);
  }

  .pill:hover {
    color: var(--color-navy);
  }

  @media (max-width: 640px) {
    h1 {
      font-size: 34px;
    }

    .actions {
      flex-direction: column;
      align-items: flex-start;
    }
  }
</style>
```

- [ ] **Step 5: Create the form page**

Create `src/pages/guestform.astro`:

```astro
---
import BaseLayout from "../layouts/BaseLayout.astro";
import { HANDLE_PATTERN, MAX_HEADSHOT_BYTES, MIN_HEADSHOT_SIDE } from "../lib/guestform-rules.mjs";

const handleTitle = "Handle only: no @ and no link.";
const handles = [
  { name: "linkedin", label: "LinkedIn", placeholder: "pagnutti (from linkedin.com/in/pagnutti)" },
  { name: "github", label: "GitHub", placeholder: "mattstratton" },
  { name: "twitter", label: "Twitter / X", placeholder: "mattstratton" },
  { name: "bluesky", label: "Bluesky", placeholder: "name.bsky.social" },
];
const headshotHint = `JPG or PNG, up to ${MAX_HEADSHOT_BYTES / 1024 / 1024} MB, at least ${MIN_HEADSHOT_SIDE}px on the shorter side.`;
---

<BaseLayout title="Guest Info" description="Send us your bio, links, and headshot for your Arrested DevOps episode.">
  <section class="intro">
    <div class="badge">BE OUR GUEST</div>
    <h1>Let's get your bio and face ready for the internet.</h1>
    <p class="lede">
      Your email is only for us. Your bio, links, and headshot get published on your guest page.
    </p>
  </section>

  <section class="content">
    <form
      class="form"
      name="guestform"
      method="POST"
      action="/guestform-thanks/"
      enctype="multipart/form-data"
      data-netlify="true"
      netlify-honeypot="bot-field"
    >
      <input type="hidden" name="form-name" value="guestform" />
      <p class="honeypot" aria-hidden="true">
        <label>Don't fill this out if you're human: <input name="bot-field" tabindex="-1" autocomplete="off" /></label>
      </p>

      <div class="row">
        <div class="field">
          <label for="name">Name (required)</label>
          <input id="name" name="name" type="text" autocomplete="name" required />
        </div>
        <div class="field">
          <label for="email">Email (required, never published)</label>
          <input id="email" name="email" type="email" autocomplete="email" required />
        </div>
      </div>

      <div class="field">
        <label for="pronouns">Pronouns</label>
        <input id="pronouns" name="pronouns" type="text" placeholder="she/her, he/him, they/them…" />
      </div>

      <div class="field">
        <label for="bio">Bio (required)</label>
        <textarea id="bio" name="bio" rows="6" required></textarea>
      </div>

      <div class="field">
        <label for="website">Website</label>
        <input id="website" name="website" type="url" placeholder="https://example.com" />
      </div>

      <p class="hint">For these, just the handle: no @ and no link.</p>
      <div class="row wrap">
        {
          handles.map((h) => (
            <div class="field">
              <label for={h.name}>{h.label}</label>
              <input
                id={h.name}
                name={h.name}
                type="text"
                pattern={HANDLE_PATTERN}
                title={handleTitle}
                placeholder={h.placeholder}
                autocapitalize="off"
                spellcheck="false"
              />
            </div>
          ))
        }
      </div>

      <div class="field">
        <label for="headshot">Headshot</label>
        <input
          id="headshot"
          name="headshot"
          type="file"
          accept="image/jpeg,image/png"
          aria-describedby="headshot-hint headshot-error"
        />
        <p class="hint" id="headshot-hint">{headshotHint}</p>
        <p class="field-error" id="headshot-error" role="alert"></p>
      </div>

      <button type="submit" class="pill submit">Send it</button>
    </form>
  </section>
</BaseLayout>

<script>
  import { headshotFileProblem, headshotSizeProblem } from "../lib/guestform-rules.mjs";

  const input = document.querySelector<HTMLInputElement>('input[name="headshot"]');
  const note = document.getElementById("headshot-error");

  // Native validity blocks submit; the text is for humans.
  function show(message: string) {
    input?.setCustomValidity(message);
    if (note) note.textContent = message;
  }

  input?.addEventListener("change", async () => {
    // Block submit while we decode, then replace with the real verdict.
    show("Checking your headshot…");
    const file = input.files?.[0];
    if (!file) return show("");

    const fileProblem = headshotFileProblem({ type: file.type, bytes: file.size });
    if (fileProblem) return show(fileProblem);

    try {
      const bitmap = await createImageBitmap(file);
      const { width, height } = bitmap;
      bitmap.close();
      // A newer pick may have replaced this one while we were decoding.
      if (input.files?.[0] !== file) return;
      show(headshotSizeProblem({ width, height }) ?? "");
    } catch {
      if (input.files?.[0] !== file) return;
      show("We couldn't read that image. Try a JPG or PNG.");
    }
  });
</script>

<style>
  h1 {
    margin: 0;
    font-family: var(--font-display);
    font-weight: 800;
  }

  .intro {
    padding: 64px var(--page-padding) 24px;
    display: flex;
    flex-direction: column;
    gap: 16px;
    max-width: 800px;
  }

  .badge {
    display: inline-flex;
    background: var(--color-red-deep);
    color: var(--color-cream);
    font-weight: 800;
    font-size: 13px;
    letter-spacing: 0.12em;
    padding: 8px 16px;
    border-radius: var(--radius-pill);
    transform: rotate(-2deg);
    align-self: flex-start;
  }

  h1 {
    font-size: 56px;
    line-height: 1;
    letter-spacing: -0.02em;
    text-wrap: pretty;
  }

  .lede {
    margin: 0;
    font-size: 18px;
    line-height: 1.6;
    color: var(--color-text-muted);
  }

  .content {
    padding: 24px var(--page-padding) 64px;
    max-width: 800px;
  }

  .form {
    border: var(--border-width) solid var(--color-navy);
    border-radius: var(--radius-card-lg);
    box-shadow: 8px 8px 0 var(--color-yellow);
    padding: 36px;
    display: flex;
    flex-direction: column;
    gap: 18px;
    background: var(--color-cream-card);
  }

  .honeypot {
    position: absolute;
    left: -9999px;
  }

  .row {
    display: flex;
    gap: 14px;
  }

  .row.wrap {
    flex-wrap: wrap;
  }

  .row.wrap .field {
    flex: 1 1 calc(50% - 7px);
    min-width: 220px;
  }

  .field {
    flex: 1;
    display: flex;
    flex-direction: column;
    gap: 6px;
  }

  label {
    font-size: 13px;
    font-weight: 800;
    letter-spacing: 0.06em;
    color: var(--color-text);
  }

  input,
  textarea {
    border: 2px solid var(--color-navy);
    border-radius: 12px;
    padding: 13px 16px;
    font-size: 15px;
    font-family: inherit;
    background: var(--color-cream);
    color: var(--color-text);
    min-height: var(--hit-target-min);
  }

  textarea {
    resize: vertical;
    min-height: 140px;
  }

  .hint {
    margin: 0;
    font-size: 14px;
    font-weight: 600;
    color: var(--color-text-muted);
  }

  .field-error {
    margin: 0;
    font-size: 14px;
    font-weight: 800;
    color: var(--color-red-deep);
  }

  .submit {
    align-self: flex-start;
    background: var(--color-navy);
    color: var(--color-cream);
    padding: 13px 28px;
    border: none;
    border-radius: var(--radius-pill);
    font-weight: 800;
    font-size: 15px;
    min-height: var(--hit-target-min);
  }

  @media (max-width: 900px) {
    h1 {
      font-size: 40px;
    }

    .row {
      flex-direction: column;
    }

    .form {
      padding: 24px;
    }
  }
</style>
```

- [ ] **Step 6: Build and run the assertions to verify they pass**

```bash
PATH="$HOME/.nvm/versions/node/v22.22.2/bin:$PATH" pnpm run build
```

Then re-run the exact assertion block from Step 1.
Expected: `ALL ASSERTIONS PASS`.

Also confirm the other pages weren't disturbed:

```bash
grep -c 'guestform' public/_redirects
```
Expected: `0`.

- [ ] **Step 7: Manual check of the headshot script (Review Focus #4)**

Make test images in the scratchpad directory (macOS `sips`), start `pnpm dev`, open `/guestform/`, and pick each file in turn on the same input. Expected message in parentheses; the red text appears under the field and the browser refuses to submit while it shows.

```bash
SCRATCH="/private/tmp/claude-501/-Users-mattstratton-src-github-com-arresteddevops-ado-astro/4145c0c3-d610-4916-b099-06332734aa41/scratchpad"
mkdir -p "$SCRATCH/headshots"
sips -s format png -z 500 500 public/icon-512.png --out "$SCRATCH/headshots/ok-500.png"
sips -s format png -z 399 399 public/icon-512.png --out "$SCRATCH/headshots/small-399.png"
sips -s format png -z 400 400 public/icon-512.png --out "$SCRATCH/headshots/edge-400.png"
printf 'not an image' > "$SCRATCH/headshots/fake.png"
```

1. `small-399.png` → "Headshot is 399×399px; the shorter side needs to be at least 400px." Submit is blocked.
2. Then pick `ok-500.png` → error text disappears and submit is allowed (bad-then-good).
3. `edge-400.png` → accepted.
4. `fake.png` → "We couldn't read that image. Try a JPG or PNG."
5. Pick `small-399.png`, then use the browser's file dialog to clear/cancel → error clears.
6. In a handle field type `@mattstratton`, `https://github.com/x` → browser shows the "Handle only" message on submit; `mattstratton` → fine.

Stop the dev server when done.

- [ ] **Step 8: Commit**

```bash
git add src/pages/guestform.astro src/pages/guestform-thanks.astro src/data/redirect-stubs.txt astro.config.mjs
git commit -m "feat(guestform): /guestform/ Netlify form with headshot upload (#25)" -m "Co-Authored-By: Claude Sonnet 5.5 <noreply@anthropic.com>"
```

---

### Task 3: Verify the unverified assumptions on a deploy preview

This task needs the branch pushed and a PR open, which is outward-facing. **Ask Matty before pushing.** Use the `pr` skill to open the PR as a draft.

**Files:**
- Modify: `docs/superpowers/specs/2026-10-13-guest-intake-form-design.md` (the "Unverified assumptions" section)

**Interfaces:**
- Consumes: the `guestform` Netlify form and its field names from Task 2.
- Produces: the observed shape of a submission's file object, whether its URL needs auth, and the host it's served from. Task 4's SKILL.md text depends on all three.

- [ ] **Step 1: Push and open a draft PR, then wait for the deploy preview**

Use the `pr` skill. Then get the preview URL:

```bash
gh pr view --json number -q .number
```

The preview is `https://deploy-preview-<NUMBER>--ado-astro.netlify.app`. Wait for the Netlify deploy check to go green (`gh pr checks`). Open `<preview>/guestform/` and confirm the page renders and `/guestform` (no trailing slash) lands on it rather than on Google.

- [ ] **Step 2: Submit two dummy submissions with curl**

One well-formed, one hostile (for Task 4's Review Focus #5). Use the 500 px test image from Task 2 Step 7. `$SCRATCH` is the scratchpad directory from that step.

```bash
PREVIEW="https://deploy-preview-<NUMBER>--ado-astro.netlify.app"

curl -sS -o /dev/null -w '%{http_code} %{redirect_url}\n' -X POST "$PREVIEW/guestform/" \
  -F form-name=guestform \
  -F name="Test Guest" \
  -F email="test-guest@example.com" \
  -F pronouns="they/them" \
  -F bio="Dummy bio: it has a colon, \"quotes\", a # hash, and
a second line." \
  -F website="https://example.com" \
  -F linkedin="testguest" \
  -F github="testguest" \
  -F headshot=@"$SCRATCH/headshots/ok-500.png;type=image/png"

curl -sS -o /dev/null -w '%{http_code} %{redirect_url}\n' -X POST "$PREVIEW/guestform/" \
  -F form-name=guestform \
  -F name="../../Evil Name" \
  -F email="hostile@example.com" \
  -F bio="Hostile dummy" \
  -F website="javascript:alert(1)" \
  -F linkedin="https://linkedin.com/in/evil/" \
  -F twitter="@evil" \
  -F headshot="https://example.com/not-a-file.png"
```

Expected: each prints a `303` (or `200`) whose redirect points at `/guestform-thanks/`.

**If the form isn't registered on the preview** (`netlify api listSiteForms` in Step 3 shows no `guestform`): Netlify may only detect new forms on a production deploy. Stop, tell Matty, and do Steps 2-3 against production after merging; Task 4 then ships in a follow-up PR. Do not guess at the submission shape.

- [ ] **Step 3: Read the submissions back and record what the API actually returns**

```bash
netlify api listSiteForms --data '{"site_id":"92814d07-96bd-4529-8055-1f1523e1a7b8"}'
```

Find the `guestform` entry and copy its `id`, then:

```bash
netlify api listFormSubmissions --data '{"form_id":"<GUESTFORM_ID>"}'
```

Record, from the well-formed submission:
1. The exact JSON shape of `data.headshot` (expected `{url, filename, size, type}`).
2. The host of `data.headshot.url`.
3. Whether `curl -sS -o /dev/null -w '%{http_code}\n' "<url>"` (no credentials) returns 200 or 401/403, and whether the downloaded bytes are the original PNG (`file` on the output says `PNG image data, 500 x 500`).
4. What the hostile submission's `data.headshot` looks like (expected: a plain string, not an object).
5. Whether the hostile submission arrived at all (some fields rejected?) and how Netlify reports it (`verified` vs spam).

- [ ] **Step 4: Decide the skill's download step from what you observed**

| Observation | What Task 4's SKILL.md step 4 does |
| --- | --- |
| URL returns 200 with no credentials | Plain `curl -fsSL -o <dest> <url>` (the text in Task 4 as written). |
| URL returns 401/403 | Task 4 step 4 uses an `Authorization: Bearer <token>` header. Read the token from the CLI's config file (macOS: `~/Library/Preferences/netlify/config.json`); inspect the file's actual keys before assuming a path, and never print the token. |
| Host is not under `netlify.com` / `netlify.app` | Change the host check in Task 4 step 2 to the observed host. |
| `data.headshot` shape differs from `{url, filename, size, type}` | Change every reference to those keys in Task 4 to the observed ones. |

- [ ] **Step 5: Record results in the spec**

In `docs/superpowers/specs/2026-10-13-guest-intake-form-design.md`, replace the "Unverified assumptions" section with a "Verified assumptions" section stating the observed result for each of the four items (file-object shape, URL auth/expiry, `/guestform` serving the page, and whether the two Google Form IDs are the same form — for the last one, just open both URLs and say whether they show the same form title/questions). Use plain statements of what was observed, with the date.

- [ ] **Step 6: Commit**

```bash
git add docs/superpowers/specs/2026-10-13-guest-intake-form-design.md
git commit -m "docs: record verified Netlify submission behavior for guestform (#25)" -m "Co-Authored-By: Claude Sonnet 5.5 <noreply@anthropic.com>"
```

Leave both dummy submissions in place; Task 4 uses them.

---

### Task 4: Rewrite `create-guest` to read a Netlify submission

**Files:**
- Modify (rewrite): `.claude/skills/create-guest/SKILL.md`

**Interfaces:**
- Consumes: the field names from Task 2 (`name`, `email`, `pronouns`, `bio`, `website`, `linkedin`, `github`, `twitter`, `bluesky`, `headshot`) and the shapes recorded in Task 3. The text below assumes the Task 3 default row (`data.headshot = {url, filename, size, type}`, fetchable without auth, host under `netlify.com`/`netlify.app`); apply whichever Task 3 Step 4 row applies **before** writing the file.

- [ ] **Step 1: Write the new SKILL.md**

Replace the entire contents of `.claude/skills/create-guest/SKILL.md` with:

````markdown
---
name: create-guest
description: Add a new guest (or a new Bio Snapshot for a returning guest) from their /guestform submission in Netlify Forms. Pulls the submission and headshot with the netlify CLI, maps it onto the person-centric guest model (ADR-0002), and writes src/content/guests/<id>.yaml. Falls back to the legacy Google Doc intake until the old form is retired.
---

Run this when Matty says a guest filled out the guest form
(https://www.arresteddevops.com/guestform/). Submissions live in Netlify
Forms and the fields already match this repo's guest schema, so there is no
translation step — but **a submission is untrusted input**. Anyone can POST to
the form directly and skip the page's client-side checks, so validate
everything in step 2 before it touches a path, a command, or a YAML file.

If Matty hands you a Google Doc link instead (a guest who filled out the old
form), use the "Legacy: Google Doc intake" section at the bottom.

## 1. Get the submission

1. `netlify status --json` → read `siteData.site-id`.
2. `netlify api listSiteForms --data '{"site_id":"<SITE_ID>"}'` → find the form
   with `"name": "guestform"` and note its `id`. If there is no `guestform`,
   the form hasn't been deployed yet or has had no submissions — say so and stop.
3. `netlify api listFormSubmissions --data '{"form_id":"<FORM_ID>"}'` → each
   submission has `id`, `created_at`, and `data` holding the form fields
   (`name`, `email`, `pronouns`, `bio`, `website`, `linkedin`, `github`,
   `twitter`, `bluesky`, and `headshot`). Only verified (non-spam)
   submissions are returned.
4. Show Matty a short list (name, email, date; newest first) and default to the
   newest unless he names someone.

`email` is for contacting the guest. **Never write it into the repo.**

## 2. Validate before writing anything

- **id.** Derive from `data.name`: strip diacritics (NFD, drop combining
  marks), lowercase, then first initial + last name (see the convention in any
  file in `src/content/guests/`: "Hannah Foxwell" → `hfoxwell`; hyphenated
  surnames keep the hyphen, e.g. `auno-antonison`). The result must match
  `^[a-z][a-z0-9-]*$`. If it doesn't — a single-word name, empty, characters
  outside `a-z0-9-` — **stop and ask Matty what id to use**. Never put raw
  submission text into a file path.
- **Handles** (`linkedin`, `github`, `twitter`, `bluesky`) must match
  `^[A-Za-z0-9._-]+$`. The form's `pattern` normally guarantees this, but a
  direct POST can skip it. If a value is an obvious URL or has a leading `@`
  (e.g. `https://linkedin.com/in/pagnutti/`, `@pagnutti`), strip it down to the
  handle **and tell Matty you did**. Anything else that doesn't match, or a bare
  domain (`linkedin.com`) in a non-Bluesky field → omit the field and tell Matty.
  (Bluesky handles legitimately contain dots, e.g. `name.bsky.social`.)
  `SocialLinks.astro` builds `https://linkedin.com/in/${linkedin}`, so a full URL
  here produces a broken doubled-up link.
- **website** must start with `https://` or `http://`; otherwise omit it and tell
  Matty.
- **bio** is copied verbatim. Do not rewrite it.
- **headshot** is usable only if `data.headshot` is an **object** (not a string)
  with a `url` whose host ends in `netlify.com` or `netlify.app`, and `type` is
  `image/jpeg` (extension `jpg`) or `image/png` (extension `png`). Take the
  extension from `type`, **never** from `filename`. If anything fails, proceed
  without an image and tell Matty — `getMiscAsset()` already falls back to
  initials gracefully (see `src/lib/images.ts`); don't block the guest on a photo.

## 3. New guest or returning guest?

Check `src/content/guests/<id>.yaml`. If it doesn't exist, this is a **new
guest**: the snapshot key is `<id>`.

If it exists, this is the same person back on the show. Compare the new bio
against the existing snapshot(s):

- **Materially the same** (same job, same bio in substance) — reuse the
  existing snapshot key; don't create a new one just because the wording
  changed slightly. Don't overwrite the existing headshot unless Matty asks.
- **Meaningfully different** (new job, new company, etc.) — append a new
  snapshot with a fresh key. Match the existing numbering convention seen in
  files like `pcheslock.yaml` or `bkromhout.yaml`: later appearances get
  `<id>2`, `<id>3`, etc. in appearance order. Don't touch the existing
  snapshot(s) — this is additive only.

Either way, the episode referencing this guest points at whichever snapshot
key is actually current — see the `create-episode` skill.

## 4. Get the headshot

Skip this step if step 2 ruled the headshot out. Otherwise download it to
`src/assets/img/guests/<snapshot key>.<ext>` (the image is named after the
snapshot key, so a returning guest's second photo is `<id>2.<ext>`, not a
replacement of the first):

```bash
curl -fsSL -o "src/assets/img/guests/<snapshot key>.<ext>" "<data.headshot.url>"
```

Then confirm what you got is really an image of the claimed type and big enough:

```bash
file "src/assets/img/guests/<snapshot key>.<ext>"
sips -g pixelWidth -g pixelHeight "src/assets/img/guests/<snapshot key>.<ext>"
```

`file` must say JPEG or PNG; if not, delete the file and proceed without an
image. If the shorter side is under 400 px, keep it but warn Matty (the form
enforces 400 px client-side; a direct POST can skip that).

## 5. Write the guest file

New guest: `src/content/guests/<id>.yaml`, matching the schema in
`content.config.ts`. Returning guest with a meaningfully different bio: append
a snapshot to the existing file instead.

```yaml
name: Doug Pagnutti
snapshots:
  - key: dpagnutti
    bio: |-
      <bio text, verbatim>
    thumbnail: img/guests/dpagnutti.jpg
    website: <omit the field entirely if blank>
    twitter: <handle only, no @ or URL>
    github: <username only, no URL>
    linkedin: <username only, e.g. "pagnutti" — NOT the full URL>
    bluesky: <handle only>
    pronouns: <only if given>
placeholder: false
```

- Write the bio as a YAML **block scalar** (`|-`), indented under `bio:`. Bios
  come from a free-text box and can contain `: `, `#`, quotes, and newlines,
  any of which breaks a plain scalar.
- Only include the optional fields that were answered — omit the key entirely
  rather than writing an empty string.
- `snapshots` is an array even for one entry — that's what lets a future
  returning-guest update add a second era without disturbing this one.

## 6. Verify

Run `pnpm run build` (needs Node 22; the default shell may be Node 20 — prefix
`PATH="$HOME/.nvm/versions/node/v22.22.2/bin:$PATH"`). The zod schema in
`content.config.ts` will reject a malformed guest file at build time — treat any
schema error as something to fix now, not something to explain away.

## 7. Offer to clean up the submission

The submission holds the guest's email and photo. After the guest file is in,
**ask** Matty whether to delete it from Netlify. Only on a yes:

```bash
netlify api deleteSubmission --data '{"submission_id":"<SUBMISSION_ID>"}'
```

Don't commit or open a PR unless asked — creating the guest file is the
deliverable; landing it is a separate decision.

---

## Legacy: Google Doc intake (remove once the old form is turned off)

For a guest who already filled out the old Google Form. Ask for the Google Doc
link, extract the file ID from `docs.google.com/document/d/<ID>/...`, and read
it with the Google Drive connector (`read_file_content`).

The doc has a human-readable Q&A section (Full Name, Email, Pronouns, social
links, Bio, Profile Image/Headshot) — **this is the source of truth** — and a
legacy Hugo-TOML block below it (`title = "..."`, `Type = "guest"`,
`Thumbnail = "img/guests/GUEST.jpg"`). Cross-check the TOML against the Q&A for
anything left blank, but don't copy it verbatim; its field names and `+++`
delimiters are Hugo frontmatter, not this repo's schema.

Then follow steps 2, 3, 5, 6 above, with these differences:
- Social links arrive as full URLs; reduce each to the handle/username
  (`https://linkedin.com/in/pagnutti/` → `pagnutti`).
- The headshot is usually a Google Photos share link, which isn't reliably
  fetchable. Ask Matty to download it and either hand you a local file path
  (copy it to `src/assets/img/guests/<snapshot key>.<ext>` yourself) or drop it
  there directly. If there's truly no image, proceed without one.
````

- [ ] **Step 2: Dry-run the skill against the well-formed dummy**

Invoke the `create-guest` skill and give it the "Test Guest" submission. It should: derive id `tguest`, find no existing file, download the headshot to `src/assets/img/guests/tguest.png`, run `file`/`sips` (500×500 PNG), write `src/content/guests/tguest.yaml` with a `|-` bio that includes the colon, quotes, `#`, and second line, omit `bluesky`/`twitter`, and not contain the email anywhere. Then:

```bash
PATH="$HOME/.nvm/versions/node/v22.22.2/bin:$PATH" pnpm run build
grep -rn "test-guest@example.com" src/ ; echo "grep exit: $?"
```

Expected: build green; the `grep` finds nothing (`grep exit: 1`).

- [ ] **Step 3: Dry-run the skill against the hostile dummy (Review Focus #5)**

Run the skill against the "../../Evil Name" submission. Expected, in the skill's own words to Matty:
- id derivation is **refused or asked about** (the result has characters outside `a-z0-9-`, or `..` would escape the directory) — no file is written under any path derived from the raw name.
- `linkedin` URL stripped to `evil` **and reported**; `twitter` `@evil` stripped to `evil` **and reported**.
- `website` `javascript:alert(1)` omitted and reported.
- `headshot` is a string, not an object → no download attempted, reported.

If any of these doesn't happen, fix the skill text, not the dummy.

- [ ] **Step 4: Remove the dry-run artifacts so nothing fake lands**

```bash
git status --short
```

Delete only what the dry-run created (`src/content/guests/tguest.yaml`, `src/assets/img/guests/tguest.png`, and anything the hostile run left behind), then `git status --short` should show just `.claude/skills/create-guest/SKILL.md` modified.

- [ ] **Step 5: Commit**

```bash
git add .claude/skills/create-guest/SKILL.md
git commit -m "feat(create-guest): read guest intake from Netlify Forms (#25)" -m "Co-Authored-By: Claude Sonnet 5.5 <noreply@anthropic.com>"
```

- [ ] **Step 6: Delete the two dummy submissions (confirm with Matty first)**

List them (`listFormSubmissions` as in Task 3 Step 3), confirm with Matty that the two entries are the dummy ones by name/email, then for each:

```bash
netlify api deleteSubmission --data '{"submission_id":"<SUBMISSION_ID>"}'
```

---

## Follow-ups (not code — hand to Matty)

- Add a Netlify email notification for new `guestform` submissions (Netlify UI → Forms → guestform → Notifications).
- Once the new form is live and nobody is mid-flight on the old one: turn off the old Google Form, then delete the "Legacy: Google Doc intake" section from `create-guest`.
- Update the issue (#25) with the shipped state and close it with the PR.

## Self-review (against the spec)

- **Page, path, redirect-stub removal, wiring, thanks page:** Task 2 (Steps 2, 4, 5).
- **Fields incl. handle-only `pattern`, email never published:** Task 2 Step 5 (fields, `HANDLE_PATTERN`); email-never-in-repo checked in Task 4 Step 2.
- **Headshot rules (5 MB, 400 px, JPG/PNG, one file, Netlify limits):** Task 1 (rules + boundaries), Task 2 (input + script + manual check).
- **Pickup flow steps 1-6 + legacy fallback:** Task 4 Step 1 (sections 1-7 + legacy).
- **Unverified assumptions:** Task 3.
- **Manual steps (notification, turn off old form):** Follow-ups.
- **Testing (build, `grep` on `dist/`, self-check, preview submission):** Tasks 1-4.
- **Not in the spec but found while planning:** sitemap exclusion for the thanks page (Task 2 Step 3); the `v`-flag `pattern` pitfall (Task 1); the spec said submit is "disabled" on a bad headshot — the plan blocks it with native `setCustomValidity`, which needs no extra code.

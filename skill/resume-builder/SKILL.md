---
name: resume-builder
description: Build and deploy a personal resume/CV website from JSON Resume data, with support for multiple visual themes/templates and one-click GitHub Pages deployment. Use when a user wants an online resume, a portfolio generated from structured resume data, to preview resume designs across many JSON Resume themes, or to publish a resume to a custom GitHub Pages site.
---

# Resume Builder

Turn structured resume data into a hosted, editable, printable resume website — optionally across many themes — and deploy it to GitHub Pages.

This skill combines two ideas:
- **`rbardini/jsonresume-theme-even`** — a flat JSON Resume theme whose online demo offers in-browser edit + print + "view source on GitHub".
- **`jsonresume/resume-website`** — a static resume website generator with live editing.

The result: a resume site generator + in-browser edit + GitHub Pages deploy, driven by a single `resume.json`.

## When to use

- "Make me an online resume / CV website"
- "Generate a portfolio from my resume data"
- "Show me how my resume looks in different themes"
- "Publish my resume to GitHub Pages"
- Any task needing multi-template resume rendering + static hosting

## Core capabilities

1. **Single-theme site** — render one chosen theme (default `jsonresume-theme-cjean`) as the live site.
2. **Multi-template gallery** — render *all* themes into separate pages with a 🎨 theme switcher for live preview.
3. **In-browser editing** — ✏️ toggles `contenteditable` on the resume body; 🖨️ prints; 🔗 jumps to the source repo. Editing is a **toggle (default off)** so links stay clickable.
4. **GitHub Pages deploy** — a GitHub Actions workflow builds `dist/` and publishes it.

## Workflow

### Step 1 — Prepare `resume.json`

Use the [JSON Resume schema](https://jsonresume.org/schema/). A minimal example lives in `assets/sample-resume.json`; the full field reference is in `references/json-resume-schema.md`.

Key rules to avoid build failures:
- Theme engines (e.g. `cjean`) validate `url`/`image` fields with Zod as **strict URLs**. Empty strings `""` crash the build.
- Always sanitize: drop empty/non-URL `url`, `website`, `image` fields before rendering (see `scripts/build.js` → `sanitize()`).

### Step 2 — Choose a mode

Controlled by the `RESUME_THEME` environment variable:

| Value | Result |
|-------|--------|
| `jsonresume-theme-cjean` (default) | Single-theme site → `dist/index.html` (edit/print/github nav, **no** switcher) |
| `all` | Multi-template gallery → `dist/index.html` + `dist/themes/<name>/index.html` (🎨 switcher + edit/print/github) |
| any other `jsonresume-theme-*` pkg | That one theme as the site |

Theme catalog: `theme_pkgs.txt` (one npm package per line; scoped packages like `@scope/jsonresume-theme-x` are supported).

### Step 3 — Build

```bash
# from the repo root (uses build-resume.js):
node build-resume.js                 # single theme (cjean)
RESUME_THEME=all node build-resume.js   # multi-template gallery

# or the self-contained skill script (portable, no repo deps):
node skill/resume-builder/scripts/build.js
RESUME_THEME=all node skill/resume-builder/scripts/build.js
```

`build.js` is async-safe: themes whose `render()` returns a Promise (e.g. `cjean`) are `await`ed. Per-theme failures are caught and `SKIP`ped so one broken theme never aborts the whole build.

### Step 4 — Deploy to GitHub Pages

Push to the default branch. `.github/workflows/deploy.yml` runs the build and publishes `dist/` via `actions/deploy-pages`. A copy of the workflow is in `assets/deploy.yml`.

Requirements:
- Repository **Pages** source = "GitHub Actions".
- Workflow needs `permissions: { contents: read, pages: write, id-token: write }`.

## Key implementation notes

- **Edit toggle, not always-on**: `document.body.contentEditable` is toggled by the ✏️ button. Default `false` → all links (including the GitHub button) navigate normally. This fixes the common bug where `contenteditable` on `<body>` silently breaks link clicks.
- **Nav outside the editable region**: the navbar is appended to `document.documentElement` (`<html>`), *outside* `<body>`, so its buttons work even while the body is editable.
- **Print CSS is scoped**: `#resume-nav`/`#resume-theme-overlay` are hidden only inside `@media print { ... }` — never as a global rule (a global `display:none` previously made the toolbar invisible on screen).
- **Data sanitization** before render prevents Zod `z.url()` crashes from empty URL fields.

## Bundled resources

- `scripts/build.js` — self-contained renderer (single + multi mode), mirrors `build-resume.js`.
- `scripts/list-themes.js` — print the available themes from `theme_pkgs.txt`.
- `references/json-resume-schema.md` — field reference for building `resume.json`.
- `assets/sample-resume.json` — minimal valid resume.
- `assets/deploy.yml` — GitHub Pages deployment workflow.

# AGENTS.md — how to work in this repo

## Communication

- Respond in Spanish, short and concise. No emojis.
- Code, commits and docs in simple, human English.
- When referencing code, use `file_path:line_number`.
- Propose changes first when there's a design decision; implement after approval.

## Stack constraints

- Vanilla only: plain HTML, CSS and JS. No frameworks, no build step, nothing fancy.
- Keep edits minimal and targeted. Prefer editing existing files over creating new ones.

## Workflow

- Work on `develop`. Never push to any remote unless explicitly asked.
- Only commit when asked (`arma el commit`). Split commits by logical unit,
  one line each, imperative mood (e.g. `Add fake video player with preroll…`).
- Before committing, run `node --check script.js` and the key/ID audits below.

## Verification (run these, don't eyeball)

```sh
node --check script.js
```

- Every `data-i18n` / `data-i18n-aria-label` key in `index.html` must exist in
  **both** `en` and `es` dicts in `script.js`.
- Every `getElementById("…")` in `script.js` must match an `id="…"` in `index.html`.
- For layout bugs, reproduce in real Safari via the `safari-mcp-debug` skill
  instead of guessing from screenshots. Serve with
  `python3 -m http.server 8099` — never `file://` for blocker tests, since
  rules scoped to third-party loads may not fire without a real host.

## Localization (EN default, ES required)

- All visible strings, `<title>`, `aria-label`s and tracker-log messages must
  be localized through the `translations` dict. Brand names, lorem ipsum and
  proper nouns (Taboola, Disqus, AdSense, Safari) stay as-is.
- Established ES terms: paywall → muro de pago, fingerprinting → huella
  digital, beacons → sondas, fallback → modo alternativo. Adopted words
  (banner, cookies, popup, widget) and "content blocker" stay.
- Terminology: "content blocker" is generic (blocks more than ads),
  "ad blocker" is ads-only. Never write "adblock" (brand) or "bait".

## Confidentiality

- This page is used to test several apps. Never reveal app-specific logic
  (allowlist rules, detection workarounds) in code, comments, strings or docs.
  Keep all wording generic — `view-source` counts as public.

## Debug artifacts

- `Screenshots (Debug)/` and `Screen Recordings (Debug)/` are gitignored.
  Never commit them. For `.mov` files, extract frames with
  `ffmpeg -i in.mov -vf fps=1 out/f%03d.png`.
- If a CLI tool is missing, tell the user instead of working around it.

## Test elements cheat sheet

- Cosmetic rules → real selectors (`.ad-slot`, `data-ad-slot`,
  `#cookies-overlay`, `#onetrust-consent-sdk`,
  `#taboola-below-article-thumbnails`, `#credential_picker_container`).
  Only global (domain-independent) rules fire here; domain-scoped ones don't.
- Network rules → real beacons (pixel.wp.com, google-analytics.com,
  imasdk.googleapis.com…). `fetch` probes only match rules with
  `resourceType: nil`/`fetch`; script/image rules need element beacons.
- Newsletter, social and comments boxes have no rules: negative controls
  against over-blocking. Keep them visible.

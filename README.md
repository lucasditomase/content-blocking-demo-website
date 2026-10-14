# Content Blocking Demo Website

Plain HTML/CSS/vanilla JS news mockup for testing Safari content blockers.
Colored boxes simulate the elements blockers target: ads, cookie banners,
popups, social embeds, video ads, network beacons, blocker detection and
trackers. No frameworks, no real ads, no real tracking.

**Live demo:** https://lucasditomase.github.io/content-blocking-demo-website/

## What it tests

Each element covers one or both rule types:

- **Cosmetic rules** (`css-display-none`): boxes carry the real-world
  selectors blockers hide (`.ad-slot`, `data-ad-slot`, `#cookies-overlay`,
  `#onetrust-consent-sdk`, `#taboola-below-article-thumbnails`, …).
- **Network rules** (`block`): image/script beacons hit really blocked hosts
  (`pixel.wp.com`, `google-analytics.com`, `imasdk.googleapis.com`, …) with
  live load/blocked statuses, plus `fetch` probes with an offline control.
- **Behavioral**: preroll/midroll/overlay video ads that skip when servers
  are blocked, an ad-blocker detection probe with paywall notice, and a
  `window.open` popup test.

Newsletter, social and comment boxes have no rules behind them on purpose —
they are negative controls against over-blocking.

## Run it locally

Serve over HTTP (recommended — `file://` has no host, so rules scoped to
third-party loads may not fire):

```sh
python3 -m http.server 8099
# open http://localhost:8099/
```

## Structure

- `index.html` — news layout (article, sidebar, overlays).
- `style.css` — vanilla CSS, one color per element type.
- `script.js` — interactions, EN/ES localization (`data-i18n`), test controls.

Language persists in `localStorage` and auto-detects from the browser.
Articles are hash-routed (`#/tech`, …) with active nav state.

## License

This project is not open source. All rights reserved.

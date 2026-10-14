---
name: Safari MCP Debug
description: Debug a website in real Safari via the Safari MCP server (safaridriver --mcp) — DOM, computed styles, console, network, screenshots. Use instead of asking the user for screenshots.
---

# Debugging with the Safari MCP server

Official docs: https://webkit.org/blog/18136/introducing-the-safari-mcp-server-for-web-developers/

The Safari MCP server (Safari 27+) connects any MCP-compatible agent
(Claude Code, Codex, OpenCode, …) to a real Safari window: DOM, computed
styles, console, network requests, screenshots, clicks, viewport control.

## Prerequisites (one-time, on the Mac)

- Safari 27+: Settings → Advanced → "Show features for web developers",
  then Settings → Developer → "Allow remote automation and external agents".
- First run needs macOS authorization: run `safaridriver -p 4444` once in a
  local terminal and accept the system dialog. If session creation times out,
  retry with Safari fully quit (⌘Q) — the driver prefers its own instance.

## Setup (any MCP client)

Standard MCP server entry (adapt to your client's config format):

```json
{
  "mcpServers": {
    "safari-mcp": {
      "command": "/usr/bin/safaridriver",
      "args": ["--mcp"]
    }
  }
}
```

Claude Code / Codex one-liners and details are in the official docs above.
The server runs locally and makes no network calls of its own.

## Available tools (server-side names)

`list_tabs`, `create_tab`, `switch_tab`, `close_tab`, `page_info`,
`navigate_to_url`, `wait_for_navigation`, `get_page_content`,
`evaluate_javascript`, `page_interactions` (click, type, scroll, hover…),
`screenshot`, `set_viewport_size`, `set_emulated_media`,
`browser_console_messages`, `list_network_requests`, `get_network_request`,
`browser_dialogs`. Invoke them through your client's tool-calling convention.

## Critical: evaluate_javascript semantics

The `expression` parameter is treated as a **function body**, not an
expression. A bare expression returns `null`. Always end with an explicit
`return`:

```js
// WRONG → null
"window.innerWidth"
// RIGHT
"return window.innerWidth;"
```

## Session recipe

1. Serve the site over HTTP (never `file://` for content-blocker tests —
   rules with `loadType: thirdParty` may not fire without a real host):
   `python3 -m http.server 8099` in the repo.
2. Open the page (`create_tab` with the URL), confirm with `page_info`.
3. `set_viewport_size`, then **read back** `innerWidth`/`innerHeight` — the
   applied size can differ from requested.
4. Reload after edits, then `wait_for_navigation`.
5. `close_tab` when done.

## Copy-paste debugging snippets

Element rects + computed style:

```js
return JSON.stringify((function (sel) {
  var el = document.querySelector(sel);
  var r = el.getBoundingClientRect(), cs = getComputedStyle(el);
  return {x: r.x, w: r.width, h: r.height, display: cs.display,
    position: cs.position, boxSizing: cs.boxSizing,
    aspectRatio: cs.aspectRatio, minHeight: cs.minHeight};
})('.video-screen'));
```

Find elements wider than the viewport (overflow offenders):

```js
var out = [];
document.querySelectorAll('body *').forEach(function (el) {
  var r = el.getBoundingClientRect();
  if (r.width > window.innerWidth + 1) out.push(el.tagName + '#' + el.id + ' w=' + Math.round(r.width));
});
return JSON.stringify({docScrollWidth: document.documentElement.scrollWidth, offenders: out.slice(0, 15)});
```

## Gotchas learned on this project

- **Subpixel noise**: rects are fractional. Don't chase ±3px diffs; only act on 10px+.
- **`overflow-x: clip/hidden` on body masks overflow**: `docScrollWidth` stays
  clean while a child still paints past its parent. Compare child vs parent
  edges directly (`childRect.right - parentRect.right`), don't rely on
  `scrollWidth` alone.
- **`aspect-ratio` + `min-height` transfer**: when min-height clamps the
  ratio-computed height, the clamp transfers back to width
  (e.g. 220px × 16/9 = fixed 391.11px), breaking narrow viewports. Prefer
  bare `aspect-ratio` on modern Safari.
- **Safari cache**: after editing, empty caches (⌥⌘E) + reload, or measurements
  will reflect stale CSS/JS. When in doubt, verify what's served
  (`curl` the file) before theorizing.
- **Beacon/probe timing**: network beacons resolve async (error is fast when
  blocked; hanging networks hit the timeout). Never gate UI on unresolved
  beacons without a visible "checking" state and a short cap.
- **Screenshots**: the `screenshot` tool returns PNG. For user-supplied `.mov`
  recordings, extract frames with `ffmpeg -i in.mov -vf fps=1 out/f%03d.png`
  (`brew install ffmpeg`); for a single frame, `qlmanage -t -s 1200 -o DIR file`.
- **Deployed URL for real-device tests**: `https://lucasditomase.github.io/content-blocking-demo-website/`
  (verify deployed == local with `curl` + `diff` before debugging reports).

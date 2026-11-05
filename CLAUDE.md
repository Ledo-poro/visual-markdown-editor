# Project Instructions

## Project Overview

This repository is a small, dependency-light browser application: a visual Markdown editor with a live preview, theme switching, a built-in guide, and PDF export. It uses plain HTML, CSS, and JavaScript ES modules. There is no package manifest, framework, or build step.

## Running Locally

Serve the repository root over HTTP, then open the local URL in a browser. ES modules may be blocked when `index.html` is opened directly with the `file://` protocol.

- In VS Code, use the Live Server extension on `index.html`; or
- From the repository root in PowerShell, run `py -m http.server 8000` and visit `http://localhost:8000`.

PDF export loads `html2pdf.js` from a CDN, so that feature requires an internet connection. Stop the Python server with Ctrl+C.

## Structure

- `index.html`: main editor document and JavaScript module entry point.
- `guide.html`: standalone Markdown and theme guide.
- `settings.html`: settings page.
- `css/`: base styles, layout, themes, guide styles, and the stylesheet entry point (`style.css`).
- `script/logic.js`: imports the application module.
- `script/app.js`: initializes the editor and handles themes, guide UI, and PDF export.
- `script/dom.js`: generates the editor layout and updates preview content.
- `script/markdown.js`: converts supported Markdown syntax to HTML.
- `script/animations.js`: animation helpers.

## Development Guidance

- Keep the implementation framework-free and consistent with the existing file organization.
- Preserve the app's direct browser workflow; do not add a build system or dependencies unless the task calls for them.
- There is no automated test or lint command configured. For changes, serve the app locally and verify the affected interaction in a browser.
- The Markdown parser is intentionally small; do not describe it as supporting all Markdown features. Its current syntax includes headings, unordered list items, blockquotes, bold, italic, and inline code.
- Preview output is assigned through `innerHTML`, and inline Markdown formatting currently interpolates source text into HTML. Treat escaping/sanitization as a security concern when changing the parser or rendering untrusted input.
- Theme selection is stored in `localStorage`; retain a valid default when saved data is absent or invalid.
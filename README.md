# Solène Look Ring (HTML + CSS + GSAP)

An interactive 2.5D editorial lookbook ring built with semantic **HTML5**, modern **CSS custom properties**, and **GSAP 3**. Eight curated menswear looks stand arranged around an elliptical floor ring seen from a high top-down angle — drag or use arrow keys to rotate the ring, open any look up close, inspect styled pieces via counter-scaled interactive hotspots, and add individual items or the full outfit to the bag.

---

## Features

- **2.5D Elliptical Ring Stage:** Trigonometric depth projection (`--tx`, `--ty`, `--sc`, `--bl`, dynamic `z-index`) with ground contact shadows and depth-of-field blur.
- **GSAP 3 Choreography:**
  - Viewport-triggered entrance reveal (`IntersectionObserver`)
  - Shortest-arc ring rotation (`power3.out`) via Prev/Next buttons or keyboard arrows
  - Pointer drag-to-turn with subtle flick inertia
  - Smooth open & close zoom timelines (including smooth figure return to its exact ring slot)
  - Dynamic per-look background tone crossfades (`--tone`)
- **Shop-the-Look Panel & Hotspots:**
  - Counter-scaled interactive hotspots (`scale(1 / --open-s)`) that stay sharp at 1:1 CSS pixels on the zoomed model
  - Bidirectional hover/focus/click sync between model hotspots and product rows
  - Size variant selector with sold-out handling and live total price calculation
  - Loading, error, and success toast feedback
- **Responsive & Accessible:**
  - Dedicated mobile layout (`≤ 820px`) with scrollable piece list and scoped close button
  - Full keyboard navigation (`ArrowLeft`, `ArrowRight`, `Enter`, `Escape`) with focus management and ARIA live announcements
  - Respects `prefers-reduced-motion: reduce` across both CSS and GSAP timelines

---

## Project Structure

```text
solene-look-ring/
├── index.html          # Semantic HTML5 markup, SEO/OpenGraph/JSON-LD, GSAP 3 CDN
├── styles.css          # Design tokens, 2.5D ring layout, hotspots, panel, responsive rules
├── app.js              # GSAP choreography engine, drag physics, state machine & cart simulation
├── img/
│   └── men/
│       ├── men1.webp   # Transparent menswear cutout (Look 01)
│       ├── men4.webp   # Transparent menswear cutout (Look 04)
│       ├── men7.webp   # Transparent menswear cutout (Look 07)
│       ├── *.png       # Full-resolution transparent PNG cutouts
│       └── *_original.jpg
└── README.md
```

---

## Quick Start

No build step required.

1. Clone the repository:
   ```bash
   git clone https://github.com/smshaown/solene-look-ring.git
   cd solene-look-ring
   ```
2. Open `index.html` directly in your browser, or run a local static server:
   ```bash
   python -m http.server 8765
   ```
   Then visit `http://localhost:8765`.

---

## Tech Stack

- **HTML5** (Semantic elements, ARIA carousel & live regions, Schema.org JSON-LD)
- **CSS3** (Custom properties, responsive `clamp()` typography, SVG film grain, `prefers-reduced-motion`)
- **GSAP 3.12.7** (Timelines, shortest-arc rotation, flick inertia, smooth zoom/return)
- **Typography:** `Instrument Serif` & `Inter` via Google Fonts

---

## Author

- GitHub: [@smshaown](https://github.com/smshaown)

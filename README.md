# Haykozé Design System

> All-climate Protective Wearables — built so everyone across the globe can comfortably enjoy the new era of scorching outdoors.

**Mission:** To design the most ergonomic and effective personal cooling device, tailored to the needs of construction sites, providing the agility and freedom through engineered, cooling air rings.

---

## What Haykozé makes

Haykozé is a hardware company building **wearable cooling air rings** for hot-weather work environments — primarily construction, but extensible to any outdoor/industrial setting. Their flagship technology is the **AR49**, a halo-shaped air ring that mounts behind the head and pushes engineered cooling air around the wearer.

The product line shows up in two mounted configurations:

| Product | Form factor | Use case |
|---|---|---|
| **AR49 — Helmet edition** | Cooling air ring snaps onto a standard white safety helmet, with a fan vent visible at the temple. | Construction sites, industrial work where hard hats are required. |
| **AR49 — Cap edition** | Lighter ring that clips to the back of a baseball cap; "AR49" embossed on the side panel, "HAYKOZÉ" on the rear. | Field crews, delivery/logistics, outdoor staff who don't need full hard-hat protection. |

Both products are 3D-printed in light grey/white industrial polymer, designed to be invisible from the front and to integrate with whatever the worker is already wearing.

## Source materials provided

Everything was supplied as image uploads — there is no codebase or Figma file. The design language documented here was specified by the user as an **Apple-inspired chassis** ("reverent product photography framed by near-invisible UI") applied to industrial cooling wearables.

| Path | Notes |
|---|---|
| `assets/haykoze-logo.webp` | Brand mark — squirrel with full bushy tail. Originally on transparent/white. |
| `assets/products/ar49-helmet.png` | Helmet configuration on a mannequin head. Hero-grade product shot. |
| `assets/products/ar49-cap-side.jpeg` | Cap configuration, profile view, "AR49" badge visible. |
| `assets/products/ar49-cap-back.jpeg` | Cap configuration, three-quarter rear, "HAYKOZÉ" wordmark visible. |
| `assets/products/ar49-cap-back-2.jpeg` | Duplicate / alternate angle. |
| `assets/products/lineup.jpeg` | Both products side-by-side on dark mannequins — useful as a moody promo shot. |

---

## Index

| File | Purpose |
|---|---|
| `README.md` | This file. |
| `SKILL.md` | Cross-compatible skill manifest for Claude Code. |
| `colors_and_type.css` | All color, type, spacing, radius and elevation tokens. |
| `assets/` | Logo + product photography. |
| `preview/` | Design-system preview cards (rendered in the Design System tab). |
| `ui_kits/marketing/` | Marketing-website UI kit: tiles, nav, buttons, store cards, configurator. |
| `preview/_card.css` | Shared styles for design-system preview cards. |
| `fonts/` | (empty — SF Pro is proprietary; please attach licensed files for production.) |

---

## Content Fundamentals

**Voice.** Quiet, confident, product-first. Headlines describe the product or the experience in three to six words and let the photograph do the rest. Subcopy is one declarative sentence — never two. The brand never raises its voice; the product is the loud part.

**Person.** Second person ("you") for benefit framing on hero tiles ("Stay cool. All day."). Third person ("AR49 on every site.") for product-name moments. First person ("we") only in the About/mission section.

**Casing.**
- Headlines: **sentence case** with a period. ("Cooling, engineered for the site.")
- Product names: **AR49** is always uppercase. **Haykozé** keeps the acute on the final é.
- CTAs: **sentence case**, no period. ("Learn more", "Buy", "Configure").
- Nav/utility labels: sentence case, never ALL CAPS.

**Punctuation.** A period at the end of every headline is part of the cadence — it makes the headline feel finished. Em-dashes are used sparingly for product asides. No exclamation marks, ever.

**Emoji.** Never. Industrial trust requires restraint.

**Vibe.** Engineered calm. The product is doing serious work for serious people; the marketing should feel as composed as the engineering.

**Examples.**
- *"Stay cool. All day."* — hero
- *"AR49. The cooling air ring, now lighter."* — product tile
- *"Built for the site. Worn like a cap."* — feature tile
- *"From 32°C outside to 24°C around your head."* — proof point
- *"Configure your AR49"* — primary CTA
- *"Learn more"* / *"Buy"* — paired CTAs

**Don't write like.** Marketing-bro hype, lifestyle-startup whimsy, jargony engineering specs in body copy, exclamation-heavy social copy, emoji bullets.

---

## Visual Foundations

### Color
Single accent: **Action Blue `#0066cc`**. Every link, every CTA, every focus signal — one blue, no exceptions. On dark surfaces blue links shift to **Sky Link Blue `#2997ff`** so they stay legible. There is **no second brand color** and **no decorative gradient**. Surfaces are pure white, parchment `#f5f5f7`, near-black `#272729` (with two micro-step siblings), and pure black reserved for the global nav and video frames. Text is `#1d1d1f` — near-black, never pure black, so the page reads photographic rather than printed.

### Type
**SF Pro Display** for anything ≥19px, **SF Pro Text** below. Body copy is **17px / 400 / 1.47** with `-0.374px` tracking — Apple's signature "reading not scanning" pace. Headlines run weight **600** (never 700) with negative letter-spacing of `-0.28px` to `-0.374px` — the "Apple tight" look. Weight **300** is real and rare, used only on `lead-airy` (24px) and `button-store-hero` (18px). **Weight 500 is deliberately absent** from the ladder.

### Spacing
8pt base. Section vertical padding is **80px**. Card padding is **24px**. Tiles stack edge-to-edge with **0 gap** — the color change between tiles IS the divider.

### Backgrounds
Photography-first. Hero imagery is full-bleed, rectangular, never rounded. Product renders are PNG/WebP with transparency, resting on a tile and picking up the system shadow. **No CSS gradient overlays, no repeating patterns, no decorative textures.** Atmosphere is photographic atmosphere — a real shot of a real site at real golden hour.

### Animation
Restrained. Only one system-wide micro-interaction: **`transform: scale(0.95)`** on press for every button. Transitions are 100–200ms, easing default. No bouncing, no spring physics, no entrance animations on scroll.

### Hover & Press
- **Hover:** no documented chrome change — Apple's interactive elements barely react to hover. The cursor change does the work.
- **Press / Active:** `transform: scale(0.95)`. Universal.
- **Focus:** 2px solid `#0071e3` outline, 2px offset.

### Borders
Hairlines only. **`#e0e0e0`** at 1px on store/utility cards. Pill CTAs that are "ghost" use a 1px solid Action Blue border. Pearl Button capsules use a 3px ring of `rgba(0,0,0,0.04)` — present, but functions as a soft glow rather than a visible line.

### Shadows
**Exactly one drop shadow exists in the entire system:** `rgba(0, 0, 0, 0.22) 3px 5px 30px 0`, applied only to product imagery. No card shadows, no button shadows, no text shadows. Elevation in the UI is communicated by surface-color change (light tile ↔ dark tile) and by `backdrop-filter: blur(20px)` on the frosted sub-nav and the floating sticky bar.

### Capsules vs. corners
- `0px` — full-bleed product tiles. Tiles are rectangular; rounding them breaks the gallery effect.
- `8px` — dark utility buttons (Sign In, Bag), inline card imagery.
- `11px` — Pearl Button capsules.
- `18px` — store and accessories utility cards, inner image crops.
- `9999px` — primary blue pill CTAs, search input, configurator chips, floating-bar CTA, circular icon buttons.

The pill grammar IS the brand action signal. If it's pill-shaped, it's actionable.

### Layout
Max content width **~980px** on text-heavy sections, **~1440px** on product grids, full-bleed for product hero tiles. Two-row sticky nav: thin `#000` global bar (44px) on top, frosted parchment sub-nav (52px) below.

### Transparency & Blur
Used only functionally — `backdrop-filter: saturate(180%) blur(20px)` on the sub-nav and the iPhone-buy-page-style floating sticky bar. Translucent gray chips (`rgba(210,210,215,0.64)`) only when a control is floating directly over photography.

### Imagery vibe
Crisp, clinical, photographic. Greys are cool. Mannequins on dark backgrounds. Any "atmospheric" lighting must come from real photography, not from CSS overlays or filters. No grain.

### Cards
Border `1px #e0e0e0`, radius `18px`, padding `24px`, **no shadow.** The product render inside the card carries the system shadow.

---

## Iconography

Haykozé as supplied has no icon set. The Apple-inspired chassis we are documenting against intentionally uses **almost no icons** — the only glyphs Apple ships in the documented surfaces are: search (magnifier), bag, hamburger, chevron-right, play, and the rotating control chips.

**Approach for Haykozé:**
- Use **[Lucide](https://lucide.dev)** via CDN for any required UI icon (search, menu, shopping bag, chevron, play, x-close). Lucide's stroke-1.5px geometric style is the closest open-source match to SF Symbols' line-style icons.
- Stroke `1.5px`, color `currentColor`, default size `20px`. Match text color of surrounding context.
- **Never use emoji.** Never use unicode dingbats. Never use a colored/filled icon family (Material, Font Awesome solid).
- **Never invent decorative SVG illustrations.** The brand's visual language is photographic; illustration is off-brand.
- The Haykozé logo (squirrel + bushy tail) is the only "drawn" mark in the system — it appears at small sizes in the global nav and on the cap badge. Stored in `assets/haykoze-logo.webp`.

> **Substitution flag.** Lucide is a substitute. If Haykozé has an internal SVG icon set, swap it in by replacing the CDN reference and updating the tokens.

```html
<!-- Lucide via CDN -->
<script src="https://unpkg.com/lucide@latest/dist/umd/lucide.min.js"></script>
<i data-lucide="search"></i>
<script>lucide.createIcons();</script>
```

---

## Font substitution flag

**SF Pro Display is licensed and shipped** in `fonts/` (OTF, supplied by Haykozé). `colors_and_type.css` declares `@font-face` for every supplied weight.

**Two known gaps remaining:**

1. **No SF Pro Text was supplied.** Body copy (≤ 18px) currently falls back to `-apple-system, BlinkMacSystemFont` (which resolves to real SF Pro Text on Apple platforms) and then to Inter on others. For full cross-platform fidelity, attach the licensed `SF-Pro-Text` files (Regular 400, Semibold 600, plus italic siblings).

2. **No upright Semibold (600) Display file was supplied** — only the italic was. Because every Haykozé headline is weight 600, the `@font-face` block maps upright 600 to the Bold (700) file as the closest available. Headlines therefore render slightly heavier than intended Apple cadence. Resolved either by (a) attaching `SFPRODISPLAYSEMIBOLD.OTF`, or (b) switching the system to declare headlines at weight 700 by design.

> **Ask:** please attach `SFPRODISPLAYSEMIBOLD.OTF` (upright) and the SF Pro Text family.

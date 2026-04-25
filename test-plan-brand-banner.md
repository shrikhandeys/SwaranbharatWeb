# Test Plan — PR #5: 2-slide hero with new brand banner + 10 refinements

Target: `http://localhost:3000/` (dev server, branch `devin/1776801300-homepage-scaffold`)
Scope: prove the hero carousel renders the NEW brand banner on Slide 1, behaves correctly (autoplay 7s, pause on hover, manual nav), and that the 10 section-level refinements from the live-preview review are present on the page.

## T1 — Slide 1 renders the NEW Swaranbharat brand banner (PRIMARY)
Source of truth: `src/components/home/HeroSlider.tsx:74` — `<Image src="/home/brand-banner.png" …>`.

1. Open `http://localhost:3000/`.
2. Take a full-page screenshot of the top-of-page hero.
3. Inspect the first `<img>` inside the hero `<section aria-label="Featured export highlights">`.

**Pass criteria:**
- The visible banner image shows the gold globe, the words **SWARANBHARAT EXPORTSARATHI**, the tagline **"Global Connections. Local Trust."**, and the subtitle **"Your Trusted Global Trade Partner"**.
- The `<img>` element's `src` (or Next.js `_next/image?url=…`) references **`/home/brand-banner.png`**.
- There is no `banner-purpose.png` reference anywhere in Slide 1 (`grep` the rendered HTML for `banner-purpose` returns 0 matches — already confirmed via `curl`).

**Would a broken implementation look the same?** No — if the banner swap didn't take, Slide 1 would render either the older `banner-purpose.png` poster (containers/airplane image) or the temporary inline SVG globe, both visually distinct.

## T2 — Autoplay advances to Slide 2 after ~7s; manual dot nav returns
Source of truth: `HeroSlider.tsx` `AUTOPLAY_MS = 7000`, fade 700ms, dot indicators rendered for `SLIDE_COUNT = 2`.

1. Land on `/` with no interaction; move mouse off the hero region immediately.
2. Wait 8s, screenshot.
3. Click the first dot indicator below the hero.
4. Screenshot.

**Pass criteria:**
- Second screenshot (after 8s) shows a LIGHT background (`#F8F9FB`/white) with a 3-card product grid (moringa, dehydrated onion, turmeric) — this is Slide 2.
- After clicking dot 1, hero returns to the navy Slide 1 with the brand banner.

**Would a broken implementation look the same?** No — if the slider were stuck or the interval were too fast/slow, the navy Slide 1 would still be visible at 8s, or Slide 2 would never appear; if dot nav were broken, clicking dot 1 wouldn't return to Slide 1.

## T3 — Pause on hover
Source of truth: `HeroSlider.tsx` `onMouseEnter={() => setPaused(true)}` + effect that skips interval when `paused`.

1. Navigate to `/`, confirm Slide 1 visible.
2. Move cursor over the hero region and keep it there.
3. Wait 10s without moving the cursor.
4. Screenshot.

**Pass criteria:**
- After 10s of continuous hover, the hero still shows **Slide 1** (navy + brand banner). Slide 2 must NOT have advanced.

**Would a broken implementation look the same?** No — without pause-on-hover, the slider would have advanced to Slide 2 within 7s.

## T4 — 10-point refinements smoke scroll
Scroll top-to-bottom once. Inline text assertions per section (exact strings expected to be visible):

| # | Section | Expected visible text (exact) |
|---|---|---|
| 1 | TrustStrip | `Quality Assured Supply`, `Export-Ready Process`, `Growing Certification Standards`, `Global Market Focus` (and **no** "Certified Products") |
| 2 | Featured Products | Under each of the 3 cards: `MOQ` row with value `Available on Request` AND `Packaging` row with value `Bulk Export Packaging` |
| 3 | AboutPreview / Quality | Image is `/products/turmeric-powder-alt.jpg` (not a warehouse Unsplash URL) |
| 4 | Services | Heading `End-to-End Export Support for International Buyers` + tagline `From sourcing to shipment, we support every stage of your import journey.` |
| 5 | ProcessFlow | `We focus on long-term, relationship-driven trade partnerships.` |
| 6 | Testimonials/CTA | `Start Your Import Journey with a Reliable Indian Export Partner` + `Request samples, receive quotations, and begin structured discussions today.` |
| 7 | InquiryForm | Gold preamble band: `For serious business enquiries only. We prioritize verified buyers and structured requirements.` |
| 8 | Footer | Simplified layout: only 3 columns (brand+social, Explore+Products, Contact); contact column shows phone `+91 9096172205`, email `info@swaranbharatexports.com`, the full address, and reads as the visually emphasized block. |

**Pass criteria:** every row above verified via screenshot.

**Would a broken implementation look the same?** No — pre-refinement homepage had different heading text, missing preamble, dense 5-col footer, warehouse image, and "Certified Products" in TrustStrip.

## Recording
Record one continuous pass covering T1 → T2 → T3 → T4 with annotations at each section boundary. Hide cursor during T3 setup to keep it stable over the hero.

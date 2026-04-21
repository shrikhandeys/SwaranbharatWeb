# Swaranbharat ExportSarathi — Website

Premium, B2B merchant-exporter website for **Swaranbharat ExportSarathi**
(`swaranbharatexports.com`) — built as a fast, SEO-ready, accessibility-first
marketing site that converts global buyers into verified leads.

## Stack

| Layer        | Choice                                             |
| ------------ | -------------------------------------------------- |
| Framework    | **Next.js 14** (App Router) · TypeScript           |
| Styling      | **Tailwind CSS** with custom brand tokens          |
| Forms        | React Hook Form + Zod validation                   |
| Icons        | Lucide                                             |
| Deployment   | **Hostinger VPS (Node)** — see `DEPLOY-HOSTINGER.md` |

## Getting started

```bash
# Node 18.17+ or 20+
npm install
npm run dev     # http://localhost:3000
```

Other scripts:

```bash
npm run build       # production build
npm run start       # serve the production build
npm run lint        # next lint
npm run typecheck   # tsc --noEmit
npm run format      # prettier --write .
```

## Project structure

```
src/
├── app/                 # App Router (layout, pages, /api/contact, sitemap, robots)
├── components/
│   ├── layout/          # Header, UtilityBar, Footer, Accessibility menu, Language switcher
│   ├── home/            # All homepage sections
│   └── widgets/         # Floating WhatsApp + Chatbot
├── data/                # All content (site, categories, products, services, FAQs, geo, insights)
└── lib/                 # Utilities
```

Everything on the homepage (nav links, products, certifications, insights,
countries, states, user types) is driven from typed files in `src/data/`.
Adding a new product category or featured product is a one-file change.

## Homepage modules

1. **Utility bar** — email, phone, WhatsApp, socials, **Language switcher**, **Accessibility menu** (dark contrast, invert, low saturation, highlight links, hide images, text-size ±, reset).
2. **Header** with sticky **Request Quote** CTA.
3. **Hero slider** — 4 responsive slides with realistic export imagery.
4. **Trust strip** — Export Ready, Lab Tested, Bulk Supply, Private Label, Global Logistics, Verified Sourcing.
5. **About preview**.
6. **Product categories** — Agri, Perishable, Dehydrated, Powdered, Paper.
7. **Featured products** — Moringa, Onion, Turmeric, Ginger, Chilli, Paper bags.
8. **Services** — Product Research, Market Research, HS Code Assistance, Export Documentation, Private Label, Sourcing.
9. **Certifications** marquee — IEC, GST, FSSAI, MSME, NABL, APEDA.
10. **Research & Insights** preview.
11. **Process flow** (5-step export process).
12. **Testimonials** (buyer trust).
13. **Lead-generation inquiry form** — full address, country-aware state dropdown, email/mobile verification via OTP (demo flow), user-type dropdown, honeypot, Zod validation.
14. **Footer** — company info, socials, quick links, products, services, newsletter, legal.
15. **Floating actions** — WhatsApp button + 5-card chatbot (Track Enquiry, FAQs, Ask, Request Sample, Connect on WhatsApp).

## SEO / GEO

- `metadata` with Open Graph + Twitter Card.
- Organization + PostalAddress JSON-LD in the root layout.
- `sitemap.xml` and `robots.txt` generated via the App Router.
- Copy naturally includes the target keywords (India-based exporter, bulk supplier,
  dehydrated products exporter, moringa powder exporter, private label supplier,
  export-ready, lab-tested, global bulk orders, B2B supplier).
- Strict `next.config.mjs` security headers (HSTS, Referrer-Policy, X-Frame-Options).

## Accessibility

- `skip-link` to main content.
- Full keyboard-navigable header, language switcher and accessibility menu.
- Accessibility state is persisted to `localStorage`.
- All controls have explicit `aria-*` attributes.

## Deployment

See [`DEPLOY-HOSTINGER.md`](./DEPLOY-HOSTINGER.md) for the recommended path
(Hostinger VPS + Node + PM2 + Nginx reverse proxy + SSL).

## Next steps

This PR scaffolds the project and delivers the homepage. Subsequent PRs will add
individual pages (About, Products, Services, Certifications, Insights, Contact)
as the page-by-page spec is provided.

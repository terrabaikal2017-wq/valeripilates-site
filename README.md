# VALERI — website

Next.js (App Router) + TypeScript. Single warm light theme (butter-cream / powder-blue / denim).
No Tailwind — the design system lives in `src/app/globals.css` as CSS custom properties + component classes.

## Run

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # production build (fully static)
```

## Structure

- `src/app/*` — one folder per route: `/`, `first-visit`, `classes`, `pricing`, `valeri-life`, `book`, `terms`, `privacy`, plus `not-found`.
- `src/content.ts` — all site copy/data (classes, pricing, FAQ, VALERI Life placeholders, site settings). Structured to move to Sanity later.
- `src/legal.ts` — Terms & Conditions + Privacy Policy drafts (verbatim from client docs; pending legal review).
- `src/components/*` — Header, Footer, MobileBook, FinalCta, LegalDoc.
- `public/images/*` — **placeholder** photography, pending the real VALERI shoot.

## Still TODO before launch

- Real photography → replace `public/images/*`
- Instructor data → `src/content.ts` `team`
- Site settings (hours, WhatsApp, email, map, real Instagram URL, domain) → `src/content.ts` `site` + `layout.tsx` metadataBase
- `[DATE]`, `[EMAIL]`, `[NUMBER]` in `src/legal.ts` + completed legal review
- Booking platform: connect Glofox/Mindbody at the integration point in `src/app/book/page.tsx` (`#widget` block)
- Move content from `content.ts` / `legal.ts` to Sanity
- i18n scaffolding (English now, Arabic later)
- Analytics + cookie consent (tie consent copy to Privacy Policy)
- Deploy to Vercel

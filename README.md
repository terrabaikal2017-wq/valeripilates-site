# VALERI — website

Next.js 16 (App Router) + TypeScript. Single warm light theme
(butter-cream / powder-blue / denim). No Tailwind — the design system is in
`src/app/globals.css` as CSS custom properties + component classes.
CMS: **Sanity** (editor at `/studio`), with graceful fallback to placeholder
content when Sanity isn't connected.

## Run

```bash
npm install
npm run dev      # http://localhost:3000   ·   editor at /studio
npm run build    # production build
```

## Deploy & CMS

See **[SETUP.md](./SETUP.md)** — step-by-step for GitHub → Vercel → Sanity,
plus the pre-launch checklist.

## Structure

| Path | What |
|---|---|
| `src/app/(site)/*` | one folder per route: `/`, `first-visit`, `classes`, `pricing`, `schedule`, `team`, `terms`, `privacy` (+ `not-found`) |
| `src/app/studio/*` | Sanity Studio, served at `/studio` |
| `src/app/globals.css` | the entire design system |
| `src/content.ts` | placeholder content + site defaults (fallback) |
| `src/legal.ts` | Terms & Conditions + Privacy Policy (verbatim from client drafts) |
| `src/data.ts` | data layer — Sanity when connected, else `content.ts` |
| `src/components/*` | Header, Footer, MobileBook, FinalCta, LegalDoc |
| `sanity/*` | CMS schemas + client + queries |
| `public/images/*` | **placeholder** photography — replace with the real shoot |

## Environment

Copy `.env.local.example` → `.env.local`. The site runs without any env vars
(placeholder content); fill them in to connect Sanity and set the real domain.

## Known placeholders / TODO before launch

Full list in `SETUP.md` §6. In short: real photos, Sanity content (team, site
settings), `[DATE]/[EMAIL]/[NUMBER]` + legal review, booking-platform embed,
custom domain, favicon/logo, analytics + cookie consent.

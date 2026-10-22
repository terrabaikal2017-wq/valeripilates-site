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

## Updating the Instagram gallery manually

The home and Team pages use the same gallery: three newest cards initially,
**Show More** reveals all remaining cards, and **Show Less** returns to the first
three. Keep entries ordered newest first (in code, or using Sanity's Order field).
Controls appear only when there are more than three entries. Photos/carousels and Reels can be mixed in any
order. Reels display a badge and open on Instagram; there is no API, scraping,
embedded player, or automatic cover download.

**Without Sanity social posts:** edit the centralized list in `src/instagram.ts`.
Save each cover in `public/images/social/`, then add an entry at the top:

```ts
{
  id: "UNIQUE_INSTAGRAM_CODE",
  type: "reel", // "photo" for a photo or carousel
  url: "/images/social/my-new-cover.jpg",
  caption: "A short description of the post and cover",
  link: "https://www.instagram.com/reel/REAL_INSTAGRAM_CODE/",
},
```

Replace the example values with the real post and cover. Keep IDs unique. Use
local covers (or the already allowed Sanity CDN), not expiring Instagram CDN
links. Commit the entry and image together, run `npm run build`, then deploy
through the normal workflow. Existing five posts and covers are preserved;
no invented sixth post is included. Add a real sixth entry when available.

**With Sanity social posts:** `/studio` → **Social post — Lately at VALERI** is
the manual source when it contains posts with usable images. Add the post/Reel
link, upload its cover, choose its format and set **Order** (lower numbers first).
Older Reel entries are recognized from their URL even without the format field.
Sanity entries replace the code list rather than merging with it; an empty or
unavailable feed falls back to `src/instagram.ts`. Other Sanity content is
unaffected. Published CMS edits are revalidated on the site's normal 60-second
cache interval. No Instagram login is needed.

## Environment

Copy `.env.local.example` → `.env.local`. The site runs without any env vars
(placeholder content); fill them in to connect Sanity and set the real domain.

## Known placeholders / TODO before launch

Full list in `SETUP.md` §6. In short: real photos, Sanity content (team, site
settings), `[DATE]/[EMAIL]/[NUMBER]` + legal review, booking-platform embed,
custom domain, favicon/logo, analytics + cookie consent.

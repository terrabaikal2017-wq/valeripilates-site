# VALERI — deployment & CMS setup

Everything you need to get the site live on **Vercel** with the **Sanity** CMS.
The site already runs and builds on its own with placeholder content — Sanity is
only needed for the parts a non-developer edits (team, stories, events, social,
contact details).

Stack: Next.js 16 (App Router) · TypeScript · plain CSS design system · Sanity CMS.
Cost: GitHub, Vercel and Sanity all have free tiers that cover a single-location
studio. Domain ≈ $10–15/year.

---

## 0. What's in this folder

```
valeri-site/
├─ src/app/(site)/…      one folder per page: /, first-visit, classes, pricing, schedule,
│                        team, terms, privacy  (+ not-found)
├─ src/app/studio/…      the Sanity editor, served at /studio
├─ src/app/globals.css   the whole design system (colours, type, components)
├─ src/content.ts        placeholder content + site defaults
├─ src/legal.ts          Terms & Privacy text (verbatim from your drafts)
├─ src/data.ts           reads Sanity when connected, else the placeholders
├─ src/components/…       Header, Footer, MobileBook, FinalCta, LegalDoc
├─ sanity/…               CMS schemas (what the editor can fill in)
├─ public/images/…        PLACEHOLDER photos — replace with the real shoot
├─ .env.local.example     the environment variables to set
└─ next.config.ts / package.json / tsconfig.json
```

---

## 1. Prerequisites

- **Node.js 20 or newer** — check with `node --version`.
- A **GitHub** account (free) — https://github.com/join
- A **Vercel** account (free) — https://vercel.com/signup — sign up *with GitHub*.
- A **Sanity** account (free) — https://www.sanity.io/login — sign up *with GitHub*.

---

## 2. Run it locally (optional but recommended)

```bash
cd valeri-site
npm install
npm run dev
```

Open http://localhost:3000 — the full site with placeholder content.

---

## 3. Put the code on GitHub

```bash
cd valeri-site
git init            # skip if a .git folder already exists
git add -A
git commit -m "VALERI website"
```

Then on github.com: **New repository** → name it `valeri-site` → **Private** →
*don't* add a README/gitignore → **Create**. Follow the "push an existing
repository" lines GitHub shows, roughly:

```bash
git remote add origin https://github.com/YOUR-USERNAME/valeri-site.git
git branch -M main
git push -u origin main
```

---

## 4. Deploy to Vercel

1. https://vercel.com/new → **Import** the `valeri-site` GitHub repo.
2. Framework preset: **Next.js** (auto-detected). Leave build settings default.
3. **Environment Variables** — add these (you can add the Sanity ones later,
   the site deploys fine without them):

   | Name | Value |
   |---|---|
   | `NEXT_PUBLIC_SITE_URL` | `https://YOUR-DOMAIN` (or the vercel.app URL for now) |
   | `NEXT_PUBLIC_SANITY_PROJECT_ID` | *(from step 5)* |
   | `NEXT_PUBLIC_SANITY_DATASET` | `production` |
   | `NEXT_PUBLIC_SANITY_API_VERSION` | `2024-10-01` |

4. **Deploy**. You get a URL like `valeri-site.vercel.app`.
5. Every `git push` to `main` now redeploys automatically. Pull requests get
   their own preview URL.

### Custom domain (when ready)
Vercel → Project → **Settings → Domains** → add your domain → follow the DNS
instructions (either move the domain's nameservers to Vercel, or add the
CNAME/A records at your current registrar).

---

## 5. Set up Sanity (the CMS)

### 5.1 Create the project

```bash
cd valeri-site
npx sanity@latest login          # opens the browser
npx sanity@latest init --env     # create a NEW project
```

When prompted:
- **Project name:** `VALERI`
- **Use the default dataset configuration?** Yes (`production`, public)
- It writes a `.env` line with your project ID — note the **project ID**
  (also visible any time at https://www.sanity.io/manage).

### 5.2 Add the env vars

Create `valeri-site/.env.local` (copy from `.env.local.example`):

```
NEXT_PUBLIC_SANITY_PROJECT_ID=xxxxxxxx        # your real project ID
NEXT_PUBLIC_SANITY_DATASET=production
NEXT_PUBLIC_SANITY_API_VERSION=2024-10-01
NEXT_PUBLIC_SITE_URL=http://localhost:3000
```

Add the same three `NEXT_PUBLIC_SANITY_*` values in **Vercel → Settings →
Environment Variables**, then redeploy (Vercel → Deployments → ⋯ → Redeploy).

### 5.3 Allow the site to read/preview from Sanity

In https://www.sanity.io/manage → your project → **API → CORS origins**, add:
- `http://localhost:3000`
- your `https://valeri-site.vercel.app` URL
- your custom domain (when live)

(Keep "Allow credentials" unchecked — the site only reads public content.)

### 5.4 Open the editor

- Local: `npm run dev`, then http://localhost:3000/studio
- Live: `https://YOUR-DOMAIN/studio`

Log in with the same Sanity account. You'll see:

| Section | What to add |
|---|---|
| **Site settings** | Opening hours, phone/WhatsApp, email, Instagram handle + URL, Google Maps embed URL. (One document — fill it in once.) |
| **Team** | One entry per instructor: name, portrait, 3-word style, "you'll love her class if…", training focus, one human detail, order. |
| **People of VALERI** | Member stories. They only appear on the site when **Published** is on. |
| **What's Happening** | Events with a date; past events drop off automatically. |
| **Lately at VALERI** | Social images for the strip on Home and the Team page. |

As soon as a section has content in Sanity, the site uses it instead of the
placeholder — no code change. Content updates appear within ~1 minute.

> **Google Maps embed URL:** Google Maps → search the studio → **Share** →
> **Embed a map** → copy the URL inside `src="…"` and paste it into Site settings.

---

## 6. Connect Glofox (booking + payments)

VALERI uses Glofox's **embedded Website Integration** — the schedule, pricing,
account form and card payment all open in an overlay *on this site*; the visitor
never leaves for glofox.com (the reformerypilates.com model, not the balans.ae
"redirect to Glofox" model).

The pages are already built for it:

| Page | What appears there |
|---|---|
| `/schedule` | Glofox **schedule** block (`<GlofoxEmbed view="schedule" />`) |
| `/pricing` | Glofox **pricing** block — replaces the designed cards automatically once connected |

Until it's connected, both show a labelled placeholder and `/pricing` keeps the
designed cards as a preview / the pricing spec.

### 6.1 In the Glofox dashboard

1. **Settings → Integrations → Website Integration** → copy the **branch id**
   (and API key, if shown).
2. Set the **brand colour** to VALERI denim `#3F5E86`.
3. Create the intro pricing options:
   - **First Class — AED 80** — new clients only, 1 use, short validity.
   - **Intro — 3 classes, AED 300** — new clients only, valid 14 days.
   - Plus the packs and memberships from the Pricing page.
4. Note the exact **embed snippet** Glofox gives you on that page.

### 6.2 In the code

1. Add to `.env.local` and to **Vercel → Settings → Environment Variables**:
   ```
   NEXT_PUBLIC_GLOFOX_BRANCH_ID=your-branch-id
   NEXT_PUBLIC_GLOFOX_API_KEY=your-api-key   # only if Glofox shows one
   ```
2. Open `src/components/GlofoxEmbed.tsx` → the **LIVE** branch. If Glofox's
   snippet differs from the container + script pattern already there, replace
   that block with Glofox's exact markup. `view` is `"schedule"` on /schedule and
   `"pricing"` on /pricing.
3. Redeploy. The placeholders disappear, the live blocks load, and on /pricing
   the designed cards are hidden automatically.

> If Glofox only offers a **redirect** (not an embed) for a given view, point
> that page's button at the Glofox URL instead — but the embed keeps people on
> the site and is the better experience.

**Note on instructors:** keep the Team page on Sanity (rich cards). Glofox can
list staff, but its version is plain and can't hold "you'll love her class if…"
etc. — a downgrade for a new studio.

---

## 7. Before launch — checklist

- [ ] **Photography** — replace every file in `public/images/` with the real
      VALERI shoot (keep the same file names, or update the paths in the page
      files and `src/content.ts`). Current images are temporary references.
- [ ] **Site settings** filled in Sanity (hours, WhatsApp, email, Instagram, map).
- [ ] **Team** added in Sanity.
- [ ] **Legal** — in `src/legal.ts`, replace `[DATE]`, `[EMAIL]`, `[NUMBER]`;
      complete the legal review; then remove the `robots: { index: false }`
      lines in `src/app/(site)/terms/page.tsx` and `…/privacy/page.tsx` if you
      want them indexed.
- [ ] **Glofox** — connect the Website Integration (section 6): set
      `NEXT_PUBLIC_GLOFOX_BRANCH_ID`, drop the snippet into `GlofoxEmbed.tsx`,
      configure the intro offers + brand colour in the Glofox dashboard.
- [ ] **Domain** connected in Vercel; `NEXT_PUBLIC_SITE_URL` set to it.
- [ ] **Footer** — the "Prototype — imagery is placeholder" line in
      `src/components/Footer.tsx` can be removed once real photos are in.
- [ ] **Analytics + cookie consent** — add when the tools are chosen; keep the
      consent copy consistent with the Privacy Policy (section 13).
- [ ] **Favicon / logo** — `src/app/favicon.ico` is the Next default; swap for
      the VALERI mark. There's no logo image yet, just the "VALERI" wordmark.

## 8. Later (not needed for launch)

- Arabic / RTL: the copy lives in `src/content.ts` and `src/legal.ts` and the
  pages are simple — add `next-intl` and an `ar` message file when needed. No
  redesign required.
- Move `src/content.ts` marketing copy into Sanity too, if you want to edit it
  without a developer.

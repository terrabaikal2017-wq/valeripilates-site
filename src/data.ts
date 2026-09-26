/* ============================================================
   VALERI — data layer.
   Reads from Sanity when connected (NEXT_PUBLIC_SANITY_PROJECT_ID set)
   and falls back to the placeholder data in src/content.ts otherwise.
   Components import from here; they don't know or care about the source.
   ============================================================ */

import { cache } from "react";
import { sanityFetch } from "@/sanity/lib/client";
import {
  SITE_SETTINGS_QUERY,
  CLASS_TYPES_QUERY,
  LEGAL_PAGE_QUERY,
  TEAM_QUERY,
  STORIES_QUERY,
  EVENTS_QUERY,
  SOCIAL_QUERY,
} from "@/sanity/lib/queries";
import * as fb from "@/content";
import type { ClassLevel, Plan, ScheduleNote } from "@/content";
import { privacy, privacyIntro, terms, termsIntro, type LegalSection } from "@/legal";

type Img = { url?: string; alt?: string } | null | undefined;

function pick(value: string | null | undefined, fallback: string): string {
  const v = value?.trim();
  return v ? v : fallback;
}

function pickNull(value: string | null | undefined, fallback: string | null): string | null {
  if (value === undefined || value === null) return fallback;
  const v = value.trim();
  return v ? v : null;
}

function mergeStrings<T extends Record<string, string>>(base: T, overlay?: Partial<T> | null): T {
  if (!overlay) return base;
  const out = { ...base };
  for (const key of Object.keys(base) as (keyof T)[]) {
    const v = overlay[key];
    if (typeof v === "string" && v.trim()) out[key] = v as T[typeof key];
  }
  return out;
}

function img(row: Img, fallback: fb.CmsImage): fb.CmsImage {
  if (row?.url) return { src: row.url, alt: row.alt?.trim() || fallback.alt };
  return fallback;
}

function gallery(rows: Img[] | null | undefined, fallback: fb.CmsImage[]): fb.CmsImage[] {
  const items = (rows ?? [])
    .filter((row) => row?.url)
    .map((row) => ({ src: row!.url as string, alt: row?.alt?.trim() || "The VALERI studio" }));
  return items.length ? items : fallback;
}

function formatDate(iso?: string | null): string | null {
  if (!iso) return null;
  const d = new Date(iso.length === 10 ? `${iso}T00:00:00` : iso);
  if (Number.isNaN(d.getTime())) return iso;
  return d.toLocaleDateString("en-GB", { day: "numeric", month: "long", year: "numeric" });
}

function asPlans(rows: Plan[] | null | undefined, fallback: Plan[]): Plan[] {
  if (!rows?.length) return fallback;
  return rows
    .filter((p) => p?.name)
    .map((p) => ({
      name: p.name,
      amount: p.amount ?? "",
      per: p.per ?? "",
      meta: p.meta ?? "",
      tag: p.tag || undefined,
    }));
}

type SettingsRow = {
  name?: string;
  legalName?: string;
  tagline?: string;
  city?: string;
  addressLine1?: string;
  addressLine2?: string;
  addressShort?: string;
  logoSub?: string;
  headerCta?: string;
  bookCta?: string;
  seoTitle?: string;
  seoDescription?: string;
  copyrightYear?: string;
  footerTagline?: string;
  footerNote?: string;
  showFooterNote?: boolean;
  hours?: string | null;
  whatsapp?: string | null;
  phone?: string | null;
  email?: string | null;
  instagramHandle?: string;
  instagramUrl?: string;
  mapEmbedUrl?: string | null;
  legalLastUpdated?: string | null;
  legalDraft?: boolean;
  legalDraftNote?: string;
  home?: Partial<typeof fb.copy.home> | null;
  classesPage?: Partial<typeof fb.copy.classes> | null;
  firstVisit?: Partial<typeof fb.copy.firstVisit> | null;
  teamPage?: Partial<typeof fb.copy.team> | null;
  schedulePage?: Partial<typeof fb.copy.schedule> | null;
  pricingPage?: Partial<typeof fb.copy.pricing> | null;
  band?: Partial<typeof fb.copy.band> | null;
  cta?: Partial<typeof fb.copy.cta> | null;
  faq?: { q?: string; a?: string }[] | null;
  firstVisitSteps?: { k?: string; h?: string; p?: string }[] | null;
  introOffers?: Plan[] | null;
  classPacks?: Plan[] | null;
  memberships?: Plan[] | null;
  privateSessions?: Plan[] | null;
  finePrint?: string[] | null;
  scheduleNotes?: ScheduleNote[] | null;
  homeHero?: Img;
  belongPhoto?: Img;
  classesHero?: Img;
  studioPhoto?: Img;
  studioGallery?: Img[] | null;
  firstVisitHero?: Img;
  teamHero?: Img;
  logo?: Img;
  favicon?: Img;
};

export type SiteSettings = typeof fb.site & {
  images: typeof fb.images;
  copy: typeof fb.copy;
  faq: typeof fb.faq;
  firstVisitSteps: typeof fb.firstVisitSteps;
  introOffers: Plan[];
  classPacks: Plan[];
  memberships: Plan[];
  privateSessions: Plan[];
  finePrint: string[];
  scheduleNotes: ScheduleNote[];
  logoUrl?: string;
  faviconUrl?: string;
};

function mapSettings(s: SettingsRow | null): SiteSettings {
  if (!s) {
    return {
      ...fb.site,
      images: fb.images,
      copy: fb.copy,
      faq: fb.faq,
      firstVisitSteps: fb.firstVisitSteps,
      introOffers: fb.introOffers,
      classPacks: fb.classPacks,
      memberships: fb.memberships,
      privateSessions: fb.privateSessions,
      finePrint: fb.finePrint,
      scheduleNotes: fb.scheduleNotes,
    };
  }

  const addressLine1 = pick(s.addressLine1, fb.site.addressLine1);
  const addressLine2 = pick(s.addressLine2, fb.site.addressLine2);

  return {
    ...fb.site,
    name: pick(s.name, fb.site.name),
    legalName: pick(s.legalName, fb.site.legalName),
    tagline: pick(s.tagline, fb.site.tagline),
    city: pick(s.city, fb.site.city),
    addressLine1,
    addressLine2,
    addressLines: [addressLine1, addressLine2],
    addressShort: pick(s.addressShort, fb.site.addressShort),
    instagram:
      s.instagramHandle && s.instagramHandle !== "@valeri"
        ? s.instagramHandle
        : fb.site.instagram,
    instagramUrl:
      s.instagramUrl && s.instagramUrl !== "#"
        ? s.instagramUrl
        : fb.site.instagramUrl,
    logoSub: pick(s.logoSub, fb.site.logoSub),
    headerCta: pick(s.headerCta, fb.site.headerCta),
    bookCta: pick(s.bookCta, fb.site.bookCta),
    seoTitle: pick(s.seoTitle, fb.site.seoTitle),
    seoDescription: pick(s.seoDescription, fb.site.seoDescription),
    copyrightYear: pick(s.copyrightYear, fb.site.copyrightYear),
    footerTagline: pick(s.footerTagline, fb.site.footerTagline),
    footerNote: pick(s.footerNote, fb.site.footerNote),
    showFooterNote: s.showFooterNote ?? fb.site.showFooterNote,
    hours: pickNull(s.hours, fb.site.hours),
    whatsapp: pickNull(s.whatsapp, fb.site.whatsapp),
    phone: pickNull(s.phone, fb.site.phone),
    email: pickNull(s.email, fb.site.email),
    mapEmbedUrl: pickNull(s.mapEmbedUrl, fb.site.mapEmbedUrl),
    legalLastUpdated: formatDate(s.legalLastUpdated) ?? fb.site.legalLastUpdated,
    legalDraft: s.legalDraft ?? fb.site.legalDraft,
    legalDraftNote: pick(s.legalDraftNote, fb.site.legalDraftNote),
    images: {
      homeHero: img(s.homeHero, fb.images.homeHero),
      belong: img(s.belongPhoto, fb.images.belong),
      classesHero: img(s.classesHero, fb.images.classesHero),
      studio: img(s.studioPhoto, fb.images.studio),
      studioGallery: gallery(s.studioGallery, fb.images.studioGallery),
      firstVisitHero: img(s.firstVisitHero, fb.images.firstVisitHero),
      teamHero: img(s.teamHero, fb.images.teamHero),
    },
    copy: {
      home: mergeStrings(fb.copy.home, s.home),
      classes: mergeStrings(fb.copy.classes, s.classesPage),
      firstVisit: mergeStrings(fb.copy.firstVisit, s.firstVisit),
      team: mergeStrings(fb.copy.team, s.teamPage),
      schedule: mergeStrings(fb.copy.schedule, s.schedulePage),
      pricing: mergeStrings(fb.copy.pricing, s.pricingPage),
      band: mergeStrings(fb.copy.band, s.band),
      cta: mergeStrings(fb.copy.cta, s.cta),
    },
    faq: s.faq?.length
      ? s.faq.filter((f) => f.q).map((f) => ({ q: f.q as string, a: f.a ?? "" }))
      : fb.faq,
    firstVisitSteps: s.firstVisitSteps?.length
      ? s.firstVisitSteps.map((st) => ({ k: st.k ?? "", h: st.h ?? "", p: st.p ?? "" }))
      : fb.firstVisitSteps,
    introOffers: asPlans(s.introOffers, fb.introOffers),
    classPacks: asPlans(s.classPacks, fb.classPacks),
    memberships: asPlans(s.memberships, fb.memberships),
    privateSessions: asPlans(s.privateSessions, fb.privateSessions),
    finePrint: s.finePrint?.length ? s.finePrint.filter(Boolean) : fb.finePrint,
    scheduleNotes: s.scheduleNotes?.length
      ? s.scheduleNotes.filter((n) => n.text).map((n) => ({
          text: n.text,
          linkLabel: n.linkLabel || undefined,
          linkHref: n.linkHref || undefined,
        }))
      : fb.scheduleNotes,
    logoUrl: s.logo?.url,
    faviconUrl: s.favicon?.url,
  };
}

export const getSiteSettings = cache(async function getSiteSettings(): Promise<SiteSettings> {
  const row = await sanityFetch<SettingsRow>(SITE_SETTINGS_QUERY);
  return mapSettings(row);
});

/* ---------- classes ---------- */
type ClassRow = {
  id: string;
  slug?: string;
  name: string;
  meta?: string;
  blurb?: string;
  requirement?: string;
  image?: Img;
};

export const getClassLevels = cache(async function getClassLevels(): Promise<ClassLevel[]> {
  const rows = await sanityFetch<ClassRow[]>(CLASS_TYPES_QUERY);
  if (rows && rows.length) {
    return rows.map((r, i) => ({
      slug: r.slug || r.id,
      name: r.name,
      meta: r.meta ?? "",
      blurb: r.blurb ?? "",
      requirement: r.requirement ?? "",
      image: r.image?.url || fb.classLevels[i]?.image || "",
    }));
  }
  return fb.classLevels;
});

/* ---------- legal ---------- */
function fillPlaceholders(text: string, s: SiteSettings): string {
  const email = s.email?.trim() || "[EMAIL]";
  const number = (s.whatsapp || s.phone)?.trim() || "[NUMBER]";
  const date = s.legalLastUpdated || "[DATE]";
  return text.replaceAll("[EMAIL]", email).replaceAll("[NUMBER]", number).replaceAll("[DATE]", date);
}

function fillSection(section: LegalSection, s: SiteSettings): LegalSection {
  const body = section.body;
  if (Array.isArray(body)) {
    return { ...section, body: body.map((p) => fillPlaceholders(p, s)) };
  }
  return {
    ...section,
    body: {
      before: body.before?.map((p) => fillPlaceholders(p, s)),
      list: body.list.map((p) => fillPlaceholders(p, s)),
      after: body.after?.map((p) => fillPlaceholders(p, s)),
    },
  };
}

function paragraphs(text?: string): string[] {
  return (text || "")
    .split(/\n\s*\n/)
    .map((p) => p.trim())
    .filter(Boolean);
}

function slugify(value: string, index: number): string {
  const slug = value
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");
  return slug || `section-${index + 1}`;
}

export type LegalDocData = {
  title: string;
  intro: string;
  sections: LegalSection[];
  lastUpdated: string;
  isDraft: boolean;
  draftNote: string;
  legalName: string;
};

type LegalRow = {
  title?: string;
  lastUpdated?: string | null;
  isDraft?: boolean;
  intro?: string;
  sections?: { heading?: string; body?: string; list?: string[]; after?: string }[] | null;
};

export const getLegal = cache(async function getLegal(kind: "terms" | "privacy"): Promise<LegalDocData> {
  const settings = await getSiteSettings();
  const row = await sanityFetch<LegalRow>(LEGAL_PAGE_QUERY, { kind });
  const fallbackTitle = kind === "privacy" ? "Privacy Policy" : "Terms & Conditions";
  const fallbackIntro = kind === "privacy" ? privacyIntro : termsIntro;
  const fallbackSections = kind === "privacy" ? privacy : terms;

  if (row?.sections?.length) {
    const sections: LegalSection[] = row.sections.map((sec, i) => {
      const heading = sec.heading || `Section ${i + 1}`;
      const before = paragraphs(sec.body);
      const mapped: LegalSection = sec.list?.length
        ? {
            id: slugify(heading, i),
            title: heading,
            body: { before, list: sec.list, after: paragraphs(sec.after) },
          }
        : { id: slugify(heading, i), title: heading, body: before };
      return fillSection(mapped, settings);
    });
    return {
      title: pick(row.title, fallbackTitle),
      intro: fillPlaceholders(pick(row.intro, fallbackIntro), settings),
      sections,
      lastUpdated: formatDate(row.lastUpdated) || settings.legalLastUpdated || "[DATE]",
      isDraft: row.isDraft ?? settings.legalDraft,
      draftNote: settings.legalDraftNote,
      legalName: settings.legalName,
    };
  }

  return {
    title: fallbackTitle,
    intro: fillPlaceholders(fallbackIntro, settings),
    sections: fallbackSections.map((sec) => fillSection(sec, settings)),
    lastUpdated: settings.legalLastUpdated || "[DATE]",
    isDraft: settings.legalDraft,
    draftNote: settings.legalDraftNote,
    legalName: settings.legalName,
  };
});

/* ---------- team ---------- */
export type TeamMember = {
  id: string;
  name: string;
  style: string;
  loveIf: string;
  focus: string;
  offReformer: string;
  placeholder?: boolean;
};

type TeamRow = {
  id: string;
  name: string;
  teachingStyle?: string;
  loveIf?: string;
  focus?: string;
  offReformer?: string;
};

export const getTeam = cache(async function getTeam(): Promise<TeamMember[]> {
  const rows = await sanityFetch<TeamRow[]>(TEAM_QUERY);
  if (rows && rows.length) {
    return rows.map((r) => ({
      id: r.id,
      name: r.name,
      style: r.teachingStyle ?? "",
      loveIf: r.loveIf ?? "",
      focus: r.focus ?? "",
      offReformer: r.offReformer ?? "",
    }));
  }
  return fb.flags.showTeam
    ? fb.team.map(({ id, name, style, loveIf, focus, offReformer }) => ({
        id,
        name,
        style,
        loveIf,
        focus,
        offReformer,
      }))
    : [];
});

/* ---------- member stories ---------- */
export type Story = {
  id: string;
  format: string;
  title: string;
  excerpt: string;
  memberName?: string;
  photoUrl?: string;
  placeholder?: boolean;
};

type StoryRow = {
  id: string;
  format?: string;
  title: string;
  excerpt?: string;
  memberName?: string;
  photo?: { url?: string };
};

export const getStories = cache(async function getStories(): Promise<Story[]> {
  const rows = await sanityFetch<StoryRow[]>(STORIES_QUERY);
  if (rows && rows.length) {
    return rows.map((r) => ({
      id: r.id,
      format: r.format ?? "",
      title: r.title,
      excerpt: r.excerpt ?? "",
      memberName: r.memberName,
      photoUrl: r.photo?.url,
    }));
  }
  return fb.flags.showStories ? fb.stories.map((st, i) => ({ id: `fb-${i}`, ...st })) : [];
});

/* ---------- events ---------- */
export type EventItem = {
  id: string;
  title: string;
  date: string;
  description: string;
  rsvpUrl?: string;
  imageUrl?: string;
};

type EventRow = {
  id: string;
  title: string;
  date: string;
  description?: string;
  rsvpUrl?: string;
  image?: { url?: string };
};

export const getEvents = cache(async function getEvents(): Promise<EventItem[]> {
  const rows = await sanityFetch<EventRow[]>(EVENTS_QUERY);
  if (rows && rows.length) {
    return rows.map((r) => ({
      id: r.id,
      title: r.title,
      date: r.date,
      description: r.description ?? "",
      rsvpUrl: r.rsvpUrl,
      imageUrl: r.image?.url,
    }));
  }
  return [];
});

/** True when a flag is on but there's no real content — used to show a "coming soon" placeholder. */
export const preview = {
  team: fb.flags.showTeam,
  stories: fb.flags.showStories,
  events: fb.flags.showEvents,
};

/* ---------- social strip ---------- */
export type SocialItem = { id: string; url: string; caption?: string; link?: string };

type SocialRow = { id: string; url?: string; caption?: string; link?: string };

export const getSocial = cache(async function getSocial(): Promise<SocialItem[]> {
  const rows = await sanityFetch<SocialRow[]>(SOCIAL_QUERY);
  if (rows && rows.length) {
    return rows
      .filter((r) => r.url)
      .map((r) => ({ id: r.id, url: r.url as string, caption: r.caption, link: r.link }));
  }
  return fb.socialImages.map((url, i) => ({ id: `fb-${i}`, url }));
});

/* ============================================================
   VALERI — data layer.
   Reads from Sanity when connected (NEXT_PUBLIC_SANITY_PROJECT_ID set)
   and falls back to the placeholder data in src/content.ts otherwise.
   Components import from here; they don't know or care about the source.
   ============================================================ */

import { sanityFetch } from "@/sanity/lib/client";
import {
  SITE_SETTINGS_QUERY,
  TEAM_QUERY,
  STORIES_QUERY,
  EVENTS_QUERY,
  SOCIAL_QUERY,
} from "@/sanity/lib/queries";
import * as fb from "@/content";

/* ---------- site settings ---------- */
export type SiteSettings = typeof fb.site;

type SettingsRow = {
  hours?: string;
  whatsapp?: string;
  phone?: string;
  email?: string;
  instagramHandle?: string;
  instagramUrl?: string;
  mapEmbedUrl?: string;
};

export async function getSiteSettings(): Promise<SiteSettings> {
  const s = await sanityFetch<SettingsRow>(SITE_SETTINGS_QUERY);
  if (!s) return fb.site;
  return {
    ...fb.site,
    instagram: s.instagramHandle || fb.site.instagram,
    instagramUrl: s.instagramUrl || fb.site.instagramUrl,
    hours: s.hours ?? fb.site.hours,
    whatsapp: s.whatsapp ?? fb.site.whatsapp,
    phone: s.phone ?? fb.site.phone,
    email: s.email ?? fb.site.email,
    mapEmbedUrl: s.mapEmbedUrl ?? fb.site.mapEmbedUrl,
  };
}

/* ---------- team ---------- */
export type TeamMember = {
  id: string;
  name: string;
  style: string;
  loveIf: string;
  focus: string;
  offReformer: string;
  photoUrl?: string;
  placeholder?: boolean;
};

type TeamRow = {
  id: string;
  name: string;
  teachingStyle?: string;
  loveIf?: string;
  focus?: string;
  offReformer?: string;
  photo?: { url?: string; alt?: string };
};

export async function getTeam(): Promise<TeamMember[]> {
  const rows = await sanityFetch<TeamRow[]>(TEAM_QUERY);
  if (rows && rows.length) {
    return rows.map((r) => ({
      id: r.id,
      name: r.name,
      style: r.teachingStyle ?? "",
      loveIf: r.loveIf ?? "",
      focus: r.focus ?? "",
      offReformer: r.offReformer ?? "",
      photoUrl: r.photo?.url,
    }));
  }
  return fb.flags.showTeam ? fb.team.map((t) => ({ ...t })) : [];
}

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

export async function getStories(): Promise<Story[]> {
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
  return fb.flags.showStories ? fb.stories.map((s, i) => ({ id: `fb-${i}`, ...s })) : [];
}

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

export async function getEvents(): Promise<EventItem[]> {
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
}

/** True when a flag is on but there's no real content — used to show a "coming soon" placeholder. */
export const preview = {
  team: fb.flags.showTeam,
  stories: fb.flags.showStories,
  events: fb.flags.showEvents,
};

/* ---------- social strip ---------- */
export type SocialItem = { id: string; url: string; caption?: string; link?: string };

type SocialRow = { id: string; url?: string; caption?: string; link?: string };

export async function getSocial(): Promise<SocialItem[]> {
  const rows = await sanityFetch<SocialRow[]>(SOCIAL_QUERY);
  if (rows && rows.length) {
    return rows
      .filter((r) => r.url)
      .map((r) => ({ id: r.id, url: r.url as string, caption: r.caption, link: r.link }));
  }
  return fb.socialImages.map((url, i) => ({ id: `fb-${i}`, url }));
}

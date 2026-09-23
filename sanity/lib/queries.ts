const img = (field: string) => `${field}{ "url": asset->url, "alt": alt }`;

export const SITE_SETTINGS_QUERY = `*[_type == "siteSettings"][0]{
  name, legalName, tagline, city, addressLine1, addressLine2, addressShort,
  logoSub, headerCta, bookCta, seoTitle, seoDescription, copyrightYear,
  footerTagline, footerNote, showFooterNote,
  hours, whatsapp, phone, email, instagramHandle, instagramUrl, mapEmbedUrl,
  legalLastUpdated, legalDraft, legalDraftNote,
  home, classesPage, firstVisit, teamPage, schedulePage, pricingPage, band, cta,
  faq, firstVisitSteps, introOffers, classPacks, memberships, privateSessions, finePrint,
  scheduleNotes,
  "homeHero": ${img("homeHero")},
  "belongPhoto": ${img("belongPhoto")},
  "classesHero": ${img("classesHero")},
  "studioPhoto": ${img("studioPhoto")},
  "studioGallery": studioGallery[]{ "url": asset->url, "alt": alt },
  "firstVisitHero": ${img("firstVisitHero")},
  "teamHero": ${img("teamHero")},
  "logo": logo{ "url": asset->url },
  "favicon": favicon{ "url": asset->url }
}`;

export const CLASS_TYPES_QUERY = `*[_type == "classType"] | order(order asc, name asc){
  "id": _id,
  "slug": coalesce(slug.current, _id),
  name, meta, blurb, requirement,
  "image": image{ "url": asset->url, "alt": alt }
}`;

export const LEGAL_PAGE_QUERY = `*[_type == "legalPage" && kind == $kind][0]{
  kind, title, lastUpdated, isDraft, intro, sections
}`;

export const TEAM_QUERY = `*[_type == "instructor"] | order(order asc, name asc){
  "id": _id, name, teachingStyle, loveIf, focus, offReformer,
  "photo": photo{ "url": asset->url, "alt": coalesce(alt, name) }
}`;

export const STORIES_QUERY = `*[_type == "memberStory" && published == true] | order(_createdAt desc){
  "id": _id, format, title, excerpt, memberName,
  "photo": photo{ "url": asset->url }
}`;

export const EVENTS_QUERY = `*[_type == "event" && date >= now()] | order(date asc){
  "id": _id, title, date, description, rsvpUrl,
  "image": image{ "url": asset->url }
}`;

export const SOCIAL_QUERY = `*[_type == "socialPost"] | order(order asc, _createdAt desc){
  "id": _id, caption, link,
  "url": image.asset->url
}`;

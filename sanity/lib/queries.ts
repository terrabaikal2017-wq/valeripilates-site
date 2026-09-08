export const SITE_SETTINGS_QUERY = `*[_type == "siteSettings"][0]{
  hours, whatsapp, phone, email, instagramHandle, instagramUrl, mapEmbedUrl
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

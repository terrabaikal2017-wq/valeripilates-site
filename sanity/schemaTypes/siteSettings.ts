import { defineField, defineType } from "sanity";

export const siteSettings = defineType({
  name: "siteSettings",
  title: "Site settings",
  type: "document",
  fields: [
    defineField({ name: "hours", title: "Opening hours", type: "string", description: "e.g. Mon–Fri 6:30–21:00 · Sat–Sun 7:00–15:00" }),
    defineField({ name: "whatsapp", title: "Phone / WhatsApp", type: "string" }),
    defineField({ name: "email", title: "Email", type: "string" }),
    defineField({ name: "instagramHandle", title: "Instagram handle", type: "string", description: "With the @, e.g. @valeri" }),
    defineField({ name: "instagramUrl", title: "Instagram URL", type: "url" }),
    defineField({ name: "mapEmbedUrl", title: "Google Maps embed URL", type: "url", description: "The src from Google Maps → Share → Embed a map" }),
  ],
  preview: { prepare: () => ({ title: "Site settings" }) },
});

import { defineField, defineType } from "sanity";

export const siteSettings = defineType({
  name: "siteSettings",
  title: "Site settings",
  type: "document",
  fields: [
    defineField({ name: "hours", title: "Opening hours", type: "string", description: "e.g. Mon–Fri 6:30–21:00 · Sat–Sun 7:00–15:00" }),
    defineField({ name: "whatsapp", title: "WhatsApp number", type: "string", description: "International format, e.g. +971 50 123 4567" }),
    defineField({ name: "phone", title: "Phone number (for the call button)", type: "string", description: "International format. Leave blank to hide the call button." }),
    defineField({ name: "email", title: "Email", type: "string" }),
    defineField({ name: "instagramHandle", title: "Instagram handle", type: "string", description: "With the @, e.g. @valeri" }),
    defineField({ name: "instagramUrl", title: "Instagram URL", type: "url" }),
    defineField({ name: "mapEmbedUrl", title: "Google Maps embed URL", type: "url", description: "The src from Google Maps → Share → Embed a map" }),
  ],
  preview: { prepare: () => ({ title: "Site settings" }) },
});

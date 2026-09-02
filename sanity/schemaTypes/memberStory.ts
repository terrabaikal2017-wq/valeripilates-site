import { defineField, defineType } from "sanity";

export const memberStory = defineType({
  name: "memberStory",
  title: "People of VALERI — story",
  type: "document",
  fields: [
    defineField({
      name: "format",
      title: "Format",
      type: "string",
      options: {
        list: [
          "My first 50 classes",
          "Why I started",
          "What changed for me",
          "My favourite class",
          "A friend I met at VALERI",
        ],
      },
    }),
    defineField({ name: "title", title: "Title", type: "string", validation: (r) => r.required() }),
    defineField({ name: "excerpt", title: "Excerpt", type: "text", rows: 3 }),
    defineField({ name: "memberName", title: "Member name (shown with permission)", type: "string" }),
    defineField({ name: "photo", title: "Photo (with permission)", type: "image", options: { hotspot: true } }),
    defineField({ name: "published", title: "Published", type: "boolean", initialValue: false, description: "Off = hidden on the site" }),
  ],
  preview: { select: { title: "title", subtitle: "format", media: "photo" } },
});

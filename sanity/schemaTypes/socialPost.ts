import { defineField, defineType } from "sanity";

export const socialPost = defineType({
  name: "socialPost",
  title: "Social post — Lately at VALERI",
  type: "document",
  fields: [
    defineField({
      name: "type", title: "Post format", type: "string", initialValue: "photo",
      options: { list: [{ title: "Photo / carousel", value: "photo" }, { title: "Reel", value: "reel" }] },
    }),
    defineField({ name: "image", title: "Image", type: "image", options: { hotspot: true }, validation: (r) => r.required() }),
    defineField({ name: "caption", title: "Caption / alt text", type: "string" }),
    defineField({ name: "link", title: "Link to the post or Reel", type: "url",
      description: "Paste the Instagram post or Reel URL. Upload its cover in Image above; links do not load covers automatically." }),
    defineField({ name: "order", title: "Order", type: "number", initialValue: 0 }),
  ],
  orderings: [{ title: "Order", name: "order", by: [{ field: "order", direction: "asc" }] }],
  preview: { select: { title: "caption", media: "image" }, prepare: ({ title, media }) => ({ title: title || "Social post", media }) },
});

import { defineField, defineType } from "sanity";

export const classType = defineType({
  name: "classType",
  title: "Class",
  type: "document",
  description:
    "Classes on the homepage and the Classes page, including each card photo. An empty list keeps the built-in set.",
  fields: [
    defineField({ name: "name", title: "Name", type: "string", validation: (r) => r.required() }),
    defineField({
      name: "slug",
      title: "Slug",
      type: "slug",
      options: { source: "name" },
      description: "Used in the page; auto-fills from the name.",
    }),
    defineField({
      name: "meta",
      title: "Meta line",
      type: "string",
      description: "e.g. 50 min · all first-timers",
    }),
    defineField({ name: "blurb", title: "Description", type: "text", rows: 4 }),
    defineField({ name: "requirement", title: "Who it’s for", type: "text", rows: 2 }),
    defineField({
      name: "image",
      title: "Photo",
      type: "image",
      options: { hotspot: true },
      fields: [defineField({ name: "alt", title: "Alt text", type: "string" })],
    }),
    defineField({ name: "order", title: "Order", type: "number", initialValue: 0 }),
  ],
  orderings: [{ title: "Order", name: "order", by: [{ field: "order", direction: "asc" }] }],
  preview: { select: { title: "name", subtitle: "meta", media: "image" } },
});

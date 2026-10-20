import { defineField, defineType } from "sanity";

export const instructor = defineType({
  name: "instructor",
  title: "Instructor",
  type: "document",
  fields: [
    defineField({ name: "name", title: "Name", type: "string", validation: (r) => r.required() }),
    defineField({
      name: "aka",
      title: "Also known as",
      type: "string",
      description: "Optional — e.g. Coach Ness.",
    }),
    defineField({
      name: "photo",
      title: "Portrait",
      type: "image",
      options: { hotspot: true },
      description: "Portrait on the Team page. Crop with the hotspot so her face stays in frame.",
    }),
    defineField({
      name: "bio",
      title: "Bio",
      type: "text",
      rows: 6,
      description: "Her own words. Shown on the Team card under the name.",
    }),
    defineField({ name: "teachingStyle", title: "Teaching style (three words)", type: "string" }),
    defineField({ name: "loveIf", title: "You’ll love her class if…", type: "string" }),
    defineField({ name: "focus", title: "Training focus", type: "string" }),
    defineField({ name: "offReformer", title: "Off the Reformer (one human detail)", type: "string" }),
    defineField({ name: "order", title: "Order", type: "number", initialValue: 0 }),
  ],
  orderings: [{ title: "Order", name: "order", by: [{ field: "order", direction: "asc" }] }],
  preview: { select: { title: "name", subtitle: "teachingStyle", media: "photo" } },
});

import { defineField, defineType } from "sanity";

export const event = defineType({
  name: "event",
  title: "Event — What’s Happening",
  type: "document",
  fields: [
    defineField({ name: "title", title: "Title", type: "string", validation: (r) => r.required() }),
    defineField({ name: "date", title: "Date & time", type: "datetime", validation: (r) => r.required() }),
    defineField({ name: "image", title: "Image", type: "image", options: { hotspot: true } }),
    defineField({ name: "description", title: "Short description", type: "text", rows: 3 }),
    defineField({ name: "rsvpUrl", title: "RSVP link", type: "url" }),
  ],
  orderings: [{ title: "Date", name: "date", by: [{ field: "date", direction: "asc" }] }],
  preview: {
    select: { title: "title", date: "date", media: "image" },
    prepare: ({ title, date }) => ({
      title,
      subtitle: date ? new Date(date).toLocaleDateString("en-GB", { day: "numeric", month: "long" }) : "No date",
    }),
  },
});

import { defineField, defineType } from "sanity";

export const legalPage = defineType({
  name: "legalPage",
  title: "Legal page",
  type: "document",
  description: "Create one Terms document and one Privacy document. Until then, the site uses the current drafts. [EMAIL], [NUMBER] and [DATE] are filled from Site settings.",
  fields: [
    defineField({
      name: "kind",
      title: "Which page",
      type: "string",
      options: {
        list: [
          { title: "Terms & Conditions", value: "terms" },
          { title: "Privacy Policy", value: "privacy" },
        ],
        layout: "radio",
      },
      validation: (r) => r.required(),
    }),
    defineField({ name: "title", title: "Title", type: "string" }),
    defineField({
      name: "lastUpdated",
      title: "Last updated",
      type: "date",
      description: "Leave blank to use the date in Site settings.",
    }),
    defineField({
      name: "isDraft",
      title: "Show the draft note",
      type: "boolean",
      initialValue: true,
      description: "Turn off once a lawyer has signed off.",
    }),
    defineField({ name: "intro", title: "Intro", type: "text", rows: 6 }),
    defineField({
      name: "sections",
      title: "Sections",
      type: "array",
      of: [{ type: "legalSection" }],
    }),
  ],
  preview: {
    select: { title: "title", kind: "kind" },
    prepare: ({ title, kind }) => ({
      title: title || (kind === "privacy" ? "Privacy Policy" : "Terms & Conditions"),
      subtitle: kind,
    }),
  },
});

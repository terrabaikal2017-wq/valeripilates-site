import { defineField, defineType } from "sanity";

export const plan = defineType({
  name: "plan",
  title: "Price card",
  type: "object",
  fields: [
    defineField({ name: "name", title: "Name", type: "string" }),
    defineField({ name: "amount", title: "Price", type: "string", description: "e.g. AED 80" }),
    defineField({ name: "per", title: "Per-line", type: "string", description: "e.g. One class / AED 100 / class" }),
    defineField({ name: "meta", title: "Fine print", type: "string" }),
    defineField({ name: "tag", title: "Badge (optional)", type: "string", description: "e.g. Start here" }),
  ],
  preview: { select: { title: "name", subtitle: "amount" } },
});

export const faqItem = defineType({
  name: "faqItem",
  title: "FAQ item",
  type: "object",
  fields: [
    defineField({ name: "q", title: "Question", type: "string" }),
    defineField({ name: "a", title: "Answer", type: "text", rows: 4 }),
  ],
  preview: { select: { title: "q" } },
});

export const visitStep = defineType({
  name: "visitStep",
  title: "First-visit step",
  type: "object",
  fields: [
    defineField({ name: "k", title: "Label", type: "string", description: "e.g. Before you arrive" }),
    defineField({ name: "h", title: "Heading", type: "string" }),
    defineField({ name: "p", title: "Text", type: "text", rows: 4 }),
  ],
  preview: { select: { title: "h", subtitle: "k" } },
});

export const scheduleNote = defineType({
  name: "scheduleNote",
  title: "Schedule note",
  type: "object",
  fields: [
    defineField({ name: "text", title: "Text", type: "text", rows: 3 }),
    defineField({ name: "linkLabel", title: "Link label (optional)", type: "string" }),
    defineField({ name: "linkHref", title: "Link URL (optional)", type: "string" }),
  ],
  preview: { select: { title: "text" } },
});

export const legalSection = defineType({
  name: "legalSection",
  title: "Legal section",
  type: "object",
  fields: [
    defineField({ name: "heading", title: "Heading", type: "string" }),
    defineField({
      name: "body",
      title: "Paragraphs",
      type: "text",
      rows: 8,
      description: "One paragraph per blank line. Use [EMAIL], [NUMBER] or [DATE] to insert Site settings.",
    }),
    defineField({ name: "list", title: "Bullet list (optional)", type: "array", of: [{ type: "string" }] }),
    defineField({
      name: "after",
      title: "After the list (optional)",
      type: "text",
      rows: 4,
    }),
  ],
  preview: { select: { title: "heading" } },
});

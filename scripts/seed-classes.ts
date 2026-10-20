/**
 * Publish the current class list (copy + card photos) into Sanity.
 * Run: npx sanity exec scripts/seed-classes.ts --with-user-token
 */
import { createReadStream } from "node:fs";
import path from "node:path";
import { getCliClient } from "sanity/cli";
import { classLevels } from "../src/content";

const client = getCliClient({ apiVersion: "2024-10-01" });
const imagesDir = path.join(process.cwd(), "public");

function docId(slug: string) {
  return `class-${slug}`;
}

async function uploadPhoto(src: string) {
  const filename = path.basename(src);
  const filePath = path.join(imagesDir, src.replace(/^\//, ""));
  const asset = await client.assets.upload("image", createReadStream(filePath), { filename });
  return {
    _type: "image" as const,
    alt: filename,
    asset: { _type: "reference" as const, _ref: asset._id },
  };
}

async function run() {
  const keep = new Set<string>();

  for (const [index, level] of classLevels.entries()) {
    const _id = docId(level.slug);
    keep.add(_id);
    const image = level.image ? await uploadPhoto(level.image) : undefined;
    if (image) image.alt = level.name;
    await client.createOrReplace({
      _id,
      _type: "classType",
      name: level.name,
      slug: { _type: "slug", current: level.slug },
      meta: level.meta,
      blurb: level.blurb,
      requirement: level.requirement,
      order: index + 1,
      image,
    });
    console.log(`Published ${level.name}`);
  }

  const existing = await client.fetch<Array<{ _id: string; name?: string }>>(
    `*[_type == "classType"]{ _id, name }`,
    {},
    { perspective: "raw" },
  );
  for (const doc of existing ?? []) {
    const publishedId = doc._id.replace(/^drafts\./, "");
    if (keep.has(publishedId)) continue;
    await client.delete(doc._id);
    console.log(`Removed stale class ${doc.name || doc._id}`);
  }
}

run().catch((err) => {
  console.error(err);
  process.exit(1);
});

import imageUrlBuilder from "@sanity/image-url";
import { projectId, dataset, sanityConfigured } from "../env";

const builder = sanityConfigured
  ? imageUrlBuilder({ projectId, dataset })
  : null;

/**
 * Build a Sanity image URL. Most queries already resolve `asset->url`;
 * use this when you need on-the-fly resizing/cropping.
 */
export function urlFor(source: Parameters<NonNullable<typeof builder>["image"]>[0]) {
  return builder ? builder.image(source) : null;
}

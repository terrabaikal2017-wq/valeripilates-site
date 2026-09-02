/**
 * VALERI content editor (Sanity Studio), served at /studio.
 * Only works once NEXT_PUBLIC_SANITY_PROJECT_ID is set (see .env.local.example).
 */
import { NextStudio } from "next-sanity/studio";
import config from "../../../../sanity.config";

export const dynamic = "force-static";

export { metadata, viewport } from "next-sanity/studio";

export default function StudioPage() {
  return <NextStudio config={config} />;
}

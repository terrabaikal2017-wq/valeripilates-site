/**
 * Glofox portal iframes.
 *
 * Schedule → classes week view. Pricing → memberships.
 * Both use iframe-resizer 3.6.1. Branch id is public (it is in the iframe URL).
 * An env override still wins.
 */
export const glofoxBranchId =
  process.env.NEXT_PUBLIC_GLOFOX_BRANCH_ID || "65d88c1db867ca6016069ce5";

/** Path and frame suffix, exactly as Glofox generated them. */
const PORTALS = {
  schedule: {
    path: "classes-week-view?header=classes",
    frame: "schedule",
  },
  pricing: {
    path: "memberships?header=memberships",
    frame: "memberships",
  },
} as const;

/**
 * Glofox applies these inside the cross-origin iframe. Parent CSS cannot.
 * The portal reads `colors` from the hash query as `key-HEX` pairs
 * (no #): background, accent, text. Hex values match globals.css:
 * --paper, --accent (denim), --ink.
 * Button labels are painted with the background colour, so cream on
 * denim matches .btn-fill.
 */
const PORTAL_COLORS = "background-FCFAF4,accent-3F5E86,text-2A2E36";

export type GlofoxView = "schedule" | "pricing" | "memberships";

function portalFor(view: GlofoxView) {
  return PORTALS[view as keyof typeof PORTALS];
}

export function glofoxPortalSrc(view: GlofoxView): string | null {
  const portal = portalFor(view);
  if (!glofoxBranchId || !portal) return null;
  return `https://app.glofox.com/portal/#/branch/${glofoxBranchId}/${portal.path}&colors=${PORTAL_COLORS}`;
}

export function glofoxFrameId(view: GlofoxView): string | null {
  const portal = portalFor(view);
  if (!glofoxBranchId || !portal) return null;
  return `glofox_${glofoxBranchId}_${portal.frame}`;
}

/**
 * Glofox Website Integration config.
 *
 * VALERI uses Glofox's *embedded* Website Integration (like reformerypilates.com)
 * — the schedule, pricing, account form and payment all open in an overlay on
 * this site, the visitor never leaves for glofox.com.
 *
 * To go live:
 *  1. Glofox dashboard → Settings → Integrations → Website Integration →
 *     copy the branch id (and API key if shown).
 *  2. Set NEXT_PUBLIC_GLOFOX_BRANCH_ID (+ NEXT_PUBLIC_GLOFOX_API_KEY) in
 *     .env.local and in Vercel → Settings → Environment Variables.
 *  3. Paste Glofox's exact embed snippet into src/components/GlofoxEmbed.tsx
 *     (the LIVE branch), if it differs from the pattern already there.
 *
 * Until the branch id is set, Pricing and Book show a labelled placeholder
 * (and Pricing keeps the designed cards as a preview).
 */
export const glofoxBranchId = process.env.NEXT_PUBLIC_GLOFOX_BRANCH_ID || "";
export const glofoxApiKey = process.env.NEXT_PUBLIC_GLOFOX_API_KEY || "";
export const glofoxConfigured = glofoxBranchId.length > 0;

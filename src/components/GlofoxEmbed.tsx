import Script from "next/script";
import { glofoxBranchId, glofoxApiKey, glofoxConfigured } from "@/lib/glofox";

type View = "schedule" | "pricing" | "memberships";

const LABEL: Record<View, string> = {
  schedule: "class schedule & booking",
  pricing: "pricing & purchase",
  memberships: "memberships",
};

/**
 * Renders the Glofox Website Integration block for a given view.
 * Falls back to a labelled placeholder until NEXT_PUBLIC_GLOFOX_BRANCH_ID is set.
 */
export default function GlofoxEmbed({ view }: { view: View }) {
  if (!glofoxConfigured) {
    return (
      <div className="bookbox">
        <span className="lbl">Glofox · {LABEL[view]}</span>
        <p>
          The live Glofox {LABEL[view]} block loads here. It stays on this page —
          creating an account and paying open in an overlay, not on the Glofox
          site.
        </p>
        <p style={{ fontSize: ".82rem" }}>
          To connect: set <code>NEXT_PUBLIC_GLOFOX_BRANCH_ID</code> and paste
          Glofox&rsquo;s <b>Website Integration</b> snippet into{" "}
          <code>src/components/GlofoxEmbed.tsx</code>. See{" "}
          <code>SETUP.md → Connect Glofox</code>.
        </p>
      </div>
    );
  }

  /* ─────────────────────────────────────────────────────────────────────────
     LIVE. Replace the markup below with the exact snippet from
     Glofox dashboard → Settings → Integrations → Website Integration.
     Glofox's pattern is normally: a container element that their script
     hydrates, initialised with the branch id. `data-glofox-view` selects
     schedule / memberships / etc. Verify attribute names against the snippet
     Glofox gives you — they occasionally change.
     ───────────────────────────────────────────────────────────────────────── */
  return (
    <div className={`glofox-embed glofox-${view}`}>
      <div
        className="glofox-website-integration"
        data-glofox-branch={glofoxBranchId}
        data-glofox-view={view}
      />
      <Script
        id="glofox-website-integration"
        src="https://app.glofox.com/website-integration/v2/integration.js"
        strategy="afterInteractive"
        data-branch={glofoxBranchId}
        {...(glofoxApiKey ? { "data-api-key": glofoxApiKey } : {})}
      />
    </div>
  );
}

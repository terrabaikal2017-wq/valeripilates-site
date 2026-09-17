import Link from "next/link";
import type { SiteSettings } from "@/data";

export default function FinalCta({ settings }: { settings: SiteSettings }) {
  const { copy } = settings;
  return (
    <section className="section on-accent final">
      <div className="wrap">
        <span className="where">{settings.addressShort}</span>
        <h2>{copy.cta.headline}</h2>
        <Link
          href="/schedule"
          className="btn btn-fill"
          style={{ background: "#F8F3E7", color: "var(--accent)" }}
        >
          {copy.cta.button}
        </Link>
        <p className="fine">{copy.cta.fine}</p>
      </div>
    </section>
  );
}

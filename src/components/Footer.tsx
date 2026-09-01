import Link from "next/link";
import { site } from "@/content";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="wrap">
        <div className="foot-inner">
          <div>
            <Link href="/" className="logo">
              {site.name}
            </Link>
            <p>Women-only Reformer Pilates</p>
            <p>Oxford Gardens · Arjan · Dubai</p>
          </div>
          <div className="foot-contact">
            <p className={site.whatsapp ? undefined : "tbd"}>
              {site.whatsapp ?? "WhatsApp — to confirm"}
            </p>
            <p className={site.hours ? undefined : "tbd"}>
              {site.hours ?? "Hours — to confirm"}
            </p>
            <p>
              <Link href={site.instagramUrl}>Instagram {site.instagram}</Link>
            </p>
          </div>
        </div>
        <div className="foot-bottom">
          <span>© 2026 {site.legalName}</span>
          <nav className="foot-legal" aria-label="Legal">
            <Link href="/terms">Terms &amp; Conditions</Link>
            <Link href="/privacy">Privacy Policy</Link>
          </nav>
          <span className="proto">Prototype — imagery is placeholder.</span>
        </div>
      </div>
    </footer>
  );
}

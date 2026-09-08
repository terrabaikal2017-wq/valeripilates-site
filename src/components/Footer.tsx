import Link from "next/link";
import type { SiteSettings } from "@/data";

export default function Footer({ settings }: { settings: SiteSettings }) {
  return (
    <footer className="footer">
      <div className="wrap">
        <div className="foot-inner">
          <div>
            <Link href="/" className="logo">
              {settings.name}
            </Link>
            <p>Reformer Pilates studio</p>
            <p>Oxford Gardens · Arjan · Dubai</p>
          </div>
          <div className="foot-contact">
            <p className={settings.whatsapp ? undefined : "tbd"}>
              {settings.whatsapp ?? "WhatsApp — to confirm"}
            </p>
            <p className={settings.hours ? undefined : "tbd"}>
              {settings.hours ?? "Hours — to confirm"}
            </p>
            <p>
              <Link href={settings.instagramUrl}>
                Instagram {settings.instagram}
              </Link>
            </p>
          </div>
        </div>
        <div className="foot-bottom">
          <span>© 2026 {settings.legalName}</span>
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

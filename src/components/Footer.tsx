import Link from "next/link";
import WhatsAppButton from "@/components/WhatsAppButton";
import type { SiteSettings } from "@/data";

export default function Footer({ settings }: { settings: SiteSettings }) {


  return (
    <footer className="footer">
      <div className="wrap">
        <div className="foot-inner">
          <div>
            <Link href="/" className="logo">
              <span className="logo__name">{settings.name}</span>
            </Link>
            <p>{settings.footerTagline}</p>
            <p>{settings.addressShort}</p>
          </div>
          <div className="foot-contact">
            <WhatsAppButton number={settings.whatsapp} placement="footer" />
            <p className={settings.hours ? undefined : "tbd"}>
              {settings.hours ?? "Hours — to confirm"}
            </p>
            <p>
              <a href={settings.instagramUrl} target="_blank" rel="noreferrer">
                Instagram {settings.instagram}
              </a>
            </p>
          </div>
        </div>
        <div className="foot-bottom">
          <span>
            © {settings.copyrightYear} {settings.legalName}
          </span>
          <nav className="foot-legal" aria-label="Legal">
            <Link href="/terms">Terms &amp; Conditions</Link>
            <Link href="/privacy">Privacy Policy</Link>
          </nav>
        </div>
      </div>
    </footer>
  );
}

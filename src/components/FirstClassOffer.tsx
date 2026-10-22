import Link from "next/link";
import type { SiteSettings } from "@/data";
import WhatsAppButton from "@/components/WhatsAppButton";

export default function FirstClassOffer({ settings, bookingHref = "/schedule" }: {
  settings: SiteSettings;
  bookingHref?: string;
}) {
  const home = settings.copy.home;
  return (
      <section id="first" className="section on-sand">
        <div className="wrap">
          <div className="split">
            <div className="col">
              <span className="eyebrow">{home.firstEyebrow}</span>
              <h2>{home.firstHeadline}</h2>
              <p className="lead">{home.firstLead}</p>
              <WhatsAppButton number={settings.whatsapp} />
            </div>
            <div className="offer-card">
              <span className="k">{home.firstOfferK}</span>
              <span className="v price">{settings.introOffers[0]?.amount ?? "AED 80"}</span>
              <span className="fineprint">{home.firstOfferFineprint}</span>
              <Link href={bookingHref} className="btn btn-fill">
                {home.cta}
              </Link>
              <p className="alt">
                <Link href="/pricing">{home.firstOfferAlt}</Link>
              </p>
              <Link href="/first-visit" className="btn-ghost">
                {home.firstVisitLink}
              </Link>
            </div>
          </div>
        </div>
      </section>
  );
}

import type { Metadata } from "next";
import Link from "next/link";
import type { Plan } from "@/content";
import { getSiteSettings } from "@/data";
import FinalCta from "@/components/FinalCta";
import GlofoxEmbed from "@/components/GlofoxEmbed";
import { glofoxPortalSrc } from "@/lib/glofox";

export const metadata: Metadata = {
  title: "Pricing",
  description:
    "VALERI pricing — first class from AED 80, class packs, monthly memberships and private sessions. All prices include 5% VAT. No lock-in.",
};

function Cards({ plans }: { plans: Plan[] }) {
  return (
    <div className="price-cards">
      {plans.map((p) => (
        <div className={`pc${p.tag ? " best" : ""}`} key={p.name}>
          {p.tag && <span className="tag">{p.tag}</span>}
          <span className="n">{p.name}</span>
          <span className="amt">{p.amount}</span>
          <span className="per">{p.per}</span>
          <span className="metatext">{p.meta}</span>
        </div>
      ))}
    </div>
  );
}

export default async function PricingPage() {
  const settings = await getSiteSettings();
  const page = settings.copy.pricing;
  const pricingEmbed = glofoxPortalSrc("pricing");

  return (
    <div className="pricing-page">
      <section className="pagehead compact">
        <div className="wrap">
          <div className="inner" style={{ maxWidth: "none" }}>
            <h1>{page.headline}</h1>
            <p className="lead" style={{ fontSize: "1rem" }}>
              {page.lead}
            </p>
            <p className="facts">{page.facts}</p>
            {!pricingEmbed && (
              <div className="jump">
                <a href="#intro">New to VALERI</a>
                <a href="#packs">Class packs</a>
                <a href="#members">Memberships</a>
                <a href="#private">Private &amp; semi</a>
              </div>
            )}
          </div>
        </div>
      </section>

      {pricingEmbed ? (
        <section className="section">
          <div className="wrap">
            <GlofoxEmbed view="pricing" />
          </div>
        </section>
      ) : (
        <>
          <section id="intro" className="section">
            <div className="wrap">
              <div className="tier-label">{page.introLabel}</div>
              <h2>{page.introHeadline}</h2>
              <Cards plans={settings.introOffers} />
              <p className="tier-note">{page.introNote}</p>
            </div>
          </section>

          <section id="packs" className="section">
            <div className="wrap">
              <div className="tier-label">{page.packsLabel}</div>
              <h2>{page.packsHeadline}</h2>
              <Cards plans={settings.classPacks} />
              <p className="tier-note">{page.packsNote}</p>
            </div>
          </section>

          <section id="members" className="section">
            <div className="wrap">
              <div className="tier-label">{page.membersLabel}</div>
              <h2>{page.membersHeadline}</h2>
              <Cards plans={settings.memberships} />
              <p className="tier-note">{page.membersNote}</p>
            </div>
          </section>

          <section id="private" className="section">
            <div className="wrap">
              <div className="tier-label">{page.privateLabel}</div>
              <h2>{page.privateHeadline}</h2>
              <Cards plans={settings.privateSessions} />
              <p className="tier-note">{page.privateNote}</p>
            </div>
          </section>
        </>
      )}

      <section className="section">
        <div className="wrap finewrap">
          <div className="tier-label">{page.fineLabel}</div>
          <h2>{page.fineHeadline}</h2>
          <ul>
            {settings.finePrint.map((line, i) => (
              <li key={i}>{line}</li>
            ))}
            <li>
              Full details are in our <Link href="/terms">{page.termsLink}</Link>.
            </li>
          </ul>
        </div>
      </section>

      <FinalCta settings={settings} />
    </div>
  );
}

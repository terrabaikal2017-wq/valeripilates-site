import type { Metadata } from "next";
import Link from "next/link";
import {
  introOffers,
  classPacks,
  memberships,
  privateSessions,
  finePrint,
  type Plan,
} from "@/content";
import FinalCta from "@/components/FinalCta";

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

export default function PricingPage() {
  return (
    <>
      <section className="pagehead compact">
        <div className="wrap">
          <div className="inner" style={{ maxWidth: "none" }}>
            <h1>Pricing.</h1>
            <p className="lead" style={{ fontSize: "1rem" }}>
              Start easy — pay less as you settle into a routine.
            </p>
            <p className="facts">All prices include 5% VAT · No lock-in</p>
            <div className="jump">
              <a href="#intro">New to VALERI</a>
              <a href="#packs">Class packs</a>
              <a href="#members">Memberships</a>
              <a href="#private">Private &amp; semi</a>
            </div>
          </div>
        </div>
      </section>

      <section id="intro" className="section on-white">
        <div className="wrap">
          <div className="tier-label">New to VALERI</div>
          <h2>Your first classes.</h2>
          <Cards plans={introOffers} />
          <p className="tier-note">
            The First Class is an introductory rate for new clients — not a free
            trial. It can be purchased once.
          </p>
        </div>
      </section>

      <section id="packs" className="section on-sage">
        <div className="wrap">
          <div className="tier-label">Move your way</div>
          <h2>Class packs.</h2>
          <Cards plans={classPacks} />
          <p className="tier-note">
            Validity starts from your first class. Activate within 30 days of
            purchase. Any classes left after the validity period expire.
          </p>
        </div>
      </section>

      <section id="members" className="section on-white">
        <div className="wrap">
          <div className="tier-label">Make it your routine</div>
          <h2>Memberships.</h2>
          <Cards plans={memberships} />
          <p className="tier-note">
            If you train every week, membership is the lowest per-class rate we
            offer. Renews automatically each month, no minimum commitment. Cancel
            any time with 7 days’ notice before your next billing date. One
            freeze per 12 months, up to 30 days. Unused monthly classes don’t
            roll over.
          </p>
        </div>
      </section>

      <section id="private" className="section on-sage">
        <div className="wrap">
          <div className="tier-label">One-to-one</div>
          <h2>Private &amp; semi-private.</h2>
          <Cards plans={privateSessions} />
          <p className="tier-note">
            Often easiest to book at off-peak times — ask us about availability.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="wrap finewrap">
          <div className="tier-label">Good to know</div>
          <h2>The fine print.</h2>
          <ul>
            {finePrint.map((line, i) => (
              <li key={i}>{line}</li>
            ))}
            <li>
              Full details are in our <Link href="/terms">Terms &amp; Conditions</Link>.
            </li>
          </ul>
        </div>
      </section>

      <FinalCta />
    </>
  );
}

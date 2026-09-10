import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { getSiteSettings } from "@/data";
import FinalCta from "@/components/FinalCta";
import GlofoxEmbed from "@/components/GlofoxEmbed";

export const metadata: Metadata = {
  title: "Book",
  description:
    "Book a Reformer Pilates class at VALERI in Arjan, Dubai. New clients start with the AED 80 first class. Booking runs through the VALERI app.",
};

export default async function BookPage() {
  const site = await getSiteSettings();
  return (
    <>
      <section className="pagehead has-media">
        <div className="wrap">
          <div className="inner">
            <span className="eyebrow">Book</span>
            <h1>Book your class.</h1>
            <p className="lead">
              Pick a class, create your account once, and you’re in. The
              schedule, payments, class packs and memberships all run through the
              VALERI app.
            </p>
            <p className="facts">
              New here? Choose “First Class — AED 80” when you book
            </p>
            <a href="#widget" className="btn btn-fill">
              Open booking
            </a>
          </div>
          <div className="ph">
            <Image
              src="/images/book-hero.jpg"
              alt="A VALERI Reformer class"
              width={720}
              height={540}
            />
          </div>
        </div>
      </section>

      <section id="widget" className="section on-white">
        <div className="wrap">
          <div className="tier-label">Live schedule</div>
          <h2>Choose a class and book.</h2>
          <GlofoxEmbed view="schedule" />
        </div>
      </section>

      <section className="section band">
        <div className="wrap">
          <div>
            <div className="k">New to VALERI</div>
            <div className="v">Your first class — AED 80</div>
            <div className="sm">
              First-timers only · includes 5% VAT · or a 3-class intro for AED 300
              · <Link href="/pricing">see pricing</Link>
            </div>
          </div>
          <a href="#widget" className="btn btn-fill">
            Book your first class
          </a>
        </div>
      </section>

      <section className="section on-white">
        <div className="wrap finewrap">
          <div className="tier-label">Before you book</div>
          <h2>A few things to know.</h2>
          <ul>
            <li>
              Create an account once, then book, cancel and manage everything
              from the app.
            </li>
            <li>
              New to Reformer? Book a Beginner / Foundations class — no
              experience needed.
            </li>
            <li>
              Free cancellation up to 12 hours before class. Inside 12 hours the
              class credit is used.
            </li>
            <li>
              Grip socks are required; arrive about 10 minutes early.{" "}
              <Link href="/first-visit">How a first visit works →</Link>
            </li>
            <li>All VALERI classes are currently for women.</li>
          </ul>
        </div>
      </section>

      <section className="section on-sage">
        <div className="wrap">
          <div className="split">
            <h2>Find us</h2>
            <div>
              <div className="addr">
                <p className="big">
                  Oxford Gardens, Arjan
                  <br />
                  Dubai, United Arab Emirates
                </p>
                <p className={site.hours ? undefined : "tbd"}>
                  {site.hours ?? "Opening hours — to confirm"}
                </p>
                <p className={site.whatsapp ? undefined : "tbd"}>
                  {site.whatsapp ?? "Phone / WhatsApp — to confirm"}
                </p>
                <p>
                  <Link href={site.instagramUrl}>Instagram {site.instagram}</Link>
                </p>
              </div>
              {site.mapEmbedUrl ? (
                <iframe
                  title="VALERI on the map"
                  src={site.mapEmbedUrl}
                  loading="lazy"
                  style={{
                    marginTop: 20,
                    width: "100%",
                    minHeight: "clamp(240px,32vw,340px)",
                    border: 0,
                    borderRadius: 16,
                  }}
                />
              ) : (
                <div className="mapbox" style={{ marginTop: 20 }}>
                  Map — to embed
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      <FinalCta />
    </>
  );
}

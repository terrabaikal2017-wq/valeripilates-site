import type { Metadata } from "next";
import Link from "next/link";
import { getSiteSettings } from "@/data";
import FinalCta from "@/components/FinalCta";
import GlofoxEmbed from "@/components/GlofoxEmbed";

export const metadata: Metadata = {
  title: "Schedule",
  description:
    "The VALERI class schedule — see what's on, pick a time and book. New clients start with the AED 80 first class. Reformer Pilates in Arjan, Dubai.",
};

export default async function SchedulePage() {
  const site = await getSiteSettings();
  const page = site.copy.schedule;
  const band = site.copy.band;
  return (
    <>
      <section className="pagehead compact">
        <div className="wrap">
          <div className="inner" style={{ maxWidth: "none" }}>
            <h1>{page.headline}</h1>
            <p className="lead" style={{ fontSize: "1rem" }}>
              {page.lead}
            </p>
          </div>
        </div>
      </section>

      <section id="widget" className="section">
        <div className="wrap">
          <GlofoxEmbed view="schedule" />
        </div>
      </section>

      <section className="section band">
        <div className="wrap">
          <div>
            <div className="k">{band.k}</div>
            <div className="v">{band.v}</div>
            <div className="sm">
              {band.sm} · <Link href="/pricing">see pricing</Link>
            </div>
          </div>
          <a href="#widget" className="btn btn-fill">
            {band.cta}
          </a>
        </div>
      </section>

      <section className="section on-white">
        <div className="wrap finewrap">
          <div className="tier-label">{page.notesLabel}</div>
          <h2>{page.notesHeadline}</h2>
          <ul>
            {site.scheduleNotes.map((note, i) => (
              <li key={i}>
                {note.text}
                {note.linkHref && note.linkLabel ? (
                  <>
                    {" "}
                    <Link href={note.linkHref}>{note.linkLabel}</Link>
                  </>
                ) : null}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="section on-sage">
        <div className="wrap">
          <div className="split">
            <h2>{page.findUsHeadline}</h2>
            <div>
              <div className="addr">
                <p className="big">
                  {site.addressLine1}
                  <br />
                  {site.addressLine2}
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

      <FinalCta settings={site} />
    </>
  );
}

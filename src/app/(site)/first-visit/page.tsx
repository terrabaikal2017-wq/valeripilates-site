import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { getSiteSettings } from "@/data";
import FinalCta from "@/components/FinalCta";

export const metadata: Metadata = {
  title: "First Visit",
  description:
    "Never tried Reformer? Here’s exactly what happens on your first visit to VALERI — before, during and after class — plus the answers to the common questions.",
};

export default async function FirstVisitPage() {
  const settings = await getSiteSettings();
  const { copy, images, faq, firstVisitSteps } = settings;
  const page = copy.firstVisit;
  const band = copy.band;

  return (
    <>
      <section className="pagehead has-media">
        <div className="wrap">
          <div className="inner pagehead-intro">
            <span className="eyebrow">{page.eyebrow}</span>
            <h1>{page.headline}</h1>
          </div>
          <div className="ph">
            <Image
              src={images.firstVisitHero.src}
              alt={images.firstVisitHero.alt}
              width={720}
              height={540}
            />
          </div>
          <div className="inner pagehead-body">
            <p className="lead">{page.lead}</p>
            <Link href="/schedule" className="btn btn-fill">
              {page.cta}
            </Link>
          </div>
        </div>
      </section>

      <section className="section on-white">
        <div className="wrap">
          <div className="sec-head">
            <span className="eyebrow">{page.stepsEyebrow}</span>
            <h2>{page.stepsHeadline}</h2>
          </div>
          <div className="steps">
            {firstVisitSteps.map((s, i) => (
              <div className="step" key={`${s.k}-${i}`}>
                <div className="k">{s.k}</div>
                <h3>{s.h}</h3>
                <p>{s.p}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section band">
        <div className="wrap">
          <div>
            <div className="k">{band.k}</div>
            <div className="v">{band.v}</div>
            <div className="sm">{band.sm}</div>
          </div>
          <Link href="/schedule" className="btn btn-fill">
            {band.cta}
          </Link>
        </div>
      </section>

      <section className="section">
        <div className="wrap">
          <div className="sec-head">
            <span className="eyebrow">{page.faqEyebrow}</span>
            <h2>{page.faqHeadline}</h2>
          </div>
          <div className="faq">
            {faq.map((f) => (
              <details key={f.q}>
                <summary>{f.q}</summary>
                <div className="fa">{f.a}</div>
              </details>
            ))}
          </div>
        </div>
      </section>

      <FinalCta settings={settings} />
    </>
  );
}

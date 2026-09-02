import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { faq, firstVisitSteps } from "@/content";
import FinalCta from "@/components/FinalCta";

export const metadata: Metadata = {
  title: "First Visit",
  description:
    "Never tried Reformer? Here’s exactly what happens on your first visit to VALERI — before, during and after class — plus the answers to the common questions.",
};

export default function FirstVisitPage() {
  return (
    <>
      <section className="pagehead has-media">
        <div className="wrap">
          <div className="inner">
            <span className="eyebrow">First Visit</span>
            <h1>Never tried Reformer? Come anyway.</h1>
            <p className="lead">
              Your first class doesn’t have to be perfect. It just has to be your
              first. Here’s exactly what happens.
            </p>
            <Link href="/book" className="btn btn-fill">
              Book your first class — AED 80
            </Link>
          </div>
          <div className="ph">
            <Image
              src="/images/fv-hero.jpg"
              alt="VALERI members together"
              width={720}
              height={540}
            />
          </div>
        </div>
      </section>

      <section className="section on-white">
        <div className="wrap">
          <div className="split top">
            <h2 className="sticky">Your first class, step by step</h2>
            <div className="col" style={{ gap: 0, width: "100%" }}>
              {firstVisitSteps.map((s) => (
                <div
                  key={s.k}
                  style={{
                    padding: "24px 0",
                    borderTop: "1px solid var(--line)",
                    width: "100%",
                  }}
                >
                  <div
                    style={{
                      fontFamily: "var(--grot)",
                      fontWeight: 700,
                      fontSize: ".72rem",
                      letterSpacing: ".12em",
                      textTransform: "uppercase",
                      color: "var(--accent)",
                      marginBottom: 8,
                    }}
                  >
                    {s.k}
                  </div>
                  <h3
                    style={{
                      fontFamily: "var(--serif)",
                      fontSize: "1.3rem",
                      marginBottom: 6,
                    }}
                  >
                    {s.h}
                  </h3>
                  <p style={{ color: "var(--ink-soft)", fontSize: ".98rem" }}>
                    {s.p}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <figure className="imgband">
        <div className="ph">
          <Image
            src="/images/studio.jpg"
            alt="The VALERI studio"
            width={1600}
            height={686}
          />
        </div>
        <figcaption>
          The room you’ll walk into — eight Reformers, warm light, women only.
        </figcaption>
      </figure>

      <section className="section band">
        <div className="wrap">
          <div>
            <div className="k">New to VALERI</div>
            <div className="v">Your first class — AED 80</div>
            <div className="sm">
              First-timers only · includes 5% VAT · or a 3-class intro for AED 300
            </div>
          </div>
          <Link href="/book" className="btn btn-fill">
            Book your first class
          </Link>
        </div>
      </section>

      <section className="section">
        <div className="wrap">
          <div className="split top">
            <h2 className="sticky">Good to know</h2>
            <div style={{ width: "100%", borderTop: "1px solid var(--line-dark)" }}>
              {faq.map((f) => (
                <details
                  key={f.q}
                  style={{ borderBottom: "1px solid var(--line)" }}
                >
                  <summary
                    style={{
                      listStyle: "none",
                      cursor: "pointer",
                      padding: "20px 2px",
                      fontFamily: "var(--grot)",
                      fontWeight: 700,
                      fontSize: "1rem",
                    }}
                  >
                    {f.q}
                  </summary>
                  <div
                    style={{
                      padding: "0 2px 20px",
                      color: "var(--ink-soft)",
                      fontSize: ".98rem",
                      maxWidth: "64ch",
                    }}
                  >
                    {f.a}
                  </div>
                </details>
              ))}
            </div>
          </div>
        </div>
      </section>

      <FinalCta />
    </>
  );
}

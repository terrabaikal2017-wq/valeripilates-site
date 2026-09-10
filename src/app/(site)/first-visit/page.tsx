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
            <Link href="/schedule" className="btn btn-fill">
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
          <div className="sec-head">
            <span className="eyebrow">How it works</span>
            <h2>Your first class, step by step.</h2>
          </div>
          <div className="steps">
            {firstVisitSteps.map((s) => (
              <div className="step" key={s.k}>
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
            <div className="k">New to VALERI</div>
            <div className="v">Your first class — AED 80</div>
            <div className="sm">
              First-timers only · includes 5% VAT · or a 3-class intro for AED 300
            </div>
          </div>
          <Link href="/schedule" className="btn btn-fill">
            Book your first class
          </Link>
        </div>
      </section>

      <section className="section">
        <div className="wrap">
          <div className="sec-head">
            <span className="eyebrow">Good to know</span>
            <h2>Common questions.</h2>
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

      <FinalCta />
    </>
  );
}

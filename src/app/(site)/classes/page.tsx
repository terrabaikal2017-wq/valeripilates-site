import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { classLevels } from "@/content";
import FinalCta from "@/components/FinalCta";

export const metadata: Metadata = {
  title: "Classes",
  description:
    "Reformer Pilates at VALERI — Beginner to Advanced, plus Private and Semi-private. Every class is 50 minutes and capped at eight. Start where you’re comfortable.",
};

export default function ClassesPage() {
  return (
    <>
      <section className="pagehead has-media">
        <div className="wrap">
          <div className="inner">
            <span className="eyebrow">Classes</span>
            <h1>
              Reformer Pilates.
              <br />
              Your level, your pace.
            </h1>
            <p className="lead">
              One workout — Reformer Pilates — done properly: full-body strength,
              mobility, posture, control. What changes between classes is the
              pace, the load, and how much the instructor breaks things down.
            </p>
            <p className="lead">
              You don’t need to fit yourself into a level. Start where you are
              and progress from there.
            </p>
            <p className="facts">
              50 minutes · Never more than eight · Every level welcome
            </p>
            <Link href="/schedule" className="btn btn-fill">
              Book your first class
            </Link>
          </div>
          <div className="ph">
            <Image
              src="/images/classes-hero.jpg"
              alt="A VALERI class"
              width={720}
              height={540}
            />
          </div>
        </div>
      </section>

      <section className="section on-white">
        <div className="wrap">
          {classLevels.map((c) => (
            <div className="cd" key={c.slug}>
              <div className="cd-thumb">
                <Image src={c.image} alt="" width={240} height={300} />
              </div>
              <div className="cd-head">
                <h3>{c.name}</h3>
                <div className="meta">{c.meta}</div>
              </div>
              <div className="cd-body">
                <p>{c.blurb}</p>
                <p className="req">{c.requirement}</p>
                <Link href="/schedule">Book in the app →</Link>
              </div>
            </div>
          ))}
          <p className="lead" style={{ marginTop: 32 }}>
            Not sure where you fit? Message us — a real person answers, usually
            within the hour.
          </p>
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
      </figure>

      <section className="section on-sage">
        <div className="wrap">
          <div className="split">
            <h2>Schedule &amp; booking</h2>
            <div>
              <p className="lead">
                The live class schedule, spots, waitlists, class packs and
                memberships all live in the VALERI app — so what you see is
                always current. Create an account once and book from your phone.
              </p>
              <div style={{ marginTop: 20 }}>
                <Link href="/schedule" className="btn btn-fill">
                  Open booking
                </Link>
              </div>
            </div>
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

      <FinalCta />
    </>
  );
}

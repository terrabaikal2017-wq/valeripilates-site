import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { team, stories, events, socialImages, site } from "@/content";
import FinalCta from "@/components/FinalCta";

export const metadata: Metadata = {
  title: "VALERI Life",
  description:
    "The people behind VALERI — instructors, members and the social side of a women-only Reformer studio in Arjan, Dubai.",
};

export default function ValeriLifePage() {
  return (
    <>
      <section className="pagehead has-media">
        <div className="wrap">
          <div className="inner">
            <span className="eyebrow">VALERI Life</span>
            <h1>Life at VALERI.</h1>
            <p className="lead">
              The Pilates is why you come. The people are why you stay —
              familiar faces, conversations, coffee, and progress you share.
            </p>
          </div>
          <div className="ph">
            <Image
              src="/images/life-hero.jpg"
              alt="VALERI members together"
              width={720}
              height={540}
            />
          </div>
        </div>
      </section>

      <section className="section on-white">
        <div className="wrap">
          <div className="tier-label">Our team</div>
          <h2>Meet the people you’ll move with.</h2>
          <p className="lead">
            Qualified instructors who coach properly and know your name. Full
            profiles go live as the team is confirmed.
          </p>
          <div className="team-grid">
            {team.map((t) => (
              <div className="tcard" key={t.id}>
                <div className="ph">
                  <span className="plabel">Portrait — to shoot</span>
                </div>
                <div className="nm">{t.name}</div>
                <div className="st">{t.style}</div>
                <div className="tr">
                  <b>You’ll love her class if…</b> {t.loveIf}
                </div>
                <div className="tr">
                  <b>Training focus</b> {t.focus}
                </div>
                <div className="tr">
                  <b>Off the Reformer</b> {t.offReformer}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section on-sage">
        <div className="wrap">
          <div className="tier-label">People of VALERI</div>
          <h2>Real members, in their own words.</h2>
          <p className="lead">
            First classes, milestones, why they started, the friend they met
            here. We publish these as members are ready to share them.
          </p>
          <div className="story-grid">
            {stories.map((s) => (
              <div className="scard" key={s.title}>
                <span className="fmt">{s.format}</span>
                <h3>{s.title}</h3>
                <p>{s.excerpt}</p>
              </div>
            ))}
          </div>
          <p className="mnote">
            This section stays empty until real stories exist — nothing here is
            invented.
          </p>
        </div>
      </section>

      <section className="section on-white">
        <div className="wrap">
          <div className="tier-label">What’s happening</div>
          <h2>Things worth doing together.</h2>
          <p className="lead">
            Coffee mornings, workshops, talks, the occasional Saturday walk.
            Confirmed monthly events show here with a date and an RSVP.
          </p>
          {events.length === 0 ? (
            <div className="ecard">
              Nothing on the calendar just yet. When an event is confirmed, this
              is where it lives — image, date, short description and a button to
              RSVP.
            </div>
          ) : null}
        </div>
      </section>

      <section className="section on-sand">
        <div className="wrap">
          <div className="social-head">
            <div>
              <div className="tier-label" style={{ marginBottom: 6 }}>
                We’re social
              </div>
              <h2>Lately at VALERI.</h2>
            </div>
            <Link href={site.instagramUrl} className="btn-ghost">
              Follow {site.instagram}
            </Link>
          </div>
          <div className="social-grid">
            {socialImages.map((src, i) => (
              <div className="ph" key={i}>
                <Image src={src} alt="" width={400} height={400} />
              </div>
            ))}
          </div>
          <p className="mnote">
            A curated mix of studio posts and tagged client content, pulled from
            Instagram.
          </p>
        </div>
      </section>

      <FinalCta />
    </>
  );
}

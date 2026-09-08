import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  getTeam,
  getStories,
  getEvents,
  getSocial,
  getSiteSettings,
  preview,
} from "@/data";
import FinalCta from "@/components/FinalCta";

export const metadata: Metadata = {
  title: "Team",
  description:
    "Meet the instructors at VALERI — a Reformer Pilates studio in Oxford Gardens, Arjan, Dubai.",
};

export default async function TeamPage() {
  const [team, stories, events, social, settings] = await Promise.all([
    getTeam(),
    getStories(),
    getEvents(),
    getSocial(),
    getSiteSettings(),
  ]);

  const showTeam = team.length > 0;
  const showStories = stories.length > 0;
  const showEvents = events.length > 0 || preview.events;

  return (
    <>
      <section className="pagehead has-media">
        <div className="wrap">
          <div className="inner">
            <span className="eyebrow">Team</span>
            <h1>Meet the people you’ll move with.</h1>
            <p className="lead">
              Qualified instructors who coach properly and know your name.
              This is who’s teaching at VALERI.
            </p>
          </div>
          <div className="ph">
            <Image
              src="/images/life-hero.jpg"
              alt="VALERI instructors"
              width={720}
              height={540}
            />
          </div>
        </div>
      </section>

      {showTeam && (
        <section className="section on-white">
          <div className="wrap">
            <div className="tier-label">Instructors</div>
            <p className="lead" style={{ marginBottom: 4 }}>
              Full profiles go live as the team is confirmed.
            </p>
            <div className="team-grid">
              {team.map((t) => (
                <div className="tcard" key={t.id}>
                  <div className="ph">
                    {t.photoUrl ? (
                      <Image src={t.photoUrl} alt={t.name} width={440} height={550} />
                    ) : (
                      <span className="plabel">Portrait — to shoot</span>
                    )}
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
      )}

      {showStories && (
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
                <div className="scard" key={s.id}>
                  <span className="fmt">{s.format || "Story"}</span>
                  <h3>{s.title}</h3>
                  <p>{s.excerpt}</p>
                  {s.memberName ? (
                    <p style={{ color: "var(--ink)", fontWeight: 500 }}>
                      — {s.memberName}
                    </p>
                  ) : null}
                </div>
              ))}
            </div>
            <p className="mnote">
              This section stays empty until real stories exist — nothing here is
              invented.
            </p>
          </div>
        </section>
      )}

      {showEvents && (
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
                Nothing on the calendar just yet. When an event is confirmed,
                this is where it lives — image, date, short description and a
                button to RSVP.
              </div>
            ) : (
              <div className="story-grid">
                {events.map((e) => (
                  <div className="scard" key={e.id}>
                    <span className="fmt">
                      {new Date(e.date).toLocaleDateString("en-GB", {
                        day: "numeric",
                        month: "long",
                      })}
                    </span>
                    <h3>{e.title}</h3>
                    <p>{e.description}</p>
                    {e.rsvpUrl ? (
                      <a href={e.rsvpUrl} className="btn-ghost">
                        RSVP →
                      </a>
                    ) : null}
                  </div>
                ))}
              </div>
            )}
          </div>
        </section>
      )}

      <section className="section">
        <div className="wrap">
          <div className="social-head">
            <div>
              <div className="tier-label" style={{ marginBottom: 6 }}>
                We’re social
              </div>
              <h2>Lately at VALERI.</h2>
            </div>
            <Link href={settings.instagramUrl} className="btn-ghost">
              Follow {settings.instagram}
            </Link>
          </div>
          <div className="social-grid">
            {social.map((s) => (
              <div className="ph" key={s.id}>
                <Image src={s.url} alt={s.caption ?? ""} width={400} height={400} />
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

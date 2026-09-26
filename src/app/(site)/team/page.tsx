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
import SocialGrid from "@/components/SocialGrid";

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
  const page = settings.copy.team;
  const { images } = settings;

  const showTeam = team.length > 0;
  const showStories = stories.length > 0;
  const showEvents = events.length > 0 || preview.events;

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
              src={images.teamHero.src}
              alt={images.teamHero.alt}
              width={720}
              height={540}
            />
          </div>
          <div className="inner pagehead-body">
            <p className="lead">{page.lead}</p>
          </div>
        </div>
      </section>

      {showTeam && (
        <section className="section on-white">
          <div className="wrap">
            <div className="tier-label">{page.instructorsLabel}</div>
            <p className="lead" style={{ marginBottom: 4 }}>
              {page.instructorsLead}
            </p>
            <div className="team-grid">
              {team.map((t) => (
                <div className="tcard" key={t.id}>
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
            <div className="tier-label">{page.storiesLabel}</div>
            <h2>{page.storiesHeadline}</h2>
            <p className="lead">{page.storiesLead}</p>
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
            <p className="mnote">{page.storiesNote}</p>
          </div>
        </section>
      )}

      {showEvents && (
        <section className="section on-white">
          <div className="wrap">
            <div className="tier-label">{page.eventsLabel}</div>
            <h2>{page.eventsHeadline}</h2>
            <p className="lead">{page.eventsLead}</p>
            {events.length === 0 ? (
              <div className="ecard">{page.eventsEmpty}</div>
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
                {page.socialLabel}
              </div>
              <h2>{page.socialHeadline}</h2>
            </div>
            <a href={settings.instagramUrl} className="btn-ghost" target="_blank" rel="noreferrer">
              Follow {settings.instagram}
            </a>
          </div>
          <SocialGrid items={social} />
          <p className="mnote">{page.socialNote}</p>
        </div>
      </section>

      <FinalCta settings={settings} />
    </>
  );
}

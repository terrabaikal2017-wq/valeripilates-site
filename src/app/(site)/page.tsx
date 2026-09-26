import Image from "next/image";
import Link from "next/link";
import { getClassLevels, getSocial, getSiteSettings } from "@/data";
import Breaks from "@/components/Breaks";
import FinalCta from "@/components/FinalCta";
import SocialGrid from "@/components/SocialGrid";

export default async function HomePage() {
  const [social, settings, classLevels] = await Promise.all([
    getSocial(),
    getSiteSettings(),
    getClassLevels(),
  ]);
  const { copy, images } = settings;
  const home = copy.home;
  return (
    <>
      <section className="hero">
        <div className="hero-media">
          <Image
            src={images.homeHero.src}
            alt={images.homeHero.alt}
            fill
            priority
            sizes="100vw"
          />
        </div>
        <div className="hero-inner">
          <span className="eyebrow">
            {home.eyebrow || `Reformer Pilates in ${settings.city}`}
          </span>
          <h1>
            <Breaks text={home.headline} />
          </h1>
          <p className="sub">{home.sub}</p>
          <Link href="/schedule" className="btn btn-fill">
            {home.cta}
          </Link>
        </div>
      </section>

      <section className="section on-sage">
        <div className="wrap">
          <div className="split belong-split">
            <div className="belong-intro">
              <span className="eyebrow">{home.belongEyebrow}</span>
              <h2>{home.belongHeadline}</h2>
            </div>
            <div className="ph belong-photo">
              <Image
                src={images.belong.src}
                alt={images.belong.alt}
                width={720}
                height={540}
              />
            </div>
            <div className="belong-body">
              <p className="lead">{home.belongLead1}</p>
              <p className="lead">{home.belongLead2}</p>
              <p className="sig">{home.belongSig}</p>
            </div>
          </div>
        </div>
      </section>

      <section id="classes" className="section on-white">
        <div className="wrap">
          <div className="sec-head">
            <span className="eyebrow">{home.classesEyebrow}</span>
            <h2>{home.classesHeadline}</h2>
          </div>
          <p className="class-note">{home.classesNote}</p>
          <div className="class-list">
            {classLevels.map((c) => (
              <div className="class-row" key={c.slug}>
                <h3>{c.name}</h3>
                <p>{c.blurb}</p>
                <Link href="/schedule">Book →</Link>
              </div>
            ))}
          </div>
          <p className="helper">{home.classesHelper}</p>
        </div>
      </section>

      <section id="first" className="section on-sand">
        <div className="wrap">
          <div className="split">
            <div className="col">
              <span className="eyebrow">{home.firstEyebrow}</span>
              <h2>{home.firstHeadline}</h2>
              <p className="lead">{home.firstLead}</p>
            </div>
            <div className="offer-card">
              <span className="k">{home.firstOfferK}</span>
              <span className="v">{settings.introOffers[0]?.amount ?? "AED 80"}</span>
              <span className="fineprint">{home.firstOfferFineprint}</span>
              <Link href="/schedule" className="btn btn-fill">
                {home.cta}
              </Link>
              <p className="alt">
                <Link href="/pricing">{home.firstOfferAlt}</Link>
              </p>
              <Link href="/first-visit" className="btn-ghost">
                {home.firstVisitLink}
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section id="lately" className="section">
        <div className="wrap">
          <div className="social-head">
            <h2>{home.socialHeadline}</h2>
            <a href={settings.instagramUrl} className="btn-ghost" target="_blank" rel="noreferrer">
              Follow {settings.instagram}
            </a>
          </div>
          <SocialGrid items={social.slice(0, 5)} profileUrl={settings.instagramUrl} />
          <p className="mnote">{home.socialNote}</p>
        </div>
      </section>

      <FinalCta settings={settings} />
    </>
  );
}

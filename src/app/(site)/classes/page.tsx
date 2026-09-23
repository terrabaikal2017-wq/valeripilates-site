import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { getClassLevels, getSiteSettings } from "@/data";
import Breaks from "@/components/Breaks";
import FinalCta from "@/components/FinalCta";
import PhotoGallery from "@/components/PhotoGallery";

export const metadata: Metadata = {
  title: "Classes",
  description:
    "Reformer Pilates at VALERI — Beginner to Advanced, plus Private and Semi-private. Every class is 50 minutes and capped at eight. Start where you’re comfortable.",
};

function galleryImages(primary: { src: string; alt: string }, extra: { src: string; alt: string }[]) {
  const seen = new Set<string>();
  return [primary, ...extra].filter((image) => {
    if (!image.src || seen.has(image.src)) return false;
    seen.add(image.src);
    return true;
  });
}

export default async function ClassesPage() {
  const [classLevels, settings] = await Promise.all([getClassLevels(), getSiteSettings()]);
  const { copy, images } = settings;
  const page = copy.classes;
  const band = copy.band;
  const gallery = galleryImages(images.studio, images.studioGallery);

  return (
    <>
      <section className="pagehead has-media">
        <div className="wrap">
          <div className="inner pagehead-intro">
            <span className="eyebrow">{page.eyebrow}</span>
            <h1>
              <Breaks text={page.headline} />
            </h1>
          </div>
          <div className="ph">
            <Image
              src={images.classesHero.src}
              alt={images.classesHero.alt}
              width={720}
              height={540}
            />
          </div>
          <div className="inner pagehead-body">
            <p className="lead">{page.lead1}</p>
            <p className="lead">{page.lead2}</p>
            <p className="facts">{page.facts}</p>
            <Link href="/schedule" className="btn btn-fill">
              {page.cta}
            </Link>
          </div>
        </div>
      </section>

      <section className="section on-white">
        <div className="wrap">
          {classLevels.map((c) => (
            <div className="cd" key={c.slug}>
              <div className="cd-thumb">
                {c.image ? (
                  <Image src={c.image} alt={c.name} width={240} height={300} />
                ) : (
                  <span className="plabel">Photo</span>
                )}
              </div>
              <div className="cd-head">
                <h3>{c.name}</h3>
                <div className="meta">{c.meta}</div>
              </div>
              <div className="cd-body">
                <p>{c.blurb}</p>
                <p className="req">{c.requirement}</p>
                <Link href="/schedule">Book →</Link>
              </div>
            </div>
          ))}
          <p className="lead" style={{ marginTop: 32 }}>
            {page.helper}
          </p>
        </div>
      </section>

      <figure className="imgband">
        <div className="wrap">
          <PhotoGallery images={gallery} />
        </div>
      </figure>

      <section className="section on-sage">
        <div className="wrap">
          <div className="split">
            <h2>{page.bookingHeadline}</h2>
            <div>
              <p className="lead">{page.bookingLead}</p>
              <div style={{ marginTop: 20 }}>
                <Link href="/schedule" className="btn btn-fill">
                  {page.bookingCta}
                </Link>
              </div>
            </div>
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

      <FinalCta settings={settings} />
    </>
  );
}

import Image from "next/image";
import Link from "next/link";
import { classLevels } from "@/content";
import { getSocial, getSiteSettings } from "@/data";
import FinalCta from "@/components/FinalCta";

export default async function HomePage() {
  const [social, settings] = await Promise.all([getSocial(), getSiteSettings()]);
  return (
    <>
      {/* HERO */}
      <section className="hero">
        <Image
          src="/images/home-hero.jpg"
          alt="VALERI members after a Reformer class"
          fill
          priority
          sizes="100vw"
        />
        <div className="hero-inner">
          <span className="eyebrow">
            Reformer Pilates in {settings.city}
          </span>
          <h1>
            Real Pilates.
            <br />
            For real you.
          </h1>
          <p className="sub">Feel stronger. Move better. See progress.</p>
          <Link href="/book" className="btn btn-fill">
            Book your first class
          </Link>
        </div>
      </section>

      {/* EVERY BODY BELONGS HERE */}
      <section className="section on-white">
        <div className="wrap">
          <div className="split">
            <div className="col">
              <span className="eyebrow">New here? Good.</span>
              <h2>Every body belongs here.</h2>
              <p className="lead">
                You don’t need to be flexible. You don’t need to have tried
                Reformer. You don’t need a “Pilates body.” You just need to want
                to start.
              </p>
              <p className="lead">
                Come for flexibility, tone, strength, or just better energy for
                the week — whatever brought you, you’ll find it here. Small
                classes, close attention, no rush.
              </p>
              <p className="sig">Come for Pilates. Stay for how it feels.</p>
            </div>
            <div className="ph belong-photo">
              <Image
                src="/images/belong.jpg"
                alt="Two VALERI members, different ages, after class"
                width={720}
                height={540}
              />
            </div>
          </div>
        </div>
      </section>

      {/* CLASSES PREVIEW */}
      <section id="classes" className="section">
        <div className="wrap">
          <div className="sec-head">
            <span className="eyebrow">Classes</span>
            <h2>Find your class.</h2>
          </div>
          <p className="class-note">
            Real coaching. Small classes. Never more than eight of you.
          </p>
          <div className="class-list">
            {classLevels.map((c) => (
              <div className="class-row" key={c.slug}>
                <h3>{c.name}</h3>
                <p>{c.blurb}</p>
                <Link href="/book">Book →</Link>
              </div>
            ))}
          </div>
          <p className="helper">
            New to Reformer? Start with Foundations. Not sure where you fit —{" "}
            <Link
              href="/book"
              style={{ color: "var(--accent)", borderBottom: "1px solid" }}
            >
              message us
            </Link>{" "}
            and we’ll help you choose.
          </p>
        </div>
      </section>

      {/* NEW TO VALERI */}
      <section id="first" className="section on-sand">
        <div className="wrap">
          <div className="split">
            <div className="col">
              <span className="eyebrow">New to VALERI</span>
              <h2>Your first class starts here.</h2>
              <p className="lead">
                Never tried Reformer Pilates before? That’s completely fine.
                We’ll show you how everything works and help you feel comfortable
                from your very first class.
              </p>
            </div>
            <div className="offer-card">
              <span className="k">Your first class</span>
              <span className="v">AED 80</span>
              <span className="fineprint">
                First-timers only. Includes 5% VAT.
              </span>
              <Link href="/book" className="btn btn-fill">
                Book your first class
              </Link>
              <p className="alt">
                Ready for more? The{" "}
                <Link href="/pricing">3-class intro is AED 300</Link>, valid 14
                days.
              </p>
              <Link href="/first-visit" className="btn-ghost">
                How a first visit works →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* LATELY AT VALERI — compact social strip */}
      <section id="lately" className="section">
        <div className="wrap">
          <div className="social-head">
            <h2>Lately at VALERI.</h2>
            <Link href={settings.instagramUrl} className="btn-ghost">
              Follow {settings.instagram}
            </Link>
          </div>
          <div
            className="social-grid"
            style={{ gridTemplateColumns: "repeat(5,1fr)" }}
          >
            {social.slice(0, 5).map((s) => (
              <div className="ph" key={s.id}>
                <Image src={s.url} alt={s.caption ?? ""} width={400} height={400} />
              </div>
            ))}
          </div>
          <p className="mnote">Studio moments as they happen.</p>
        </div>
      </section>

      <FinalCta />
    </>
  );
}

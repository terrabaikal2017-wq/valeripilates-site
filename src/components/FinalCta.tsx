import Link from "next/link";

export default function FinalCta() {
  return (
    <section className="section on-accent final">
      <div className="wrap">
        <span className="where">Oxford Gardens · Arjan · Dubai</span>
        <h2>Ready to meet your Reformer?</h2>
        <Link
          href="/book"
          className="btn btn-fill"
          style={{ background: "#F8F3E7", color: "var(--accent)" }}
        >
          Book your first class
        </Link>
        <p className="fine">
          Booking, schedule and your account all live in the VALERI app.
        </p>
      </div>
    </section>
  );
}

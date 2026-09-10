import Link from "next/link";

export default function NotFound() {
  return (
    <div className="notfound">
      <span className="eyebrow">404</span>
      <h1>This page has left the studio.</h1>
      <p className="lead" style={{ textAlign: "center" }}>
        The link’s broken or the page moved. Try the classes, the pricing, or
        just book your first one.
      </p>
      <div style={{ display: "flex", gap: 12, flexWrap: "wrap", justifyContent: "center" }}>
        <Link href="/" className="btn btn-line">
          Home
        </Link>
        <Link href="/schedule" className="btn btn-fill">
          Book your first class
        </Link>
      </div>
    </div>
  );
}

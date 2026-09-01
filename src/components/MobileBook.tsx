import Link from "next/link";

export default function MobileBook() {
  return (
    <div className="mobilebook">
      <Link href="/book" className="btn btn-fill">
        Book your first class
      </Link>
    </div>
  );
}

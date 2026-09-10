import Link from "next/link";

export default function MobileBook() {
  return (
    <div className="mobilebook">
      <Link href="/schedule" className="btn btn-fill">
        Book your first class
      </Link>
    </div>
  );
}

import Link from "next/link";

export default function MobileBook({ label }: { label: string }) {
  return (
    <div className="mobilebook">
      <Link href="/schedule" className="btn btn-fill">
        {label}
      </Link>
    </div>
  );
}

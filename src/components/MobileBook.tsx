"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function MobileBook({ label }: { label: string }) {
  const pathname = usePathname();
  // Schedule and pricing are the booking surface. The bar would cover Glofox buttons.
  if (pathname === "/schedule" || pathname === "/pricing") return null;

  return (
    <div className="mobilebook">
      <Link href="/schedule" className="btn btn-fill">
        {label}
      </Link>
    </div>
  );
}

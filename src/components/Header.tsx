"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { nav, site } from "@/content";

export default function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  const isCurrent = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <>
      <header className="header">
        <div className="wrap bar">
          <Link href="/" className="logo" aria-label={`${site.name} — Pilates studio, home`}>
            {site.name}
            <span className="logo-sub" aria-hidden>
              pilates studio
            </span>
          </Link>
          <nav className="nav" aria-label="Primary">
            {nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                aria-current={isCurrent(item.href) ? "page" : undefined}
              >
                {item.label}
              </Link>
            ))}
          </nav>
          <div className="hdr-cta">
            <Link href="/schedule" className="btn btn-fill">
              Book
            </Link>
          </div>
          <button
            className="menu-toggle"
            aria-expanded={open}
            aria-controls="mobilemenu"
            onClick={() => setOpen((v) => !v)}
          >
            {open ? "Close" : "Menu"}
          </button>
        </div>
      </header>

      <div
        className={`mobilemenu${open ? " open" : ""}`}
        id="mobilemenu"
        aria-hidden={!open}
      >
        <div className="mm-top">
          <span className="logo">
            {site.name}
            <span className="logo-sub" aria-hidden>
              pilates studio
            </span>
          </span>
          <button
            className="menu-toggle"
            aria-label="Close menu"
            onClick={() => setOpen(false)}
          >
            Close
          </button>
        </div>
        {nav.map((item) => (
          <Link key={item.href} href={item.href} className="mm-link">
            {item.label}
          </Link>
        ))}
        <div className="mm-foot">
          <span>Oxford Gardens · Arjan · Dubai</span>
          <span>Reformer Pilates studio</span>
          <span>{site.instagram}</span>
        </div>
      </div>
    </>
  );
}

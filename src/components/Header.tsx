"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { nav } from "@/content";

export default function Header({
  name,
  logoSub,
  logoUrl,
  instagram,
  addressShort,
  headerCta,
  footerTagline,
}: {
  name: string;
  logoSub: string;
  logoUrl?: string;
  instagram: string;
  addressShort: string;
  headerCta: string;
  footerTagline: string;
}) {
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

  const Wordmark = () =>
    logoUrl ? (
      <Image src={logoUrl} alt={name} width={180} height={48} className="logo-img" />
    ) : (
      <>{name}</>
    );

  return (
    <>
      <header className="header">
        <div className="wrap bar">
          <Link href="/" className="logo" aria-label={`${name} — Pilates studio, home`}>
            <Wordmark />
            <span className="logo-sub" aria-hidden>
              {logoSub}
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
              {headerCta}
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
            <Wordmark />
            <span className="logo-sub" aria-hidden>
              {logoSub}
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
          <span>{addressShort}</span>
          <span>{footerTagline}</span>
          <span>{instagram}</span>
        </div>
      </div>
    </>
  );
}

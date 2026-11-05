import type { Metadata, Viewport } from "next";
import localFont from "next/font/local";
import { getSiteSettings } from "@/data";
import "./globals.css";

/* Self-hosted copies of Google Fonts (Google CDN blocked at build time here).
   Same CSS variables as next/font/google would expose:
   Cormorant_Garamond 600, Jost 400/500, Manrope 200–800, Figtree 400/500. */
const cormorant = localFont({
  src: [
    {
      path: "../fonts/cormorant-garamond-latin-600-normal.woff2",
      weight: "600",
      style: "normal",
    },
  ],
  variable: "--font-cormorant",
  display: "swap",
});

const jost = localFont({
  src: [
    {
      path: "../fonts/jost-latin-400-normal.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "../fonts/jost-latin-500-normal.woff2",
      weight: "500",
      style: "normal",
    },
  ],
  variable: "--font-jost",
  display: "swap",
});

const manrope = localFont({
  src: "../fonts/manrope-latin-wght-normal.woff2",
  weight: "200 800",
  style: "normal",
  variable: "--font-manrope",
  display: "swap",
});

const figtree = localFont({
  src: [
    {
      path: "../fonts/figtree-latin-400-normal.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "../fonts/figtree-latin-500-normal.woff2",
      weight: "500",
      style: "normal",
    },
  ],
  variable: "--font-figtree",
  display: "swap",
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
};

export async function generateMetadata(): Promise<Metadata> {
  const settings = await getSiteSettings();
  const metadata: Metadata = {
    metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || "https://valeripilates.com"),
    title: {
      default: settings.seoTitle,
      template: `%s | ${settings.name}`,
    },
    description: settings.seoDescription,
    openGraph: {
      title: settings.seoTitle,
      description: settings.seoDescription,
      type: "website",
      locale: "en_AE",
    },
  };
  if (settings.faviconUrl) metadata.icons = { icon: settings.faviconUrl };
  return metadata;
}

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      className={`${cormorant.variable} ${jost.variable} ${manrope.variable} ${figtree.variable}`}
    >
      <body>{children}</body>
    </html>
  );
}

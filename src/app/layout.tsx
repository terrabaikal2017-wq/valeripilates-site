import type { Metadata } from "next";
import { Newsreader, Instrument_Sans } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";

// Brand wordmark face — VALERI logo is set in Insigma (modern decorative serif).
const insigma = localFont({
  src: "../fonts/Insigma.otf",
  weight: "400",
  variable: "--font-insigma",
  display: "swap",
});

const newsreader = Newsreader({
  subsets: ["latin"],
  weight: ["500"],
  style: ["normal", "italic"],
  variable: "--font-newsreader",
  display: "swap",
});

// UI voice — nav, buttons, labels and body copy all read from this one
// humanist sans so they feel of a piece with the Newsreader headlines,
// instead of a third, harder-edged typeface fighting the serif.
const instrument = Instrument_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-instrument",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || "https://valeri.example"),
  title: {
    default: "VALERI | Reformer Pilates in Arjan, Dubai",
    template: "%s | VALERI",
  },
  description:
    "Reformer Pilates in Oxford Gardens, Arjan — Dubai. Small classes, real coaching, every level welcome. Book your first class from AED 80.",
  openGraph: {
    title: "VALERI | Reformer Pilates in Arjan, Dubai",
    description:
      "Reformer Pilates in Arjan, Dubai. Small classes, real coaching, every level welcome.",
    type: "website",
    locale: "en_AE",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      className={`${newsreader.variable} ${instrument.variable} ${insigma.variable}`}
    >
      <body>{children}</body>
    </html>
  );
}

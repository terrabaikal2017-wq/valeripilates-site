import type { Metadata } from "next";
import { Newsreader, Bricolage_Grotesque, Instrument_Sans } from "next/font/google";
import "./globals.css";

const newsreader = Newsreader({
  subsets: ["latin"],
  weight: ["500"],
  style: ["normal", "italic"],
  variable: "--font-newsreader",
  display: "swap",
});

const bricolage = Bricolage_Grotesque({
  subsets: ["latin"],
  weight: ["600", "700", "800"],
  variable: "--font-bricolage",
  display: "swap",
});

const instrument = Instrument_Sans({
  subsets: ["latin"],
  weight: ["400", "500"],
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
    "Women-only Reformer Pilates in Oxford Gardens, Arjan — Dubai. Small classes, real coaching, every level welcome. Book your first class from AED 80.",
  openGraph: {
    title: "VALERI | Reformer Pilates in Arjan, Dubai",
    description:
      "Women-only Reformer Pilates in Arjan, Dubai. Small classes, real coaching, every level welcome.",
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
      className={`${newsreader.variable} ${bricolage.variable} ${instrument.variable}`}
    >
      <body>{children}</body>
    </html>
  );
}

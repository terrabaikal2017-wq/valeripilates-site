import type { SiteSettings } from "@/data";

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL || "https://valeripilates.com";

export default function JsonLd({ settings }: { settings: SiteSettings }) {
  const sameAs = [settings.instagramUrl].filter(Boolean);

  const data = {
    "@context": "https://schema.org",
    "@type": "ExerciseGym",
    "@id": `${siteUrl}/#studio`,
    name: settings.legalName || settings.name,
    alternateName: settings.name,
    description: settings.seoDescription,
    url: siteUrl,
    image: `${siteUrl}/images/home-hero.jpg`,
    address: {
      "@type": "PostalAddress",
      streetAddress: settings.addressLine1,
      addressLocality: "Dubai",
      addressRegion: "Dubai",
      addressCountry: "AE",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 25.065706,
      longitude: 55.247516,
    },
    areaServed: {
      "@type": "Place",
      name: "Arjan, Dubai",
    },
    ...(settings.phone ? { telephone: settings.phone } : {}),
    ...(settings.email ? { email: settings.email } : {}),
    ...(sameAs.length ? { sameAs } : {}),
    priceRange: "$$",
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

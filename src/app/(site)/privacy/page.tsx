import type { Metadata } from "next";
import LegalDoc from "@/components/LegalDoc";
import { getLegal } from "@/data";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "VALERI Privacy Policy — how Valeri Pilates Fitness Club LLC collects, uses and protects personal data. Draft, pending final legal review.",
  robots: { index: false },
};

export default async function PrivacyPage() {
  const doc = await getLegal("privacy");
  return (
    <LegalDoc
      title={doc.title}
      intro={doc.intro}
      sections={doc.sections}
      lastUpdated={doc.lastUpdated}
      legalName={doc.legalName}
      isDraft={doc.isDraft}
      draftNote={doc.draftNote}
    />
  );
}

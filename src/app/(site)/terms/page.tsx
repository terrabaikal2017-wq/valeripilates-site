import type { Metadata } from "next";
import LegalDoc from "@/components/LegalDoc";
import { getLegal } from "@/data";

export const metadata: Metadata = {
  title: "Terms & Conditions",
  description:
    "VALERI Terms & Conditions — bookings, cancellations, class packs, memberships, refunds and studio policy. Draft, pending final legal review.",
  robots: { index: false },
};

export default async function TermsPage() {
  const doc = await getLegal("terms");
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

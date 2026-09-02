import type { Metadata } from "next";
import LegalDoc from "@/components/LegalDoc";
import { terms, termsIntro } from "@/legal";

export const metadata: Metadata = {
  title: "Terms & Conditions",
  description:
    "VALERI Terms & Conditions — bookings, cancellations, class packs, memberships, refunds and studio policy. Draft, pending final legal review.",
  robots: { index: false },
};

export default function TermsPage() {
  return (
    <LegalDoc title="Terms & Conditions" intro={termsIntro} sections={terms} />
  );
}

import type { Metadata } from "next";
import LegalDoc from "@/components/LegalDoc";
import { privacy, privacyIntro } from "@/legal";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "VALERI Privacy Policy — how Valeri Pilates Fitness Club LLC collects, uses and protects personal data. Draft, pending final legal review.",
  robots: { index: false },
};

export default function PrivacyPage() {
  return (
    <LegalDoc
      title="Privacy Policy"
      intro={privacyIntro}
      sections={privacy}
    />
  );
}

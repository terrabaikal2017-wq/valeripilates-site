import Header from "@/components/Header";
import Footer from "@/components/Footer";
import MobileBook from "@/components/MobileBook";
import FloatingContact from "@/components/FloatingContact";
import { getSiteSettings } from "@/data";

export default async function SiteLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  const settings = await getSiteSettings();
  return (
    <>
      <Header
        name={settings.name}
        logoSub={settings.logoSub}
        logoUrl={settings.logoUrl}
        instagram={settings.instagram}
        addressShort={settings.addressShort}
        headerCta={settings.headerCta}
        footerTagline={settings.footerTagline}
      />
      <main>{children}</main>
      <Footer settings={settings} />
      <FloatingContact settings={settings} />
      <MobileBook label={settings.bookCta} />
    </>
  );
}

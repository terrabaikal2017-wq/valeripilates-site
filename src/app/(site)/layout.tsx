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
      <Header />
      <main>{children}</main>
      <Footer settings={settings} />
      <FloatingContact settings={settings} />
      <MobileBook />
    </>
  );
}

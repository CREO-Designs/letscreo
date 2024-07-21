import Benefits from "@/components/Benefits";
import BrandsShowcase from "@/components/BrandsShowcase";
import Clients from "@/components/Clients";
import ClientsCarousel from "@/components/ClientsCarousel";
import ContactUs from "@/components/ContactUs";
import Creators from "@/components/Creators";
import HeroSection from "@/components/HeroSection";
import Pricing from "@/components/Pricing";
import PromotionStrip from "@/components/PromotionStrip";
import Services from "@/components/Services";

export default function Home() {
  return (
    <main className="mx-auto w-full max-w-[1780px] bg-[#f3f5f7] pb-20 font-gilroy">
      <HeroSection />
      <PromotionStrip />
      <BrandsShowcase />
      <Creators />
      <Pricing />
      <Services />
      <Benefits />
      <Clients />
      <ClientsCarousel />
      <ContactUs />
    </main>
  );
}

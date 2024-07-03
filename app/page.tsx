import BrandsShowcase from "@/components/BrandsShowcase";
import HeroSection from "@/components/HeroSection";
import PromotionStrip from "@/components/PromotionStrip";

export default function Home() {
  return (
    <main className="mx-auto w-full max-w-[1780px] bg-[#f3f5f7] font-gilroy">
      <HeroSection />
      <PromotionStrip />
      <BrandsShowcase />
    </main>
  );
}

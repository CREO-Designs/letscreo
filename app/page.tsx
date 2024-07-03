import HeroSection from "@/components/HeroSection";
import PromotionStrip from "@/components/PromotionStrip";

export default function Home() {
  return (
    <main className="mx-auto w-full max-w-[1780px] font-gilroy">
      <HeroSection />
      <PromotionStrip />
    </main>
  );
}

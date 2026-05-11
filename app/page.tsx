// import Testimonials from "@/components/home/Testimonials";
import BenefitsGrid from "@/components/home/BenefitsGrid";
import BrandsStrip from "@/components/home/BrandsStrip";
import CreatorsRow from "@/components/home/CreatorsRow";
import Cta from "@/components/home/Cta";
import Hero from "@/components/home/Hero";
import PromoStrip from "@/components/home/PromoStrip";
import ServicesPreview from "@/components/home/ServicesPreview";
import Spotlight from "@/components/home/Spotlight";
import Stats from "@/components/home/Stats";

export default function Home() {
	return (
		<>
			<Hero />
			<PromoStrip />
			<Stats />
			<BrandsStrip />
			<ServicesPreview />
			<Spotlight />
			<CreatorsRow />
			{/* <Testimonials /> */}
			<BenefitsGrid />
			<Cta />
		</>
	);
}

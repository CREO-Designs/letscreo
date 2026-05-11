import Image from "next/image";
import { Eyebrow } from "@/components/ui/badge";
import { Marquee } from "@/components/ui/marquee";
import { Section } from "@/components/ui/section";
import { BUCKET_URL } from "@/services/utils";

const BRANDS = [
	{ src: "brands/unacademy.png", alt: "Unacademy" },
	{ src: "brands/vedantu.png", alt: "Vedantu" },
	{ src: "brands/tbo-academy.png", alt: "TBO Academy" },
	{ src: "brands/ultimate-ca.png", alt: "Ultimate CA" },
	{ src: "brands/spc.png", alt: "SPC" },
	{ src: "brands/bct-ventures.png", alt: "BCT" },
	{ src: "brands/praana-interiors.png", alt: "Praana Interiors" },
	{ src: "brands/aurum-prop-tech.png", alt: "Aurum Prop Tech" },
	{ src: "brands/campus-binge.png", alt: "Campus Binge" },
	{ src: "brands/ebsco.png", alt: "EBSCO" },
	{ src: "brands/elfa-spaces.png", alt: "ELFA Spaces" },
	{ src: "brands/go-credit.png", alt: "GoCredit" },
	{ src: "brands/graphy.png", alt: "GRAPHY" },
	{ src: "brands/jaguar-logistics.png", alt: "Jaguar Logistics" },
	{ src: "brands/luxe-carpets.png", alt: "Luxe Carpets" },
	{ src: "brands/oswaal-books.png", alt: "Oswaal Books" },
	{ src: "brands/skydo.png", alt: "Skydo" },
	{ src: "brands/supr-send.png", alt: "SuprSend" },
	{ src: "brands/true-profile.png", alt: "True Profile" },
	{ src: "brands/unacademy-x.png", alt: "Unacademy X" },
	{ src: "brands/valma-creations.png", alt: "Valma Creations" },
];

export default function BrandsStrip() {
	return (
		<Section spacing="tight">
			<div className="flex flex-col items-start gap-6 md:flex-row md:items-end md:justify-between">
				<div>
					<Eyebrow>In good company</Eyebrow>
					<h2 className="mt-6 max-w-2xl text-balance font-display text-h2 font-semibold text-ink md:text-h1">
						Trusted by category-defining brands & creators.
					</h2>
				</div>
				<p className="max-w-sm text-small font-light text-ink-500">
					Long-term partnerships, not one-off projects. We embed with your team
					and ship at the speed of culture.
				</p>
			</div>

			<div className="mt-16 border-y border-line py-12">
				<Marquee
					speed="fast"
					className="w-full"
					itemClassName="gap-16 pr-16 md:gap-12 md:pr-20"
				>
					{BRANDS.map((brand) => (
						<div
							key={brand.alt}
							className="flex h-14 items-center justify-center"
						>
							<Image
								src={`${BUCKET_URL}/${brand.src}`}
								alt={brand.alt}
								loading="lazy"
								width={160}
								height={64}
								className="h-12 w-auto object-contain duration-DEFAULT md:h-14"
							/>
						</div>
					))}
				</Marquee>
			</div>
		</Section>
	);
}

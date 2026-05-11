import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Reveal } from "@/components/ui/reveal";
import { Section } from "@/components/ui/section";
import { BUCKET_URL } from "@/services/utils";
import { Eyebrow } from "../ui/badge";

const SERVICES = [
	{
		no: "01",
		title: "Brand & Graphic Design",
		description:
			"Identities, campaigns, social systems and editorial collateral that move the needle.",
		image: "services/services1.png",
		href: "/services#graphic",
		tags: ["Identity", "Social", "Print"],
	},
	{
		no: "02",
		title: "Video Editing & Production",
		description:
			"End-to-end production, editing and motion graphics that scale across formats.",
		image: "services/services2.png",
		href: "/services#video",
		tags: ["Production", "Editing", "Motion"],
	},
	{
		no: "03",
		title: "UI / UX Design",
		description:
			"Product, marketing site and app interfaces engineered for clarity and conversion.",
		image: "services/services3.png",
		href: "/services#ui-ux",
		tags: ["Web", "Mobile", "Design Systems"],
	},
	{
		no: "04",
		title: "Pitch Decks & Presentations",
		description:
			"Strategic narratives turned into investor-grade decks and keynote-ready stories.",
		image: "services/services4.png",
		href: "/services#decks",
		tags: ["Investor", "Sales", "Keynote"],
	},
];

export default function ServicesPreview() {
	return (
		<Section spacing="default">
			<div className="flex flex-col items-start gap-6 md:flex-row md:items-end md:justify-between">
				<div>
					<Eyebrow>What we do</Eyebrow>
					<h2 className="mt-6 max-w-2xl text-balance font-display text-h2 font-semibold text-ink md:text-h1">
						Four practices,
						<br />
						one studio.
					</h2>
				</div>
				<p className="max-w-sm text-small font-light text-ink-500">
					A focused team across brand, motion, product and storytelling — so
					your work feels like one voice, everywhere.
				</p>
			</div>

			<div className="mt-20 grid gap-8 md:grid-cols-4">
				{SERVICES.map((service, i) => (
					<Reveal key={service.no} delay={i * 80}>
						<Link
							href={service.href}
							className="group/card relative block overflow-hidden rounded-md border border-line bg-white transition-[transform,box-shadow] duration-DEFAULT ease-editorial hover:-translate-y-0.5 hover:shadow-lift"
						>
							<div className="relative aspect-[16/10] overflow-hidden bg-ink/5">
								<Image
									src={`${BUCKET_URL}/${service.image}`}
									alt={service.title}
									fill
									loading="lazy"
									sizes="(min-width: 768px) 50vw, 100vw"
									className="object-cover transition-transform duration-slow ease-editorial group-hover/card:scale-[1.03]"
								/>
								{/* <div className="absolute inset-0 bg-gradient-to-t from-ink/55 via-ink/10 to-transparent" /> */}
								{/* <div className="absolute left-6 top-6 text-eyebrow text-bone/80">
									{service.no} / {service.tags.join(" · ")}
								</div> */}
								<span className="absolute right-6 top-6 inline-flex size-10 items-center justify-center rounded-full bg-bone text-ink transition-transform duration-DEFAULT ease-editorial group-hover/card:rotate-45">
									<ArrowUpRight className="size-5" />
								</span>
							</div>
							<div className="flex flex-col gap-3 p-6">
								<h3 className="font-display text-2xl font-semibold text-ink min-h-16">
									{service.title}
								</h3>
								<p className="text-body font-light text-ink-500">
									{service.description}
								</p>
								<span className="ink-link mt-2 inline-block w-fit text-eyebrow text-ink">
									Explore service
								</span>
							</div>
						</Link>
					</Reveal>
				))}
			</div>
		</Section>
	);
}

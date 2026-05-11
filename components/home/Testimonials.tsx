import Image from "next/image";
import { Reveal } from "@/components/ui/reveal";
import { Section } from "@/components/ui/section";
import { SectionHeader } from "@/components/ui/section-header";
import { BUCKET_URL } from "@/services/utils";

const QUOTES = [
	{
		quote:
			"CREO embedded with us like an in-house team — but moved at the speed of a senior agency. Our brand looks ten times sharper.",
		name: "Anand Prakash",
		role: "Co-Founder · Vedantu",
		image: "clients/client1.png",
	},
	{
		quote:
			"Reliable, opinionated and fast. They run our entire creative pipeline so we can focus on content and product.",
		name: "Kashish",
		role: "Marketing Head · TBO Academy",
		image: "clients/client2.png",
	},
	{
		quote:
			"From thumbnails to keynote decks, every touchpoint feels considered. The numbers reflect it.",
		name: "Maleka Taj",
		role: "Category Head · Unacademy",
		image: "clients/client3.png",
	},
];

export default function Testimonials() {
	return (
		<Section spacing="default" tone="bone">
			<SectionHeader
				eyebrow="Hear from our clients"
				title={
					<>
						Words from people
						<br /> we&apos;ve quietly shipped with.
					</>
				}
			/>
			<div className="mt-20 grid gap-8 md:grid-cols-3">
				{QUOTES.map((q, i) => (
					<Reveal key={q.name} delay={i * 100}>
						<figure className="flex h-full flex-col justify-between gap-10 rounded-md border border-line bg-white p-8 shadow-hairline">
							<blockquote>
								<span
									aria-hidden="true"
									className="font-display text-display-md font-semibold leading-none text-clay"
								>
									&ldquo;
								</span>
								<p className="mt-4 text-pretty font-display text-h3 font-semibold leading-snug text-ink">
									{q.quote}
								</p>
							</blockquote>
							<figcaption className="flex items-center gap-4 border-t border-line pt-6">
								<Image
									src={`${BUCKET_URL}/${q.image}`}
									alt={q.name}
									width={56}
									height={56}
									loading="lazy"
									className="size-12 rounded-full object-cover"
								/>
								<div className="flex flex-col">
									<span className="text-body font-medium text-ink">
										{q.name}
									</span>
									<span className="text-eyebrow text-ink-500">{q.role}</span>
								</div>
							</figcaption>
						</figure>
					</Reveal>
				))}
			</div>
		</Section>
	);
}

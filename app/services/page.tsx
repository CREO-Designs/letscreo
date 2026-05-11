import { ArrowUpRight } from "lucide-react";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Eyebrow } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { Faq } from "@/components/ui/faq";
import { Reveal } from "@/components/ui/reveal";
import { Section } from "@/components/ui/section";
import { SectionHeader } from "@/components/ui/section-header";
import { BUCKET_URL } from "@/services/utils";

export const metadata: Metadata = {
	title: "Services",
	description:
		"Brand identity, graphic design, video production, UI/UX and presentation design — a focused service stack for ambitious creators and brands.",
	alternates: { canonical: "/services" },
};

const SERVICES = [
	{
		id: "graphic",
		no: "01",
		title: "Brand & Graphic Design",
		summary:
			"Logos, identity systems, social campaigns, print and editorial design — built to compound brand recall.",
		image: "services/services1.png",
		deliverables: [
			"Thumbnail",
			"Social Post",
			"Book Covers",
			"Logo & Wordmark",
			"Brand Guidelines",
			"Print Media",
			"Packaging",
		],
		duration: "2 — 6 weeks",
	},
	{
		id: "video",
		no: "02",
		title: "Video Editing & Shoots",
		summary:
			"End-to-end production, post and motion — long-form, shorts, podcasts and ads, all under one roof.",
		image: "services/services2.png",
		deliverables: [
			"Vlogs",
			"Marketing Video",
			"Pre-Production",
			"Long-form & Shorts",
			"Motion Graphics",
			"Podcast Video",
		],
		duration: "Ongoing or per project",
	},
	{
		id: "ui-ux",
		no: "03",
		title: "UI / UX Design",
		summary:
			"Web, app and product interfaces engineered for clarity, conversion and durable design systems.",
		image: "services/services3.png",
		deliverables: [
			"Marketing Websites",
			"SaaS Product UI",
			"Mobile Apps",
			"Design Systems",
			"Prototypes",
		],
		duration: "4 — 12 weeks",
	},
	{
		id: "decks",
		no: "04",
		title: "Presentations & Pitch Decks",
		summary:
			"Strategic narratives turned into investor-grade decks, sales collateral and keynote-ready stories.",
		image: "services/services4.png",
		deliverables: [
			"Investor Decks",
			"Sales Decks",
			"Event Presentation",
			"Annual Reports",
			"Internal Presentations",
		],
		duration: "1 — 3 weeks",
	},
];

const PROCESS = [
	{
		no: "01",
		title: "Discover",
		description:
			"We start with a working session to understand your business, audience, voice and the metric that matters.",
	},
	{
		no: "02",
		title: "Define",
		description:
			"A focused brief, success metrics and a delivery roadmap — so design choices are anchored in strategy.",
	},
	{
		no: "03",
		title: "Design",
		description:
			"Senior designers prototype, iterate and pressure-test. You see work weekly, not after the project ends.",
	},
	{
		no: "04",
		title: "Deliver",
		description:
			"Production-ready files, training, handover docs and ongoing support so the work keeps shipping.",
	},
];

const ENGAGEMENT = [
	{
		title: "Subscription",
		summary:
			"A dedicated team for ongoing creative needs. Cancel any time. Best for content-led brands.",
		points: ["Monthly billing", "Unlimited requests", "Same-day responses"],
		badge: "Most popular",
	},
	{
		title: "Project",
		summary:
			"Fixed-scope sprints for identity refreshes, websites, decks or video productions.",
		points: ["Fixed timeline", "Fixed price", "Defined deliverables"],
	},
	{
		title: "Embedded team",
		summary:
			"Senior designers and editors embedded with your team for high-velocity collaboration.",
		points: ["Long-term", "Slack & WhatsApp", "Quarterly business reviews"],
	},
];

const FAQS = [
	{
		q: "How fast can you start?",
		a: "Most engagements kick off within 2 working days of the agreement. Express starts are possible for retainer clients.",
	},
	{
		q: "Do you take small projects?",
		a: "Yes — focused projects (decks, logos, single landing pages) are welcome. Larger brand or product engagements get a dedicated team.",
	},
	{
		q: "Who actually does the work?",
		a: "A core team of expert video editors and designers, with us since day one, bringing deep expertise in their craft.",
	},
	{
		q: "Will I own the files?",
		a: "Yes, Source files can be provided upon request for an additional fee.",
	},
	{
		q: "Do you sign NDAs?",
		a: "Yes. We'll sign yours, or use a mutual NDA template within 24 hours.",
	},
];

export default function ServicesPage() {
	return (
		<>
			{/* Hero */}
			<section className="relative overflow-hidden bg-bone pb-16 pt-32 md:pb-24 md:pt-40">
				<Container>
					<Eyebrow>Services</Eyebrow>
					<h1 className="mt-8 max-w-4xl text-balance font-display text-4xl font-semibold leading-[1.0] tracking-tight text-ink md:text-display-lg 2xl:text-display-xl">
						A focused stack of services,
						<em className="not-italic font-display text-clay">
							{" "}
							built for compounding
						</em>{" "}
						creative output.
					</h1>
					<p className="mt-10 max-w-2xl text-pretty text-lede font-light text-ink-500">
						Four practices, one studio. Hire us for a single sprint or embed
						with us long-term — every engagement runs on the same craft and
						cadence.
					</p>
					<div className="mt-12 flex flex-wrap items-center gap-3">
						{SERVICES.map((s) => (
							<a
								key={s.id}
								href={`#${s.id}`}
								className="inline-flex items-center gap-2 rounded-full border border-ink/15 px-4 py-2 text-eyebrow text-ink-500 transition-colors duration-DEFAULT ease-editorial hover:border-clay hover:text-clay"
							>
								<span className="text-clay">{s.no}</span>
								{s.title}
							</a>
						))}
					</div>
				</Container>
			</section>

			{/* Service rows */}
			<Section spacing="default">
				<ul className="divide-y divide-line border-y border-line">
					{SERVICES.map((s, i) => (
						<li key={s.id} id={s.id} className="scroll-mt-32">
							<Reveal as="article">
								<div className="grid gap-12 py-16 md:grid-cols-12 md:gap-x-8 md:py-24">
									<div className="md:col-span-1">
										<span className="font-display text-h2 font-semibold text-clay">
											{s.no}
										</span>
									</div>
									<div className="md:col-span-5">
										<h2 className="font-display text-4xl font-semibold leading-[1.05] tracking-tight text-ink md:text-display-lg">
											{s.title}
										</h2>
										<p className="mt-6 max-w-md text-pretty text-lede font-light text-ink-500">
											{s.summary}
										</p>
										<div className="mt-10 flex items-center gap-1">
											<Button asChild variant="outline" size="md" trailingIcon>
												<Link href="/contact">Discuss this service</Link>
											</Button>
										</div>
									</div>
									<div className="md:col-span-6">
										<div className="relative aspect-[16/11] overflow-hidden rounded-md bg-ink/5">
											<Image
												src={`${BUCKET_URL}/${s.image}`}
												alt={s.title}
												fill
												loading={i === 0 ? "eager" : "lazy"}
												sizes="(min-width: 768px) 50vw, 100vw"
												className="object-cover"
											/>
										</div>
										<ul className="mt-8 grid grid-cols-2 gap-x-8 gap-y-3 md:grid-cols-3">
											{s.deliverables.map((d) => (
												<li
													key={d}
													className="flex items-center gap-2 text-body text-ink"
												>
													<span
														className="size-1.5 rounded-full bg-clay"
														aria-hidden="true"
													/>
													{d}
												</li>
											))}
										</ul>
									</div>
								</div>
							</Reveal>
						</li>
					))}
				</ul>
			</Section>

			{/* Process */}
			<Section tone="ink" spacing="default">
				<SectionHeader
					eyebrow="How we work"
					title={
						<>
							A four-step process,
							<br /> repeatable & honest.
						</>
					}
					lede="Strategy upfront, sharp execution, no surprises. Every project moves through the same calm cadence."
					className="text-bone [&_h2]:text-bone [&_p]:text-bone/70"
				/>
				<ol className="mt-20 grid grid-cols-1 gap-px overflow-hidden rounded-md bg-bone/10 md:grid-cols-4">
					{PROCESS.map((p) => (
						<li key={p.no} className="flex flex-col gap-6 bg-ink p-8 md:p-10">
							<span className="font-display text-h1 font-semibold text-clay">
								{p.no}
							</span>
							<h3 className="font-display text-h2 font-semibold text-bone">
								{p.title}
							</h3>
							<p className="text-body font-light text-bone/70">
								{p.description}
							</p>
						</li>
					))}
				</ol>
			</Section>

			{/* Engagement models */}
			{/* <Section spacing="default">
				<SectionHeader
					eyebrow="Engagement models"
					title="Three ways to work with CREO."
					lede="Pick the model that matches your stage. Switch any time as your needs evolve."
				/>
				<div className="mt-16 grid gap-8 md:grid-cols-3">
					{ENGAGEMENT.map((e, i) => (
						<Reveal
							key={e.title}
							delay={i * 80}
							className="flex h-full flex-col justify-between gap-10 rounded-md border border-line bg-white p-8 md:p-10"
						>
							<div>
								<div className="flex items-center justify-between">
									<h3 className="font-display text-h2 font-semibold text-ink">
										{e.title}
									</h3>
									{e.badge && (
										<span className="rounded-full bg-clay px-3 py-1 text-eyebrow text-bone">
											{e.badge}
										</span>
									)}
								</div>
								<p className="mt-4 text-body font-light text-ink-500">
									{e.summary}
								</p>
							</div>
							<ul className="space-y-3 border-t border-line pt-6 text-body text-ink">
								{e.points.map((p) => (
									<li key={p} className="flex items-center gap-3">
										<span
											className="size-1.5 rounded-full bg-clay"
											aria-hidden="true"
										/>
										{p}
									</li>
								))}
							</ul>
						</Reveal>
					))}
				</div>
			</Section> */}

			{/* FAQ */}
			<Section spacing="default" tone="sand">
				<div className="grid gap-12 md:grid-cols-12 md:gap-x-8">
					<div className="md:col-span-4">
						<Eyebrow>Common questions</Eyebrow>
						<h2 className="mt-6 font-display text-h1 font-semibold text-ink md:text-display-md">
							Things people ask before saying yes.
						</h2>
					</div>
					<div className="md:col-span-8">
						<Faq items={FAQS} />
						<div className="mt-12 flex justify-center gap-2 w-fit">
							<Button asChild size="lg" trailingIcon>
								<Link href="/contact">Still got questions? Talk to us</Link>
							</Button>
						</div>
					</div>
				</div>
			</Section>

			{/* CTA */}
			<Section tone="bone" spacing="default">
				<div className="flex flex-col items-start justify-between gap-8 border-t border-ink/10 pt-16 md:flex-row md:items-end">
					<h2 className="max-w-3xl text-balance font-display text-4xl font-semibold leading-[1.05] tracking-tight text-ink md:text-display-lg">
						Ready to ship better creative?
					</h2>
					<div className="flex items-center gap-4">
						<Button asChild size="lg" trailingIcon>
							<Link href="/contact">Start a project</Link>
						</Button>
						<Button asChild size="lg" variant="outline" trailingIcon>
							<Link href="/pricing">See pricing</Link>
						</Button>
					</div>
				</div>
			</Section>
		</>
	);
}

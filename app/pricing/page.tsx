import { Check } from "lucide-react";
import type { Metadata } from "next";
import Link from "next/link";
import { Eyebrow } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { Faq } from "@/components/ui/faq";
import { Reveal } from "@/components/ui/reveal";
import { Section } from "@/components/ui/section";
// import { SectionHeader } from "@/components/ui/section-header";

export const metadata: Metadata = {
	title: "Pricing",
	description:
		"Transparent pricing for graphic design, video, UI/UX and presentation work — subscriptions, projects and embedded teams.",
	alternates: { canonical: "/pricing" },
};

const TIERS = [
	{
		name: "Graphics",
		tag: "Most flexible",
		starting: "₹1,499",
		discounted: "₹999",
		cadence: "/ creative",
		description:
			"Social, print and editorial design — perfect for creators and content-led brands shipping daily.",
		features: [
			"Top-tier Designers",
			"Express Delivery",
			"Customized Designs",
			"Unlimited Revisions",
		],
		accent: false,
	},
	{
		name: "Video",
		tag: "Best for creators",
		starting: "₹3,999",
		discounted: "₹2,999",
		cadence: "/ deliverable",
		description:
			"End-to-end video editing & shoots, from long-form to shorts and podcast video — built for compounding watch-time.",
		features: [
			"Senior editor & cinematographer",
			"Long-form, shorts, podcast",
			"Motion graphics",
			"Pre & post-production",
			"Captions & thumbnails",
		],
		accent: true,
	},
	{
		name: "UI / UX",
		tag: "Best for product teams",
		starting: "₹11,999",
		discounted: "₹9,999",
		cadence: "/ scope",
		description:
			"Marketing sites, SaaS dashboards and mobile apps designed for clarity and conversion.",
		features: [
			"Strategy & wireframes",
			"Hi-fi UI in Figma",
			"Design system",
			"Developer handover",
			"QA & launch support",
		],
		accent: false,
	},
];

// const COMPARE_ROWS = [
// 	{ feature: "Senior designer", graphics: true, video: true, ui: true },
// 	{ feature: "Unlimited revisions", graphics: true, video: true, ui: true },
// 	{ feature: "Source files included", graphics: true, video: true, ui: true },
// 	{ feature: "Same-day rush option", graphics: true, video: true, ui: false },
// 	{ feature: "Motion graphics", graphics: false, video: true, ui: true },
// 	{
// 		feature: "Cinematography & shoot",
// 		graphics: false,
// 		video: true,
// 		ui: false,
// 	},
// 	{
// 		feature: "Design system / tokens",
// 		graphics: false,
// 		video: false,
// 		ui: true,
// 	},
// 	{ feature: "Developer handover", graphics: false, video: false, ui: true },
// ];

// const ADDONS = [
// 	{
// 		title: "Brand strategy sprint",
// 		desc: "A 2-week brand foundation: positioning, voice, visual direction.",
// 		price: "From ₹120,000",
// 	},
// 	{
// 		title: "Cinematography day",
// 		desc: "Full shoot day with director, DOP, and post-production handoff.",
// 		price: "From ₹85,000",
// 	},
// 	{
// 		title: "Animation reel",
// 		desc: "10–20 second hero animations for product or campaigns.",
// 		price: "From ₹45,000",
// 	},
// ];

const FAQS = [
	{
		q: "Are there long-term contracts?",
		a: "We offer both short-term and long-term contract options, tailored to suit your specific requirements.",
	},
	// {
	// 	q: "What does &lsquo;starting from&rsquo; really mean?",
	// 	a: "It's the entry rate per creative for that practice. Larger or rush scopes are quoted upfront before any work begins.",
	// },
	{
		q: "Do you offer pilot projects?",
		a: "Yes. We frequently start with a paid pilot — a small, well-defined sprint — so both sides can evaluate fit before committing.",
	},
	{
		q: "What payment methods do you accept?",
		a: "Bank transfer (NEFT/IMPS/RTGS), UPI and major credit cards. International clients can pay via wire or Stripe.",
	},
	{
		q: "Can pricing scale with volume?",
		a: "Absolutely — high-volume retainers get tiered pricing. Talk to us about your roadmap and we'll structure something fair.",
	},
];

// function CheckCell({ on }: { on: boolean }) {
// 	return on ? (
// 		<Check className="mx-auto size-4 text-clay" />
// 	) : (
// 		<Minus className="mx-auto size-4 text-ink/25" />
// 	);
// }

export default function PricingPage() {
	return (
		<>
			{/* Hero */}
			<section className="relative overflow-hidden bg-bone pb-16 pt-32 md:pb-24 md:pt-40">
				<Container>
					<Eyebrow>Pricing</Eyebrow>
					<h1 className="mt-8 max-w-4xl text-balance font-display text-4xl font-semibold leading-[1.0] tracking-tight text-ink md:text-display-lg">
						Honest pricing,
						<em className="not-italic font-display text-clay">
							{" "}
							built around outcomes.
						</em>
					</h1>
					<p className="mt-10 max-w-2xl text-pretty text-lede font-light text-ink-500">
						Start today, and settle the full payment at the beginning of next
						month—just like a monthly credit card bill.
					</p>
				</Container>
			</section>

			{/* Tiers */}
			<Section spacing="default">
				<div className="grid gap-8 md:grid-cols-3 sm:grid-cols-2 grid-cols-1">
					{TIERS.map((t, i) => (
						<Reveal
							key={t.name}
							delay={i * 80}
							className={
								t.accent
									? "relative flex h-full flex-col justify-between rounded-md border border-clay bg-ink p-8 text-bone shadow-lift md:p-10"
									: "relative flex h-full flex-col justify-between rounded-md border border-line bg-white p-8 text-ink md:p-10"
							}
						>
							<div>
								<div className="flex items-center justify-between flex-wrap gap-2 flex-col sm:flex-row">
									<h3
										className={
											t.accent
												? "font-display text-h2 font-semibold text-bone"
												: "font-display text-h2 font-semibold text-ink"
										}
									>
										{t.name}
									</h3>
									<span
										className={
											t.accent
												? "rounded-full bg-clay px-3 py-1 text-eyebrow text-bone"
												: "rounded-full border border-ink/15 px-3 py-1 text-eyebrow text-ink-500"
										}
									>
										{t.tag}
									</span>
								</div>
								<div className="mt-8 flex items-baseline flex-wrap gap-3">
									<span
										className={
											t.accent
												? "font-display text-4xl font-semibold text-bone"
												: "font-display text-4xl font-semibold text-ink"
										}
									>
										{t.discounted}
									</span>
									<div className="flex items-baseline gap-3">
										<span
											className={
												t.accent
													? "text-eyebrow text-bone/60 line-through"
													: "text-eyebrow text-ink-300 line-through"
											}
										>
											{t.starting}
										</span>
										<span
											className={
												t.accent
													? "text-eyebrow text-bone/60"
													: "text-eyebrow text-ink-500"
											}
										>
											{t.cadence}
										</span>
									</div>
								</div>
								<p
									className={
										t.accent
											? "mt-6 max-w-sm text-body font-light text-bone/75"
											: "mt-6 max-w-sm text-body font-light text-ink-500"
									}
								>
									{t.description}
								</p>
								<ul
									className={
										t.accent
											? "mt-10 space-y-3 border-t border-bone/15 pt-6 text-body text-bone"
											: "mt-10 space-y-3 border-t border-line pt-6 text-body text-ink"
									}
								>
									{t.features.map((f) => (
										<li key={f} className="flex items-start gap-3">
											<Check className="mt-1 size-4 text-clay" />
											{f}
										</li>
									))}
								</ul>
							</div>
							<div className="mt-10 flex items-center gap-1 w-fit">
								<Button
									asChild
									size="lg"
									variant={t.accent ? "invert" : "primary"}
									className="w-full"
									trailingIcon
								>
									<Link href="/contact">Talk to the studio</Link>
								</Button>
							</div>
						</Reveal>
					))}
				</div>
				<p className="mt-8 max-w-2xl text-small font-light text-ink-500">
					Prices shown are introductory rates. Larger or recurring scopes are
					quoted upfront — we&apos;ll always give you a fixed number before any
					work starts.
				</p>
			</Section>

			{/* Comparison table */}
			{/* <Section spacing="default" tone="sand">
				<SectionHeader
					eyebrow="Compare practices"
					title="What's included, at a glance."
					lede="A quick view of what ships across each practice. Anything missing is usually possible as an add-on."
				/>
				<div className="mt-12 overflow-x-auto rounded-md border border-line bg-white">
					<table className="min-w-full divide-y divide-line">
						<thead>
							<tr className="text-eyebrow text-ink-500">
								<th className="px-6 py-5 text-left font-normal">Feature</th>
								<th className="px-6 py-5 text-center font-normal">Graphics</th>
								<th className="px-6 py-5 text-center font-normal">Video</th>
								<th className="px-6 py-5 text-center font-normal">UI / UX</th>
							</tr>
						</thead>
						<tbody className="divide-y divide-line text-body text-ink">
							{COMPARE_ROWS.map((row) => (
								<tr key={row.feature}>
									<td className="px-6 py-5">{row.feature}</td>
									<td className="px-6 py-5 text-center">
										<CheckCell on={row.graphics} />
									</td>
									<td className="px-6 py-5 text-center">
										<CheckCell on={row.video} />
									</td>
									<td className="px-6 py-5 text-center">
										<CheckCell on={row.ui} />
									</td>
								</tr>
							))}
						</tbody>
					</table>
				</div>
			</Section> */}

			{/* Add-ons */}
			{/* <Section spacing="default">
				<SectionHeader
					eyebrow="Add-ons"
					title={
						<>
							Bolt-ons for
							<br /> bigger ambitions.
						</>
					}
					lede="Stack any of these on top of a subscription or project to expand scope."
				/>
				<div className="mt-16 grid gap-px overflow-hidden rounded-md bg-line md:grid-cols-3">
					{ADDONS.map((a) => (
						<article
							key={a.title}
							className="flex flex-col justify-between gap-8 bg-bone p-8 md:p-10"
						>
							<div>
								<h3 className="font-display text-h3 font-semibold text-ink">
									{a.title}
								</h3>
								<p className="mt-3 text-body font-light text-ink-500">
									{a.desc}
								</p>
							</div>
							<span className="text-eyebrow text-clay">{a.price}</span>
						</article>
					))}
				</div>
			</Section> */}

			{/* FAQ */}
			<Section spacing="default" tone="bone">
				<div className="grid gap-12 md:grid-cols-12 md:gap-x-8">
					<div className="md:col-span-4">
						<Eyebrow>Pricing FAQ</Eyebrow>
						<h2 className="mt-6 font-display text-h1 font-semibold text-ink md:text-display-md">
							The fine print, in plain words.
						</h2>
					</div>
					<div className="md:col-span-8">
						<Faq items={FAQS} />
					</div>
				</div>
			</Section>

			{/* CTA */}
			<Section tone="ink" spacing="default">
				<div className="flex flex-col items-start justify-between gap-8 md:flex-row md:items-end">
					<h2 className="max-w-3xl text-balance font-display text-4xl font-semibold leading-[1.05] tracking-tight text-bone md:text-display-lg">
						Get a tailored quote in under 24 hours.
					</h2>
					<div className="flex items-center gap-1 w-fit">
						<Button asChild size="lg" variant="invert" trailingIcon>
							<Link href="/contact">Request a quote</Link>
						</Button>
					</div>
				</div>
			</Section>
		</>
	);
}

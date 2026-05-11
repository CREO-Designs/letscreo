import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Eyebrow } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { Reveal } from "@/components/ui/reveal";
import { Section } from "@/components/ui/section";
import { cn } from "@/lib/utils";
import { BUCKET_URL } from "@/services/utils";

export const metadata: Metadata = {
	title: "CREO Creator House",
	description:
		"Work, live and create under one roof. Fully furnished residences, production-ready workspaces, curated amenities — and the CREO studio team beside you.",
	alternates: { canonical: "/creator-house" },
};

// function PlaceholderTile({
// 	className,
// 	label = "Imagery forthcoming",
// }: {
// 	className?: string;
// 	label?: string;
// }) {
// 	return (
// 		<div
// 			role="img"
// 			aria-label={label}
// 			className={cn("rounded-md border border-line/70 bg-[#ebe4db]", className)}
// 		/>
// 	);
// }

function SectionTitle({
	title,
	description,
	align = "left",
}: {
	title: string;
	description?: string;
	align?: "left" | "center";
}) {
	return (
		<div
			className={cn(
				"mb-10 md:mb-14",
				align === "center" && "mx-auto max-w-3xl text-center",
			)}
		>
			<h2 className="font-display text-h1 font-semibold uppercase tracking-[0.12em] text-ink md:text-display-md md:normal-case md:tracking-tight">
				{title}
			</h2>
			{description ? (
				<p
					className={cn(
						"mt-5 max-w-2xl text-pretty text-body font-light text-ink-500",
						align === "center" && "mx-auto",
					)}
				>
					{description}
				</p>
			) : null}
		</div>
	);
}

function GridImage({
	src,
	alt,
	className,
	sizes,
	priority,
}: {
	src: string;
	alt: string;
	className?: string;
	sizes: string;
	priority?: boolean;
}) {
	return (
		<div
			className={cn(
				"relative overflow-hidden rounded-md bg-line/40 shadow-hairline",
				className,
			)}
		>
			<Image
				src={src}
				alt={alt}
				fill
				sizes={sizes}
				className="object-cover"
				priority={priority}
			/>
		</div>
	);
}

const base = `${BUCKET_URL ?? ""}`;

export default function CreatorHousePage() {
	return (
		<>
			{/* Hero — Figma-inspired gradient band + centred stack */}
			<section className="relative overflow-hidden bg-gradient-to-b from-[#efd6d9] from-[8%] via-bone via-45% to-bone pb-16 pt-28 md:pb-24 md:pt-36">
				<Container className="relative z-10 text-center">
					<h1 className="font-display text-display-md font-semibold tracking-tight text-ink md:text-display-xl 2xl:text-display-2xl">
						Work. Live. Relax.
					</h1>
					<p className="mx-auto mt-4 max-w-3xl font-display text-h2 font-semibold tracking-tight text-ink md:text-display-md">
						with CREO Creator House
					</p>
					<p className="mx-auto mt-8 max-w-2xl text-pretty text-lede font-light text-ink-600">
						Your one-place base for housing, workstation-grade setup, curated
						lifestyle services and CREO studio support — crafted for creators
						who treat publishing like a discipline, not an after-hours hobby.
					</p>
					<div className="mt-10 flex flex-wrap items-center justify-center gap-4">
						<Button
							asChild
							size="lg"
							variant="clay"
							rounded="pill"
							trailingIcon
						>
							<Link href="/contact?topic=creator-house">Join cohort</Link>
						</Button>
						<Button asChild size="lg" variant="outline" rounded="pill">
							<Link href="#living">Tour the residence</Link>
						</Button>
					</div>
					<div className="relative mx-auto mt-16 max-w-[720px]">
						<div className="relative aspect-[16/10] overflow-hidden rounded-md border border-line/80 bg-white/50 shadow-soft">
							<Image
								src={`${base}/banner-2.png`}
								alt="Creators collaborating in a CREO residence workspace"
								fill
								priority
								sizes="(max-width: 768px) 100vw, 720px"
								className="object-cover"
							/>
						</div>
					</div>
				</Container>
				<p className="mx-auto mt-12 max-w-2xl px-6 text-center text-small font-light text-ink-500 sm:px-0">
					Structured as a{" "}
					<span className="font-medium text-ink">twelve-week residency</span>.
					The grids below reuse placeholder imagery until cohort-specific shoots
					ship.
				</p>
			</section>

			{/* Introduction */}
			<Section tone="white" spacing="loose">
				<div className="mx-auto max-w-3xl text-center">
					<div className="flex justify-center">
						<Eyebrow>Creator House</Eyebrow>
					</div>
					<h2 className="mt-6 font-display text-h1 font-semibold text-ink md:text-display-md">
						Why CREO Creator House?
					</h2>
					<p className="mt-6 text-pretty text-lede font-light text-ink-500">
						Most creators outgrow improvised bedrooms and brittle Wi‑Fi long
						before they outgrow their ideas. Creator House bundles a
						production-minded home — furniture, ergonomics, community spaces,
						housekeeping and CREO&apos;s creative spine — into a single
						onboarding surface so you arrive ready to ship, not ready to
						troubleshoot.
					</p>
				</div>
			</Section>

			{/* Living — 3-column gallery */}
			<Section id="living" spacing="default" className="scroll-mt-28">
				<SectionTitle
					title="More than just a room"
					description="Rest-first bedrooms, hotel-grade linens and blackout-friendly layouts — calibrated for unpredictable creative hours."
				/>
				<div className="grid gap-4 md:grid-cols-3 md:gap-6">
					{[
						{
							src: `${base}/creatorHouse/creator-house-1-1.png`,
							alt: "Calm bedroom interior — placeholder",
						},
						{
							src: `${base}/creatorHouse/creator-house-1-2.png`,
							alt: "Minimal bedroom staging — placeholder",
						},
						{
							src: `${base}/creatorHouse/creator-house-1-3.png`,
							alt: "Residence bedside detail — placeholder",
						},
					].map((img, i) => (
						<Reveal key={img.src} delay={i * 70}>
							<GridImage
								src={img.src}
								alt={img.alt}
								className="aspect-square md:aspect-[4/5]"
								sizes="(max-width: 768px) 100vw, 33vw"
							/>
						</Reveal>
					))}
				</div>
			</Section>

			{/* Workspace */}
			<Section tone="sand" spacing="default">
				<SectionTitle
					title="Deep work, without the DIY"
					description="Dedicated stations, proper task lighting and seating that survives twelve-hour edit days."
				/>
				<div className="grid gap-4 md:grid-cols-3 md:gap-6">
					<GridImage
						src={`${base}/creatorHouse/creator-house-2-2.png`}
						alt="Laptop on desk with reliable power — placeholder"
						className="md:col-span-2 min-h-[280px] md:min-h-[486px]"
						sizes="(max-width: 768px) 100vw, 50vw"
					/>
					<GridImage
						src={`${base}/creatorHouse/creator-house-2-1.png`}
						alt="Laptop on desk with reliable power — placeholder"
						className="min-h-[280px] md:min-h-[486px]"
						sizes="(max-width: 768px) 100vw, 50vw"
					/>
				</div>
			</Section>

			{/* Connectivity grid 3×2 */}
			<Section spacing="default">
				<SectionTitle
					title="High-speed broadband with uninterrupted connectivity"
					description="Residential-grade throughput and consistent coverage — take calls, livestream and ship large files from any corner of the house without fighting the network."
				/>
				<div className="grid gap-4 md:grid-cols-3 md:gap-6">
					{[
						{
							src: `${base}/creatorHouse/creator-house-3-1.png`,
							alt: "Resident on a laptop and phone in a lounge — reliable Wi‑Fi",
						},
						{
							src: `${base}/creatorHouse/creator-house-3-2.png`,
							alt: "Wireless router in a bright living space",
						},
						{
							src: `${base}/creatorHouse/creator-house-3-3.png`,
							alt: "Wi‑Fi hardware on a desk — stable uploads",
						},
					].map((img, i) => (
						<Reveal key={img.src} delay={i * 70}>
							<GridImage
								src={img.src}
								alt={img.alt}
								className="aspect-square md:aspect-[4/5] object-center"
								sizes="(max-width: 768px) 100vw, 33vw"
							/>
						</Reveal>
					))}
				</div>
				{/* <div className="grid grid-cols-2 gap-3 md:grid-cols-3 md:gap-4">
					<GridImage
						src={`${base}/creators/creator1.jpg`}
						alt=" — placeholder"
						className="col-span-2 aspect-[16/9] md:col-span-1 md:aspect-[4/3]"
						sizes="(max-width: 768px) 100vw, 33vw"
					/>
					<PlaceholderTile className="aspect-[4/3]" />
					<GridImage
						src={`${base}/creators/creator2.jpg`}
						alt=" — placeholder"
						className="aspect-[4/3]"
						sizes="33vw"
					/>
					<PlaceholderTile className="aspect-[4/3]" />
					<GridImage
						src={`${base}/creators/creator3.jpg`}
						alt=" — placeholder"
						className="aspect-[4/3]"
						sizes="33vw"
					/>
					<GridImage
						src={`${base}/creators/creator4.jpg`}
						alt="Resident working on a laptop with headphones — placeholder"
						className="col-span-2 aspect-[16/9] md:col-span-1 md:aspect-[4/3]"
						sizes="(max-width: 768px) 100vw, 33vw"
					/>
				</div> */}
			</Section>

			{/* Infrastructure */}
			<Section tone="white" spacing="default">
				<SectionTitle
					title="Always-on connectivity"
					description="Redundant power paths and priority bandwidth for live sessions, renders and overnight uploads."
				/>
				<div className="grid gap-4 md:grid-cols-3 md:gap-6">
					<GridImage
						src={`${base}/creatorHouse/creator-house-4-1.png`}
						alt="Laptop on desk with reliable power — placeholder"
						className="min-h-[280px] md:min-h-[486px]"
						sizes="(max-width: 768px) 100vw, 50vw"
					/>
					<GridImage
						src={`${base}/creatorHouse/creator-house-4-2.png`}
						alt="Laptop on desk with reliable power — placeholder"
						className="md:col-span-2 min-h-[280px] md:min-h-[486px]"
						sizes="(max-width: 768px) 100vw, 50vw"
					/>
				</div>
			</Section>

			{/* Common areas 3×2 */}
			<Section tone="sand" spacing="default">
				<SectionTitle
					title="Spaces to exhale"
					description="Reading corners, dining nooks and soft seating for everything that isn&apos;t a thumbnail deadline."
				/>
				<div className="grid gap-4 md:grid-cols-3 md:gap-6">
					{[
						{
							src: `${base}/creatorHouse/creator-house-5-1.png`,
							alt: "Calm bedroom interior — placeholder",
						},
						{
							src: `${base}/creatorHouse/creator-house-5-2.png`,
							alt: "Minimal bedroom staging — placeholder",
						},
						{
							src: `${base}/creatorHouse/creator-house-5-3.png`,
							alt: "Residence bedside detail — placeholder",
						},
					].map((img, i) => (
						<Reveal key={img.src} delay={i * 70}>
							<GridImage
								src={img.src}
								alt={img.alt}
								className="aspect-square md:aspect-[4/5]"
								sizes="(max-width: 768px) 100vw, 33vw"
							/>
						</Reveal>
					))}
				</div>
			</Section>

			{/* Entertainment row */}
			<Section spacing="default">
				<SectionTitle
					title="Switch off, deliberately"
					description="Curated entertainment packages for the nights when the algorithm can wait."
				/>
				<div className="grid grid-cols-2 gap-3 md:grid-cols-4 md:gap-4">
					{[
						`${base}/creatorHouse/creator-house-6-1.png`,
						`${base}/creatorHouse/creator-house-6-2.png`,
						`${base}/creatorHouse/creator-house-6-3.png`,
						`${base}/creatorHouse/creator-house-6-4.png`,
					].map((src, i) => (
						<GridImage
							key={src}
							src={src}
							alt={`Entertainment and screens — placeholder ${i + 1}`}
							className="aspect-[5/4] md:aspect-[4/3]"
							sizes="(max-width: 768px) 50vw, 25vw"
						/>
					))}
				</div>
				<p className="mt-6 text-center text-small font-light text-ink-500">
					Streaming catalogue and platform mix confirmed per cohort agreement.
				</p>
			</Section>

			{/* Kitchen 3×3 */}
			<Section tone="white" spacing="default">
				<SectionTitle
					title="Kitchen & dining, production-grade"
					description="Full appliance stack, filtered water, serious coffee and space for late-night debriefs."
				/>
				<div className="grid gap-4 md:grid-cols-3 md:gap-6">
					{[
						{
							src: `${base}/creatorHouse/creator-house-7-1.png`,
							alt: "Calm bedroom interior — placeholder",
						},
						{
							src: `${base}/creatorHouse/creator-house-7-2.png`,
							alt: "Minimal bedroom staging — placeholder",
						},
						{
							src: `${base}/creatorHouse/creator-house-7-3.png`,
							alt: "Residence bedside detail — placeholder",
						},
					].map((img, i) => (
						<Reveal key={img.src} delay={i * 70}>
							<GridImage
								src={img.src}
								alt={img.alt}
								className="aspect-square md:aspect-[4/5]"
								sizes="(max-width: 768px) 100vw, 33vw"
							/>
						</Reveal>
					))}
				</div>
				{/* <div className="grid grid-cols-2 gap-3 md:grid-cols-3 md:gap-4">
					<GridImage
						src={`${base}/creators/creator2.jpg`}
						alt="Kitchen wide — placeholder"
						className="col-span-2 aspect-[16/10] md:col-span-2 md:row-span-1"
						sizes="(max-width: 768px) 100vw, 66vw"
					/>
					<PlaceholderTile className="aspect-square" />
					<GridImage
						src={`${base}/creators/creator3.jpg`}
						alt="Coffee and prep — placeholder"
						className="aspect-square"
						sizes="33vw"
					/>
					<PlaceholderTile className="aspect-square" />
					<GridImage
						src={`${base}/creators/creator4.jpg`}
						alt="Dining table — placeholder"
						className="aspect-square"
						sizes="33vw"
					/>
					<PlaceholderTile className="col-span-2 aspect-[16/9] md:col-span-2" />
					<GridImage
						src={`${base}/creators/creator5.jpg`}
						alt="Cookware detail — placeholder"
						className="aspect-square"
						sizes="33vw"
					/>
				</div> */}
			</Section>

			{/* Appliances */}
			<Section tone="sand" spacing="default">
				<SectionTitle
					title="Appliances without the IKEA sprint"
					description="Laundry, climate, hydration and countertop essentials — inventoried before you unpack."
				/>
				<div className="grid gap-4 lg:grid-cols-12 lg:gap-6">
					<div className="grid grid-cols-2 gap-3 lg:col-span-5 lg:gap-4">
						<GridImage
							src={`${base}/creatorHouse/creator-house-8-1.png`}
							alt="Small appliance detail — placeholder"
							className="aspect-square"
							sizes="(max-width: 1024px) 50vw, 200px"
						/>
						<GridImage
							src={`${base}/creatorHouse/creator-house-8-2.png`}
							alt="Small appliance detail — placeholder"
							className="aspect-square"
							sizes="(max-width: 1024px) 50vw, 200px"
						/>
						<GridImage
							src={`${base}/creatorHouse/creator-house-8-3.png`}
							alt="Small appliance detail — placeholder"
							className="aspect-square"
							sizes="(max-width: 1024px) 50vw, 200px"
						/>
						<GridImage
							src={`${base}/creatorHouse/creator-house-8-4.png`}
							alt="Small appliance detail — placeholder"
							className="aspect-square"
							sizes="(max-width: 1024px) 50vw, 200px"
						/>
					</div>
					<GridImage
						src={`${base}/creatorHouse/creator-house-8-5.png`}
						alt="Purification & hydration wall — placeholder"
						className="h-full w-full object-cover lg:col-span-7"
						sizes="(max-width: 1024px) 100vw, 720px"
					/>
					{/* <div className="relative min-h-[320px] overflow-hidden rounded-md border border-line/70 bg-[#dfe9f5] lg:col-span-7">
						<PlaceholderTile className="h-full min-h-[320px] w-full rounded-none border-0" />
						<p className="absolute bottom-6 left-6 max-w-xs text-small font-medium text-ink/80">
							Purification & hydration wall — branded photography pending.
						</p>
					</div> */}
				</div>
			</Section>

			{/* Services */}
			<Section spacing="default">
				<SectionTitle
					title="Housekeeping & culinary support"
					description="Scheduled cleaning and optional meal prep so your calendar protects creative hours first."
				/>
				<div className="grid gap-4 md:grid-cols-12 md:gap-6">
					<GridImage
						src={`${base}/creatorHouse/creator-house-9-1.png`}
						alt="Professional cleaning — placeholder"
						className="md:col-span-4 md:min-h-[420px]"
						sizes="(max-width: 768px) 100vw, 66vw"
					/>
					<GridImage
						src={`${base}/creatorHouse/creator-house-9-2.png`}
						alt="Kitchen service — placeholder"
						className="md:col-span-8 md:min-h-[420px]"
						sizes="(max-width: 768px) 100vw, 66vw"
					/>
				</div>
			</Section>

			{/* Tagline */}
			<Section tone="white" spacing="loose">
				<div className="mx-auto max-w-4xl text-center">
					<h2 className="font-display text-display-md font-semibold tracking-tight text-ink md:text-display-lg">
						Designed for productivity.
						<span className="mx-2 text-clay md:mx-3">/</span>
						Built for comfort.
					</h2>
					<p className="mx-auto mt-8 max-w-2xl text-pretty text-lede font-light text-ink-500">
						Every layer — power, furniture, food, community — is tuned so the
						only thing left is the work you actually want to be known for.
					</p>
				</div>
			</Section>

			{/* Final CTA — peach band, matching Figma energy with site buttons */}
			<section className="relative overflow-hidden bg-gradient-to-br from-[#fdeef0] via-[#f7e8e4] to-bone py-20 md:py-28">
				<Container className="text-center">
					<h2 className="font-display text-display-md font-semibold tracking-tight text-ink md:text-display-lg">
						Join CREO Creator House
					</h2>
					<p className="mx-auto mt-6 max-w-xl text-pretty text-lede font-light text-ink-600">
						Applications take about ten minutes. We respond inside five working
						days with next steps — or transparent feedback if timing isn&apos;t
						right.
					</p>
					<div className="mt-10 flex flex-wrap items-center justify-center gap-4">
						<Button
							asChild
							size="lg"
							variant="primary"
							rounded="pill"
							trailingIcon
						>
							<Link href="/contact?topic=creator-house">Apply now</Link>
						</Button>
						<Button asChild size="lg" variant="outline" rounded="pill">
							<Link href="/contact">Ask a question</Link>
						</Button>
					</div>
				</Container>
			</section>

			<section className="border-t border-line bg-bone pb-24 pt-10">
				<Container className="text-center">
					<p className="mx-auto max-w-2xl text-small font-light text-ink-500">
						<em>
							Placeholder copy blocks and photography stand in until
							client-owned assets replace them.
						</em>
					</p>
				</Container>
			</section>
		</>
	);
}

"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import { AnimatedTestimonials } from "@/components/ui/animated-testimonials";
import { Eyebrow } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Section } from "@/components/ui/section";
import { BUCKET_URL } from "@/services/utils";

export default function Spotlight() {
	const testimonials = useMemo(
		() => [
			{
				src: `${BUCKET_URL}/work/work-1.jpg`,
				name: "Operation: Studio Engine",
				quote: "Case study · Placeholder",
			},
			{
				src: `${BUCKET_URL}/work/work-2.png`,
				name: "Operation: Studio Engine",
				quote: "Case study · Placeholder",
			},
			{
				src: `${BUCKET_URL}/work/work-3.png`,
				name: "Operation: Studio Engine",
				quote: "Case study · Placeholder",
			},
		],
		[],
	);

	const [activeIndex, setActiveIndex] = useState(0);
	const active = testimonials[activeIndex] ?? testimonials[0];

	return (
		<Section tone="ink" spacing="loose">
			<div className="grid gap-16 md:grid-cols-12 md:gap-x-8">
				<div className="md:col-span-7">
					<Eyebrow className="text-bone/60">
						Featured case · Placeholder
					</Eyebrow>
					<h2 className="mt-8 max-w-md text-balance font-display text-display-md font-semibold leading-[1.02] tracking-tight text-bone">
						A creator&apos;s
						<em className="not-italic font-display text-clay">
							{" "}
							growth engine
						</em>
						, redesigned.
					</h2>
					<p className="mt-8 max-w-sm text-pretty text-lede font-light text-bone/70">
						We built an end-to-end visual system across thumbnails, shorts,
						podcasts and merch — compounding watch-time and brand recall over 12
						months.
					</p>
					<dl className="mt-12 grid grid-cols-2 gap-8">
						{[
							{ label: "Subscribers added", value: "+312k" },
							{ label: "Avg. CTR uplift", value: "+38%" },
							{ label: "Assets shipped", value: "1,200+" },
							{ label: "Cycle time", value: "24h" },
						].map((m) => (
							<div key={m.label}>
								<dd className="font-display text-h1 font-semibold text-bone">
									{m.value}
								</dd>
								<dt className="mt-2 text-eyebrow text-bone/60">{m.label}</dt>
							</div>
						))}
					</dl>
					<div className="mt-12">
						<Button asChild variant="invert" size="lg" trailingIcon>
							<Link href="/contact">Talk to the studio</Link>
						</Button>
					</div>
				</div>

				<div className="md:col-span-5">
					<div className="relative">
						<AnimatedTestimonials
							testimonials={testimonials}
							autoplay={false}
							onActiveChange={setActiveIndex}
							showContent={false}
							className="max-w-none px-0 py-0"
							imageContainerClassName="h-auto aspect-[5/6] md:aspect-[6/7]"
							imageClassName="rounded-md"
							controlsClassName="mt-4 items-center justify-end"
							// renderOverlay={() => (
							// 	<>
							// 		<div className="absolute inset-0 rounded-md bg-gradient-to-t from-ink/40 via-transparent to-transparent" />
							// 		<div className="absolute bottom-6 left-6 right-6 flex items-end justify-between text-bone">
							// 			<div>
							// 				<div className="text-eyebrow text-bone/70">
							// 					{active.quote}
							// 				</div>
							// 				<div className="mt-1 font-display text-h3 font-semibold">
							// 					{active.name}
							// 				</div>
							// 			</div>
							// 		</div>
							// 	</>
							// )}
						/>
					</div>
				</div>
			</div>
		</Section>
	);
}

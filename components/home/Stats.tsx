import { Eyebrow } from "@/components/ui/badge";
import { Reveal } from "@/components/ui/reveal";
import { Section } from "@/components/ui/section";

const STATS = [
	{ value: "25+", label: "Brands Collaborated With" },
	{ value: "50M+", label: "Audience Impacted" },
	{ value: "5+", label: "Years of Creative Excellence" },
	{ value: "4+", label: "Years of Longest Sustained Client Partnerships" },
];

export default function Stats() {
	return (
		<Section spacing="tight">
			<div className="grid gap-12 md:grid-cols-12 md:gap-x-8">
				<div className="md:col-span-4">
					<Eyebrow>Proof in numbers</Eyebrow>
					<h2 className="mt-6 max-w-md text-balance font-display text-h2 font-semibold text-ink md:text-h1">
						Building ideas that keep building.
					</h2>
				</div>
				<div className="md:col-span-8">
					<dl className="grid grid-cols-2 divide-line border-y border-line md:grid-cols-4 md:divide-x">
						{STATS.map((s, i) => (
							<Reveal
								key={s.label}
								as="div"
								delay={i * 80}
								className="border-line flex flex-col justify-between p-6 [&:nth-child(2)]:border-l md:border-0 md:p-8"
							>
								<dt className="text-eyebrow text-ink-500">{s.label}</dt>
								<dd className="mt-3 font-display text-h1 font-semibold tracking-tight text-ink md:text-display-md">
									{s.value}
								</dd>
							</Reveal>
						))}
					</dl>
				</div>
			</div>
		</Section>
	);
}

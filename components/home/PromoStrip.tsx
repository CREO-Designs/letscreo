import { Marquee } from "@/components/ui/marquee";

const ITEMS = [
	// "Exclusive · Flat 20% off for first-time clients",
	"On-demand creative · 24h turnaround on most assets",
	"From brand identity to Motion Graphics · One studio",
];

export default function PromoStrip() {
	return (
		<section
			aria-label="Studio highlights"
			className="border-y border-ink/15 bg-clay py-3 text-bone"
		>
			<Marquee speed="fast" itemClassName="text-eyebrow font-sans">
				{ITEMS.map((item) => (
					<span
						key={item}
						className="inline-flex items-center gap-12 text-eyebrow uppercase tracking-[0.18em]"
					>
						<span
							className="inline-block size-1.5 rounded-full bg-bone/70"
							aria-hidden="true"
						/>
						{item}
					</span>
				))}
			</Marquee>
		</section>
	);
}

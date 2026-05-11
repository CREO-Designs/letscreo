import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { BUCKET_URL } from "@/services/utils";

export default function Hero() {
	return (
		<section className="relative overflow-hidden bg-bone pt-32 md:pt-40">
			<Container className="relative">
				<div className="grid gap-16 md:grid-cols-12 md:gap-x-8">
					<div className="md:col-span-6">
						<h1 className="mt-8 text-balance font-display text-display-md font-semibold leading-[0.98] tracking-tight text-ink md:text-display-xl 2xl:text-display-2xl">
							Where{" "}
							<em className="not-italic font-display text-clay">Creativity</em>
							<br className="hidden md:block" /> Meets Growth.
						</h1>
						<p className="mt-10 max-w-xl text-pretty text-lede font-light text-ink-500">
							CREO is a creative studio crafting brand identity, motion, video
							and digital experiences for ambitious creators and businesses.
							Your dedicated design team — on demand.
						</p>
						<div className="mt-12 flex flex-wrap items-center gap-4">
							<Button asChild size="lg" trailingIcon>
								<Link href="/contact">Start a project</Link>
							</Button>
							<Button asChild size="lg" variant="outline" trailingIcon>
								<Link href="/services">View services</Link>
							</Button>
						</div>
					</div>

					<div className="relative md:col-span-6">
						<Image
							src={`${BUCKET_URL}/banner.png`}
							alt="A snapshot of CREO's recent design work"
							fill
							priority
							// sizes="(min-width: 768px) 40vw, 90vw"
							className="object-contain"
						/>
					</div>
				</div>

				<div className="mt-20 flex items-end justify-between border-t border-line pt-8 text-eyebrow text-ink-500 md:mt-32">
					<span>Scroll to explore</span>
					<span className="hidden md:inline">
						01 / Creative · 02 / Strategy · 03 / Production
					</span>
				</div>
			</Container>

			<div
				aria-hidden="true"
				className="pointer-events-none absolute -bottom-24 right-[-4rem] hidden select-none font-display text-[clamp(160px,22vw,360px)] font-light leading-none tracking-tighter text-ink/[0.04] md:block"
			>
				creo
			</div>
		</section>
	);
}

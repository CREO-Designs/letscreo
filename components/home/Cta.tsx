import Link from "next/link";
import { Eyebrow } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Section } from "@/components/ui/section";
import { SITE } from "@/lib/site";

export default function Cta() {
	return (
		<Section tone="bone" spacing="loose">
			<div className="grid items-end gap-12 md:grid-cols-12 md:gap-x-8">
				<div className="md:col-span-8">
					<Eyebrow>Work with us</Eyebrow>
					<h2 className="mt-8 max-w-3xl text-balance font-display text-3xl font-semibold leading-[1.02] tracking-tight text-ink md:text-display-md">
					For creators and businesses alike — we save time, money & creative energy.
						{/* Whether you&apos;re an individual creator or a category-defining
						business — we&apos;ll save you time, money and creative bandwidth. */}
					</h2>
				</div>
				<div className="flex flex-col gap-4 md:col-span-4 md:items-end md:text-right">
					<div className="flex items-center gap-1">
						<Button asChild size="lg" trailingIcon>
							<Link href="/contact">Start a project</Link>
						</Button>
					</div>
					<a
						href={`mailto:${SITE.email}`}
						className="ink-link text-body text-ink"
					>
						{SITE.email}
					</a>
					<a
						href={`tel:${SITE.phoneRaw}`}
						className="ink-link text-body text-ink"
					>
						{SITE.phone}
					</a>
				</div>
			</div>
		</Section>
	);
}

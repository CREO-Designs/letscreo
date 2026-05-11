import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { Eyebrow } from "@/components/ui/badge";
import { Container } from "@/components/ui/container";
import { NAV_ITEMS, SITE, SOCIAL_LINKS } from "@/lib/site";

const SERVICES = [
	{ name: "Brand identity", href: "/services#brand" },
	{ name: "Graphic design", href: "/services#graphic" },
	{ name: "Video Editing", href: "/services#video" },
	{ name: "Video Production", href: "/services#video" },
	{ name: "UI / UX design", href: "/services#ui-ux" },
	{ name: "Pitch decks", href: "/services#decks" },
];

export default function Footer() {
	const year = new Date().getFullYear();
	return (
		<footer className="relative overflow-hidden bg-ink text-bone">
			<Container className="grid gap-16 py-24 md:grid-cols-12 md:gap-x-8 md:py-32">
				<div className="md:col-span-5">
					<Eyebrow className="text-bone/60">Let&apos;s collaborate</Eyebrow>
					<h2 className="mt-6 font-display text-display-md font-semibold leading-[1.05] tracking-tight text-bone md:text-display-lg">
						Bring your{" "}
						<em className="not-italic font-display text-clay">next idea</em> to
						life.
					</h2>
					<Link
						href="/contact"
						className="ink-link mt-10 inline-flex items-center gap-3 font-display text-h2 font-semibold text-bone md:text-h1"
					>
						Start a project
						<ArrowUpRight className="size-7 transition-transform duration-DEFAULT ease-editorial group-hover:translate-x-1 group-hover:-translate-y-1" />
					</Link>
				</div>

				<div className="md:col-span-7 md:grid md:grid-cols-3 md:gap-8">
					<div>
						<Eyebrow className="text-bone/60">Sitemap</Eyebrow>
						<ul className="mt-6 space-y-3 text-body text-bone/85">
							{NAV_ITEMS.map((item) => (
								<li key={item.href}>
									<Link href={item.href} className="ink-link">
										{item.name}
									</Link>
								</li>
							))}
						</ul>
					</div>
					<div className="mt-12 md:mt-0">
						<Eyebrow className="text-bone/60">Services</Eyebrow>
						<ul className="mt-6 space-y-3 text-body text-bone/85">
							{SERVICES.map((s) => (
								<li key={s.name}>
									<Link href={s.href} className="ink-link">
										{s.name}
									</Link>
								</li>
							))}
						</ul>
					</div>
					<div className="mt-12 md:mt-0">
						<Eyebrow className="text-bone/60">Connect</Eyebrow>
						<ul className="mt-6 space-y-3 text-body text-bone/85">
							<li>
								<a href={`mailto:${SITE.email}`} className="ink-link">
									{SITE.email}
								</a>
							</li>
							<li>
								<a href={`tel:${SITE.phoneRaw}`} className="ink-link">
									{SITE.phone}
								</a>
							</li>
							<li className="text-bone/60">{SITE.city}</li>
						</ul>
						{/* <ul className="mt-8 flex flex-wrap gap-2">
              {SOCIAL_LINKS.map((s) => (
                <li key={s.name}>
                  <a
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={s.name}
                    className="inline-flex size-10 items-center justify-center rounded-full border border-bone/15 text-eyebrow text-bone/70 transition-colors duration-DEFAULT ease-editorial hover:border-clay hover:bg-clay hover:text-bone"
                  >
                    {s.short}
                  </a>
                </li>
              ))}
            </ul> */}
					</div>
				</div>
			</Container>

			<div className="border-t border-bone/10">
				<Container className="flex flex-col items-start justify-between gap-3 py-8 text-eyebrow text-bone/60 md:flex-row md:items-center">
					<span>© {year} CREO Designs. All rights reserved.</span>
					<span>
						Crafted in {SITE.city.split(",")[0]} · {SITE.tagline}
					</span>
				</Container>
			</div>

			<div
				aria-hidden="true"
				className="pointer-events-none absolute -bottom-32 left-1/2 hidden -translate-x-1/2 select-none font-display text-[clamp(180px,28vw,420px)] font-light leading-none tracking-tighter text-bone/[0.03] md:block"
			>
				CREO
			</div>
		</footer>
	);
}

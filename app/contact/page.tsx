import type { Metadata } from "next";
import Link from "next/link";
import { Eyebrow } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { FieldShell, Input, Textarea } from "@/components/ui/input";
import { Section } from "@/components/ui/section";
import { SITE, SOCIAL_LINKS } from "@/lib/site";

export const metadata: Metadata = {
	title: "Contact",
	description:
		"Tell us about your project. Brand, video, UI/UX, decks or a custom engagement — we respond within one working day.",
	alternates: { canonical: "/contact" },
};

const SUBJECTS = [
	"New project",
	"Subscription enquiry",
	"Creator House application",
	"Press / media",
	"Careers",
	"Something else",
];

export default function ContactPage() {
	return (
		<>
			{/* Hero */}
			<section className="relative overflow-hidden bg-bone pb-12 pt-32 md:pb-20 md:pt-40">
				<Container>
					<Eyebrow>Contact</Eyebrow>
					<h1 className="mt-8 max-w-4xl text-balance font-display text-display-md font-semibold leading-[1.0] tracking-tight text-ink md:text-display-lg 2xl:text-display-xl">
						Tell us what you&apos;re
						<em className="not-italic font-display text-clay">
							{" "}
							dreaming of building
						</em>
						.
					</h1>
					<p className="mt-10 max-w-2xl text-pretty text-lede font-light text-ink-500">
						We respond to every project enquiry within one working day.
						Sketches, scope-less ideas and half-formed thoughts are all welcome.
					</p>
				</Container>
			</section>

			{/* Form + details */}
			<Section spacing="default" tone="bone">
				<div className="grid gap-16 md:grid-cols-12 md:gap-x-16">
					{/* Form */}
					<form
						action="https://formsubmit.co/info@letscreo.in"
						method="POST"
						className="md:col-span-7"
					>
						<input
							type="hidden"
							name="_subject"
							value="New enquiry from letscreo.in"
						/>
						<input type="hidden" name="_captcha" value="false" />
						<input type="hidden" name="_template" value="table" />
						<input
							type="hidden"
							name="_next"
							value={`${SITE.url}/contact?status=sent`}
						/>

						<div className="grid gap-x-8 gap-y-10 md:grid-cols-2">
							<FieldShell label="Your name" htmlFor="name" required>
								<Input id="name" name="name" required autoComplete="name" />
							</FieldShell>
							<FieldShell label="Company / brand" htmlFor="company">
								<Input
									id="company"
									name="company"
									autoComplete="organization"
								/>
							</FieldShell>
							<FieldShell label="Email" htmlFor="email" required>
								<Input
									id="email"
									name="email"
									type="email"
									required
									autoComplete="email"
								/>
							</FieldShell>
							<FieldShell label="Phone (optional)" htmlFor="phone">
								<Input id="phone" name="phone" type="tel" autoComplete="tel" />
							</FieldShell>
							<FieldShell
								label="What's this about?"
								htmlFor="subject"
								className="md:col-span-2"
								required
							>
								<select
									id="subject"
									name="subject"
									required
									defaultValue=""
									className="w-full appearance-none border-0 border-b border-ink/30 bg-transparent px-0 py-3 font-sans text-base text-ink focus:border-ink focus-visible:outline-none focus-visible:ring-0"
								>
									<option value="" disabled>
										Select a topic
									</option>
									{SUBJECTS.map((s) => (
										<option key={s} value={s}>
											{s}
										</option>
									))}
								</select>
							</FieldShell>
							<FieldShell
								label="Tell us about it"
								htmlFor="message"
								className="md:col-span-2"
								hint="A few sentences is plenty"
								required
							>
								<Textarea
									id="message"
									name="message"
									rows={6}
									required
									placeholder="What are you trying to build, by when, and what does success look like?"
								/>
							</FieldShell>
							<FieldShell
								label="Estimated budget (optional)"
								htmlFor="budget"
								className="md:col-span-2"
							>
								<select
									id="budget"
									name="budget"
									defaultValue=""
									className="w-full appearance-none border-0 border-b border-ink/30 bg-transparent px-0 py-3 font-sans text-base text-ink focus:border-ink focus-visible:outline-none focus-visible:ring-0"
								>
									<option value="">Prefer not to say</option>
									<option>Under ₹50k</option>
									<option>₹50k – ₹2L</option>
									<option>₹2L – ₹10L</option>
									<option>₹10L+</option>
								</select>
							</FieldShell>
						</div>

						<div className="mt-12 flex flex-wrap items-center justify-between gap-4">
							<p className="max-w-md text-small font-light text-ink-500">
								By submitting, you agree to receive a reply from our studio.
								We&apos;ll never share your details.
							</p>
							<Button type="submit" size="lg" trailingIcon>
								Send enquiry
							</Button>
						</div>
					</form>

					{/* Details */}
					<aside className="flex flex-col gap-12 md:col-span-5 md:border-l md:border-line md:pl-16">
						<div>
							<Eyebrow>Direct lines</Eyebrow>
							<ul className="mt-6 space-y-5">
								<li>
									<div className="text-eyebrow text-ink-500">Email</div>
									<a
										href={`mailto:${SITE.email}`}
										className="ink-link mt-2 inline-block font-display text-h3 font-semibold text-ink"
									>
										{SITE.email}
									</a>
								</li>
								<li>
									<div className="text-eyebrow text-ink-500">
										Phone & WhatsApp
									</div>
									<a
										href={`tel:${SITE.phoneRaw}`}
										className="ink-link mt-2 inline-block font-display text-h3 font-semibold text-ink"
									>
										{SITE.phone}
									</a>
								</li>
								<li>
									<div className="text-eyebrow text-ink-500">Studio</div>
									<p className="mt-2 font-display text-h3 font-semibold text-ink">
										{SITE.city}
									</p>
								</li>
							</ul>
						</div>

						{/* <div>
              <Eyebrow>Social</Eyebrow>
              <ul className="mt-6 flex flex-wrap gap-2">
                {SOCIAL_LINKS.map((s) => (
                  <li key={s.name}>
                    <a
                      href={s.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 rounded-full border border-ink/15 px-4 py-2 text-eyebrow text-ink transition-colors duration-DEFAULT ease-editorial hover:border-clay hover:text-clay"
                    >
                      <span className="text-clay">{s.short}</span>
                      {s.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div> */}

						<div className="rounded-md border border-line bg-white p-8">
							<Eyebrow>Hours</Eyebrow>
							<p className="mt-4 text-body font-light text-ink-500">
								Mon — Sat · 10:00 — 19:00 IST
							</p>
							<Link
								href="/services"
								className="ink-link mt-6 inline-block text-eyebrow text-clay"
							>
								See what we do →
							</Link>
						</div>
					</aside>
				</div>
			</Section>

			{/* Reassurance strip */}
			<Section spacing="tight" tone="ink">
				<div className="grid gap-12 text-bone md:grid-cols-3">
					<div>
						<span className="font-display text-h1 font-semibold text-clay">
							24h
						</span>
						<p className="mt-3 text-body font-light text-bone/70">
							Average reply time on weekdays.
						</p>
					</div>
					<div>
						<span className="font-display text-h1 font-semibold text-clay">
							50+
						</span>
						<p className="mt-3 text-body font-light text-bone/70">
							Brands & creators trusted CREO with their work.
						</p>
					</div>
					<div>
						<span className="font-display text-h1 font-semibold text-clay">
							98%
						</span>
						<p className="mt-3 text-body font-light text-bone/70">
							Of clients renew or extend after their first engagement.
						</p>
					</div>
				</div>
			</Section>
		</>
	);
}

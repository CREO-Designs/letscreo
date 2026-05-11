import { Section } from "@/components/ui/section";
import { SectionHeader } from "@/components/ui/section-header";
import { Reveal } from "@/components/ui/reveal";

const BENEFITS = [
  {
    no: "01",
    title: "Customised by default",
    description:
      "Every asset is curated by senior designers — no templates, no shortcuts.",
  },
  {
    no: "02",
    title: "Honest, transparent pricing",
    description:
      "Industry-fair rates, simple subscriptions and zero surprises in the invoice.",
  },
  {
    no: "03",
    title: "Top-tier designers",
    description:
      "A boutique team of premium designers obsessed with craft and consistency.",
  },
  {
    no: "04",
    title: "Elite video editors",
    description:
      "Editors and cinematographers who treat your edit like their portfolio.",
  },
  {
    no: "05",
    title: "Express delivery",
    description:
      "Express options to convert last-minute creative ideas into shipped output.",
  },
  {
    no: "06",
    title: "Unlimited requests",
    description:
      "Queue what you need. We prioritise relentlessly and ship in order.",
  },
  {
    no: "07",
    title: "Pre & post production",
    description:
      "Cinematography experts who plan shoots end-to-end, on your behalf.",
  },
  {
    no: "08",
    title: "Industry-grade output",
    description:
      "Designs that meet the standards your category leaders quietly use.",
  },
  {
    no: "09",
    title: "Always-on support",
    description:
      "Slack, WhatsApp, email, calls — pick a channel, we&apos;ll be there.",
  },
];

export default function BenefitsGrid() {
  return (
    <Section spacing="default" tone="sand">
      <SectionHeader
        eyebrow="Why teams choose CREO"
        title={
          <>
            Studio-grade craft,
            <br /> at the speed of a startup.
          </>
        }
        lede="The unfair advantages of working with CREO — built into every engagement, from day one."
      />
      <div className="mt-16 grid grid-cols-1 divide-y divide-line border-y border-line md:grid-cols-3 md:divide-x md:divide-y-0">
        {BENEFITS.map((b, i) => (
          <Reveal
            key={b.no}
            delay={(i % 3) * 80}
            className="group/benefit relative p-8 transition-colors duration-DEFAULT ease-editorial hover:bg-bone md:p-10"
          >
            <div className="flex items-start justify-between gap-4">
              <span className="font-display text-h3 font-semibold text-ink-300 transition-colors duration-DEFAULT ease-editorial group-hover/benefit:text-clay">
                {b.no}
              </span>
              <span className="text-eyebrow text-ink-300">/</span>
            </div>
            <h3 className="mt-6 font-display text-h3 font-semibold text-ink">
              {b.title}
            </h3>
            <p
              className="mt-3 max-w-sm text-body font-light text-ink-500"
              dangerouslySetInnerHTML={{ __html: b.description }}
            />
          </Reveal>
        ))}
      </div>
    </Section>
  );
}

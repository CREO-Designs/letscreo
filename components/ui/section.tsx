import { cn } from "@/lib/utils";
import { Container } from "./container";

type Tone = "bone" | "ink" | "sand" | "white";

type SectionProps = React.HTMLAttributes<HTMLElement> & {
	tone?: Tone;
	bleed?: boolean;
	containerSize?: "default" | "narrow" | "wide" | "full";
	spacing?: "default" | "tight" | "loose" | "none";
};

const toneClass: Record<Tone, string> = {
	bone: "bg-bone text-ink",
	ink: "bg-ink text-bone",
	sand: "bg-sand text-ink",
	white: "bg-white text-ink",
};

const spacingClass: Record<NonNullable<SectionProps["spacing"]>, string> = {
	default: "py-section",
	tight: "py-16 md:py-20",
	loose: "py-24 md:py-40",
	none: "",
};

export function Section({
	tone = "bone",
	bleed = false,
	containerSize = "default",
	spacing = "default",
	className,
	children,
	...props
}: SectionProps) {
	return (
		<section
			className={cn(
				"relative",
				toneClass[tone],
				spacingClass[spacing],
				className,
			)}
			{...props}
		>
			{bleed ? (
				children
			) : (
				<Container size={containerSize}>{children}</Container>
			)}
		</section>
	);
}

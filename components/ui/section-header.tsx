import { cn } from "@/lib/utils";
import { Eyebrow } from "./badge";

type Align = "start" | "center" | "between";

type SectionHeaderProps = {
	eyebrow?: string;
	title: React.ReactNode;
	lede?: React.ReactNode;
	align?: Align;
	className?: string;
	action?: React.ReactNode;
	size?: "default" | "lg";
};

const alignWrapper: Record<Align, string> = {
	start: "items-start text-left",
	center: "items-center text-center",
	between: "items-end justify-between md:flex-row",
};

const titleSize: Record<NonNullable<SectionHeaderProps["size"]>, string> = {
	default: "text-h2 md:text-h1",
	lg: "text-h1 md:text-display-md",
};

export function SectionHeader({
	eyebrow,
	title,
	lede,
	align = "start",
	className,
	action,
	size = "default",
}: SectionHeaderProps) {
	return (
		<div
			className={cn(
				"flex w-full flex-col gap-6",
				alignWrapper[align],
				className,
			)}
		>
			<div
				className={cn(
					"flex flex-col gap-5",
					align === "center" && "items-center",
				)}
			>
				{eyebrow && <Eyebrow>{eyebrow}</Eyebrow>}
				<h2
					className={cn(
						"max-w-3xl text-balance font-display font-semibold text-ink",
						titleSize[size],
						align === "center" && "mx-auto",
					)}
				>
					{title}
				</h2>
				{lede && (
					<p
						className={cn(
							"max-w-2xl text-pretty text-lede font-light text-ink-500",
							align === "center" && "mx-auto",
						)}
					>
						{lede}
					</p>
				)}
			</div>
			{action && <div className="shrink-0">{action}</div>}
		</div>
	);
}

import { cn } from "@/lib/utils";

type DividerProps = {
	orientation?: "horizontal" | "vertical";
	tone?: "default" | "ink";
	className?: string;
};

export function Divider({
	orientation = "horizontal",
	tone = "default",
	className,
}: DividerProps) {
	const color = tone === "ink" ? "bg-ink/15" : "bg-line";
	return (
		<div
			role="separator"
			aria-orientation={orientation}
			className={cn(
				orientation === "horizontal" ? "h-px w-full" : "h-full w-px",
				color,
				className,
			)}
		/>
	);
}

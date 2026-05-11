import { cn } from "@/lib/utils";

type Gap = "0" | "1" | "2" | "3" | "4" | "6" | "8" | "10" | "12" | "16" | "20";

const gapClass: Record<Gap, string> = {
	"0": "gap-0",
	"1": "gap-1",
	"2": "gap-2",
	"3": "gap-3",
	"4": "gap-4",
	"6": "gap-6",
	"8": "gap-8",
	"10": "gap-10",
	"12": "gap-12",
	"16": "gap-16",
	"20": "gap-20",
};

type StackProps = React.HTMLAttributes<HTMLDivElement> & {
	direction?: "row" | "column";
	gap?: Gap;
	align?: "start" | "center" | "end" | "stretch" | "baseline";
	justify?: "start" | "center" | "end" | "between" | "around";
	wrap?: boolean;
};

const alignClass = {
	start: "items-start",
	center: "items-center",
	end: "items-end",
	stretch: "items-stretch",
	baseline: "items-baseline",
} as const;

const justifyClass = {
	start: "justify-start",
	center: "justify-center",
	end: "justify-end",
	between: "justify-between",
	around: "justify-around",
} as const;

export function Stack({
	direction = "column",
	gap = "4",
	align,
	justify,
	wrap,
	className,
	...props
}: StackProps) {
	return (
		<div
			className={cn(
				"flex",
				direction === "row" ? "flex-row" : "flex-col",
				gapClass[gap],
				align ? alignClass[align] : "",
				justify ? justifyClass[justify] : "",
				wrap ? "flex-wrap" : "",
				className,
			)}
			{...props}
		/>
	);
}

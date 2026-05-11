import { cn } from "@/lib/utils";

type GridProps = React.HTMLAttributes<HTMLDivElement> & {
	cols?: 1 | 2 | 3 | 4 | 6 | 12;
	smCols?: 1 | 2 | 3 | 4 | 6 | 12;
	mdCols?: 1 | 2 | 3 | 4 | 6 | 12;
	lgCols?: 1 | 2 | 3 | 4 | 6 | 12;
	gapX?: "4" | "6" | "8" | "10" | "12";
	gapY?: "4" | "6" | "8" | "10" | "12" | "16" | "20";
};

const colMap = {
	1: "grid-cols-1",
	2: "grid-cols-2",
	3: "grid-cols-3",
	4: "grid-cols-4",
	6: "grid-cols-6",
	12: "grid-cols-12",
} as const;
const smColMap = {
	1: "sm:grid-cols-1",
	2: "sm:grid-cols-2",
	3: "sm:grid-cols-3",
	4: "sm:grid-cols-4",
	6: "sm:grid-cols-6",
	12: "sm:grid-cols-12",
} as const;
const mdColMap = {
	1: "md:grid-cols-1",
	2: "md:grid-cols-2",
	3: "md:grid-cols-3",
	4: "md:grid-cols-4",
	6: "md:grid-cols-6",
	12: "md:grid-cols-12",
} as const;
const lgColMap = {
	1: "lg:grid-cols-1",
	2: "lg:grid-cols-2",
	3: "lg:grid-cols-3",
	4: "lg:grid-cols-4",
	6: "lg:grid-cols-6",
	12: "lg:grid-cols-12",
} as const;

const gapXMap = {
	"4": "gap-x-4",
	"6": "gap-x-6",
	"8": "gap-x-8",
	"10": "gap-x-10",
	"12": "gap-x-12",
} as const;
const gapYMap = {
	"4": "gap-y-4",
	"6": "gap-y-6",
	"8": "gap-y-8",
	"10": "gap-y-10",
	"12": "gap-y-12",
	"16": "gap-y-16",
	"20": "gap-y-20",
} as const;

export function Grid({
	cols = 1,
	smCols,
	mdCols,
	lgCols,
	gapX = "8",
	gapY = "8",
	className,
	...props
}: GridProps) {
	return (
		<div
			className={cn(
				"grid",
				colMap[cols],
				smCols && smColMap[smCols],
				mdCols && mdColMap[mdCols],
				lgCols && lgColMap[lgCols],
				gapXMap[gapX],
				gapYMap[gapY],
				className,
			)}
			{...props}
		/>
	);
}

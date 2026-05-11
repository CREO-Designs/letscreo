import { cn } from "@/lib/utils";

type ContainerProps = React.HTMLAttributes<HTMLDivElement> & {
	as?: "div" | "section" | "header" | "footer" | "article" | "main";
	size?: "default" | "narrow" | "wide" | "full";
};

const sizeClass: Record<NonNullable<ContainerProps["size"]>, string> = {
	default: "max-w-[1480px]",
	narrow: "max-w-[960px]",
	wide: "max-w-[1640px]",
	full: "max-w-none",
};

export function Container({
	className,
	as: Tag = "div",
	size = "default",
	...props
}: ContainerProps) {
	return (
		<Tag
			className={cn(
				"mx-auto w-full px-6 sm:px-8 md:px-10 lg:px-14 xl:px-20",
				sizeClass[size],
				className,
			)}
			{...props}
		/>
	);
}

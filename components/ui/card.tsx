import { cn } from "@/lib/utils";

type CardProps = React.HTMLAttributes<HTMLElement> & {
	as?: "article" | "div" | "section";
	variant?: "default" | "outline" | "ink" | "ghost";
	interactive?: boolean;
};

const variantClass: Record<NonNullable<CardProps["variant"]>, string> = {
	default: "bg-white border border-line shadow-hairline",
	outline: "bg-transparent border border-ink/15",
	ink: "bg-ink text-bone border border-ink",
	ghost: "bg-bone-100",
};

export function Card({
	as: Tag = "article",
	variant = "default",
	interactive = false,
	className,
	...props
}: CardProps) {
	return (
		<Tag
			className={cn(
				"relative overflow-hidden rounded-md transition-[transform,box-shadow,border-color] duration-DEFAULT ease-editorial",
				variantClass[variant],
				interactive && "hover:-translate-y-0.5 hover:shadow-lift",
				className,
			)}
			{...props}
		/>
	);
}

export function CardBody({
	className,
	...props
}: React.HTMLAttributes<HTMLDivElement>) {
	return <div className={cn("p-6 md:p-8", className)} {...props} />;
}

export function CardMeta({
	className,
	children,
}: React.HTMLAttributes<HTMLDivElement>) {
	return (
		<div
			className={cn(
				"flex items-center gap-3 text-eyebrow text-ink-500",
				className,
			)}
		>
			{children}
		</div>
	);
}

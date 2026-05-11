import { cn } from "@/lib/utils";

type MarqueeProps = {
	children: React.ReactNode;
	className?: string;
	itemClassName?: string;
	pauseOnHover?: boolean;
	reverse?: boolean;
	speed?: "slow" | "default" | "fast";
};

const speedClass = {
	slow: "[animation-duration:60s]",
	default: "[animation-duration:40s]",
	fast: "[animation-duration:24s]",
} as const;

export function Marquee({
	children,
	className,
	itemClassName,
	pauseOnHover = true,
	reverse = false,
	speed = "default",
}: MarqueeProps) {
	return (
		<div
			className={cn(
				"marquee-mask group flex w-full overflow-hidden",
				className,
			)}
		>
			<div
				className={cn(
					"flex shrink-0 animate-marquee items-center gap-12 pr-12",
					pauseOnHover && "group-hover:[animation-play-state:paused]",
					reverse && "[animation-direction:reverse]",
					speedClass[speed],
					itemClassName,
				)}
			>
				{children}
			</div>
			<div
				aria-hidden="true"
				className={cn(
					"flex shrink-0 animate-marquee items-center gap-12 pr-12",
					pauseOnHover && "group-hover:[animation-play-state:paused]",
					reverse && "[animation-direction:reverse]",
					speedClass[speed],
					itemClassName,
				)}
			>
				{children}
			</div>
		</div>
	);
}

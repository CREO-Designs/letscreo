import { Plus } from "lucide-react";
import { cn } from "@/lib/utils";

type FaqItem = {
	q: string;
	a: React.ReactNode;
};

type FaqProps = {
	items: FaqItem[];
	className?: string;
};

export function Faq({ items, className }: FaqProps) {
	return (
		<ul className={cn("divide-y divide-line border-y border-line", className)}>
			{items.map((item) => (
				<li key={item.q}>
					<details className="group/faq py-6 [&_summary::-webkit-details-marker]:hidden">
						<summary className="flex cursor-pointer items-start justify-between gap-8 text-left">
							<span className="font-display text-h3 font-semibold text-ink">
								{item.q}
							</span>
							<span className="mt-2 inline-flex size-8 shrink-0 items-center justify-center rounded-full border border-ink/30 text-ink transition-transform duration-DEFAULT ease-editorial group-open/faq:rotate-45 group-open/faq:border-clay group-open/faq:bg-clay group-open/faq:text-bone">
								<Plus className="size-4" />
							</span>
						</summary>
						<div className="max-w-prose pr-12 pt-4 text-body font-light text-ink-500">
							{item.a}
						</div>
					</details>
				</li>
			))}
		</ul>
	);
}

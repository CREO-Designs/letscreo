"use client";

import { Menu, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { ASSETS, NAV_ITEMS, SITE } from "@/lib/site";
import { cn } from "@/lib/utils";
import { BUCKET_URL } from "@/services/utils";

export default function Navbar() {
	const [scrolled, setScrolled] = useState(false);
	const [open, setOpen] = useState(false);
	const pathname = usePathname();

	useEffect(() => {
		const onScroll = () => setScrolled(window.scrollY > 8);
		onScroll();
		window.addEventListener("scroll", onScroll, { passive: true });
		return () => window.removeEventListener("scroll", onScroll);
	}, []);

	// biome-ignore lint/correctness/useExhaustiveDependencies: <This is required to close the dropdown menu when the pathname changes>
	useEffect(() => {
		setOpen(false);
	}, [pathname]);

	return (
		<header
			className={cn(
				"fixed inset-x-0 top-0 z-nav transition-[background,backdrop-filter,border-color,padding] duration-DEFAULT ease-editorial",
				scrolled
					? "border-b border-line/80 bg-bone/80 backdrop-blur-xl"
					: "border-b border-transparent bg-transparent",
			)}
		>
			<Container className="flex items-center justify-between py-4 md:py-5">
				<Link
					href="/"
					aria-label={`${SITE.name} home`}
					className="group/logo flex items-center gap-2 text-ink"
				>
					<Image
						src={`${BUCKET_URL}/logo-with-tagline.png`}
						alt={`${SITE.name} logo`}
						width={132}
						height={50}
					/>
				</Link>

				<nav aria-label="Primary" className="hidden md:block">
					<ul className="flex items-center gap-10 text-sm">
						{NAV_ITEMS.map((item) => {
							const active =
								item.href === "/"
									? pathname === "/"
									: pathname?.startsWith(item.href);
							return (
								<li key={item.href}>
									<Link
										href={item.href}
										className={cn(
											"ink-link inline-flex items-center gap-2 font-sans text-[13px] tracking-wide text-ink",
											active && "text-clay",
										)}
									>
										{active && (
											<span
												className="inline-block h-1 w-1 rounded-full bg-clay"
												aria-hidden="true"
											/>
										)}
										{item.name}
									</Link>
								</li>
							);
						})}
					</ul>
				</nav>

				<div className="hidden lg:flex items-center gap-1 flex-nowrap whitespace-nowrap">
					<Button asChild size="sm" variant="primary" trailingIcon>
						<Link href="/contact">Start a project</Link>
					</Button>
				</div>

				<div className="lg:hidden">
					<DropdownMenu open={open} onOpenChange={setOpen}>
						<DropdownMenuTrigger asChild>
							<button
								type="button"
								aria-label="Toggle menu"
								aria-expanded={open}
								className="inline-flex size-10 items-center justify-center rounded border border-line bg-bone/80 text-ink backdrop-blur-md transition-colors duration-DEFAULT ease-editorial hover:bg-ink hover:text-bone"
							>
								{open ? <X className="size-4" /> : <Menu className="size-4" />}
							</button>
						</DropdownMenuTrigger>
						<DropdownMenuContent
							align="end"
							sideOffset={12}
							className="z-modal w-[calc(100vw-2rem)] max-w-sm rounded-md border border-line bg-bone p-2 text-ink shadow-lift"
						>
							<ul className="flex flex-col">
								{NAV_ITEMS.map((item) => {
									const active =
										item.href === "/"
											? pathname === "/"
											: pathname?.startsWith(item.href);
									return (
										<li key={item.href}>
											<Link
												href={item.href}
												className={cn(
													"flex items-center justify-between rounded px-4 py-3 font-display text-h3 font-semibold text-ink transition-colors duration-fast ease-editorial hover:bg-ink hover:text-bone",
													active && "text-clay",
												)}
											>
												<span>{item.name}</span>
												<span className="text-eyebrow text-ink-300">
													{String(NAV_ITEMS.indexOf(item) + 1).padStart(2, "0")}
												</span>
											</Link>
										</li>
									);
								})}
							</ul>
							<div className="mt-2 border-t border-line p-4 flex items-center gap-1 flex-nowrap whitespace-nowrap">
								<Button asChild size="md" className="w-full" trailingIcon>
									<Link href="/contact">Start a project</Link>
								</Button>
							</div>
						</DropdownMenuContent>
					</DropdownMenu>
				</div>
			</Container>
		</header>
	);
}

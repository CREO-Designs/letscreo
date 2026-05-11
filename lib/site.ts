import { FRONTEND_URL } from "@/services/utils";

export const SITE = {
	name: "CREO Designs",
	shortName: "CREO",
	url: "https://www.letscreo.in",
	email: "info@letscreo.in",
	phone: "+91 78998 61176",
	phoneRaw: "+917899861176",
	tagline: "A creative studio for ambitious brands.",
	city: "Bengaluru, India",
	established: "2020",
} as const;

export const NAV_ITEMS = [
	{ name: "Home", href: "/" },
	{ name: "Services", href: "/services" },
	{ name: "Pricing", href: "/pricing" },
	{ name: "CREO Creator House", href: "/creator-house" },
	{ name: "Contact Us", href: "/contact" },
] as const;

export const SOCIAL_LINKS = [
	{ name: "Instagram", href: "https://instagram.com/letscreo", short: "IG" },
	{
		name: "LinkedIn",
		href: "https://linkedin.com/company/letscreo",
		short: "LI",
	},
	{ name: "Behance", href: "https://behance.net/letscreo", short: "BE" },
	{ name: "YouTube", href: "https://youtube.com/@letscreo", short: "YT" },
] as const;

export const ASSETS = {
	logos: {
		logoWithTaglineVertical: `${FRONTEND_URL}/logo-with-tagline.png`,
		logoWithTaglineHorizontal: `${FRONTEND_URL}/main-logo.png`,
	},
};

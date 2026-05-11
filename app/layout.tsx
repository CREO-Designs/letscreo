import type { Metadata, Viewport } from "next";
import "./globals.css";
import { Analytics } from "@vercel/analytics/next";
import { Montserrat } from "next/font/google";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

const montserrat = Montserrat({
	subsets: ["latin"],
	weight: ["300", "400", "500", "600", "700", "800", "900"],
	variable: "--font-montserrat",
	display: "swap",
});

const SITE_URL = "https://www.letscreo.in";

export const viewport: Viewport = {
	themeColor: "#F5F2EC",
	width: "device-width",
	initialScale: 1,
};

export const metadata: Metadata = {
	metadataBase: new URL(SITE_URL),
	title: {
		default: "CREO Designs — A creative studio for ambitious brands",
		template: "%s · CREO Designs",
	},
	description:
		"CREO Designs is a creative studio crafting brand identity, motion, video and digital experiences for ambitious creators and businesses.",
	keywords: [
		"CREO Designs",
		"design studio India",
		"graphic design",
		"video editing",
		"UI UX design",
		"brand identity",
		"creator agency",
	],
	alternates: {
		canonical: SITE_URL,
	},
	openGraph: {
		type: "website",
		siteName: "CREO Designs",
		title: "CREO Designs — A creative studio for ambitious brands",
		description:
			"Brand identity, motion, video and digital experiences for ambitious creators and businesses.",
		url: SITE_URL,
		locale: "en_IN",
	},
	twitter: {
		card: "summary_large_image",
		title: "CREO Designs",
		description:
			"Brand identity, motion, video and digital experiences for ambitious creators and businesses.",
	},
	icons: {
		icon: [
			{
				media: "(prefers-color-scheme: dark)",
				url: "/favicon-dark-theme.png",
			},
			{
				media: "(prefers-color-scheme: light)",
				url: "/favicon-light-theme.png",
			},
		],
	},
};

const organizationJsonLD = {
	"@context": "https://schema.org",
	"@type": "Organization",
	name: "CREO Designs",
	alternateName: "CREO",
	url: SITE_URL,
	logo: "https://letscreotest.s3.ap-south-1.amazonaws.com/frontend/main-logo.png",
	sameAs: [],
	contactPoint: {
		"@type": "ContactPoint",
		telephone: "+917899861176",
		contactType: "customer service",
		areaServed: "IN",
		availableLanguage: ["en", "Hindi"],
	},
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en" className={montserrat.variable}>
			<body className="min-h-screen bg-bone font-sans text-ink antialiased">
				<script
					type="application/ld+json"
					// biome-ignore lint/security/noDangerouslySetInnerHtml: <This is required for the organizationJsonLD object>
					dangerouslySetInnerHTML={{
						__html: JSON.stringify(organizationJsonLD),
					}}
				/>
				<a
					href="#main"
					className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[200] focus:rounded focus:bg-ink focus:px-4 focus:py-2 focus:text-bone"
				>
					Skip to content
				</a>
				<Navbar />
				<main id="main">{children}</main>
				<Footer />
				<Analytics />
			</body>
		</html>
	);
}

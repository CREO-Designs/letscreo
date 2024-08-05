import type { Metadata } from "next";
import "./globals.css";
import localFont from "next/font/local";
import Navbar from "@/components/Navbar";
import { cn } from "@/lib/utils";
import Footer from "@/components/Footer";
import { Analytics } from "@vercel/analytics/next";

const gilroy = localFont({
  src: [
    {
      path: "../fonts/Gilroy-Light.otf",
      weight: "300",
      style: "normal",
    },
    {
      path: "../fonts/Gilroy-ExtraBold.otf",
      weight: "800",
      style: "normal",
    },
  ],
  variable: "--font-gilroy",
});

export const metadata: Metadata = {
  title: "CREO Designs",
  description:
    "Your one-stop destination for cutting-edge design solutions that seamlessly blend creativity and efficiency.",
  icons: {
    icon: [
      {
        media: "(prefers-color-scheme: dark)",
        url: "/images/favicon-dark-theme.png",
        href: "/images/favicon-dark-theme.png",
      },
      {
        media: "(prefers-color-scheme: light)",
        url: "/images/favicon-light-theme.png",
        href: "/images/favicon-light-theme.png",
      },
    ],
  },
};

const organizationJsonLD = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "CREO Designs",
  alternateName: "CREO",
  url: "https://letscreo.in",
  logo: "https://letscreotest.s3.ap-south-1.amazonaws.com/frontend/main-logo.png",
  contactPoint: {
    "@type": "ContactPoint",
    telephone: "7899861176",
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
    <html lang="en">
      <body
        className={cn(
          "min-h-screen bg-background font-gilroy antialiased",
          gilroy.variable,
        )}
      >
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationJsonLD),
          }}
        />
        <Analytics />
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}

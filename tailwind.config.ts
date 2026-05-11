import type { Config } from "tailwindcss";

const config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: "1.5rem",
        sm: "2rem",
        md: "2.5rem",
        lg: "3.5rem",
        xl: "5rem",
      },
      screens: {
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1280px",
        "2xl": "1480px",
      },
    },
    screens: {
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1480px",
    },
    extend: {
      fontFamily: {
        sans: ["var(--font-montserrat)", "ui-sans-serif", "system-ui"],
        display: ["var(--font-montserrat)", "ui-sans-serif", "system-ui"],
        serif: ["var(--font-montserrat)", "ui-sans-serif", "system-ui"],
        mono: ["ui-monospace", "SFMono-Regular", "monospace"],
      },
      fontSize: {
        eyebrow: ["0.75rem", { lineHeight: "1rem", letterSpacing: "0.14em" }],
        small: ["0.875rem", { lineHeight: "1.4rem" }],
        body: ["1rem", { lineHeight: "1.75rem" }],
        lede: ["1.25rem", { lineHeight: "2rem", letterSpacing: "-0.005em" }],
        h3: ["1.5rem", { lineHeight: "1.9rem", letterSpacing: "-0.015em" }],
        h2: ["2rem", { lineHeight: "2.4rem", letterSpacing: "-0.02em" }],
        h1: ["2.75rem", { lineHeight: "3rem", letterSpacing: "-0.025em" }],
        "display-md": ["3.5rem", { lineHeight: "3.7rem", letterSpacing: "-0.03em" }],
        "display-lg": ["4.5rem", { lineHeight: "4.6rem", letterSpacing: "-0.035em" }],
        "display-xl": ["5.5rem", { lineHeight: "5.55rem", letterSpacing: "-0.04em" }],
        "display-2xl": ["7rem", { lineHeight: "6.85rem", letterSpacing: "-0.045em" }],
      },
      spacing: {
        section: "clamp(4rem, 8vw, 8rem)",
        gutter: "clamp(1.5rem, 4vw, 5rem)",
      },
      colors: {
        // Editorial palette — bone, ink, stone, clay
        bone: {
          DEFAULT: "#F5F2EC",
          50: "#FBFAF6",
          100: "#F5F2EC",
          200: "#EFE7D7",
          300: "#E5DED1",
        },
        ink: {
          DEFAULT: "#0E0E0E",
          50: "#F6F6F6",
          100: "#ECECEC",
          200: "#D7D7D7",
          300: "#A3A3A3",
          400: "#737373",
          500: "#525252",
          600: "#3F3F3F",
          700: "#2A2A2A",
          800: "#1A1A1A",
          900: "#0E0E0E",
        },
        clay: {
          DEFAULT: "#C2410C",
          50: "#FFF5EE",
          100: "#FFE6D5",
          200: "#FFC9A8",
          300: "#FB9667",
          400: "#ED6E32",
          500: "#C2410C",
          600: "#9A3309",
          700: "#7A2706",
        },
        sand: "#EFE7D7",
        bronze: "#7A5C3B",
        line: "#E5DED1",
        // shadcn aliases mapped to new palette
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
      },
      borderRadius: {
        none: "0",
        xs: "2px",
        sm: "4px",
        DEFAULT: "8px",
        md: "8px",
        lg: "16px",
        xl: "24px",
        full: "9999px",
      },
      boxShadow: {
        hairline: "0 1px 0 0 rgba(14, 14, 14, 0.05)",
        soft: "0 1px 2px rgba(14, 14, 14, 0.04), 0 8px 24px -12px rgba(14, 14, 14, 0.10)",
        lift: "0 24px 48px -16px rgba(14, 14, 14, 0.18)",
        focus: "0 0 0 2px #F5F2EC, 0 0 0 4px #C2410C",
      },
      transitionTimingFunction: {
        editorial: "cubic-bezier(0.2, 0.8, 0.2, 1)",
        soft: "cubic-bezier(0.65, 0, 0.35, 1)",
      },
      transitionDuration: {
        DEFAULT: "240ms",
        fast: "160ms",
        slow: "480ms",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
        marquee: {
          from: { transform: "translateX(0)" },
          to: { transform: "translateX(-50%)" },
        },
        "fade-up": {
          from: { opacity: "0", transform: "translateY(24px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
        "fade-in": {
          from: { opacity: "0" },
          to: { opacity: "1" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        marquee: "marquee 40s linear infinite",
        "fade-up": "fade-up 720ms cubic-bezier(0.2, 0.8, 0.2, 1) both",
        "fade-in": "fade-in 720ms cubic-bezier(0.2, 0.8, 0.2, 1) both",
      },
      zIndex: {
        nav: "50",
        modal: "100",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;

export default config;

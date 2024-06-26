import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      // screens: {
      //   "2xl": { max: "1535px" },
      //   xl: { max: "1279px" },
      //   lg: { max: "1023px" },
      //   tab: { max: "991px" },
      //   mob: { max: "768px" },
      // },
      // backgroundImage: {
      //   "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
      //   "gradient-conic":
      //     "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      // },
      fontFamily: {
        gilroy: ["var(--font-gilroy)"],
      },
    },
  },
  plugins: [],
};
export default config;

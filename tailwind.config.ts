// tailwind.config.ts
import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        inter: ["var(--font-inter)", "sans-serif"],
        plex: ["var(--font-plex-sans)", "sans-serif"],
      },
      boxShadow: {
        glow: "0 0 12px #64FFDA",
      },
    },
  },
  plugins: [],
};
export default config;

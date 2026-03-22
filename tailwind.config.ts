import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        preo: {
          green: "#1F8A4C",
          "green-dark": "#166138",
          "green-light": "#EBF5F0",
        },
        gray: {
          title: "#111827",
          body: "#374151",
          light: "#F3F4F6",
          silver: "#9CA3AF",
        },
      },
      fontFamily: {
        outfit: ["var(--font-outfit)", "sans-serif"],
        inter: ["var(--font-inter)", "sans-serif"],
      },
      borderRadius: {
        xl: "16px",
      },
      boxShadow: {
        card: "0 4px 24px rgba(0,0,0,0.08)",
      },
    },
  },
  plugins: [],
};
export default config;

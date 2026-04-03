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
          bg: '#060a07',
          s1: '#0a110b',
          s2: '#0f1a10',
          s3: '#141f15',
          green: '#00e676',
          'green-dim': '#00a650',
          'green-dark': '#003d1a',
        },
        gray: {
          title: "#111827",
          body: "#374151",
          light: "#F3F4F6",
          silver: "#9CA3AF",
        },
      },
      fontFamily: {
        jakarta: ["var(--font-jakarta)", "sans-serif"],
        inter: ["var(--font-inter)", "sans-serif"],
        outfit: ["var(--font-jakarta)", "sans-serif"],
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

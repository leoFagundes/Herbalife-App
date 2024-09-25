import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#006429",
        white: "#EBEBEB",
        "white-secondary": "#F0F0F0",
        black: "#1A1A1A",
      },
      boxShadow: {
        card: "2px 5px 10px rgba(0, 0, 0, 0.25)",
      },
    },
  },
  plugins: [],
};
export default config;

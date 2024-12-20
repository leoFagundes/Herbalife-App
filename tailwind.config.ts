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
        error: "#B8463D",
        warning: "#E6DE61",
      },
      boxShadow: {
        card: "2px 5px 10px rgba(0, 0, 0, 0.25)",
        focus: "2px 2px 5px rgba(0, 0, 0, 0.25)",
      },
      screens: {
        xs: "475px",
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1280px",
        "2xl": "1536px",
      },
      keyframes: {
        "fade-in": {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        "leaf-move": {
          "0%": {
            transform: "translateY(5px) scale(1)",
          },
          "50%": {
            transform: "translateY(-5px) scale(1.05)",
          },
          "100%": {
            transform: "translateY(5px) scale(1)",
          },
        },
        "leaf-move-hard": {
          "0%": {
            transform: "translateY(15px) scale(1)",
          },
          "50%": {
            transform: "translateY(-15px) scale(1.15)",
          },
          "100%": {
            transform: "translateY(15px) scale(1)",
          },
        },
        shadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
      },
      animation: {
        fadein: "fade-in .5s ease-in-out forwards",
        leaf1: "leaf-move 4s ease-in-out 0s infinite forwards",
        leaf2: "leaf-move 8s ease-in-out 0s infinite forwards",
        leaf3: "leaf-move 5s ease-in-out 0s infinite forwards",
        leaf4: "leaf-move-hard 4s ease-in-out 0s infinite forwards",
        leaf5: "leaf-move-hard 8s ease-in-out 0s infinite forwards",
        leaf6: "leaf-move-hard 5s ease-in-out 0s infinite forwards",
        fadeIn: "shadeIn 0.3s ease-in-out forwards",
      },
    },
  },
  plugins: [],
};

export default config;

import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        cream: "#fbf4e7",
        navy: "#1e2d5a",
        blue: {
          brand: "#2f4da8",
        },
        pink: {
          brand: "#e79aa6",
        },
        coral: "#e25f49",
        amber: {
          brand: "#efb87e",
        },
        sage: "#6f8e69",
      },
      fontFamily: {
        sans: ["var(--font-comfortaa)", "system-ui", "sans-serif"],
        display: ["var(--font-fredoka)", "system-ui", "sans-serif"],
      },
      animation: {
        "float-slow": "float 6s ease-in-out infinite",
        "float-medium": "float 4.5s ease-in-out infinite 0.8s",
        "float-fast": "float 3.5s ease-in-out infinite 1.6s",
        "wiggle": "wiggle 2s ease-in-out infinite",
        "spin-slow": "spin 12s linear infinite",
        "bounce-gentle": "bounceGentle 3s ease-in-out infinite",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-12px)" },
        },
        wiggle: {
          "0%, 100%": { transform: "rotate(-3deg)" },
          "50%": { transform: "rotate(3deg)" },
        },
        bounceGentle: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-8px)" },
        },
      },
    },
  },
  plugins: [],
};
export default config;

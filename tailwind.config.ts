import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/app/**/*.{ts,tsx}",
    "./src/components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        connectar: {
          black: "#08080A",
          dark: "#060606",
          surface: "#0E0E10",
          elevated: "#141416",
          gold: "#E5A72D",
          "gold-light": "#F5AE22",
          "gold-dark": "#987232",
          "gold-line": "#745328",
        },
      },
      fontFamily: {
        brand: ["var(--font-outfit)", "sans-serif"],
      },
      letterSpacing: {
        brand: "0.35em",
        "wide-custom": "0.15em",
        "wider-custom": "0.4em",
      },
      animation: {
        float: "float 6s ease-in-out infinite",
        "pulse-gold": "pulseGold 3s ease-in-out infinite",
        "draw-line": "drawLine 2s ease-out forwards",
        "fade-up": "fadeUp 0.8s ease-out forwards",
        glow: "glow 4s ease-in-out infinite",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-20px)" },
        },
        pulseGold: {
          "0%, 100%": { opacity: "0.25" },
          "50%": { opacity: "0.6" },
        },
        drawLine: {
          "0%": { strokeDashoffset: "1000" },
          "100%": { strokeDashoffset: "0" },
        },
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(40px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        glow: {
          "0%, 100%": { boxShadow: "0 0 20px rgba(229, 167, 45, 0.1)" },
          "50%": { boxShadow: "0 0 40px rgba(229, 167, 45, 0.25)" },
        },
      },
    },
  },
  plugins: [],
};

export default config;

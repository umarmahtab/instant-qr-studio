/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        deepsea: "#0d1b2a",
        tide: "#0ea5a4",
        sand: "#f6d365",
        coral: "#ff7a59",
        cloud: "#f7f5ef",
      },
      boxShadow: {
        glow: "0 20px 60px -30px rgba(14, 165, 164, 0.7)",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-10px)" },
        },
        shimmer: {
          "0%": { backgroundPosition: "0% 50%" },
          "50%": { backgroundPosition: "100% 50%" },
          "100%": { backgroundPosition: "0% 50%" },
        },
        pulseGlow: {
          "0%, 100%": { opacity: 0.7, transform: "scale(1)" },
          "50%": { opacity: 1, transform: "scale(1.05)" },
        },
      },
      animation: {
        float: "float 6s ease-in-out infinite",
        shimmer: "shimmer 12s ease infinite",
        pulseGlow: "pulseGlow 4s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};

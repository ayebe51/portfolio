/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", "sans-serif"],
        heading: ["Outfit", "sans-serif"],
        body: ["Inter", "sans-serif"],
      },
      colors: {
        primary: {
          DEFAULT: "#6366F1", // Electric Indigo
          hover: "#4F46E5",
          light: "#818CF8",
        },
        secondary: {
          DEFAULT: "#8B5CF6", // Electric Violet
          hover: "#7C3AED",
        },
        accent: "#38BDF8", // Ice Sky Blue
        neutral: {
          dark: "#0B0D13", // Deep Obsidian base
          surface: "#131722", // Card / Panel surface
          border: "#1E2433", // Subtle panel border
          light: "#f8fafc",
        },
      },
      transitionTimingFunction: {
        custom: "cubic-bezier(0.23, 1, 0.32, 1)",
      },
      animation: {
        "fade-in": "fadeIn 0.5s ease-out forwards",
        "slide-up": "slideUp 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards",
        "slide-up-delayed":
          "slideUp 0.8s cubic-bezier(0.16, 1, 0.3, 1) 0.2s forwards",
        blob: "blob 7s infinite",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        slideUp: {
          "0%": { opacity: "0", transform: "translateY(40px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        blob: {
          "0%": { transform: "translate(0px, 0px) scale(1)" },
          "33%": { transform: "translate(30px, -50px) scale(1.1)" },
          "66%": { transform: "translate(-20px, 20px) scale(0.9)" },
          "100%": { transform: "translate(0px, 0px) scale(1)" },
        },
      },
    },
  },
  plugins: [],
};

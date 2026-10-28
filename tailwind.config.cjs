/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", "sans-serif"],
        display: ["'Space Grotesk'", "sans-serif"],
        heading: ["'Space Grotesk'", "sans-serif"],
        mono: ["'JetBrains Mono'", "monospace"],
        body: ["Inter", "sans-serif"],
      },
      colors: {
        canvas: {
          DEFAULT: "#F6F5F0", // Warm technical drafting paper
          card: "#FFFFFF",    // High contrast chalk white
          dark: "#EAE7DD",    // Deepened paper tone
          border: "#18181B",
        },
        ink: {
          DEFAULT: "#18181B", // Zinc 900 architectural ink
          muted: "#52525B",   // Zinc 600 secondary text
          subtle: "#71717A",  // Zinc 500 annotations
          faint: "#E4E4E7",   // Zinc 200 light grid borders
        },
        blueprint: {
          DEFAULT: "#2563EB", // Cobalt engineering blue
          hover: "#1D4ED8",
          light: "#EFF6FF",
          dark: "#1E40AF",
        },
        safety: {
          DEFAULT: "#FDE047", // Industrial hazard / highlight yellow
          dark: "#EAB308",
          light: "#FEF9C3",
        },
        telemetry: {
          DEFAULT: "#16A34A", // Live sensor green
          light: "#DCFCE7",
          dark: "#15803D",
        },
        // Backward compatibility mappings
        primary: {
          DEFAULT: "#2563EB",
          hover: "#1D4ED8",
          light: "#3B82F6",
        },
        secondary: {
          DEFAULT: "#18181B",
          hover: "#27272A",
        },
        accent: "#FDE047",
        neutral: {
          dark: "#18181B",
          surface: "#FFFFFF",
          border: "#18181B",
          light: "#F6F5F0",
        },
      },
      boxShadow: {
        "brutal-sm": "2px 2px 0px #18181B",
        "brutal": "4px 4px 0px #18181B",
        "brutal-md": "4px 4px 0px #18181B",
        "brutal-lg": "6px 6px 0px #18181B",
        "brutal-xl": "8px 8px 0px #18181B",
        "brutal-blueprint": "4px 4px 0px #2563EB",
        "brutal-safety": "4px 4px 0px #18181B",
      },
      transitionTimingFunction: {
        custom: "cubic-bezier(0.23, 1, 0.32, 1)",
      },
      animation: {
        "fade-in": "fadeIn 0.4s ease-out forwards",
        "slide-up": "slideUp 0.6s cubic-bezier(0.16, 1, 0.3, 1) forwards",
        "pulse-slow": "pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        slideUp: {
          "0%": { opacity: "0", transform: "translateY(24px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
    },
  },
  plugins: [],
};

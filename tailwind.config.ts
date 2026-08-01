/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      sm: "640px",
      // => @media (min-width: 640px) { ... }

      md: "768px",
      // => @media (min-width: 768px) { ... }

      lg: "1024px",
      // => @media (min-width: 1024px) { ... }

      xl: "1280px",
      // => @media (min-width: 1280px) { ... }

      "2xl": "1536px",
      // => @media (min-width: 1536px) { ... }
    },
    extend: {
      colors: {
        // "custom-white": "#F8F8FF",
        // "custom-black": "#212427",
        // "star": "#FFFF",

        surface: "rgb(var(--color-surface) / <alpha-value>)",
        "surface-dim": "rgb(var(--color-surface-dim) / <alpha-value>)",
        "surface-bright": "rgb(var(--color-surface-bright) / <alpha-value>)",
        "surface-container-lowest":
          "rgb(var(--color-surface-container-lowest) / <alpha-value>)",
        "surface-container-low":
          "rgb(var(--color-surface-container-low) / <alpha-value>)",
        "surface-container":
          "rgb(var(--color-surface-container) / <alpha-value>)",
        "surface-container-high":
          "rgb(var(--color-surface-container-high) / <alpha-value>)",
        "on-surface": "rgb(var(--color-on-surface) / <alpha-value>)",
        "on-surface-variant":
          "rgb(var(--color-on-surface-variant) / <alpha-value>)",

        outline: "rgb(var(--color-outline) / <alpha-value>)",
        "outline-variant": "rgb(var(--color-outline-variant) / <alpha-value>)",

        primary: "rgb(var(--color-primary) / <alpha-value>)",
        "on-primary": "rgb(var(--color-on-primary) / <alpha-value>)",
        "primary-container":
          "rgb(var(--color-primary-container) / <alpha-value>)",
        "on-primary-container":
          "rgb(var(--color-on-primary-container) / <alpha-value>)",

        secondary: "rgb(var(--color-secondary) / <alpha-value>)",
        "on-secondary": "rgb(var(--color-on-secondary) / <alpha-value>)",
        "secondary-container":
          "rgb(var(--color-secondary-container) / <alpha-value>)",
        "on-secondary-container":
          "rgb(var(--color-on-secondary-container) / <alpha-value>)",

        background: "rgb(var(--color-background) / <alpha-value>)",
        "on-background": "rgb(var(--color-on-background) / <alpha-value>)",
        "background-ghost":
          "rgb(var(--color-background-ghost) / <alpha-value>)",
        "charcoal-ink": "rgb(var(--color-charcoal-ink) / <alpha-value>)",
        "pure-white": "rgb(var(--color-pure-white) / <alpha-value>)",
      },
      boxShadow: {
        "neu-inset": "var(--shadow-neu-inset)",
        elevated: "var(--shadow-elevated)",
        floating: "var(--shadow-floating)",
      },

      animation: {
        "loading-spin": "spin 5s infinite",
      },

      // keyframes: {
      //   "theme-wipe": {
      //     "0%": { clipPath: "polygon(0% 100%, 0% 100%, 0% 100%, 0% 100%)" },
      //     "50%": { clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)" },
      //     "100%": { clipPath: "polygon(100% 0%, 100% 0%, 100% 0%, 100% 0%)" },
      //   },
      // },

      // animation: {
      //   "theme-wipe": "theme-wipe 0.6s ease-in-out forwards",
      // },
      // keyframes: {
      //   twinkle: {
      //     "0%, 100%": { opacity: "1" },
      //     "50%": { opacity: "0" },
      //   },
      // },
      // animation: {
      //   twinkle: "twinkle 3s infinite",
      // },
    },
  },
  plugins: [],
};

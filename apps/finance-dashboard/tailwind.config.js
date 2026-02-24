/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        "brand": "#00C2FF",
        "brand-hover": "#00A3E0",
        "primary": "#00C2FF",
        "secondary": "#ff5c5c",
        "background-light": "#f6f8f7",
        "background-dark": "#0A0E12",
        "surface-dark": "rgba(15, 23, 42, 0.6)",
        "surface-light": "#ffffff",
        "surface-input": "rgba(255, 255, 255, 0.05)",
        "border-dark": "rgba(255, 255, 255, 0.1)",
        "text-secondary": "#94A3B8",
        "text-muted": "#64748B",
      },
      fontFamily: {
        "display": ["Spline Sans", "sans-serif"],
        "body": ["Noto Sans", "sans-serif"],
      },
      borderRadius: {
        "DEFAULT": "1rem",
        "lg": "2rem",
        "xl": "3rem",
        "full": "9999px"
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/container-queries'),
  ],
}

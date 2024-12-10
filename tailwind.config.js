/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
const defaultTheme = require("tailwindcss/defaultTheme");
const colors = require("tailwindcss/colors");
const {
  default: flattenColorPalette,
} = require("tailwindcss/lib/util/flattenColorPalette");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class", // Enables dark mode
  theme: {
    extend: {
      screens: {
        mg: "950px", // Custom breakpoint
      },

      boxShadow: {
        "custom-inset": "inset 0px 0px 10px 10px #cec8c8",
        "custom-inset-2": "inset 0px 0px 10px 10px #474242",
        "custom-negative": "-2px -2px 10px 10px #16172f",
      },
      animation: {
        scroll:
          "scroll var(--animation-duration, 40s) var(--animation-direction, forwards) linear infinite",
      },
      keyframes: {
        scroll: {
          to: {
            transform: "translate(calc(-50% - 0.5rem))",
          },
        },
      },
    },
  },
  plugins: [
    function addVariablesForColors({ addBase, theme }) {
      // Flatten and create CSS variables for colors
      const allColors = flattenColorPalette(theme("colors"));
      const newVars = Object.fromEntries(
        Object.entries(allColors).map(([key, val]) => [`--${key}`, val])
      );

      addBase({
        ":root": newVars,
      });
    },
  ],
};

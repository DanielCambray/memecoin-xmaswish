/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");

export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      animation: {
        "skew-scroll": "skew-scroll 24s linear infinite",
        
      },
      colors: {
        primary: "#b91c1c",
        secondary: "#799ea7",
        tertiary: "#fef3c7",
      },
    },
    fontFamily: {
      body: [
        "IndustryBlack",
        "Inter",
        "ui-sans-serif",
        "system-ui",
        "-apple-system",
        "system-ui",
        "Segoe UI",
        "Roboto",
        "Helvetica Neue",
        "Arial",
        "Noto Sans",
        "sans-serif",
        "Apple Color Emoji",
        "Segoe UI Emoji",
        "Segoe UI Symbol",
        "Noto Color Emoji",
      ],
      sans: [
        "IndustryBlack",
        "Inter",
        "ui-sans-serif",
        "system-ui",
        "-apple-system",
        "system-ui",
        "Segoe UI",
        "Roboto",
        "Helvetica Neue",
        "Arial",
        "Noto Sans",
        "sans-serif",
        "Apple Color Emoji",
        "Segoe UI Emoji",
        "Segoe UI Symbol",
        "Noto Color Emoji",
      ],
    },
    keyframes: {
      "skew-scroll": {
        "0%": {
          transform:
            "rotatex(13deg) rotateZ(-13deg) skewX(13deg) translateZ(0) translateY(110%)",
        },
        "95%": {
          opacity: 1,
        },
        "100%": {
          transform:
            "rotatex(13deg) rotateZ(-13deg) skewX(13deg) translateZ(0) translateY(-430%)",
            opacity: 0,
        },
      },

    },

  },
  plugins: [],
};

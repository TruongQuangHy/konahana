import { Container } from "postcss";

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        // textColorS2: "rea",
        dark: "#363D40",
        primarySec: "#CCEDFB",
        primary: "#00A7EA",
        textColor: "#444444",
        "pagination-active": "#00A7EA",
        "pagination-inactive": "#363D40",
      },
      fontFamily: {
        PT: ["PT Serif", "serif"],
        Noto: ["Noto Sans", "sans-serif"],
      },
      container: {
        center: true,
        padding: {
          default: "1rem",
          sm: "3rem",
        },
      },
      skew: {
        35: "35deg",
      },
      borderRadius: {
        thoi: "20%",
      },
    },
  },

  plugins: [
    function ({ addUtilities }) {
      addUtilities({
        ".clip-diamond": {
          clipPath: "polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)",
        },
        ".skew-x-35": {
          transform: "skewX(35deg)",
        },
      });
    },
  ],
};

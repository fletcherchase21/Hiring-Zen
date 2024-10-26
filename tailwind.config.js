/** @type {import('tailwindcss').Config} */
import fluid, { extract } from 'fluid-tailwind';
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    extract
  ],
  theme: {
    extend: {
      fontFamily: {
        roboto: ["Roboto", "sans-serif"],
        brockmann: ["Brockmann", "sans-serif"],
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        // "primary": "#FD8F01",
        "primary": "#1A95D0",
        "secondary": "#C43256",
        "black-1": "#1A1A1A",
        "black-2": "#333333",
        "black-3": "#4D4D4D",
      },
      animation: {
        scroll: 'scroll 5s linear infinite',
      },
      keyframes: {
        scroll: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-100%)' },
        },
      },
    },
  },
  plugins: [
    fluid
  ],
};

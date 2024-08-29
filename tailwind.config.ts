import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/views/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        primary: {
          '50': '#eff9ff',
          '100': '#dff1ff',
          '200': '#b8e5ff',
          '300': '#78d1ff',
          '400': '#1fb4ff',
          '500': '#06a2f1',
          '600': '#0080ce',
          '700': '#0066a7',
          '800': '#02568a',
          '900': '#084872',
          '950': '#062d4b',
        }
      }
    },
  },
  plugins: [],
};
export default config;

import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    fontSize: {
      "xs": ['12','160%'],
      "sm": ['14px', '160%'],
      "base": ['16px', '160%'],
      "lg": ['18px', '160%'],
      "xl": ['20px', '160%'],
      "2xl": ['24px', '160%'],
      "3xl": ['32px', '160%']
    },
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
  darkMode:"class",
};
export default config;

import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "pink-primary": "#ec4899",
        "pink-light": "#f9a8d4",
        "pink-hover": "#db2777",
        "pink-dark": "#be185d",
      },
    },
  },
  plugins: [],
};

export default config;

import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        pentagon: "url('../public/images/bg-pentagon.svg')",
        triangle: "url('../public/images/bg-triangle.svg')",
      },
    },
  },
  plugins: [],
};
export default config;

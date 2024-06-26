import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
				'primary': '#AD88C6',
				'secondary': '#F9F9F9',
				'background': '#F4F4F4',
				'accent-primary': '#E1AFD1',
				'accent-secondary': '#F6F6F6',
				'accent-cutoff': '#334155',
			},
    },
  },
  plugins: [],
};
export default config;

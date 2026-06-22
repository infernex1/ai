import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "var(--bg-primary)",
        secondary: "var(--bg-secondary)",
        card: "var(--bg-card)",
        "text-primary": "var(--text-primary)",
        "text-secondary": "var(--text-secondary)",
        border: "var(--border)",
        "card-border": "var(--card-border)",
        accent: {
          DEFAULT: "#C41E3A",
          hover: "#FF6B6B"
        }
      },
      backgroundImage: {
        'accent-gradient': 'linear-gradient(135deg, #C41E3A, #FF6B6B)',
      }
    },
  },
  plugins: [],
};
export default config;

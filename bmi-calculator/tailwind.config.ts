import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        grey500: '#5E6E85',
        grey300: "#ACC1DE",
        blue900: '#253347',
        blue500: "#345FF6",
        blue300: "#B3D3F1",
        blue100: "#E1E7FE",
        gradientStart: "#D6FCFE",
        gradientEnd: "#D6FCFE",
      },
    },
  },
  plugins: [],
} satisfies Config;

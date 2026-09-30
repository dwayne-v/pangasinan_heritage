import type { Config } from "tailwindcss";

// Design tokens for the Pangasinan Heritage Digital Showcase.
// Palette drawn from the province's coastline (Hundred Islands, Bolinao
// Lighthouse) and its sunsets over the Lingayen Gulf.
const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        ocean: {
          50: "#EAF4F8",
          100: "#CDE6EF",
          200: "#9BCCDE",
          300: "#69B2CE",
          400: "#3D96B8",
          500: "#1E7A9E",
          600: "#146083",
          700: "#104C68",
          800: "#0C384D",
          900: "#082633",
        },
        sunset: {
          50: "#FFF6E9",
          100: "#FFE9C4",
          200: "#FFD48C",
          300: "#FDBB55",
          400: "#F7A22E",
          500: "#EF8B16",
          600: "#C96F0C",
          700: "#9C550B",
        },
        sand: {
          50: "#FBF8F3",
          100: "#F5EFE3",
          200: "#EBE1CE",
          300: "#DACBA9",
        },
        ink: {
          900: "#152025",
          700: "#3A4A50",
          500: "#66787E",
        },
      },
      fontFamily: {
        display: ["Fraunces", "Georgia", "'Times New Roman'", "serif"],
        body: [
          "'Public Sans'",
          "-apple-system",
          "BlinkMacSystemFont",
          "'Segoe UI'",
          "Roboto",
          "Helvetica",
          "Arial",
          "sans-serif",
        ],
      },
      maxWidth: { content: "1200px" },
      borderRadius: { card: "14px" },
    },
  },
  plugins: [],
};

export default config;

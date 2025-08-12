
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
    "./node_modules/flyonui/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Poppins", "Cairo", "system-ui", "sans-serif"],
      },
      colors: {
        whatsapp_color: "#25D366",
        primary: {
          DEFAULT: "#D4AF37",
          dark: "#B38E2E",
          light: "#F0D290",
        },
        secondary: {
          DEFAULT: "#2D2B28",
          dark: "#1C1C1C",
          soft: "#3E3A36",
        },
        text: {
          DEFAULT: "#1C1C1C",
          light: "#F5F5F5",
          white: "#FFFFFF",
          gold: "#CFA93E",
        },
        accent: {
          beige: "#EBD8B0",
          orange: "#F4B04E",
          sand: "#CE9B4B",
          cream: "#F9EBD3",
          bronze: "#8C6E3D",
        },
      },
      text: {
        gold: "var(--color-text-gold)",
      },
    },
  },
  plugins: [],
};

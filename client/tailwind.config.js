/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        linkedin: {
          blue: "#0a66c2",
          lightBlue: "#e7f3ff",
          darkBlue: "#004182",
          black: "#000000",
          gray: "#f3f2ef",
          darkGray: "#86888a",
          text: "#333333",
          buttonText: "#ffffff",
          border: "#e0e0e0",
        },
      },
      fontFamily: {
        sans: [
          "-apple-system",
          "BlinkMacSystemFont",
          "Segoe UI",
          "Roboto",
          "Helvetica",
          "Arial",
          "sans-serif",
        ],
      },
      boxShadow: {
        modal: "0 0 0 1px rgba(0,0,0,0.08), 0 4px 12px rgba(0,0,0,0.1)",
        card: "0 0 0 1px rgba(0,0,0,0.08)",
      },
    },
  },
  plugins: [],
};

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          1: "#1C0D12",
          2: "#964F66",
        },
        secondary: {
          1: "#E5E8EB",
          2: "#FCF7FA",
        },
      },
    },
  },
  plugins: [],
};

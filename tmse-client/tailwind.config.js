/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "angular-gradient": "linear-gradient(145deg,#0d47a1,#42a5f5)",
      },
    },
  },
  plugins: [],
};

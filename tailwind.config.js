/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      boxShadow: {
        btn: "5px 5px 0px 0px rgba(255,255,255)",
        img: "5px 5px 0px 0px rgba(0,0,0)",
      },
    },
  },
  plugins: [],
};

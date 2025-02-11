/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],

  theme: {
    extend: {
      colors: {
        primary: "#f7f7f7",
        secondary: "rgb(93, 114, 39)",
        grayText: "#777",
        heading: "#222",
      },
      fontFamily: {
        sans: ["Montserrat", "sans-serif"],
      },
      fontSize: {
        p: "14px",
        h1: "60px",
        h2: "32px",
        h4: "18px",
        h6: "16px",
      },
      fontWeight: {
        normal: "400",
        medium: "500",
        bold: "700",
      },
      lineHeight: {
        normal: "1.5",
        relaxed: "1.75",
        tight: "1.25",
        h1: "1.2",
        h2: "1",
        h4: "1",
      },
      letterSpacing: {
        wide: "0.06em",
        wider: "0.03em",
        widest: "0.02em",
      },
      backgroundImage: {
        "theme-gradient": "linear-gradient(to right, #5d7227, #203f15)",
      },
    },
  },
  plugins: [require("tailwind-scrollbar-hide")],
};

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        background: "#F4F7F8",
        primary: "#F97316",
        kakao: "#F8E71C",
        naver: "#2DB400",
      },
    },
  },
  plugins: [],
};

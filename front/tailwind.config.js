/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html", // ✅ Сканувати головний HTML-файл
    "./src/**/*.{js,ts,jsx,tsx}", // ✅ Сканувати ВСІ файли в папці src
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};

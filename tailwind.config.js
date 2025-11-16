// tailwind.config.js
/** @type {import('tailwindcss').Config} */
export default {
  // 1. Configura onde o Tailwind deve procurar por classes (em src/ e index.html)
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}", 
  ],
  // 2. Habilita o modo escuro baseado na classe 'dark' no elemento <html> (Task 5)
  darkMode: 'class', 
  theme: {
    extend: {},
  },
  plugins: [],
}
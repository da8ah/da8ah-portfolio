/** @type {import('tailwindcss').Config} */
import scrollbar from 'tailwind-scrollbar'

export default {
  darkMode: "class",
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      'keania': ['Keania One', 'sans-serif'],
      'roboto': ['Roboto Condensed', 'sans-serif'],
      'mono': ['ui-monospace', 'SFMono-Regular', 'sans-serif']
    }
  },
  plugins: [scrollbar({ nocompatible: true }),],
}


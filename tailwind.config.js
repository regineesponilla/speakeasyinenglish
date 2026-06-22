/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        navy: {
          950: '#080c18',
          900: '#0d1120',
          800: '#121829',
          700: '#171f35',
          600: '#1e2840',
          500: '#253050',
        },
        accent: {
          blue: '#4f8ef7',
          purple: '#7c6af7',
          green: '#3ecf8e',
          gold: '#f5c842',
          red: '#f76f6f',
        }
      },
      fontFamily: {
        sans: ['DM Sans', 'system-ui', 'sans-serif'],
        display: ['DM Serif Display', 'Georgia', 'serif'],
      },
    },
  },
  plugins: [],
}

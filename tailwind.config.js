/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        navy: {
          50: '#EEF3F9',
          100: '#D5E0EE',
          200: '#A9BED9',
          300: '#7A98BE',
          400: '#4D7199',
          500: '#2E5680',
          600: '#1F4369',
          700: '#15324F',
          800: '#0E2540',
          900: '#0A1B31',
          950: '#06111F',
        },
      },
      fontFamily: {
        sans: ['Manrope', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
};

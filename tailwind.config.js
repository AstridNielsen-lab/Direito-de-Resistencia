/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        navy: {
          50: '#f0f5fa',
          100: '#dae4f2',
          200: '#b9cce4',
          300: '#8facd1',
          400: '#6689be',
          500: '#4a6ca6',
          600: '#395687',
          700: '#0A2463', // Main navy blue
          800: '#0A1F5A', // Darker navy
          900: '#080f2e',
        },
        gold: {
          50: '#fbf8e9',
          100: '#f7efbf',
          200: '#f1e290',
          300: '#ead45c',
          400: '#e3c53a',
          500: '#D4AF37', // Main gold
          600: '#b68f21',
          700: '#8d691d',
          800: '#74511e',
          900: '#61421d',
        },
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        serif: ['Merriweather', 'serif'],
      },
      listStyleType: {
        roman: 'upper-roman',
      },
    },
  },
  plugins: [],
};
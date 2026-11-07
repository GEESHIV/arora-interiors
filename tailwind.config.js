/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        ivory: {
          50: '#FFFDF9',
          100: '#FAF7F2',
          200: '#F3EEE4',
          300: '#E9E2D4',
        },
        beige: {
          100: '#F5EFE6',
          200: '#E8DCCB',
          300: '#D9C8AE',
          400: '#BFA888',
        },
        gold: {
          100: '#FBF5E9',
          200: '#F2E4C6',
          300: '#E6D0A0',
          400: '#D8BA7E',
          500: '#C9A96E',
          600: '#A8864F',
          700: '#7A5C2E',
        },
        walnut: {
          100: '#EBDDD0',
          300: '#A88470',
          500: '#7A5842',
          600: '#5C4033',
          700: '#4A3328',
          800: '#3A2820',
        },
        charcoal: {
          400: '#8A8782',
          500: '#6B6963',
          600: '#4A4946',
          700: '#3A3936',
          800: '#24231F',
          900: '#1A1917',
        },
        success: { 500: '#3F6B4E', 600: '#2F5A3F' },
        warning: { 500: '#B7791F', 600: '#8A5A12' },
        error: { 500: '#B3261E', 600: '#8F1D17' },
      },
      fontFamily: {
        serif: ['"Cormorant Garamond"', 'Georgia', 'serif'],
        sans: ['Manrope', 'system-ui', 'sans-serif'],
      },
      keyframes: {
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(24px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        bounceSoft: {
          '0%, 100%': { transform: 'translate(-50%, 0)' },
          '50%': { transform: 'translate(-50%, 8px)' },
        },
      },
      animation: {
        'fade-up': 'fadeUp 1.1s cubic-bezier(0.16, 1, 0.3, 1) both',
        'fade-in': 'fadeIn 0.6s ease-out both',
        'bounce-soft': 'bounceSoft 2.4s ease-in-out infinite',
      },
    },
  },
  plugins: [],
};

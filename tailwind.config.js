/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './index.html',
    './src/**/*.{js,jsx,ts,tsx}', 
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui'],
      },
      colors: {
        brand: {
          DEFAULT: '#6366f1', // indigo-500
          dark: '#312e81e1',   // indigo-900
        },
      },
      animation: {
        spin3D: "spin3D 8s linear infinite"
      },
      keyframes: {
        spin3D: {
          "0%": { transform: "rotateY(0deg)" },
          "100%": { transform: "rotateY(360deg)" }
        }
      },
    },
  },
  plugins: [],
};
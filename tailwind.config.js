/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        railway: ['Raleway', 'sans-serif'],
        poppins: ['Poppins', 'sans-serif'],
        libre: ['Libre Franklin', 'sans-serif'],
      },
      colors: {
        mainBg: '#0c0a09',
        lightBg: '#292524',
      },
    },
  },
  plugins: [],
};

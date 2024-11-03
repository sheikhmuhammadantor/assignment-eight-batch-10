/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'sora': ["Sora", 'sans-serif'],
      },
    }
  },
  plugins: [
    // eslint-disable-next-line no-undef
    require('daisyui'),
  ],
}


/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'main-color': '#9538e2',
      },
      fontFamily: {
        'sora': ["Sora", 'sans-serif'],
      },
      backgroundImage: {
        'bannerImage': "url('/assets/banner.jpg')",
      },
    }
  },
  plugins: [
    // eslint-disable-next-line no-undef
    require('daisyui'),
  ],
}


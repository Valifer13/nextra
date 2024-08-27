/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      backgroundImage: {
        'hero-pattern': "url(/src/assets/images/hero.jpg)",
        'stat-pattern': "url(/src/assets/images/Pantai Sanur.jpg)"
      }
    },
    fontFamily: {
      'poppins': ['Poppins', 'sans-serif'],
      'cinzel': ['Cinzel', 'serif']
    }
  },
  plugins: [
    /* require('daisyui') */
  ],
}
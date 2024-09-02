/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      backgroundImage: {
        'hero-pattern': "url(/src/assets/images/hero.jpg)",
        'stat-pattern': "url(/src/assets/images/sanur/Pantai Sanur.jpg)",
        'destination-hero': "url(/src/assets/images/uluwatu/Pura Luhur Uluwatu.jpg)",
      }
    },
    fontFamily: {
      'poppins': ['Poppins', 'sans-serif'],
      'cinzel': ['Cinzel', 'serif'],
      'greatvibes': ['Great Vibes', 'cursive']
    }
  },
  plugins: [
    /* require('daisyui') */
  ],
}
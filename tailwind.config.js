module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    container: {
      center: true,
    },
    listStyleType: {
      none: 'none',
      disc: 'disc',
      decimal: 'decimal'

    },

    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
}

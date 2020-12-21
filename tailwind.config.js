module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    backgroundColor: theme => ({
     ...theme('colors'),
     'primary': '#3490dc',
     'secondary': '#ffed4a',
     'danger': '#e3342f',
     'bluenight': '#32577a',
     'yellowstars': '#e5c04f'
    })
  },
  variants: {
    extend: {},
  },
  plugins: [],
}

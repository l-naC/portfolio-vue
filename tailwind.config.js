module.exports = {
  purge: [
    './src/**/*.html',
    './src/**/*.vue',
    './src/**/*.jsx',
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    textColor: theme => ({
      ...theme('colors'),
      'primary': '#3490dc',
      'secondary': '#ffed4a',
      'danger': '#e3342f',
      'bluenight': '#32577a',
      'yellowhover': '#e5c04f',
      'redjapan': '#B50505',
      'yellowstars': '#FDCA40'
     }),
    backgroundColor: theme => ({
     ...theme('colors'),
     'primary': '#3490dc',
     'secondary': '#ffed4a',
     'danger': '#e3342f',
     'bluenight': '#32577a',
     'yellowhover': '#e5c04f',
     'redjapan': '#B50505',
     'yellowstars': '#FDCA40'
    })
  },
  variants: {
    extend: {},
  },
  plugins: [],
}

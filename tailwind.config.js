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
      'yellowstars': '#e5c04f',
      'redjapan': '#B50505'
     }),
    backgroundColor: theme => ({
     ...theme('colors'),
     'primary': '#3490dc',
     'secondary': '#ffed4a',
     'danger': '#e3342f',
     'bluenight': '#32577a',
     'yellowstars': '#e5c04f',
     'redjapan': '#B50505'
    })
  },
  variants: {
    extend: {},
  },
  plugins: [],
}

module.exports = {
  purge: [],
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
    }),
    fontFamily: {
      'sans': ['ui-sans-serif', 'system-ui'],
      'serif': ['ui-serif', 'Georgia'],
      'mono': ['ui-monospace', 'SFMono-Regular'],
      'display': ['Oswald'],
      'body': ['Open Sans'],
      'mine': ['Philosopher-Bold'],
      'mineBold': ['Philosopher-Regular']
    }
  },
  variants: {
    extend: {},
  },
  plugins: [],
}

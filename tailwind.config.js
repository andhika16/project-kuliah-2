module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      // 'sans': ['"IBM Plex Sans"', 'sans-serif'],
      'sans': ['"Nunito Sans"', 'sans-serif']
      // 'sans' : ['"Inter"','sans-serif']
    },
    backgroundColor: theme => ({
      ...theme('colors'),
      'primary': '#39A388',
      'secondary': '#2C2891'
      
}),
    extend: {
    },
  },
  variants: {
    extends: {
      backgroundColor: ['active', 'hover', 'focus'],
    },
    display: ['responsive', 'group-hover', 'group-focus'],
  },
  plugins: [],
}

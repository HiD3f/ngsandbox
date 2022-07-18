module.exports = {
  prefix: '',
  important: true,
  mode: 'jit',
  purge: {
    content: [
      './src/**/*.{html,ts,scss}',
    ]
  },
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        // Other colors
      },
      fontFamily: {
      },
    },
  },
  variants: {
    opacity: ({ after }) => after(['disabled']),
    extend: {
      border: ['last'],
    }
  },
};

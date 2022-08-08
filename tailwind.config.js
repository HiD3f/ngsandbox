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
      fontFamily: {
      },
      boxShadow: {
        'custom': '0 2px 24px rgb(0 0 0 / 12%)',
      },
      colors: {
        'orange-valo': '#fe7443',
        'orange-valo-light': '#fe9c42',
        'cyan-light': '#A8FFFA',
        'cyan': '#77E5F5',
        'grey-1': '#1e1e1e'
      },
      fontSize: {
        'xxs': '.65rem',
        '4xl': '2.5rem',
        '5xl': '3.5rem',
        '6xl': '5rem',
      },
      spacing: {
        '18': '4.5rem',
        '22': '5.5rem',
        '88': '22rem',
      }
    },
  },
  variants: {
    opacity: ({ after }) => after(['disabled']),
    extend: {
      border: ['last'],
    }
  },
};

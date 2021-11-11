const { fontFamily } = require('tailwindcss/defaultTheme');

module.exports = {
  mode: 'jit',
  purge: {
    content: [
      './pages/**/*.{js,ts,jsx,tsx}',
      './components/**/*.{js,ts,jsx,tsx}',
      './styles/**/*.{scss,css}',
    ],
    options: {
      safelist: [/data-theme$/],
    },
  },
  darkMode: false, // or 'media' or 'class'
  theme: {
    screens: {
      sm: '640px',
      // => @media (min-width: 640px) { ... }

      md: '768px',
      // => @media (min-width: 768px) { ... }

      lg: '1024px',
      // => @media (min-width: 1024px) { ... }

      xl: '1280px',
      // => @media (min-width: 1280px) { ... }

      xxl: '2560px',
      // => @media (min-width: 2560px) { ... }
    },
    extend: {
      colors: {
        teal: { light: '#97EFF4', medium: '#639598', dark: '#4d7d80' },
      },
      gridAutoRows: {
        card: 'min-content 1fr min-content',
      },
      fontFamily: {
        ...fontFamily,
        sans: ['Roboto', 'ui-sans-serif', 'system-ui'],
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [require('daisyui')],
};

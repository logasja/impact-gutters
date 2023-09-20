const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  content: [
    './index.html',
    './src/**/*.{vue,js,ts,jsx,tsx}',
  ],
  darkMode: 'class',
  theme: {
    colors: {
      'neutral': {
        '50': '#f9fafa',
        '100': '#F9FBFD',
        '200': '#e6e7e8',
        '300': '#d2d4d5',
        '400': '#b6babc',
        '500': '#a2a6a8',
        '600': '#797e80',
        '700': '#636668',
        '800': '#525456',
        '900': '#464849',
        '950': '#28292a',
      },
      'blue': {
        '50': '#f0f8ff',
        '100': '#e0f1fe',
        '200': '#b9e4fe',
        '300': '#7ccffd',
        '400': '#36b7fa',
        '500': '#0c9eeb',
        '600': '#0075bb', //primary
        '700': '#0163a3',
        '800': '#065586',
        '900': '#0b476f',
        '950': '#072d4a',
      },  
      'gray': {
        '50': '#f5f6f6',
        '100': '#e5e7e8',
        '200': '#ced1d3',
        '300': '#abb0b5',
        '400': '#81888f',
        '500': '#666d74',
        '600': '#565b61',
        '700': '#4b4e53',
        '800': '#424548',
        '900': '#3a3c3f',
        '950': '#242628',
      },
    },
    extend: {
      fontFamily: {
        rbno31: ['RBNo3\\.1', 'serif'],
      },
    },
  },
};

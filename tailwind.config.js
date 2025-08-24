/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./src/**/*.{html,js,php}"],
  theme: {
    extend: {},
    colors: {
      'green': '#6FE1D6',
      'darkgreen': '#85B223',
      'lightgreen': '#EBF1DE',
      'violet': '#2E2555',
      'lightviolet' : '#AE99FF',
      'white' : '#ffffff',
      'grey' : '#F8F8F8',
      'darkgrey' : '#1E1E1E',
      'lightgrey' : '#F6F6F3',
      'black' : '#0F1923',
      'blue' : '#3E669C',
      'lightblue' : '#0F9EFF',
      'darkblue' : '#11244B',
      'pink' : '#C5A7CD',
      'brown' : '#512511',
      'darkbrown' : '#220D03',
      'yellow' : '#FFC107',
      'orange' : '#FF7A00',
      'gold' : '#AD954F',
    },
    fontFamily: {
      'assistant': ['Assistant', 'sans-serif'],
      'body': ['Assistant', 'sans-serif'],
      'title': ['Assistant', 'sans-serif'],
    },
    fontSize: {
      xs: ['12px', '18px'],
      sm: ['14px', '20px'],
      base: ['16px', '24px'],
      lg: ['18px', '26px'],
      xl: ['20px', '25px'],
      xxl: ['22px', '30px'],
    },
    screens: {
      'xs': '480px',
      'sm': '640px',
      'md': '768px',
      'lg': '992px',
      'xl': '1200px',
      'xxl': '1500px',
    },
  },
  plugins: [
    require("@tailwindcss/typography"),
  ],
  corePlugins: {
    placeholderColor: false,
    placeholderOpacity: false,
  },
};

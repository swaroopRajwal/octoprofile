
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        black: '#231E23',
        teal: '#39A6A3',
        white: '#DEEEEA',
        cream: '#BF1363',
      },
      screens: {
        // 'md': '700px',
        'sm': '650px',
        // 'repo': '620px',
      }
    },
  },
  plugins: [
    require('tailwindcss-debug-screens'),
    require('@tailwindcss/forms'),
  ],
}

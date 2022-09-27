module.exports = {
  mode: 'jit',
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  plugins: [require("daisyui")],
  darkMode: 'class', // or 'media' or 'class'
  presets: [require('./utils/tailwind-preset')],
  theme: {
    extend: {
      animation: {
        flip:'flip 1s cubic-bezier(0, 0, 0.2, 1) infinite'
      },
      keyframes:{
        flip: {
          'from': { transform:'rotateX(0deg)', transformOrigin: '50% bottom ',},
          'to':{transform:  'rotateX(180deg)', transformOrigin: '50% bottom ',}
        }
      }
    },
    fontFamily: {
      'sans': ['Roboto', 'sans-serif'],
      'roboto': ['Roboto', 'sans-serif'],
    }
}

};

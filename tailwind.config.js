/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}","./node_modules/flowbite/**/*.js"
  ],
  theme: {
    extend: {
      colors: {
        black: '#000000',
        violet: '#8668ff',
        yellow: '#ffd360',
        grey: '#212121',
        white: '#ffffff'
            },
    },
  },
  plugins: [
    require('flowbite/plugin')
  ],
};

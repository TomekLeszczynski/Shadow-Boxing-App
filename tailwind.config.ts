const config = {
  content: ['./index.html', './src/**/*.{vue,ts,js}'],
  theme: {
    extend: {
      colors: {
        brickRed: '#d92e1c'
      }
    }
  },
  plugins: [require('@tailwindcss/forms')]
}

export default config

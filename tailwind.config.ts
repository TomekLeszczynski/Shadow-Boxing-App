const config = {
  content: ['./index.html', './src/**/*.{vue,ts,js}'],
  theme: {
    extend: {
      colors: {
        boxingRed: '#d92e1c',
        boxingGreen: '#03c147',
        boxingYellow: '#fed001',
        boxingBlue: '#5cb6eb',
        boxingPink: '#dea6af',
        boxingPurple: '#7649be',
        boxingDarkBlue: '#214287',
        boxingGrey: '#dcdacd'
      }
    }
  },
  plugins: [require('@tailwindcss/forms')]
}

export default config

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
      },
      keyframes: {
        flyIn: {
          '0%': {
            transform: 'translateY(100%)',
            'clip-path': 'inset(0 0 100% 0)'
          },
          '100%': {
            transform: 'translateY(0)',
            'clip-path': 'inset(0)'
          }
        },
        showInfo: {
          '0%': { opacity: 0 },
          '100%': { opacity: 1 }
        }
      },
      animation: {
        flyInSlow: 'flyIn 400ms linear 1000ms both',
        flyInMid: 'flyIn 600ms linear 200ms both',
        flyInFast: 'flyIn 600ms linear 100ms both',
        showInfo: 'showInfo 500ms linear 2s both'
      }
    },
    plugins: [require('@tailwindcss/forms')]
  }
}

export default config

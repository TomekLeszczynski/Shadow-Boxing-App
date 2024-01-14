const config = {
  content: ['./index.html', './src/**/*.{vue,ts,js}'],
  theme: {
    extend: {
      backgroundImage: {
        'small-hero': "url('@/assets/photos/hush-naidoo-jade-photography-23h4tMUzGZk-unsplash_opt.webp')",
        'big-hero': "url('@/assets/photos/zachary-kadolph-CoTJ4Srrl5E-unsplash.jpg')"
      },
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
        'infinite-scroll': {
          '0%': {
            transform: 'translateX(0)'
          },
          '100%': {
            transform: 'translateX(-100%)'
          }
        },
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
        flyInLeft: {
          '0%': {
            transform: 'translateX(-100%)',
            'clip-path': 'inset(0 0 0 100%)'
          },
          '100%': {
            transform: ' translateX(0)',
            'clip-path': 'inset(0)'
          }
        },
        flyOutBackground: {
          '0%': {
            transform: 'translateY(0)',
            backgroundColor: '#fed001'
          },
          '100%': {
            transform: 'translateY(-100%)',
            backgroundColor: '#7649be'
          }
        },
        showInfo: {
          '0%': { opacity: 0 },
          '100%': { opacity: 1 }
        }
      },
      animation: {
        flyInSlow: 'flyIn 800ms ease-out 1000ms both',
        flyInMid: 'flyIn 600ms ease-out 200ms both',
        flyInFast: 'flyIn 600ms ease-out 100ms both',
        showInfo: 'showInfo 500ms ease-out 2s both',
        headerFlyIn: 'flyIn 600ms ease-out both',
        flyInLeft: 'flyInLeft 1000ms cubic-bezier(0.5, 1, 0.5, 1) both',
        'infinite-scroll': 'infinite-scroll 10s linear infinite',
        'preloader-animation': 'flyOutBackground 700ms ease-in 2.7s forwards'
      }
    },
    plugins: [require('@tailwindcss/forms')]
  }
}

export default config

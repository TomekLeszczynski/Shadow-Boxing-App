const config = {
  content: ['./index.html', './src/**/*.{vue,ts,js}'],
  theme: {
    extend: {
      screens: {
        xs: '475px'
      },
      fontFamily: {
        sans: ['Public Sans', 'sans-serif']
      },
      colors: {
        'custom-white': '#E7E4DF',
        'custom-black': '#141414',
        'custom-grey': '#808080',
        'custom-orange-light': '#ed762f',
        'custom-orange-dark': '#ec642b'
      },
      keyframes: {
        //
        appearance: {
          '0%': {
            opacity: 0
          },
          '100%': {
            opacity: 100
          }
        },
        //
        'infinite-scroll': {
          '0%': {
            transform: 'translateX(0)'
          },
          '100%': {
            transform: 'translateX(-100%)'
          }
        },
        //
        'show-up': {
          '0%': {
            transform: 'translateY(100%)',
            'clip-path': 'inset(0 0 100% 0)'
          },
          '100%': {
            transform: 'translateY(0)',
            'clip-path': 'inset(0)'
          }
        },
        //
        'show-down': {
          '0%': {
            transform: 'translateY(-100%)',
            'clip-path': 'inset(100% 0 0 0)'
          },
          '100%': {
            transform: 'translateY(0)',
            'clip-path': 'inset(0)'
          }
        },
        //
        'show-from-left': {
          '0%': {
            transform: 'translateX(-100%)',
            'clip-path': 'inset(0 0 0 100%)'
          },
          '100%': {
            transform: ' translateX(0)',
            'clip-path': 'inset(0)'
          }
        },
        //
        'move-up': {
          '0%': {
            transform: 'translateY(0)'
          },
          '100%': {
            transform: 'translateY(-100%)'
          }
        },
        showInfo: {
          '0%': { opacity: 0 },
          '100%': { opacity: 1 }
        }
      },
      animation: {
        //
        'infinite-scroll': 'infinite-scroll 7s linear infinite',
        preloader: 'move-up 700ms ease-in forwards',
        'appear-slow-and-delayed': 'appearance 1s linear 700ms both',
        'appear-smooth': 'appearance 350ms ease both',
        'text-show-up-delayed': 'show-up 800ms ease-out 350ms both',
        'text-show-up': 'show-up 600ms ease-out both',
        'text-show-up-02': 'show-up 400ms ease-out 150ms both',
        'text-show-up-03': 'show-up 500ms ease-out 150ms both',
        'text-show-down': 'show-down 600ms ease-out both',
        'button-show-from-left': 'show-from-left 900ms ease-out both'
      }
    },
    plugins: [require('@tailwindcss/forms')]
  }
}

export default config

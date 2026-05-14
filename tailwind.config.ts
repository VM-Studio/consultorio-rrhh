import type { Config } from 'tailwindcss'
import forms from '@tailwindcss/forms'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        verde: {
          oscuro:  '#033D40',
          matus:   '#09756C',
          fuerte:  '#47C98C',
          medio:   '#0E5357',
        },
        fondo: {
          claro: '#E1DCCB',
        },
        tipo: {
          clara: '#EEEAD6',
        },
      },
      fontFamily: {
        serif: ['"Libre Baskerville"', 'Georgia', 'serif'],
        sans: ['Quicksand', 'system-ui', 'sans-serif'],
        heading: ['"Barlow Condensed"', 'system-ui', 'sans-serif'],
      },
      backgroundImage: {
        'gradient-hero': 'linear-gradient(to right, rgba(3,61,64,0.88) 0%, rgba(3,61,64,0.88) 55%, rgba(3,61,64,0.65) 100%)',
        'gradient-section': 'linear-gradient(180deg, #E1DCCB 0%, #EEEAD6 100%)',
        'gradient-gold': 'linear-gradient(135deg, #09756C 0%, #033D40 100%)',
        'gradient-subtle': 'linear-gradient(135deg, #EEEAD6 0%, #E1DCCB 100%)',
      },
      animation: {
        'fade-up': 'fadeUp 0.7s ease-out forwards',
        'fade-in': 'fadeIn 0.5s ease-out forwards',
        'slide-right': 'slideRight 0.7s ease-out forwards',
        'marquee': 'marquee 30s linear infinite',
      },
      keyframes: {
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideRight: {
          '0%': { opacity: '0', transform: 'translateX(-20px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-50%)' },
        },
      },
    },
  },
  // eslint-disable-next-line @typescript-eslint/no-require-imports
  plugins: [forms],
}

export default config

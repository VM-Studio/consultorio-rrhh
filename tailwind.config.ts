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
        cream: {
          50: '#EEF7F8',
          100: '#D9EFF1',
          200: '#B3DFE3',
        },
        charcoal: {
          800: '#1C1C1C',
          900: '#111111',
        },
        gold: {
          400: '#1E8C96',
          500: '#1A7A83',
          600: '#156470',
        },
        warm: {
          gray: '#8A8680',
        }
      },
      fontFamily: {
        serif: ['Playfair Display', 'Georgia', 'serif'],
        sans: ['DM Sans', 'system-ui', 'sans-serif'],
      },
      backgroundImage: {
        'gradient-hero': 'linear-gradient(135deg, #c8e9ec 0%, #b2dee2 50%, #c2e5e8 100%)',
        'gradient-section': 'linear-gradient(180deg, #EEF7F8 0%, #D9EFF1 100%)',
        'gradient-gold': 'linear-gradient(135deg, #1E8C96 0%, #156470 100%)',
        'gradient-subtle': 'linear-gradient(135deg, #D9EFF1 0%, #B3DFE3 100%)',
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

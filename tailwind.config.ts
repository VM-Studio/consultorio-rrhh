import type { Config } from 'tailwindcss'

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
          50: '#FAFAF7',
          100: '#F5F4EF',
          200: '#EEEBD8',
        },
        charcoal: {
          800: '#1C1C1C',
          900: '#111111',
        },
        gold: {
          400: '#C9A96E',
          500: '#B8924A',
          600: '#9A7A3A',
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
        'gradient-hero': 'linear-gradient(135deg, #1C1C1C 0%, #2D2A24 50%, #1C1C1C 100%)',
        'gradient-section': 'linear-gradient(180deg, #FAFAF7 0%, #F5F4EF 100%)',
        'gradient-gold': 'linear-gradient(135deg, #C9A96E 0%, #9A7A3A 100%)',
        'gradient-subtle': 'linear-gradient(135deg, #F5F4EF 0%, #EEEBD8 100%)',
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
  plugins: [require('@tailwindcss/forms')],
}

export default config

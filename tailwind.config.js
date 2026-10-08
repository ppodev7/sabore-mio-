/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        /* Vinho profundo do emblema — cor primária de marca e CTAs */
        wine: {
          50: '#FBF2F2',
          100: '#F5DEDF',
          200: '#E6B7B9',
          300: '#D08C90',
          400: '#AE565C',
          500: '#8E2C32',
          DEFAULT: '#7B2328',
          600: '#7B2328',
          700: '#5F1A1E',
          800: '#451215',
          900: '#2E0C0E',
        },
        /* Verde oliva/floresta das folhas do emblema */
        forest: {
          50: '#F2F5F2',
          100: '#DDE6DE',
          200: '#B6CBB9',
          300: '#8BAC91',
          400: '#5A8262',
          DEFAULT: '#2E5233',
          500: '#2E5233',
          600: '#264428',
          700: '#1E3823',
          800: '#152818',
          900: '#0E1B10',
        },
        /* Creme de fundo e superfícies quentes */
        cream: {
          DEFAULT: '#FBF7F0',
          100: '#FFFDFA',
          200: '#F6EFE3',
          300: '#EDE2D0',
        },
        /* Dourado queimado — acento; nunca texto pequeno sobre fundo claro */
        gold: {
          DEFAULT: '#C9A227',
          light: '#E3C370',
          pale: '#F0DFAE',
          dark: '#A8841C',
        },
      },
      fontFamily: {
        display: ['"Playfair Display"', 'Georgia', 'serif'],
        sans: ['Manrope', 'system-ui', '-apple-system', 'sans-serif'],
      },
      letterSpacing: {
        'ultra-wide': '0.28em',
      },
      boxShadow: {
        soft: '0 2px 8px -2px rgba(30, 56, 35, 0.08)',
        card: '0 18px 40px -18px rgba(30, 56, 35, 0.28)',
        'card-hover': '0 34px 60px -24px rgba(30, 56, 35, 0.4)',
        float: '0 40px 80px -30px rgba(30, 56, 35, 0.45)',
        glow: '0 0 0 1px rgba(201, 162, 39, 0.35), 0 20px 50px -20px rgba(201, 162, 39, 0.4)',
      },
      transitionTimingFunction: {
        'out-expo': 'cubic-bezier(0.16, 1, 0.3, 1)',
        'out-back': 'cubic-bezier(0.34, 1.56, 0.64, 1)',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-14px)' },
        },
        marquee: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        spinSlow: {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' },
        },
        ringPulse: {
          '0%': { transform: 'scale(1)', opacity: '0.45' },
          '100%': { transform: 'scale(1.75)', opacity: '0' },
        },
        fadeIn: {
          from: { opacity: '0' },
          to: { opacity: '1' },
        },
        slideDown: {
          from: { opacity: '0', transform: 'translateY(-10px)' },
          to: { opacity: '1', transform: 'translateY(0)' },
        },
      },
      animation: {
        float: 'float 7s ease-in-out infinite',
        marquee: 'marquee 40s linear infinite',
        'spin-slow': 'spinSlow 26s linear infinite',
        'ring-pulse': 'ringPulse 2.4s ease-out infinite',
        'fade-in': 'fadeIn 0.5s ease-out both',
        'slide-down': 'slideDown 0.35s cubic-bezier(0.16, 1, 0.3, 1) both',
      },
      backgroundImage: {
        'gold-line': 'linear-gradient(90deg, transparent, #C9A227, transparent)',
        'cream-fade': 'linear-gradient(180deg, #FBF7F0 0%, #F6EFE3 100%)',
      },
    },
  },
  plugins: [],
};

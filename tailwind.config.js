/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        olive: {
          DEFAULT: '#2E5233',
          dark: '#203a24',
          light: '#3d6c45',
        },
        tomato: {
          DEFAULT: '#C1272D',
          dark: '#9c1f24',
          light: '#d94850',
        },
        cream: '#FBF7F0',
        gold: {
          DEFAULT: '#D4A24C',
          dark: '#b8863a',
        },
      },
      fontFamily: {
        display: ['"Playfair Display"', 'serif'],
        sans: ['Manrope', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        card: '0 10px 30px -12px rgba(46, 82, 51, 0.25)',
        'card-hover': '0 20px 40px -14px rgba(46, 82, 51, 0.35)',
      },
      animation: {
        'fade-up': 'fadeUp 0.7s ease-out forwards',
      },
      keyframes: {
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(16px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [],
}

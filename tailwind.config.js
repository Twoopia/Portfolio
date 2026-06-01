/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        bg: '#0D0D0D',
        card: '#111111',
        elevated: '#161616',
        accent: '#7C3AED',
        'accent-light': '#9D6EFF',
        'text-primary': '#C9B99A',
        'text-bright': '#E8D5B5',
        'text-muted': '#6B5E4E',
        success: '#4ADE80',
        danger: '#F87171',
        warning: '#FBBF24',
      },
      fontFamily: {
        sans: ['DM Sans', 'sans-serif'],
        syne: ['Syne', 'sans-serif'],
      },
      transitionTimingFunction: {
        smooth: 'cubic-bezier(0.16, 1, 0.3, 1)',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-8px)' },
        },
      },
      animation: {
        float: 'float 5s ease-in-out infinite',
      },
    },
  },
  plugins: [],
}

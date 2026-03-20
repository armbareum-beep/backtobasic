/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        navy: {
          DEFAULT: '#1a2e4a',
          50: '#f0f4f9',
          100: '#dce6f0',
          200: '#b9cde1',
          300: '#8aadc9',
          400: '#5987ad',
          500: '#3a6893',
          600: '#2c5179',
          700: '#253f5e',
          800: '#1a2e4a',
          900: '#111e2f',
        },
        forest: {
          DEFAULT: '#2d7a4f',
          50: '#f0f9f4',
          100: '#daf1e5',
          200: '#b4e2cb',
          300: '#7ecba9',
          400: '#49ae84',
          500: '#2d7a4f',
          600: '#236040',
          700: '#1c4c32',
          800: '#163c28',
          900: '#0f2a1c',
        },
      },
      fontFamily: {
        sans: ['Inter', 'Noto Sans KR', 'sans-serif'],
      },
    },
  },
  plugins: [],
};

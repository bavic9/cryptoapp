/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '979px',
      xl: '1440px'
    },
    
    extend: {
      colors: {
        deepBlue: '#22202d',
        orange: '#ED760D',
        black: 'rgb(75, 72, 72)',
        bG: '#d5dae6',
      },
    },
  },
  plugins: [],
}

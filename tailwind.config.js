/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    screens: {
      sm: '480px',
      smd: '600px',
      md: '825px',
      lg: '976px',
      xlg: '1200px',
      xl: '1440px'
    },
    extend: {
     fontFamily: {
      'inter': ["Inter", "sans serif"],
      'pt': ["PT Serif", "serif"]
     },
     colors: {
      'customBlue' : '#2c80e8',
      'darkColor' : '#2a2a2a',
      'cyanBlue' : '#0693e3',
      'bluishGray' : '#abb8c3',
      'platinum': '#E5E4E2',
      'lightGray': '#f7f7f7',
      'darkBlue': '#203354'
     }
    },
  },
  plugins: [],
}


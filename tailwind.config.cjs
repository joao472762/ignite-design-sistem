/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontSize:{
      xs: `${'0.875rem' /*14px*/}`,
      sm: `${'1rem' /*16px*/}`,
      md: `${'1.125rem' /*18px*/}`,
      lg: `${'1.25rem' /*20px*/}`,
      xl: `${'1.5rem' /*24px*/}`,
      '2xl': `${'2rem' /*32px*/}`
    },
    colors: {
      'gray900': '#121214',
      'gray800': '#202024',
      'gray400': '#7C7C8A',
      'gray100': '#E1E1E6',

      'cyan500': '#88D8F7',
      'cyan300': '#9BE1FB',

      'black': '#000',
      'white': '#fff',
      'transparent': 'transparent'
      
    },
    extend: {
      fontFamily:{
        sans: 'Inter, sans-serif'
      },
    },
  },
  plugins: [],
}
 
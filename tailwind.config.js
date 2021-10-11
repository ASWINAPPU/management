module.exports = {
  purge: [
    './src/**/*.html',
    './src/**/*.js',
   ],
  
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      screens: {
        'cus': {'max': '420px'},
      },
      colors:{
        'sidebar':'#11101d',
        'nav-c':'#1d1b31',
        'home':'#E4E9F7',
        'menu':'#11101d',
        'sub':'#1d1b31'
      },
      height:{
        15:'3.75rem',
        13:'3.125rem'
      },
      inset:{
        2.5:'0.625rem'
      },
      transitionDelay: {
        '0': '0ms',
      },
      transitionDuration:{
        400:'400ms',
        0:'0ms'
      },
      width:{
        65:'16.25rem'
      },
      inset: {
        '65':'16.25rem',
        '17':'4.875rem'
      },
      lineHeight: {
        'logo': '3.125rem '
        
       },
       padding:{
        37:'9.375rem',
        0.7:'3px',
        1.7:'5px'

       },
       minWidth: {
        '7': '4.875rem',
       
       },
       margin:{
        '2.5':'0.625rem'
       },
       fontFamily: {
        'body': ['"Poppins"']
       }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}

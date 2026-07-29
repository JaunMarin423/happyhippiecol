/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html'],
  theme: {
    extend: {
      fontFamily: {
        display: ['Poppins', 'system-ui', 'sans-serif'],
        body: ['Inter', 'system-ui', 'sans-serif'],
      },
      colors: {
        brand: {
          fuchsia: '#E0215A',
          fuchsiaDark: '#B81A48',
          fuchsiaLight: '#FCE4EC',
          mustard: '#FFB833',
          mustardDark: '#E8A020',
          mustardText: '#CA921C',
          mustardLight: '#FFF3D6',
          cream: '#FFFDF9',
          sand: '#F8F4EE',
          dark: '#1A1A2E',
        },
      },
      borderRadius: {
        blob: '45% 55% 65% 35% / 50% 40% 60% 50%',
        pill: '9999px',
      },
      animation: {
        float: 'float 7s ease-in-out infinite',
        'float-delayed': 'float 7s ease-in-out 2s infinite',
        'fade-in': 'fadeIn 0.9s ease-out forwards',
        'slide-up': 'slideUp 0.7s ease-out forwards',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px) rotate(0deg)' },
          '50%': { transform: 'translateY(-18px) rotate(2deg)' },
        },
        fadeIn: {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(60px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
    },
  },
};

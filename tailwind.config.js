module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      keyframes: {
        'heart-fall': {
          '0%': { top: '0%', transform: 'translateX(0)', opacity: 1 },
          '20%': { top: '20%', transform: 'translateX(-10px)' },
          '40%': { top: '40%', transform: 'translateX(10px)' },
          '60%': { top: '60%', transform: 'translateX(-10px)' },
          '80%': { top: '80%', transform: 'translateX(10px)' },
          '100%': { top: '100%', transform: 'translateX(0)', opacity: 0 },
        },
      },
      animation: {
        'heart-fall': 'heart-fall 10s linear infinite',
      },
    },
    plugins: [],
  },
};

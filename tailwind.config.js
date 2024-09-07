module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        lightBlue: {
          50: '#ebf8ff',
          100: '#d0ebff',
          200: '#a6daff',
          300: '#73c6ff',
          400: '#47b4ff',
          500: '#1c9fff',
          600: '#0085e3',
          700: '#006db5',
        },
        red: {
          400: '#fc8181',
        }
      },
      boxShadow: {
        'custom-lg': '0 4px 8px rgba(0, 0, 0, 0.2), 0 6px 16px rgba(0, 0, 0, 0.2)',
      },
    },
  },
  plugins: [],
}

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        fra: {
          black: '#111111',
          gold: '#A28D5B',
          'gold-light': '#C4AD7B',
          'gold-dark': '#8B7648',
          white: '#FFFFFF',
          cream: '#FAF8F5',
          gray: '#6B7280',
          'gray-light': '#F3F4F6',
          'gray-dark': '#374151',
        },
      },
      fontFamily: {
        serif: ['Playfair Display', 'Georgia', 'serif'],
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

// tailwind.config.js
export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
  sans: ['"Instrument Sans"', 'sans-serif'], // Set as default for 'font-sans'
  instrumentSans: ['"Instrument Sans"', 'sans-serif'],
  montserrat: ['Montserrat', 'sans-serif'],
  merchant: ['Merchant', 'sans-serif'],
}

    },
    screens: {
      sm: '640px',
      md: '768px',
      lg: '1025px',
      xl: '1280px',
      '2xl': '1536px',
    },
  },
  plugins: [],
};

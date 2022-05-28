const defaultTheme = require( 'tailwindcss/defaultTheme' );

module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    container: {
      center: true,
    },
    extend: {
      fontFamily: {
        sans: ['Inter var', ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [
    require( '@tailwindcss/forms' ),
    require( '@tailwindcss/typography' ),
  ],
}

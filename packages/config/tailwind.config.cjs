const colors = require('tailwindcss/colors');
const brandColor = colors.blue;
/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    './index.html',
    '../../packages/ui/**/*.{ts,tsx}',
    './src/**/*.{js,ts,jsx,tsx}',
    '../../apps/notes/**/*.{js,ts,jsx,tsx}',
    '../../apps/modules/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        // NOTE: We modify the gray color, as the default Tailwind gray color is heavily saturated
        // with blue, which makes it look strange in dark mode. This gray color is more balanced,
        // and works better for sites supporting dark mode.
        gray: colors.gray,
        // Add a new "brand" color to all Tailwind utilities, so that we can easily change it.
        brand: brandColor,
      },
      // Modify the default ring color so that it matches the brand color:
      ringColor: {
        DEFAULT: brandColor['500'],
      },
    },
  },
  plugins: [require('@tailwindcss/typography'), require('@tailwindcss/aspect-ratio'), require('@tailwindcss/forms')],
};

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", // Include all files in src with these extensions
  ],
  theme: {
    extend: {
      screens: {
        'xs': '480px', // Extra small devices
        'sm': '640px', // Overrides the default 'sm' breakpoint
        'md': '768px',
        'lg': '1080px',
        'xl': '1280px',
        '2xl': '1536px',
        '3xl': '1920px', // New custom breakpoint
      },

    },
  },
  plugins: [],
};

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
      backgroundImage: {
        'heropattern': "url('https://assets.nflxext.com/ffe/siteui/vlv3/dadb130d-463b-4e5b-b335-038ed912059e/web_tall_panel/IN-en-20241118-TRIFECTA-perspective_19bdd42f-315f-4636-b5fb-3cabd8eb471c_large.jpg')",
      },

      keyframes: {
        slide: {
          "0%": { transform: "translateX(0px)" },
          "100%": { transform: "translateX(-76%)" },
        },
      },
      animation: {
        slide: "slide 120s linear infinite",
      },
    },
  },
  plugins: [],
};

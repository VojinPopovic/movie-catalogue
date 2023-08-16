/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      aspectRatio: {
        "4/3": "4 / 3",
      },
    },
    screens: {
      xxs: "250px",
      // => @media (min-width: 250px) { ... }

      xs: "450px",
      // => @media (min-width: 400px) { ... }

      sm: "690px",
      // => @media (min-width: 690px) { ... }

      md: "860px",
      // => @media (min-width: 860px) { ... }

      content: "1080px",
      // => @media (min-width: 1080px) { ... }

      lg: "1100px",
      // => @media (min-width: 1100px) { ... }

      xl: "1280px",
      // => @media (min-width: 1280px) { ... }
    },
  },
  plugins: [],
};

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./app/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        "shadow-move": "shadowMove 6s ease infinite",
      },
      colors: {
        designColor: "#FF6347",
        textColor: "#aeaeae",
      },

      keyframes: {
        shadowMove: {
          "0%": {
            boxShadow:
              "0px 0px 15px 5px rgba(255, 99, 71, 0.2), 0px 0px 25px 10px rgba(255, 99, 71, 0.1)",
          },
          "50%": {
            boxShadow:
              "0px 10px 30px 15px rgba(255, 99, 71, 0.2), 0px 10px 50px 20px rgba(255, 99, 71, 0.1)",
          },
          "100%": {
            boxShadow:
              "0px 0px 15px 5px rgba(255, 99, 71, 0.2), 0px 0px 25px 10px rgba(255, 99, 71, 0.1)",
          },
        },
      },
    },
  },
  plugins: [],
};

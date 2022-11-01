/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        GangwonEdu: ["GangwonEdu_OTFBoldA", "sans-serif"],
        loginTitle: ["RixInooAriDuriR", "sans-serif"],
      },
    },
  },
  plugins: [require("tailwind-scrollbar-hide")],
};

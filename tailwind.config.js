module.exports = {
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        primary: "#0D5F9A",
        secondaryText: "#858585",
        tertiaryText: '##666666',
        pentaText: '#999999',
        backgroundOne: "#F5F5F5",
        backgroundTwo: '#EDEDED',
        link: "#346BD4",
        Revenues: '#DDEFE0',
        Transactions: '#F4ECDD',
        Likes: '#EFDADA',
        Users: '#DEE0EF',
        lightRed: '#E9A0A0',
        lightGreen: '#9BDD7C',
        lightYellow: '#F6DC7D',
        lightGrey: '#B0B0B0',
        lightBlue: '#519BD0',
        darkGreen: '#88E15E',
        dangerRed: '#AF0000',
        lightGreyTwo: '#EAEAEA'
      },

      spacing: {
        five: "5px",
        ten: "10px",
        fifteen: "15px",
        eighteen: '18px',
        twenty: "20px",
        thirty: "30px",
        fifty: "50px",
        sixty: "60px",
        hundered: '100px'
      },
      borderRadius: {
        default: "10px",
        medium: "20px",
        large: "30px",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};

module.exports = {
  options: {
    parser: require("postcss-scss"),
  },
  plugins: [
    require("autoprefixer"),
    require("postcss-sass"),
    require("postcss-import"),
    require("precss"),
  ],
};

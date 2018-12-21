module.exports = {
  parser: "babel-eslint",
  extends: ["airbnb", "prettier"],
  plugins: ["import"],
  settings: {
    "import/resolver": {
      webpack: {
        config: "./webpack.config.js"
      }
    }
  },
  rules: {
    "no-underscore-dangle": "off",
    "react/jsx-filename-extension": "off",
    "react/forbid-prop-types": "off",
    "import/prefer-default-export": "off"
  },
  env: {
    browser: true,
    es6: true
  }
};

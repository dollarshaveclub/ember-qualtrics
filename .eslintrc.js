module.exports = {
  extends: [
    'airbnb/base',
    'plugin:dollarshaveclub/ember',
  ],
  plugins: [
    'dollarshaveclub',
  ],
  env: {
    browser: true,
    node: true,
    embertest: true,
  },
  globals: {
    QSI: true,
    embertest: true,
  },
};

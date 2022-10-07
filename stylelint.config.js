module.exports = {
  extends: [
    'stylelint-config-recommended',
    'stylelint-a11y/recommended',
    'stylelint-order-config-standard',
  ],
  plugins: ['stylelint-order'],
  rules: {
    'color-hex-case': 'lower',
    'order/order': ['custom-properties'],
  },
}

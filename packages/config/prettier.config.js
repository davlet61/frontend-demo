/** @type {import('prettier').Config} */
module.exports = {
  semi: true,
  trailingComma: 'all',
  singleQuote: true,
  printWidth: 120,
  tabWidth: 2,
  bracketSpacing: true,
  arrowParens: 'always',
  importOrderSeparation: true,
  importOrder: ['^ui/(.*)$', '(.css)$', '<THIRD_PARTY_MODULES>', '^[./]'],
  plugins: [require.resolve('@trivago/prettier-plugin-sort-imports'), require('prettier-plugin-tailwindcss')],
};

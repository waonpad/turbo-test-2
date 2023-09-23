module.exports = {
  extends: ['stylelint-config-standard-scss', 'stylelint-config-recess-order'],
  ignorePath: [
    'node_modules/',
    '.next/',
    'out/',
    'public/',
    '.prettierrc.js',
    '.eslintrc.js',
    'tailwind.config.js',
    'next.config.js',
    'postcss.config.js',
    'jest.config.js',
  ],
};

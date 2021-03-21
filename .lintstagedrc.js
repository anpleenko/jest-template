module.exports = {
  '*.{ts,tsx,js,jsx}': ['prettier --write'],
  'package.json': ['sort-package-json', 'prettier --write'],
};

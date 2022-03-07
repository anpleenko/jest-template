module.exports = {
  presets: ['@babel/env', ['@babel/react', { runtime: 'automatic' }]],
  env: {
    test: { plugins: ['babel-plugin-import-remove-resource-query'] },
  },
  plugins: ['@babel/plugin-syntax-jsx'],
};

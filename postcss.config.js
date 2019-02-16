module.exports = {
  parser: 'postcss-scss',
  map: true,
  plugins: {
    'postcss-import': {},
    'postcss-preset-env': {},
    cssnano: {},
    autoprefixer: {
      browsers: [
        'last 1 version',
        '> 1%',
        'maintained node versions',
        'not dead'
      ]
    }
  }
};

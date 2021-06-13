const path = require('path')

module.exports = {
  mode: 'production',
  entry: './src/ReactAntdown.js',
  output: {
    path: path.resolve('dist'),
    filename: 'ReactAntdown.js',
    libraryTarget: 'commonjs2'
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /(node_modules)/,
        use: 'babel-loader'
      }
    ]
  }
}

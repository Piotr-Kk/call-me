const path = require('path');

module.exports = {

  entry: './src/index.js',

  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'index_bundle.js'
  },

  devServer: {
    contentBase: path.join(__dirname, 'src'),
    index: 'index.html',
    port: 8000
  },

};
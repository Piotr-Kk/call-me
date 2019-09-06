const path = require('path');

module.exports = {
  entry: './src/index.tsx',
  
  devtool: 'source-map',
  mode: 'none',

  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, './dist/')
  },

  resolve: {
    extensions: ['.ts', '.tsx', '.js']
  },

  module: {
    rules: [
      {
        test: /\.ts(x?)$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'ts-loader'
          }
        ]
      },
      {
        test:/\.js$/,
        enforce: 'pre',
        loader: 'source-map-loader'
      }
    ]
  },

  externals: {
    'react': 'React',
    'react-dom': 'ReactDOM'
  },

  devServer: {
    contentBase: path.join(__dirname, './'),
    writeToDisk: true
  },
  
  watch: true

};
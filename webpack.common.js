const path = require('path');

module.exports = {
  entry: {
    app: [
      './src/assets/entry.js'
    ]
  },
  output: {
    filename: 'js/[name].js',
    path: path.resolve(__dirname, 'src/assets/')
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: {
          loader: 'babel-loader'
        }
      }
    ]
  },
  plugins: [
    
  ]
};
const merge = require('webpack-merge');
const common = require('./webpack.common.js');
const WebpackShellPlugin = require('webpack-shell-plugin');

module.exports = merge(common, {
  mode: 'development',
  devtool: 'inline-source-map',
  devServer: {
    contentBase: './dist',
    overlay: true
  },
  plugins: [
    new WebpackShellPlugin({ onBuildStart: ['npm run build'], onBuildEnd: ['echo "Webpack End"'] })
  ]
});
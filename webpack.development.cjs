const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin');

/** Webpack development environment options */
module.exports = {
  mode: 'development',
  output: {
    filename: '[name].bundle.js',
    chunkFilename: '[name].bundle.js'
  },
  devtool: 'eval-source-map',
  devServer: {
    port: 5000,
    open: true,
    hot: true
  },
  plugins: [new ReactRefreshWebpackPlugin()]
};

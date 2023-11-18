const { join } = require('path');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const CompressionWebpackPlugin = require('compression-webpack-plugin');
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');
const webpack = require('webpack');

const IS_DEPLOYMENT = process.env.NODE_ENV === 'deployment';

/** Webpack production environment options */
module.exports = {
  mode: 'production',
  output: {
    filename: '[name].[fullhash].bundle.js',
    chunkFilename: '[name].[fullhash].bundle.js',
    pathinfo: false
  },
  devtool: !IS_DEPLOYMENT ? 'source-map' : false,
  plugins: [
    new CopyWebpackPlugin({
      patterns: [{ from: join(__dirname, 'robots.txt') }]
    }),
    ...(!IS_DEPLOYMENT
      ? [new webpack.SourceMapDevToolPlugin({ filename: 'debug/[file].map' })]
      : [new CompressionWebpackPlugin({ threshold: 860 })]),
    new BundleAnalyzerPlugin({
      analyzerMode: 'disabled',
      generateStatsFile: true,
      statsFilename: 'reports/bundles.json',
      logLevel: 'error'
    })
  ]
};

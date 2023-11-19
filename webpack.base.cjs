const { join } = require('path');
const DotenvWebpackPlugin = require('dotenv-webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const postcssNormalize = require('postcss-normalize');
const postcssPresetEnv = require('postcss-preset-env');
const cssnanoPlugin = require('cssnano');
const { merge } = require('webpack-merge');

const IS_DEV_ENV = process.env.NODE_ENV === 'development';
const MAX_INLINE_SIZE = 8192;

const baseConfig = {
  context: __dirname,
  target: 'browserslist',
  entry: './src/main.tsx',
  output: {
    path: join(__dirname, 'public/'),
    clean: true
  },
  resolve: { extensions: ['.ts', '.mts', '.cts', '.tsx', '.js'] },
  module: {
    rules: [
      // TypeScript/JavaScript module rule.
      {
        test: /\.(?:[cm]?ts|tsx)$/i,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [
              ['@babel/preset-env', { useBuiltIns: 'usage', corejs: '3.32' }],
              '@babel/preset-react',
              '@babel/preset-typescript'
            ],
            plugins: [
              IS_DEV_ENV
                ? 'react-refresh/babel'
                : '@babel/plugin-transform-runtime'
            ]
          }
        }
      },
      // SASS module rule.
      {
        test: /\.s?css$/i,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
          {
            loader: 'postcss-loader',
            options: {
              postcssOptions: {
                plugins: [
                  postcssNormalize(),
                  postcssPresetEnv(),
                  cssnanoPlugin()
                ]
              }
            }
          },
          'sass-loader'
        ]
      },
      // Component-type SVG module rule.
      {
        test: /\.svg$/i,
        issuer: /\.tsx/,
        resourceQuery: { not: [/url/] },
        use: ['@svgr/webpack']
      },
      // Static SVG module rule.
      {
        test: /\.svg$/i,
        type: 'asset',
        resourceQuery: /url/,
        generator: { filename: 'images/[name].[hash][ext]' },
        parser: { dataUrlCondition: { maxSize: MAX_INLINE_SIZE } }
      },
      // Image module rule.
      {
        test: /\.(?:bmp|webp|gif|jpe?g|png|avif|ico)$/i,
        type: 'asset',
        generator: { filename: 'images/[name].[hash][ext]' },
        parser: { dataUrlCondition: { maxSize: MAX_INLINE_SIZE } }
      },
      // Font module rule.
      {
        test: /\.(?:woff2?|eot|ttf|otf)$/i,
        type: 'asset',
        generator: { filename: 'fonts/[name].[hash][ext]' },
        parser: { dataUrlCondition: { maxSize: MAX_INLINE_SIZE } }
      }
    ]
  },
  plugins: [
    new DotenvWebpackPlugin({ path: join(__dirname, '.env') }),
    new HtmlWebpackPlugin({ template: join(__dirname, './src/main.html') }),
    new MiniCssExtractPlugin({
      filename: IS_DEV_ENV
        ? '[name].bundle.css'
        : '[name].[fullhash].bundle.css',
      chunkFilename: IS_DEV_ENV
        ? '[name].bundle.css'
        : '[name].[fullhash].bundle.css'
    })
  ]
};

const environmentConfig = IS_DEV_ENV
  ? require('./webpack.development.cjs')
  : require('./webpack.production.cjs');

/** Webpack configuration object. */
module.exports = merge(baseConfig, environmentConfig);

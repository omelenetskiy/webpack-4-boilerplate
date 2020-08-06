const path = require('path');
const webpack = require('webpack');
const ExtractCssChunks = require('extract-css-chunks-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

const isDevelopment = process.env.NODE_ENV !== 'production';

module.exports = {
  entry: {
    bundle: [
      '@babel/polyfill',
      isDevelopment
        && 'webpack-hot-middleware/client?path=/__webpack_hmr&timeout=20000',
      './src/index',
    ].filter(Boolean),
  },
  output: {
    filename: '[name].js',
    path: path.resolve('./dist/js/'),
    publicPath: '/js/',
  },
  mode: isDevelopment ? 'development' : 'production',
  module: {
    rules: [
      {
        exclude: /node_modules/,
        test: /\.(js|jsx)$/,
        use: 'babel-loader',
      },
      {
        test: /\.css$/,
        use: [
          {
            loader: ExtractCssChunks.loader,
            options: {
              hmr: true,
              reloadALL: true,
            },
          },
          'style-loader',
          'css-loader',
        ],
      },
      {
        test: /\.s[ac]ss$/i,
        use: [
          {
            loader: ExtractCssChunks.loader,
            options: {
              hmr: true,
              reloadALL: true,
            },
          },
          'style-loader',
          'css-loader',
          'sass-loader',
        ],
      },
      {
        test: /\.(png|jpg|gif|woff|woff2|eot|ttf|svg)$/,
        use: [
          {
            loader: 'file-loader',
            options: {},
          },
        ],
      },
    ],
  },
  resolve: {
    extensions: ['*', '.js', '.jsx'],
  },
  plugins: [
    new ExtractCssChunks(),
    isDevelopment && new webpack.HotModuleReplacementPlugin(),
    !isDevelopment && new CleanWebpackPlugin(['dist'], { root: path.resolve('./') }),
    !isDevelopment
      && new CopyWebpackPlugin([
        {
          context: 'src/static',
          from: '**/*',
          to: '../',
        },
      ]),
  ].filter(Boolean),
};

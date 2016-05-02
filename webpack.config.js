/* eslint strict: 0 */
'use strict';

const webpack = require('webpack');

module.exports = {
  devtool: 'source-map',
  entry: './index.js',
  module: {
    loaders: [
      {
        test: /\.js/,
        loaders: ['babel'],
        exclude: /node_modules/
      },
      {
        test: /\.json/,
        loaders: ['json'],
        exclude: /node_modules/
      }
    ]
  },
  output: {
    path: '.',
    filename: 'bundle.js',
  },
  resolve: {
    extensions: ['', '.js', '.json'],
  },
  plugins: [
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.DefinePlugin({
      '__DEV__': false,
      'process.env': {
        'NODE_ENV': JSON.stringify('production')
      }
    }),
    new webpack.optimize.UglifyJsPlugin()
  ]
}

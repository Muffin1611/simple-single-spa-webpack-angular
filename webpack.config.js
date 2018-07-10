const path = require('path');
const webpack = require('webpack');
const express = require('express');
const CleanWebpackPlugin = require('clean-webpack-plugin')
const ContextReplacementPlugin = require('webpack/lib/ContextReplacementPlugin');

module.exports = {
  entry: {
    'root-application': 'src/root-application/root-application.js',
    'common-dependencies': [
      // We want just one version of angular, so we put it into the common dependencies
      'core-js/client/shim.min.js',
      '@angular/common',
      '@angular/compiler',
      '@angular/core',
      '@angular/platform-browser-dynamic',
      '@angular/router',
      'reflect-metadata',
    ],
  },
  output: {
    publicPath: '/dist/',
    filename: '[name].js',
    path: path.resolve(__dirname, 'dist'),
  },
  module: {
    rules: [{
        test: /\.js?$/,
        exclude: [path.resolve(__dirname, 'node_modules')],
        loader: 'babel-loader',
      },
      {
        test: /\.tsx?$/,
        loader: 'ts-loader',
      },
      {
          test: /\.css$/,
          use: ['style-loader', 'css-loader']
      },
    ],
  },
  node: {
    fs: 'empty'
  },
  resolve: {
    modules: [
      __dirname,
      'node_modules',
    ],
    extensions: ['.ts', '.tsx', '.js', '.json']
  },
  plugins: [
    new CleanWebpackPlugin(['dist']),
    new webpack.optimize.CommonsChunkPlugin({
      name: 'common-dependencies',
    }),
    new ContextReplacementPlugin(
      /(.+)?angular(\\|\/)core(.+)?/,
      path.resolve(__dirname, '../src')
    )
  ],
  devtool: 'source-map',
  externals: [],
  devServer: {
      before: function(app) {
          app.use('/static', express.static(__dirname + '/static'))
      },
    historyApiFallback: true
  }
};
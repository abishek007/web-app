const webpack = require('webpack');
const path = require('path');
const { merge } = require('webpack-merge'); // merge the base config + client config
const baseConfig = require('./webpack.base.js');

const config = {
  mode: 'development',
  // Tell webpack the root file of our client application
  entry: './src/client/index.js',
  // Tell webpack where to put the output file that is generated
  output: {
    path: path.resolve(__dirname, 'public'),
    filename: 'bundle.js',
    publicPath: '/'
  }
};

module.exports = merge(baseConfig, config)

const webpack = require('webpack');
const path = require('path');
const { merge } = require('webpack-merge'); // merge the base config + server config
const baseConfig = require('./webpack.base.js');

const config = {
  // Inform webpack that we are building a bundle for node.js rather that for the browser
  target: 'node',
  mode: 'development',
  // Tell webpack the root file of our Server application
  entry: './src/server/server.js',
  // Tell webpack where to put the output file that is generated
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'server.js',
    publicPath: '/'
  }
};

module.exports = merge(baseConfig, config)

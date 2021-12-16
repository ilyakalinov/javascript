'use strict';

let path = require('path');

module.exports = {
  mode: 'production',
  entry: './src/index.js',
  output: {
    filename: 'bundle.js',
    path: __dirname + '/build/js'
  },
  watch: true,

  devtool: "source-map",

  module: {}
};

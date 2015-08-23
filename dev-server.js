'use strict';

// var webpack = require('webpack');
// var WebpackDevServer = require('webpack-dev-server');
// var config = require('./webpack.config');
// new WebpackDevServer(webpack(config), {
  // hot: true,
  // historyApiFallback: true,
  // stats: {
    // colors: true,
  // }
// })
// .listen(config.port, config.ip, function(err) {
  // if (err) {
    // throw err;
  // }
  // console.log('Listening at ' + config.ip + ':' + config.port);
// });


var Webpack = require('webpack');
var WebpackDevServer = require('webpack-dev-server');
var webpackConfig = require('./webpack.config.js');
var path = require('path');

module.exports = function () {

  // First we fire up Webpack an pass in the configuration we
  // created
  var bundleStart = null;
  var compiler = Webpack(webpackConfig);

  // We give notice in the terminal when it starts bundling and
  // set the time it started
  compiler.plugin('compile', function() {
    console.log('Bundling...');
    bundleStart = Date.now();
  });

  // We also give notice when it is done compiling, including the
  // time it took. Nice to have
  compiler.plugin('done', function() {
    console.log('Bundled in ' + (Date.now() - bundleStart) + 'ms!');
  });

  var bundler = new WebpackDevServer(compiler, {

    // We need to tell Webpack to serve our bundled application
    // from the build path. When proxying:
    // http://localhost:3000/build -> http://localhost:8080/build
    publicPath: '/build/',

    // Configure hot replacement
    hot: true,

    // The rest is terminal configurations
    quiet: false,
    // inline: true,
    noInfo: true,
    stats: {
      colors: true
    }
    // proxy: {
      // '/\/socket\.io*/': 'http://localhost:3001/socket.io'
    // }
  });

  // We fire up the development server and give notice in the terminal
  // that we are starting the initial bundle
  bundler.listen(webpackConfig.port, webpackConfig.ip, function () {
    console.log('Bundling project, please wait...');
  });

};

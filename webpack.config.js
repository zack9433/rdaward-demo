'use strict';

var path = require('path');
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var bourbon = require('node-bourbon').includePaths;
var bowerRoot = path.join(__dirname, 'bower_components');
var nodeRoot = path.join(__dirname, 'node_modules');
var appRoot = path.join(__dirname, 'app');
var NODE_ENV = process.env.NODE_ENV;
var config = {
  context: appRoot,
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'bundle.js',
    // Everything related to Webpack should go through a build path,
    // localhost:3000/build. That makes proxying easier to handle
    publicPath: '/build/'
  },
  resolve: {
    root: [bowerRoot, nodeRoot],
    alias: {
      'socket.io-client': bowerRoot + '/socket.io-client/socket.io.js',
      'bootstrap': bowerRoot + '/bootstrap/dist/css/bootstrap.min.css'
    },
    extensions: ['', '.js', '.json', 'html', 'scss', 'css']
  },
  resolveLoader: {
    root: nodeRoot
  },
  module: {
    // preLoaders: [
      // {test: /\.js$/, loader: "eslint", exclude: /(node_modules|bower_components)/}
    // ],
    loaders: [
      {test: /\.js$/, loader: 'ng-annotate!babel', exclude: /(node_modules|bower_components)/},
      {test: /\.html$/, loader: 'ng-cache?prefix=[dir]/[dir]', exclude: /(node_modules|bower_components)/},
      {test: /\.css$/, loader: 'style!css'},
      {test: /\.scss/, loader: 'style!css!sass?includePaths[]=' + bourbon},
      {test: /\.(png|jpg|gif|jpeg)$/, loader: 'url-loader?limit=8192'},
      {test: /\.(woff|woff2)$/, loader: "url?limit=10000&minetype=application/font-woff"},
      {test: /\.ttf$/, loader: "file"},
      {test: /\.eot$/, loader: "file"},
      {test: /\.svg$/, loader: "file"}
    ],
    noParse: [
      /angular*/,
      /socket.io/
    ]
  },
  plugins: [
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.DefinePlugin({
      __TEST__: 'test' === NODE_ENV,
      __DEV__: 'development' === NODE_ENV,
      __RELEASE__: 'production' === NODE_ENV
    }),
    new webpack.ResolverPlugin(
      new webpack.ResolverPlugin.DirectoryDescriptionFilePlugin('bower.json', ['main'])
    ),
    new webpack.NoErrorsPlugin()
  ]
};

if ('test' === NODE_ENV) {
}

if ('development' === NODE_ENV) {
  config.ip = 'localhost';
  config.port = 8080;
  config.debug = true;
  config.devtool = 'source-map';
  config.entry = {
    'webapp': [
      // For hot style updates
      'webpack/hot/dev-server',
      // The script refreshing the browser on none hot updates
      'webpack-dev-server/client?http://' + config.ip + ':' + config.port,
      bowerRoot + '/angular/angular.js',
      './app.js'
    ]
  };
  config.plugins.push(
    new webpack.HotModuleReplacementPlugin()
    // new HtmlWebpackPlugin({
      // template: 'app/index.html',
      // inject: 'body',
      // hash: true
    // })
  );
}

if ('production' === NODE_ENV) {
  config.devtool = 'source-map';
  config.entry = {
    'webapp': './app.js'
  };
  config.plugins.push(
    new webpack.optimize.DedupePlugin()
  );
}

module.exports = config;

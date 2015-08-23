var express = require('express');
var path = require('path');
var httpProxy = require('http-proxy');
var webpackConfig = require('./webpack.config.js');
var http = require('http');
var proxy = httpProxy.createProxyServer({
  changeOrigin: true,
  ws: true
});
var chokidar = require('chokidar');

var watcher = chokidar.watch('app/components', {
  ignored: /[\/\\]\./, persistent: true
});
var app = express();
// We need to use basic HTTP service to proxy
// websocket requests from webpack
var proxyServer = http.createServer(app);
var io = require('socket.io')(proxyServer);

var isProduction = process.env.NODE_ENV === 'production';
var port = isProduction ? 8080 : 3001;
var publicPath = path.resolve(__dirname, 'app');

app.use(express.static(publicPath));

// We only want to run the workflow when not in production
if (!isProduction) {

  // We require the bundler inside the if block because
  // it is only needed in a development environment. Later
  // you will see why this is a good idea
  var bundle = require('./dev-server.js');
  bundle();

  // Any requests to localhost:3000/build is proxied
  // to webpack-dev-server
  app.all('/build/*', function (req, res) {
    proxy.web(req, res, {
      target: 'http://' + webpackConfig.ip + ':' + webpackConfig.port
    });
  });
  app.all('/socket.io*', function (req, res) {
    proxy.web(req, res, {
      target: 'http://' + webpackConfig.ip + ':' + webpackConfig.port
    });
  });
  app.all('/hot-update.js(on)?$', function (req, res) {
    proxy.web(req, res, {
      target: 'http://' + webpackConfig.ip + ':' + webpackConfig.port
    });
  });

  // It is important to catch any errors from the proxy or the
  // server will crash. An example of this is connecting to the
  // server when webpack is bundling
  proxy.on('error', function(e) {
    // Just catch it
  });

  proxyServer.on('upgrade', function (req, socket, head) {
    proxy.ws(req, socket, head);
  });

  proxyServer.listen(port, function () {
    console.log('Server running on port ' + port);
  });

}

watcher
  .on('addDir', function(path) {
    console.log('Directory', path, 'has been added');
    io.emit('addDir', JSON.stringify(path));
  })
  .on('unlinkDir', function(path) {
    console.log('Directory', path, 'has been removed');
    io.emit('unlinkDir', JSON.stringify(path));
  })
  .on('error', function(error) { console.log('Error happened', error); })
  .on('ready', function() { console.log('Initial scan complete. Ready for changes.'); });

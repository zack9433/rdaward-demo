import 'bootstrap';
import io from 'socket.io-client';
import 'angular-ui-router';
import 'angular-socket-io';
import 'oclazyload';
import './components/hello-world';
import './common/navbar';

angular.module('webapp', [
  'ui.router',
  'oc.lazyLoad',
  'btford.socket-io',
  'webapp.hello-world',
  'webapp.navbar'
])
.config(($stateProvider, $urlRouterProvider) => {
  $stateProvider.state('home', {
    url: '/',
    template: `<div navbar></div>
              <div hello-world></div>`,
  });

  $urlRouterProvider.otherwise('/');
})
.run(($ocLazyLoad, webappSocket) => {
  // $ocLazyLoad.load('dist/bundle.template-generator.js');
})
.service('webappSocket', (socketFactory) => {
  var ioSocket = io.connect();
  var socket = socketFactory({
    ioSocket: ioSocket
  });
  socket.on('addDir', function(msg) {
    console.log('add dir', JSON.parse(msg));
  });
  return socket;
});

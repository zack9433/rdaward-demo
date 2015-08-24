// Vendors
import 'bootstrap';
// import io from 'socket.io-client';
import 'angular-ui-router';
// import 'angular-socket-io';
import 'oclazyload';
// Routes
import homeConfig from './routes/home.config';
// Componetns
import './components/hello-world';
// Common module
import './common/navbar';
// Utils
import Utils from './utils';

var app = angular.module('webapp', [
  'ui.router',
  'oc.lazyLoad',
  'btford.socket-io',
  'webapp.hello-world',
  'webapp.navbar'
]);

Utils(app);

app.config(($stateProvider, $urlRouterProvider) => {
  $stateProvider.state('home', homeConfig);
  $urlRouterProvider.otherwise('/');
});

app.run(($ocLazyLoad, socketService) => {
  // $ocLazyLoad.load('dist/bundle.template-generator.js');
});

// Vendors
import 'bootstrap';
import 'angular-ui-router';
import 'angular-socket-io';
import 'oclazyload';
// Routes
import Routes from './routes';
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

Routes(app);
Utils(app);

// app.config(($stateProvider, $urlRouterProvider) => {
  // $stateProvider.state('home', homeConfig);
  // $urlRouterProvider.otherwise('/');
// });

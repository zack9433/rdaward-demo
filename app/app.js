// Vendors
import 'bootstrap';
import 'angular-ui-router';
import 'angular-socket-io';
import 'oclazyload';
// Routes
import Routes from './routes';
// Common module
import CommonModule from './common';
// Utils
import Utils from './utils';

var app = angular.module('webapp', [
  'ui.router',
  'oc.lazyLoad',
  'btford.socket-io'
]);

Routes(app);
CommonModule(app);
Utils(app);

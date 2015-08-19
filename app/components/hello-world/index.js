require('angular');
require('./tpl.html');
// import HelloWorldController from './controller.js';
import HelloWorldDirective from './directive.js';

angular
  .module('webapp.hello-world', [])
  // .controller('HelloWorldController', HelloWorldController)
  .directive('helloWorld', HelloWorldDirective.directiveFactory);

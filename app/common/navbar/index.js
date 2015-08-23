import './navbar.tpl.html';
import NavbarController from './navbar.controller.js';
import NavbarDirective from './navbar.directive.js';

angular.module('webapp.navbar', [])
  .controller('NavbarController', NavbarController)
  .directive('navbar', NavbarDirective.directiveFactory);

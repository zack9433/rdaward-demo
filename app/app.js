require('bootstrap');
require('angular');
require('angular-ui-router');
import './components/hello-world';

angular.module('webapp', [
  'ui.router',
  'webapp.hello-world'
])
.config(($stateProvider, $urlRouterProvider) => {
  $stateProvider.state('home', {
    url: '/',
    template: `<div>
                <div hello-world></div hello-world>
              </div>`,
  });

  $urlRouterProvider.otherwise('/');
});

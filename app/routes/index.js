import HomeConfig from './home.config';
export default app => {
  app.config(($stateProvider, $urlRouterProvider) => {
    $stateProvider.state('home', HomeConfig);
    $urlRouterProvider.otherwise('/');
  });
}

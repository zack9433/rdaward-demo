import './navbar';
export default (app) => {
  app.run(($ocLazyLoad) => {
    $ocLazyLoad.inject(['webapp.navbar']);
  });
}

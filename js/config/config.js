app.config(function($stateProvider, $urlRouterProvider,  $mdThemingProvider) {

  $urlRouterProvider.otherwise("login");

  $urlRouterProvider.otherwise(function ($injector, $location) {
    return '/login';
  });
  //
  // Now set up the states
  $stateProvider

  .state('login', {
     url:"/login",
    templateUrl:"views/login/login.html",
    controller: "Login"
    })




});

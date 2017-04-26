app.config(function($stateProvider, $urlRouterProvider,  $mdThemingProvider) {

  
  $mdThemingProvider.theme('default')
  .dark();
  //
  // For any unmatched url, redirect to /state1
  $urlRouterProvider.otherwise("home");
  //
  // Now set up the states
  $stateProvider
    .state('home', {
       url:"/home",
      templateUrl:"views/home.html",
      controller: "Responsive"
    });



});

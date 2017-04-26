app.config(function($stateProvider, $urlRouterProvider,  $mdThemingProvider, $rootScopeProvider) {

  console.log($rootScopeProvider);

  $urlRouterProvider.otherwise(function ($injector, $location) {
    return '/login';
  });
  $mdThemingProvider.definePalette('pateta-nova', {
   '50': '6d496d',
   '100': 'ffcdd2',
   '200': 'ef9a9a',
   '300': 'e57373',
   '400': '6d496d',
   '500': '6d496d',
   '600': 'e53935',
   '700': 'd32f2f',
   '800': 'c62828',
   '900': 'b71c1c',
   'A100': 'ff8a80',
   'A200': 'ff5252',
   'A400': 'ff1744',
   'A700': 'd50000',
   'contrastDefaultColor': 'light',    // whether, by default, text (contrast)
                                       // on this palette should be dark or light

   'contrastDarkColors': ['50', '100', //hues which contrast should be 'dark' by default
    '200', '300', '400', 'A100'],
   'contrastLightColors': undefined    // could also specify this if default was 'dark'
 });
  $mdThemingProvider.theme('default')
  .primaryPalette('pateta-nova')
  //
  // Now set up the states
  $stateProvider
  .state('login', {
     url:"/login",
     templateUrl:"/components/views/login/login.html",
     controller: "Login"
  })
  .state('lista', {
     url:"/lista-itens",
     templateUrl:"/components/views/lista-items/lista-items.html",
     controller: "Lista"
  })
});

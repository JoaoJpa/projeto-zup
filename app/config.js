app.config(function($stateProvider, $urlRouterProvider,  $mdThemingProvider) {

  // criando nova paleta para tema
  $mdThemingProvider.definePalette('paleta-nova', {
      '50': 'ffebee',
      '100': 'ffcdd2',
      '200': 'ef9a9a',
      '300': 'e57373',
      '400': 'ef5350',
      '500': '6e4972',
      '600': 'e53935',
      '700': 'd32f2f',
      '800': 'c62828',
      '900': 'b71c1c',
      'A100': 'ff8a80',
      'A200': 'ff5252',
      'A400': 'ff1744',
      'A700': 'd50000',
      'contrastDefaultColor': 'light',
      'contrastDarkColors': ['50', '100',
       '200', '300', '400', 'A100'],
      'contrastLightColors': undefined
  });
  // nova paleta e default
  $mdThemingProvider.theme('default')
      .primaryPalette('paleta-nova')

  // direcionamento para o primeiro state
  $urlRouterProvider.otherwise("login");

  // caso seja acessado direto um state na url redireciona para login
  $urlRouterProvider.otherwise(function ($injector, $location) {
    return '/login';
  });

  // rotas
  $stateProvider
    .state('login', {
     url:"/login",
     templateUrl:"components/views/login/login.html",
     controller: "Login"
    })
    .state('lista', {
       url:"/lista-itens",
      templateUrl:"components/views/lista-items/lista-items.html",
      controller: "Lista"
    })


});

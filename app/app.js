var app = angular.module('app', ['ngMaterial' , 'ui.router', 'ngMessages']);
app.run(function($rootScope, $state) {

    if ($rootScope.token == null) {
      console.log('aqui');
      $state.go('login')
    }else{

    }


});

app.controller('Responsive', function($scope,$mdSidenav){


    $scope.mudarmenu = function(navID){
      $mdSidenav(navID).toggle();
    }
    $scope.Usuario = 'João'

    $scope.openMenu = function($mdOpenMenu, ev) {

      $mdOpenMenu(ev);
    };


});

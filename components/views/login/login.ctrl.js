app.controller('Login', function($scope,$mdSidenav, $state, $mdDialog, $rootScope){
    $scope.login = login;
    function login() {
      if($scope.user == null){
         $scope.invalidUser = true;
      }if($scope.password == null){
        $scope.invalidPass = true;
      }else{
        if($scope.user != null && $scope.password != null){
          $state.go('lista')
        }
      }
    }
})

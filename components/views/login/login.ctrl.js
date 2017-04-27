app.controller('Login', function($scope,$mdSidenav, $state, $mdDialog, $rootScope){
    $scope.login = login;
    $scope.limpar =limpar;

    function limpar() {
      $scope.user = null;
      $scope.password = null;
    }
    function login() {
      if($scope.user == null){
         $scope.invalidUser = true;
      }if($scope.password == null){
        $scope.invalidPass = true;
      }else{
        if($scope.user != null && $scope.password != null){
          $rootScope.user = $scope.user;
          $state.go('lista')
        }
      }
    }
})

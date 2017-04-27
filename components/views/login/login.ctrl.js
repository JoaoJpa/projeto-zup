app.controller('Login', function($scope,$mdSidenav, $state, $mdDialog, $rootScope){

    // function sendo colocadas em escopo
    $scope.login = login;
    $scope.limpar =limpar;

    // função que limpa os input do login
    function limpar() {
      $scope.user = null;
      $scope.password = null;
    }

    // função login com uma validação simples
    function login() {

      // valida se foi preenchido usuario e senha caso não e setado variaveis que no front iniciam uma msg ao usuario
      if($scope.user == null){
         $scope.invalidUser = true;
      }if($scope.password == null){
        $scope.invalidPass = true;
      }else{

        // caso tenha preenchido os campos é redirecionalo a rota da lista de itens
        if($scope.user != null && $scope.password != null){
          window.localStorage.user = $scope.user;
          $state.go('lista');
        }
      }
    }
})

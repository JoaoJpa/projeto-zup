app.controller('Lista', function($scope,$mdSidenav, $state, $mdDialog, $rootScope, $http){

  console.log($rootScope.user);

  var grid = document.getElementById('grid-lista');
  Ps.initialize(grid);
  Ps.update(grid);
  var filtro = document.getElementById('menu-filtro');
  Ps.initialize(filtro);
  Ps.update(filtro);

  $scope.user = $rootScope.user;
  $scope.lista = [];

  $scope.logout = logout;
  $scope.esconderMenu = esconderMenu;
  $scope.buscaAdd = buscaAdd;
  $scope.buscarItens = buscarItens;
  $scope.mudarFiltro = mudarFiltro;
  $scope.iconEsconder = 'keyboard_arrow_left';
  $scope.hideShow = 'hide';

  $scope.titulos = [];
  $scope.filtroTipos = [];
  $scope.check ={};
  $scope.checkCategoria = {};
  $scope.listaIndex = [];
  $scope.tipo = 'titulo';
  $scope.listaCategoria = [];
  $scope.flexMenu = 20;
  $scope.flexMenuLg = 15;
  $scope.flexMenuSm = 25;
  $scope.flexMenuXs = 45;



  if(window.innerWidth < 600){
    $scope.flexMenuXs = 0;
    $scope.flexMenu = 0;

    $scope.iconEsconder = 'keyboard_arrow_right';
    $scope.hideShow = 'show';

  }

  $http.get('dados/dados.json').then(function(resp) {
    angular.forEach(resp.data.produtos, function(value, key) {
        value.row = Math.floor(Math.random() * 3);
        value.col = Math.floor(Math.random() * 3);
        $scope.lista[key] = value;
        $scope.check[key] =false;
        $scope.listaCategoria.push({"categoria":value.categoria});
    })
    $scope.listaItem = $scope.lista;

    var obj = {};

    for ( var i=0, len= $scope.listaCategoria.length; i < len; i++ )
      obj[ $scope.listaCategoria[i]['categoria']] = $scope.listaCategoria[i];

      $scope.auxs = [];
      for ( var key in obj )
        $scope.auxs.push(obj[key]);

      $scope.listaCategoria = $scope.auxs;

  })
  function buscaAdd(item, index, tipo) {
        $scope.listaRemove = [];
        $scope.buscar = item;
        $scope.tipo = tipo;
        $scope.valida = false;


        if($scope.check[index] == true || $scope.checkCategoria[index] == true){
          angular.forEach($scope.listaItem, function(value, key) {
            if(value[$scope.tipo] != $scope.buscar){
                  $scope.listaRemove.push(value)
              }
          })
          $scope.listaItem = $scope.listaRemove;
          $scope.filtroTipos = $scope.listaItem;

        }else{
        angular.forEach($scope.filtroTipos, function(value, key) {
            if(value.id == $scope.id){
              $scope.valida = true;
            }
        })

        if($scope.valida == false){
          angular.forEach($scope.lista, function(value, key) {
              if(value[$scope.tipo] == $scope.buscar){
                $scope.filtroTipos.push(value);
              }
          })
          $scope.listaItem = $scope.filtroTipos;
        }
      }
      if($scope.listaItem.length==0){
        $scope.listaItem = $scope.lista;

      }

  }
  function buscarItens() {
    $scope.listaItem = $scope.filtroTipos;
  }
  function esconderMenu(){

    if($scope.flexMenu != 0 ){
      $scope.flexMenu = 0;
      $scope.flexMenuLg = 0;
      $scope.flexMenuSm = 0;
      $scope.flexMenuXs = 0;
      $scope.iconEsconder = 'keyboard_arrow_right';
      $scope.hideShow = 'show';

    }else{
      $scope.flexMenu = 20;
      $scope.flexMenuLg = 15;
      $scope.flexMenuSm = 25;
      $scope.flexMenuXs = 45;
      $scope.iconEsconder = 'keyboard_arrow_left';
      $scope.hideShow = 'hide';

    }
  }
  function mudarFiltro() {
    $scope.filtroTipos = [];
    $scope.listaItem = $scope.lista;
    angular.forEach($scope.check, function(value, key) {
            $scope.check[key] = false;
    });
    angular.forEach($scope.checkCategoria, function(value, key) {
            $scope.checkCategoria[key] = false;
    });
  }
  function logout() {
    $rootScope.user = null;
    $state.go('login')
  }

  window.onresize = function() {
    if (window.innerWidth < 600) {
      $scope.flexMenu = 0;
      $scope.flexMenuXs = 0;
      $scope.iconEsconder = 'keyboard_arrow_right';
      $scope.hideShow = 'show';
    }
  }



})

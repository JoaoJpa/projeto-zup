app.controller('Lista', function($scope,$mdSidenav, $state, $mdDialog, $rootScope, $http){


  $scope.lista = [];
  $scope.esconderMenu = esconderMenu;
  $scope.buscaAdd = buscaAdd;
  $scope.buscarItens = buscarItens;
  $scope.iconEsconder = 'keyboard_arrow_left';
  $scope.titulos = [];
  $scope.filtroTitulo = [];
  $scope.check ={};
  $scope.listaIndex = [];
  $scope.tipo = 'titulo';
  $scope.listaCategoria = [];
  $scope.flexMenu = 20;


  if(window.innerWidth < 600){
    $scope.flexMenu = 0;
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
  function buscaAdd(titulo, index) {
        $scope.listaRemove = [];
        $scope.titulo = titulo;
        $scope.valida = false;

        if($scope.check[index] == true){
          angular.forEach($scope.listaItem, function(value, key) {
              if(value.titulo != $scope.titulo){
                  $scope.listaRemove.push(value)
              }
          })
          $scope.listaItem = $scope.listaRemove;
          $scope.filtroTitulo = $scope.listaItem;

        }else{
        angular.forEach($scope.filtroTitulo, function(value, key) {
            if(value.id == $scope.id){
              $scope.valida = true;
            }
        })

        if($scope.valida == false){
          angular.forEach($scope.lista, function(value, key) {
              if(value.titulo == $scope.titulo){
                $scope.filtroTitulo.push(value);
              }
          })
          $scope.listaItem = $scope.filtroTitulo;
        }
      }
      if($scope.listaItem.length==0){
        $scope.listaItem = $scope.lista;

      }

  }
  function buscarItens() {
    console.log($scope.filtroTitulo);
    $scope.listaItem = $scope.filtroTitulo;
  }
  function esconderMenu(){

    if($scope.flexMenu != 0){
      $scope.flexMenu = 0;
      $scope.iconEsconder = 'keyboard_arrow_right';
    }else{
      $scope.flexMenu = 20;
      if (window.innerWidth < 600) {
        $scope.flexMenu = 40;
      }
      $scope.iconEsconder = 'keyboard_arrow_left';
    }
  }
  window.onresize = function() {
    if (window.innerWidth < 600) {
      $scope.flexMenu = 0;
    }else{
      $scope.flexMenu = 20;
    }
  }
  var container = document.getElementById('menu-filtro');
  Ps.initialize(container);
  Ps.update(container);
  var container = document.getElementById('grid-lista');
  Ps.initialize(container);
  Ps.update(container);

})

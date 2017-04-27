app.controller('Lista', function($scope,$mdSidenav, $state, $mdDialog, $http){

  // perfect scrool setado na tela
  var grid = document.getElementById('grid-lista');
  Ps.initialize(grid);
  Ps.update(grid);
  var filtro = document.getElementById('menu-filtro');
  Ps.initialize(filtro);
  Ps.update(filtro);

  // user setado apartir do loscalStorage
  $scope.user = window.localStorage.user;

  // function sendo colocadas em escopo
  $scope.logout = logout;
  $scope.esconderMenu = esconderMenu;
  $scope.buscarItens = buscarItens;
  $scope.mudarFiltro = mudarFiltro;

  // variaveis inicializadas
  $scope.tipo = 'titulo';
  $scope.iconEsconder = 'keyboard_arrow_left';
  $scope.hideShow = 'hide';

  // listas e objetos inicializados
  $scope.lista = [];
  $scope.filtroTipos = [];
  $scope.checkTitulo ={};
  $scope.checkCategoria = {};
  $scope.listaIndex = [];
  $scope.listaCategoria = [];

  // variaveis inicializadas para controle do tamanho do grid
  $scope.flexMenu = 20;
  $scope.flexMenuLg = 15;
  $scope.flexMenuSm = 25;
  $scope.flexMenuXs = 45;

  // conferindo e modificando variaves para tamanho mobile
  if(window.innerWidth < 600){
    $scope.flexMenuXs = 0;
    $scope.flexMenu = 0;
    $scope.iconEsconder = 'keyboard_arrow_right';
    $scope.hideShow = 'show';
  }

  // função que le um arquivo de dados para gerar a lista com os itens
  $http.get('dados/dados.json').then(function(resp) {
    angular.forEach(resp.data.produtos, function(value, key) {
        // acrescentando valores randomicos para os grids
        value.row = Math.floor(Math.random() * 3);
        value.col = Math.floor(Math.random() * 3);

        // lista inicial com todos o valor não é mexida
        $scope.lista[key] = value;

        // lista de categorias
        $scope.listaCategoria.push({"categoria":value.categoria});
    })
    // lista para o grid
    $scope.listaItem = $scope.lista;

    // retirando duplicados de listaCategoria
    var obj = {};
    for ( var i=0, len= $scope.listaCategoria.length; i < len; i++ )
      obj[ $scope.listaCategoria[i]['categoria']] = $scope.listaCategoria[i];

    $scope.auxs = [];
    for ( var key in obj )
      $scope.auxs.push(obj[key]);

    $scope.listaCategoria = $scope.auxs;

  })

  // função que filtra por titulo e categoria por meio dos md-checkbox.
  // essa função recebe que vai se pesquisar e de que tipo é o que se pesquisa no objeto da lista
  function buscarItens(item, index, tipo) {
        $scope.listaRemove = [];
        $scope.buscar = item;
        $scope.tipo = tipo;
        $scope.valida = false;

        // caso seja desmarcado sera removido
        if($scope.checkTitulo[index] == true || $scope.checkCategoria[index] == true){
          angular.forEach($scope.listaItem, function(value, key) {
            if(value[$scope.tipo] != $scope.buscar){
                  $scope.listaRemove.push(value)
              }
          })
          $scope.listaItem = $scope.listaRemove;
          $scope.filtroTipos = $scope.listaItem;

        }else{

        // verificando se ja existe o objeto na lista
        angular.forEach($scope.filtroTipos, function(value, key) {
            if(value.id == $scope.id){
              $scope.valida = true;
            }
        })

        // se não coloca ele na lista do grid
        if($scope.valida == false){
          angular.forEach($scope.lista, function(value, key) {
              if(value[$scope.tipo] == $scope.buscar){
                $scope.filtroTipos.push(value);
              }
          })
          $scope.listaItem = $scope.filtroTipos;
        }
      }

      // se os checkbox sem marcar lista grid recebe a lista inicial
      if($scope.listaItem.length==0){
        $scope.listaItem = $scope.lista;
      }
  }

  // função que faz o menu de filtro sumir
  function esconderMenu(){

    // controla o tamanha se 0 ou nao e seta as variaveis
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

  // muda o tipo do filtro de titulo para categoria
  function mudarFiltro() {

    // ao mudar o a lista de filtro e zera e os objetos de checkbox desmarcados a lista do grid recebe a lista inicial
    $scope.filtroTipos = [];
    $scope.listaItem = $scope.lista;
    angular.forEach($scope.checkTitulo, function(value, key) {
            $scope.checkTitulo[key] = false;
    });
    angular.forEach($scope.checkCategoria, function(value, key) {
            $scope.checkCategoria[key] = false;
    });
  }

  // log out deleta o localStorage com user e redireciona para login
  function logout() {
    delete window.localStorage.user;
    $state.go('login')
  }

  // controle de tamanho caso o usuario redimensione a tela
  window.onresize = function() {
    if (window.innerWidth < 600) {
      $scope.flexMenu = 0;
      $scope.flexMenuXs = 0;
      $scope.iconEsconder = 'keyboard_arrow_right';
      $scope.hideShow = 'show';
    }
  }



})

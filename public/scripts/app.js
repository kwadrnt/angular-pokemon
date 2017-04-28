console.log('working app');

angular
  .module('pokemonApp', ['ngRoute'])
  .config(config)

  config.$inject = ['$routeProvider', '$locationProvider'];

  function config ($routeProvider, $locationProvider) {
    console.log('function working');
    $routeProvider
      .when('/', {
        templateUrl: '../../templates/pokemons/index.html',
        controllerAs: 'pokemonsIndexCtrl',
        controller: 'PokemonsIndexController'
      })
      .when('/pokemons/:id', {
        templateUrl: '../../templates/pokemons/show.html',
        controllerAs: 'pokemonsShowCtrl',
        controller: 'PokemonsShowController'
      })

      $locationProvider.html5Mode({
        enabled: true,
        requireBase: false
    });
}

angular
  .module('pokemonApp')
  .controller('PokemonsIndexController', PokemonsIndexController);

PokemonsIndexController.$inject = ['$http'];
function PokemonsIndexController ($http) {
  var vm = this;


  $http({
    method: 'GET',
    url: 'https://super-crud.herokuapp.com/pokemon'
  }).then(function successCallback(response) {
    vm.pokemons = response.data.pokemons;
    console.log(response);
  }, function errorCallback(err) {
    console.log('There was an error getting the data', err);
  });
}

'use strict';

pokemonApp.component('pokemonDetail', {

    controller: function( $routeParams, PokemonsService) {
        var thisctrl = this;
        this.pokemonLoaded = false;

        this.pokemon = PokemonsService.get({
            pokemonId: $routeParams['pokemonId']
        }, function(successResult) {
            // Окей!
            thisctrl.notfoundError = false;
            thisctrl.pokemonLoaded = true;

            thisctrl.activeTab = 1;
            thisctrl.disableControlTab = true;
        }, function(errorResult) {
            // Не окей..
            thisctrl.notfoundError = true;
            thisctrl.pokemonLoaded = true;


        });

        this.pokemon.$promise.then(function(result) {
            //$scope.pokemonLoaded = true;
        });

        this.deletePokemon = function(pokemonId) {

            thisctrl.pokemon.$delete({
                pokemonId: pokemonId
            }, function(successResult) {
                // Окей!
                thisctrl.deletionSuccess = true;
            }, function(errorResult) {
                // Не окей..
                thisctrl.deletionError = true;
            });

        }

    },

    templateUrl: './src/PokemonDetailComponent/PokemonDetailComponentTpl.html'

});
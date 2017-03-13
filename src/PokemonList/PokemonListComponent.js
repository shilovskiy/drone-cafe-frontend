'use strict';

droneApp.component('pokemonList', {

    controller: function PokemonListCtrl(MainService, OrderService) {


        //this.pokemons = MainService.query();
        // this.items = MainService.getPokemons();
        //$scope.items= null;
        //this.order = OrderService;//{"_id":11222333};
        MainService.getPokemons().then((response) => {

            this.items = response.data.items;

        });

//        this.items = MainService.query();

    },

    templateUrl: './src/PokemonList/PokemonList.html'

});

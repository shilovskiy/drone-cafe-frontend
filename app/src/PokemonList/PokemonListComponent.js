'use strict';

pokemonApp.component('pokemonList', {

    controller: function PokemonListCtrl(PokemonsService,OrderService) {


        //this.pokemons = PokemonsService.query();
        // this.items = PokemonsService.getPokemons();
        //$scope.items= null;
        //this.order = OrderService;//{"_id":11222333};
        PokemonsService.getPokemons().then((response)=>{

            this.items = response.data.items;

        });

//        this.items = PokemonsService.query();

    },

    templateUrl: './src/PokemonList/PokemonList.html'

});

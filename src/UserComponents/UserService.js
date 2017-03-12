/**
 * Created by Олег Шиловский on 23.02.2017.
 */
angular
    .module('PokemonApp')
    .factory('UserService', function ($localStorage) {

        //this.User = $localStorage.CurrentUser;
        // this.$storage = $localStorage.$default({
        //     CurrentOrder: {'_id': 0}
        // });
        this.User = undefined;
        if ($localStorage.CurrentUser !== null) {
            this.User = $localStorage.CurrentUser;


            // PokemonsService.getOrder($localStorage.CurrentOrder._id).then((response) => {
            //     this.Order = response.data.Order;
            // });
        }
        return {
            User: this.User,
            setCurrentUser: function (_user) {
                $localStorage.CurrentUser = _user;
                this.User = _user;
            },
            logout: function () {
                $localStorage.CurrentUser = undefined;
                // this.User = undefined;
            }
        };

    });
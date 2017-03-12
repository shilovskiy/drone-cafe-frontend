'use strict';
/**
 * Created by Олег Шиловский on 24.02.2017.
 */
'use strict';

pokemonApp.component('userAuth', {
    bindings: {
        //username:'=',
        // User:'='
        //itemsCount:'='
    },
    templateUrl: './src/UserComponents/UserLoginTpl.html',

    controller: function ($scope, PokemonsService, UserService, OrderService, $route, $localStorage, $q) {

        $scope.showuser = ($route.current.routeData.page != 'kitchen');
        $scope.User = UserService.User;

        if ((OrderService.Order!=undefined)&&(UserService.User != undefined)) {
            UserService.User.Credits = UserService.User.Credits - OrderService.Order.TotalPrice;
            $scope.isloged = true;
        }else{
            $scope.isloged = false;
        }




        $scope.submit = function (username, pass) {

            if (!pass) {
                return;
            }
            var obj1, obj2;

            obj1 = PokemonsService.authUser(username, pass);

            $q.all(
                [obj1]
            ).then(function (values) {
                UserService.setCurrentUser(values[0].data);
                $scope.isloged = (UserService.User != undefined);
                $scope.User = UserService.User;

                if ((OrderService.Order!=undefined)&&(UserService.User != undefined)) {
                    PokemonsService.setCurrentUserCurrentOrder(values[0].data, OrderService).then(function (response) {
                        OrderService.setCurrentOrder(response.data);
                    });
                }

            });

            // SocketUserFactory.emit('login-customer', {
            //     user:username,
            //     password:pass
            // });


        };

        $scope.addCredits = function (amount = 100) {
            PokemonsService.addCreditsToCurrentUser(UserService.User, amount).then(function (response) {
                UserService.setCurrentUser(response.data);

                $scope.User = response.data;

            });

        };
        $scope.logout = function () {
            UserService.logout();
            $scope.User = undefined;
            $scope.isloged = false;

        }


    }
});


'use strict';
/**
 * Created by Олег Шиловский on 24.02.2017.
 */
'use strict';

droneApp.component('userAuth', {
    bindings: {
        //username:'=',
        // User:'='
        //itemsCount:'='
    },
    templateUrl: './src/UserComponents/UserLoginTpl.html',

    controller: function ($scope, MainService, UserService, OrderService, $route, $localStorage, $q) {

        $scope.showuser = ($route.current.routeData.page != 'kitchen');
        $scope.User = UserService.User;

        if ((OrderService.Order != undefined) && (UserService.User != undefined)) {
            UserService.User.Credits = UserService.User.Credits - OrderService.Order.TotalPrice;
            $scope.isloged = true;
        } else {
            $scope.isloged = false;
        }


        $scope.submit = function (username, pass) {

            if (!pass) {
                return;
            }
            var obj1, obj2;

            obj1 = MainService.authUser(username, pass);

            $q.all(
                [obj1]
            ).then(function (values) {
                UserService.setCurrentUser(values[0].data);
                $scope.isloged = (UserService.User != undefined);
                $scope.User = UserService.User;

                if ((OrderService.Order != undefined) && (UserService.User != undefined)) {
                    MainService.setCurrentUserCurrentOrder(values[0].data, OrderService).then(function (response) {
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
            MainService.addCreditsToCurrentUser(UserService.User, amount).then(function (response) {
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


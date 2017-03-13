'use strict';
//function($scope, PokemonsService, $mdToast)
droneApp.component('addItemToOrder', {
    bindings: {
        item: '=',
        order: '='
    },

    templateUrl: './src/AddItemToOrder/AddItemToOrder.html',

    controller: function ($scope, MainService, OrderService, UserService, $mdToast) {
        this.User = UserService.User;
        $scope.showButton = (UserService.User == undefined);
        $scope.addToOrder = function (itemData) {
            MainService.addItemToOrder(itemData, OrderService, UserService).then(function (response) {
                OrderService.setCurrentOrder(response.data);
                if (UserService.User != undefined) {
                    UserService.User.Credits = UserService.User.Credits - itemData.price;
                }
            });
        }
    }


});

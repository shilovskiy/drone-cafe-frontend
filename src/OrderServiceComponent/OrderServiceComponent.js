/**
 * Created by Олег Шиловский on 24.02.2017.
 */
'use strict';

droneApp.component('orderInfo', {
    bindings: {
        // orderInformation:'<'
        // orderTotal:'<'
        //itemsCount:'='
    },
    templateUrl: './src/OrderServiceComponent/OrderServiceComponentTpl.html',

    controller: function ($scope, OrderService, MainService, UserService, $route, $localStorage) {

        this.orderInformation = OrderService;
        this.orderLoading = (OrderService.Order == undefined);
        this.orderAllData = ($route.current.routeData.page == 'orderPage');

        this.currentUser = UserService.User;
        $scope.canMakeOrder = (UserService.User != undefined);

        if (UserService.User != undefined) {
            MainService.getUserOrder(UserService.User._id).then(function (response) {
                console.log(response);

                $scope.allUserOrders = response.data.Order;

            });
        }


        $scope.removeFromOrder = function (itemData) {
            MainService.removeItemFromOrder(itemData, OrderService, UserService).then(function (response) {
                console.log(response);

                if (UserService.User != undefined) {
                    UserService.User.Credits = UserService.User.Credits + itemData.item.price;
                }

                OrderService.setCurrentOrder(response.data);

            });
        };

        $scope.makeOrder = function () {
            MainService.pullOrderToProgress(OrderService, UserService, 'InProgress').then(function (response) {
                console.log(response);
                OrderService.setEmptyCurrentOrder();
            });
        };


    }
});
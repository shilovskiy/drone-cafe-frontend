/**
 * Created by Олег Шиловский on 24.02.2017.
 */
'use strict';

droneApp.component('kitchenInfo', {
    bindings: {
        // orderInformation:'<'
        // orderTotal:'<'
        //itemsCount:'='
    },
    templateUrl: './src/Kitchen/KitchenComponentTpl.html',

    controller: function ($scope, MainService) {

        $scope.orderInProgressFilter = function (item, state) {
            return item.state.Name == 'InProgress';
        };
        $scope.orderReadyFilter = function (item, state) {
            return item.state.Name == 'Ready';
        };

        MainService.getAllOrder().then(function (response) {

            $scope.orderInformation = response.data.Order;
        });
        $scope.orderLoading = (this.orderInformation == undefined);

        $scope.removeFromOrder = function (itemData) {
            MainService.removeItemFromOrder(itemData, OrderService, UserService).then(function (response) {
                console.log(response);
                UserService.User.Credits = UserService.User.Credits + itemData.item.price;
                OrderService.setCurrentOrder(response.data);

            });
        };

        $scope.setOrderReady = function (order) {
            MainService.pullOrderToProgress(order, {User: {_id: order.user}}, 'Ready').then(function (response) {
                console.log(response);
                MainService.getAllOrder().then(function (response) {

                    $scope.orderInformation = response.data.Order;
                });
            });
        };

        $scope.setOrderToDelivery = function (order) {
            MainService.pullOrderToProgress(order, {User: {_id: order.user}}, 'InDelivery').then(function (response) {
                console.log(response);
                MainService.getAllOrder().then(function (response) {

                    $scope.orderInformation = response.data.Order;
                });
            });
        };
    }
});
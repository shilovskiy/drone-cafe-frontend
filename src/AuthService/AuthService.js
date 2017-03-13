/**
 * Created by Олег Шиловский on 23.02.2017.
 */
angular
    .module('DroneApp')
    .factory('AuthService', function (PokemonsService, $localStorage) {

        this.$storage = $localStorage.$default({
            CurrentUser: {'_id': 0}
        });
        var Order;
        var itemsCount;
        if ($localStorage.CurrentOrder._id != 0) {
            Order = $localStorage.CurrentOrder;
            this.Order = $localStorage.CurrentOrder;
            this.itemsCount = $localStorage.CurrentOrder !== undefined ? $localStorage.CurrentOrder.items.length : 0;
            PokemonsService.getOrder($localStorage.CurrentOrder._id).then((response) => {
                this.Order = response.data.Order;
                this.itemsCount = response.data.Order.length;
                itemsCount = response.data.Order.length;
            });
        }
        return {

            _id: $localStorage.CurrentOrder._id,
            Order: this.Order,
            getOrder: function () {
                return Order
            },
            //itemsCount: this.itemsCount,
            // setItemsCount: function(_itemsCount){
            //     itemsCount = _itemsCount;
            // },
            // getItemsCount: function(){
            //     return itemsCount;
            // },
            // setCurrentOrder:function(orderid){

            setCurrentOrder: function (_order) {
                //$rootScope.currentOrder = orderid;
                $localStorage.CurrentOrder = _order;//{'_id':order._id};
                Order = _order;
                this.Order = _order;
                this._id = _order._id;
                this.itemsCount = _order.items.length;

                //currentOrder = orderid;
            }
        };
    });


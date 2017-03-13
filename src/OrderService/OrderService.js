/**
 * Created by Олег Шиловский on 23.02.2017.
 */
angular
    .module('DroneApp')
    .factory('OrderService', function (MainService, $localStorage) {
        //var Order;

        this.$storage = $localStorage.$default({
            CurrentOrder: {'_id': 0}
        });


        if ($localStorage.CurrentOrder._id != 0) {
            Order = $localStorage.CurrentOrder;
            this.Order = $localStorage.CurrentOrder;

            MainService.getOrder($localStorage.CurrentOrder._id).then((response) => {
                this.Order = response.data.Order;
            });
        }
        return {

            _id: $localStorage.CurrentOrder._id,
            Order: this.Order,

            setCurrentOrder: function (_order) {
                $localStorage.CurrentOrder = _order.Order;
                this.Order = _order.Order;
                this._id = _order.Order._id;
            },
            setEmptyCurrentOrder: function () {
                $localStorage.CurrentOrder = {'_id': 0};
                this.Order = {'_id': 0};
                this._id = 0;
            }

        }
    });

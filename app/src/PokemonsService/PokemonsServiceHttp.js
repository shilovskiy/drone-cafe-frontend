angular
    .module('PokemonApp')
    .factory('PokemonsService', function ($http) {

            return {
                authUser: function (_username, _pass) {
                    var dataToPost = {
                        username: _username,
                        password: _pass
                    };
                    return $http({
                        method: 'POST',
                        url: 'http://localhost:3000/login/auth',
                        data: dataToPost
                    });

                },

                addCreditsToCurrentUser: function (User, _amount) {
                    var dataToPost = {
                        username: User,
                        amount: _amount
                    };
                    return $http({
                        method: 'POST',
                        url: 'http://localhost:3000/login/addCredits',
                        data: dataToPost
                    });

                },
                //addCreditsToCurrentUser


                getPokemons: function (items) {
                    return $http.get('http://localhost:3000/');
                    //  return $http.get('http://localhost:3000/').then(function(data) {
                    //      return data.items;
                    //  });

                    // return $http({
                    //     method: 'GET',
                    //     url: 'http://localhost:3000/',
                    //     data: items
                    // });


                },

                getAllOrder: function () {
                    return $http.get('http://localhost:3000/orders/all');
                },

                getOrder: function (_id) {
                    //var dataToPost = { order: _id};
                    return $http({
                        method: 'GET',
                        url: 'http://localhost:3000/orders/' + _id
                    });

                },

                getUserOrder: function (_id) {
                    return $http({
                        method: 'GET',
                        url: 'http://localhost:3000/login/' + _id
                    });

                },



                pullOrderToProgress: function (orderData, userData,_state) {
                    var dataToPost = {order: orderData, user: userData.User,state:_state};
                    return $http({
                        method: 'POST',
                        url: 'http://localhost:3000/orders/pullOrderToState',
                        data: dataToPost
                    });

                },

                addItemToOrder: function (itemData, orderData, userData) {
                    var dataToPost = {item: itemData, order: orderData, user: userData.User};
                    return $http({
                        method: 'POST',
                        url: 'http://localhost:3000/orders/addItemToOrder',
                        // headers: {
                        //     "application-id": "4B730C92-F81E-236B-FFF0-6651FE882800",
                        //     "secret-key": "CB6DE86C-6069-86C4-FF1C-9049D5AC9400"
                        //
                        // },
                        data: dataToPost
                    });

                },



                setCurrentUserCurrentOrder: function (_user,orderData) {
                    var dataToPost = {user: _user,order:orderData.Order};
                    return $http({
                        method: 'POST',
                        url: 'http://localhost:3000/orders/setCurrentUserToCurrentOrder',
                        data: dataToPost
                    });

                },

                removeItemFromOrder: function (itemData, orderData, userService) {
                    var dataToPost = {item: itemData, order: orderData, user: userService.User};
                    return $http({
                        method: 'POST',
                        url: 'http://localhost:3000/orders/removeItemFromOrder',
                        data: dataToPost
                    });

                },

                createPokemon: function (pokemonData) {
                    return $http({
                        method: 'POST',
                        url: 'https://api.backendless.com/v1/data/pokemon',
                        headers: {
                            "application-id": "4B730C92-F81E-236B-FFF0-6651FE882800",
                            "secret-key": "CB6DE86C-6069-86C4-FF1C-9049D5AC9400"

                        },
                        data: pokemonData
                    });
                },

                deletePokemon: function (pokemonId) {
                    return $http({
                        method: 'DELETE',
                        url: 'https://api.backendless.com/v1/data/pokemon/' + pokemonId,
                        headers: {
                            "application-id": "4B730C92-F81E-236B-FFF0-6651FE882800",
                            "secret-key": "CB6DE86C-6069-86C4-FF1C-9049D5AC9400"

                        }
                    });
                }

            }

        }
    );

var droneApp = angular.module('DroneApp', ['ngRoute', 'ngResource', 'restangular', 'ui.bootstrap', 'ngMaterial', 'ngStorage', 'btford.socket-io']);

angular.module('DroneApp').run(function ($localStorage) {

    console.log('run PokemonApp and drone cafe application');
    //  $scope.$storage = $localStorage.$default({
    //      CurrentOrder: 0
    // });
    //$scope.$storage.CurrentOrder =0;
})
    .config(['$routeProvider', 'RestangularProvider',
        function config($routeProvider, RestangularProvider) {

            $routeProvider.when('/pokemons', {
                template: '<pokemon-list></pokemon-list>'
            }).when('/orders', {
                template: '<order-info></order-info>',
                routeData: {page: 'orderPage'}
                //templateUrl: '/src/OrderServiceComponent/OrderServicePage.html',
                //controller: 'orderServicePage'
            }).when('/kitchen/', {
                template: '<kitchen-info></kitchen-info>',
                routeData: {page: 'kitchen'}
            }).when('/create', {
                templateUrl: 'src/CreatePokemon/CreatePokemon.html',
                controller: 'CreatePokemonCtrl'
            }).otherwise({
                template: '<pokemon-list></pokemon-list>',
                routeData: {page: 'mainPage'}
                //redirectTo: '/'
            });

            // RestangularProvider.setBaseUrl('hhttp://pokeapi.co/api/v2/pokemon/');
            // RestangularProvider.setBaseUrl('http://localhost:3000/');
            //RestangularProvider.setBaseUrl('https://api.backendless.com/v1/data/');

        }
    ])

    .config(['$httpProvider', function ($httpProvider) {

        $httpProvider.defaults.headers.common = {
            //"application-id": "4B730C92-F81E-236B-FFF0-6651FE882800",
            //"secret-key": "CB6DE86C-6069-86C4-FF1C-9049D5AC9400"
            //"Access-Control-Allow-Origin": "http://localhost:3000",
            //"Access-Control-Allow-Methods": "POST, GET, OPTIONS, HEAD",
            "curent-user": "undefined"
        };

    }]);

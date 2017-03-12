/**
 * Created by Олег Шиловский on 23.02.2017.
 */
angular
    .module('PokemonApp')
    .factory('UserService', function ($localStorage, socketFactory) {

        myIoSocket = io.connect('http://localhost:3000/');
        _User = {};
        _isAuthenteficated = false;
        _mySocket = socketFactory({
            ioSocket: myIoSocket
        });
        _mySocket.on('notification', function (data) {
            _User = data;
            _isAuthenteficated = (data != undefined);
            console.log('notification2' + JSON.stringify(data));
        });

        return {
            _isAuthenteficated,
            _User,
            Socket: _mySocket
        };

    });

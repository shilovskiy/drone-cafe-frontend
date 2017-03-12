/**
 * Created by Олег Шиловский on 01.03.2017.
 */
angular
    .module('PokemonApp')
    .factory('socket', function (socketFactory) {

        let myIoSocket = io.connect('http://localhost:3000/');
        mySocket = socketFactory({
            ioSocket: myIoSocket
        });

        return mySocket;
    });
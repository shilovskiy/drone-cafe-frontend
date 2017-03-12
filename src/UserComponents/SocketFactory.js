/**
 * Created by Олег Шиловский on 23.02.2017.
 */
angular
    .module('PokemonApp')
    .factory('SocketUserFactory', function ($localStorage, socketFactory) {

        myIoSocket = io.connect('http://localhost:3000/');

        mySocket = socketFactory({
            ioSocket: myIoSocket
        });

        return mySocket;

    });

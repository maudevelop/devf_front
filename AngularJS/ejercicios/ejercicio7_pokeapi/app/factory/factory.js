(function(){
    'use strict';

    angular
        .module('pokemon')
        .factory('pokeApi', pokeApi)

    function pokeApi($resource){
        return $resource('http://pokeapi.co/api/v2/:type/:id');
    }

}());
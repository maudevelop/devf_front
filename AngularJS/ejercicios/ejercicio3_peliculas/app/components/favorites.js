(function() {
    'use strict';

    var favoritesCmp = {
        controller: favoriteCtrl,
        controllerAs: 'model',
        templateUrl: '/app/components/favorites.html'
    }

    angular
        .module('ejercicio3')
        .component('favoritesCmp', favoritesCmp);

    function favoriteCtrl($http, favorites){
        var model = this;
        model.movies = favorites.list;
        model.deleteFav = deleteFav;

        
    function deleteFav($index) {
        Materialize.toast(model.movies[$index].Title + " was deleted from your movie list!", 4500);
        model.movies.splice($index, 1);
        
    }

    } 
   


})();


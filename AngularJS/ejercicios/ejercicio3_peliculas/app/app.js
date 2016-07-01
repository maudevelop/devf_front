(function() {
    'use strict';

    angular.module('ejercicio3', ['ui.router', 'ngAnimate'])
        .factory('favorites', function(){
  var favorites = {};

  favorites.list = [];

  favorites.add = function(name, image){
    favorites.list.push({"Title":name, "Poster": image});
  };

  return favorites;
});
   
})();


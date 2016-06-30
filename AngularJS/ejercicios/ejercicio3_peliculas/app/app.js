(function() {
    'use strict';

    angular.module('ejercicio3', ['ui.router'])
        .factory('favorites', function(){
  var favorites = {};

  favorites.list = [];

  favorites.add = function(name, image){
    favorites.list.push({"name":name, "imgSrc": image});
  };

  return favorites;
});
   
})();


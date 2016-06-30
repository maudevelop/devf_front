(function() {
    'use strict';

    var movieCmp = {
        controller: movieCtrl,
        controllerAs: 'model',
        templateUrl: '/app/components/movie.html'
    }

    angular
        .module('ejercicio3')
        .component('movieCmp', movieCmp);

    function movieCtrl($http, favorites){
        var model = this;
        

        model.sortOrder= "sortAlpha";

        $http({
            method: 'GET',
            url: '../../movies.json'
        }).then(function(response)
        {
            model.movies = (response.data);
            changeOrder(model.sortOrder);
        });


        model.addMovie = addMovie;
        model.changeOrder = changeOrder;
        model.favorites = favorites.list;
        model.favoritesAdd = favorites.add;
        
        
        function addMovie($index){
            Materialize.toast(model.movies[$index].name + " was added to your movie list!", 4500);
            // model.favorites.push(model.movies[$index]);
            // console.log(model.favorites);
            model.favoritesAdd(model.movies[$index].name, model.movies[$index].imgSrc);
            
        }

        function changeOrder(){
            switch (model.sortOrder){
                case 'sortAlpha':
                    model.movies.sort(function (a,b){
                        return a.name > b.name;
                    });
                        
                    break;
                case 'sortRatingA':
                    model.movies.sort(function(a, b) {
    	                return parseFloat(a.rating) - parseFloat(b.rating);
                    });
                    break;
                case 'sortRatingD':
                    model.movies.sort(function(a, b) {
    	                return parseFloat(b.rating) - parseFloat(a.rating);
                    });
                    break;
            }
        }
    } 
   
})();


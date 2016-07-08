(function() {
    'use strict';

    const API_KEY = "252cf6eaaaf72a765c7ed6546371a049";

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


        //Functions
        model.addMovie = addMovie;
        model.changeOrder = changeOrder;
        model.newMovie = newMovie;


        //Variables
        
        model.favorites = favorites.list;
        model.favoritesAdd = favorites.add;
        model.newMovies = [];
        
        function addMovie($index){
            Materialize.toast(model.movies[$index].Title + " was added to your movie list!", 4500);
            model.favoritesAdd(model.movies[$index].Title, model.movies[$index].imgSrc);
            
        }

        function changeOrder(){
            switch (model.sortOrder){
                case 'sortAlpha':
                    model.movies.sort(function (a,b){
                        return a.Title > b.Title;
                    });
                        
                    break;
                case 'sortRatingA':
                    model.movies.sort(function(a, b) {
    	                return parseFloat(a.tomatoMeter) - parseFloat(b.tomatoMeter);
                    });
                    break;
                case 'sortRatingD':
                    model.movies.sort(function(a, b) {
    	                return parseFloat(b.tomatoMeter) - parseFloat(a.tomatoMeter);
                    });
                    break;
            }
        }



        function newMovie(){
            $http({
                method: 'GET',
                url: 'http://www.omdbapi.com/?t=' + model.searchNew + '&y=&plot=full&tomatoes=true&r=json'
            }).then(function(response1)
            {
                model.movies.push(response1.data);
                var imdbId = model.movies[model.movies.length-1].imdbID;                
                $http({
                method: 'GET',
                url: 'https://api.themoviedb.org/3/movie/' + imdbId + '?api_key=252cf6eaaaf72a765c7ed6546371a049'
                }).then(function(response2)
                {
                    console.log(response2.data);
                    model.movies[model.movies.length-1].imgSrc = "http://image.tmdb.org/t/p/w160/" + response2.data.poster_path;
                });
            
            });
            
           
        }
    } 
   
})();


(function() {
    'use strict'
    angular
        .module('starwars')
        .config(config);


    config.$inject = ['$routeProvider'];

    function config($routeProvider){
        $routeProvider
            .when('/', {
                template:`<character-cmp category="'people'" id="1"></character-cmp>`
            })
            .when('/planets', {
                template:`<planet-cmp category="'planets'" id="2"></planet-cmp>`
            })
            .otherwise({
                redirectTo:`/`
            })
    }
})();
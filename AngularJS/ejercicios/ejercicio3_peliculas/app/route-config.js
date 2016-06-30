(function() {
    'use strict'
    
        angular
        .module('ejercicio3')
        .config(function($stateProvider, $urlRouterProvider) {
    
    $urlRouterProvider.otherwise('home');
    
    $stateProvider
        
        // HOME STATES AND NESTED VIEWS ========================================
        .state('home', {
            url: '/home',
            template: '<movie-cmp></movie-cmp>'
        })
        // ABOUT PAGE AND MULTIPLE NAMED VIEWS =================================
        .state('addMovie', {
            url: '/addMovie',
            template: '<favorites-cmp></favorites-cmp>'
        });
        
    });
        
})();


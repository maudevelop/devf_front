(function() {
    'use strict'
    
        angular
        .module('ejercicio3')
        .config(function($stateProvider, $urlRouterProvider) {
    
    $urlRouterProvider.otherwise('home');
    
    $stateProvider
        
        // HOME STATE VIEW  ++++++++++++=========================
        .state('home', {
            url: '/home',
            template: '<movie-cmp></movie-cmp>'
        })
        // FAVORITES PAGE VIEW  =================================
        .state('favorites', {
            url: '/favorites',
            template: '<favorites-cmp></favorites-cmp>'
        })
        
        // FAVORITES PAGE VIEW  =================================
        .state('about', {
            url: '/about',
            template: '<about-cmp></about-cmp>'
        });
        
    });
        
})();


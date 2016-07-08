(function() {
    'use strict'
    
    angular
        .module('practica4')
        .config(config)


        function config($routeProvider){
            $routeProvider
                .when('/',{
                    template:'<h3>Hola</h3>'
                })
                .when('/uno',{
                    template:'<uno-cmp></uno-cmp>'
                })
                .when('/dos',{
                    template:'<dos-cmp></dos-cmp>'
                })
                .otherwise({
                    redirectTo:'/'
                })
        };
        
})();
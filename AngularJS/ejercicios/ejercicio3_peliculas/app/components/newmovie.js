(function() {
    'use strict';


    var newmovieCmp = {
            controller: newmovieCtrl,
            controllerAs: 'model',
            templateUrl: '/app/components/newmovie.html'
        }

    angular
        .module('ejercicio3')
        .component('newmovieCmp', newmovieCmp);

        
        function newmovieCtrl(){
            var model = this;
        }
})();
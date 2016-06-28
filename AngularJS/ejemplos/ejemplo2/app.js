(function(){
    'use strict'

    var componenteUno = 
    {
        controller:praCtrl,
        templateUrl:'card.html',
    }

    angular
        .module('practica2', [])
        .component('componenteUno', componenteUno);

        function praCtrl() {
            var prac = this;
            prac.name = 'Mauricio';
            prac.text = "hola"
        }
})();
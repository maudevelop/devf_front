(function() {
    'use strict'
    
    var unoCmp = {
        controller: unoCtrl,
        templateUrl: 'app/components/cmp1/cmp1.html'
    }


    angular
        .module('practica4')
        .component('unoCmp', unoCmp);

    function unoCtrl(){
        var model = this;
    }

})();
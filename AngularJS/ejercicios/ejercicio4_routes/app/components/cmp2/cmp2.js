(function() {
    'use strict'
    
    var dosCmp = {
        controller: dosCtrl,
        templateUrl: 'app/components/cmp2/cmp2.html'
    }


    angular
        .module('practica4')
        .component('dosCmp', dosCmp);
    
    function dosCtrl(){
        var model = this;
    }

})();
(function() {
    'use strict'
    
    var navbar = {
        controller: navCtrl,
        templateUrl: "partials/navbar.html",

    }

    angular
        .module('repaso', [])
        .component('navBar', navBar);

    function navCtrl(){
        var ctxt = this;
    }
})();
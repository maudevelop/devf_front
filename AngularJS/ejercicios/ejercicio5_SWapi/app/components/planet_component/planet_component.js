(function() {
    'use strict'
    
    var planetCmp = {
        bindings: {
            category:"=",
            id: "="
        },
        controller: planetsCtrl,
        templateUrl: 'app/components/planet_component/planet.html'
    }

    angular
        .module('starwars')
        .component('planetCmp', planetCmp)

    function planetsCtrl(starwarsApi){
        var model = this;

        model.planets = starwarsApi.get({
            category:model.category,
            id: model.id
        });

    }

})();
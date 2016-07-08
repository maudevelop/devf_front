(function() {
    'use strict'

    var characterCmp = {
        bindings: {
            category:"=",
            id: "="
        },
        controller: characterCtrl,
        templateUrl: 'app/components/character_component/character.html'
    };

    angular
        .module('starwars')
        .component('characterCmp', characterCmp);

    function characterCtrl(starwarsApi){
        var model = this;

        model.characters = starwarsApi.get({
            category:model.category,
            id:model.id
        });

        console.log(model.characters);
    }

})();
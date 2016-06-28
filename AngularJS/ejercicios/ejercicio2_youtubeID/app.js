(function() {
'use strict';

    angular
        .module('ejercicio2', [])
        .controller('youtubeCtrl', youtubeCtrl);

    function youtubeCtrl($sce) {
        var finder = this;
        finder.src= "";
        finder.changeSource = changeSource;

        function changeSource(){
            finder.src = $sce.trustAsResourceUrl("https://www.youtube.com/embed/" + finder.id);
            
        }
       

    }
})();
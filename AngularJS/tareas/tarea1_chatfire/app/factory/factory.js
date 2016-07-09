(function() {
    'use strict'
    
    angular
        .module('chat')
        .factory('chatData', chatData);

    function chatData($firebaseArray){
        var link = firebase.database().ref();
        return $firebaseArray(link);
    }

})();
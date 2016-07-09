(function() {
    'use strict'
    
    var chat = {
        templateUrl: "app/chat_component/chat.html",
        controller: chatCtrl
    }

    function chatCtrl(chatData){
        var model = this;

        model.messages = chatData; //Obtener data de firebase del factory inyectado
        model.addMessage = addMessage; // Ligar funcion en el modelo (addMessage)

        function addMessage() { // Funcion para agregar data a firebase
            model.messages.$add({
                user: model.user,
                message: model.message
            });

            model.message = "";
        }
    }

    angular
        .module('chat')
        .component('chat', chat)
})();
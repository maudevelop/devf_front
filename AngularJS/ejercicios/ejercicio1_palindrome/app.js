(function() {
'use strict';

    angular
        .module('ejercicio1', [])
        .controller('palindromoCtrl', palindromoCtrl);

    function palindromoCtrl() {
        var palindromo = this;
        palindromo.check = "...";
        palindromo.checkPalindrome = checkPalindrome;

        ////////////////

        function checkPalindrome() {
            if (palindromo.palabra==""){
                palindromo.check="...";
            }else if (palindromeFunc(palindromo.palabra)){
                palindromo.check="Es palindromo";
            }else{
                palindromo.check="No es palindromo";
            }
        }

        function palindromeFunc(p){
            var palabra="";
            var alreves = "";
            var abc = ['a', 'b', 'c', 'd', 'e','f', 'g','h','i', 'j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
            var abcM = ['A', 'B', 'C', 'D', 'E','F', 'G','H','I', 'J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
            for(var i = 0; i<p.length; i++){
                if (p[i] != " ")
                {
                    abcM.indexOf(palabra[i]) != -1 ? palabra+= abc[i]: palabra+= p[i];
                }
            }
            for (var i = palabra.length - 1; i>=0; i--){
                alreves += palabra[i];
            }
            var resultado;
            palabra == alreves ? resultado = true: resultado = false;
            return resultado;

        }

    }
})();
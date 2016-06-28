
function palindromo(p) {
    var palabra = "";
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
palindromo("a b c");

function fibonacci(num){
    var arr = [0, 1];   
    for (i = 2; i<num; i++){
        arr.push(arr[i-1] + arr[i-2]);
    }
    return arr;
}
console.log(fibonacci(20));
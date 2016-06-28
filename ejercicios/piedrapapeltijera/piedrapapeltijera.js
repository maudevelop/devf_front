//var decision1 = prompt("Usuario 1: Piedra papel o tijera? (1= piedra 2= papel 3= tijera)");
//var decision2 = prompt("Usuario 2: Piedra papel o tijera? (1= piedra 2= papel 3= tijera)")


function comparar(decision1, decision2){
    switch(decision1){
        case '1':
            if (decision2 == 1){
                //Usuario 1 piedra Usuario 2 piedra
                console.log("Tie");
            }else if (decision2 == 1){
                //Usuario 1 piedra Usuario 2 papel
                console.log("Usuario 2 gana");
            }else{
                //Usuario 1 piedra Usuario 2 tijera
                console.log("Usuario 1 gana");
            }
            break;
        case '2':
            if (decision2 == 1){
                //Usuario 1 papel Usuario 2 piedra
                console.log("Usuario 1 gana");
            }else if (decision2 == 2){
                console.log("Tie");
            }else{
                //USuario 1 papel USuario 2 tijera
                console.log("Usuario 2 gana");
            }
            break;
        case '3':
            if (decision2 == 1){
                //USuario 1 Tijera Usuario 2 piedra
                console.log("Usuario 2 gana");
            }else if (decision2 == 2){
                //USuario 1 Tijera Usuario 2 PApel
                console.log("Usuario 1 gana");
            }else{
                console.log("Tie");
            }
            break;
    }
}

function random(){
    return Math.floor((Math.random() * 3) + 1);
}

var decision1= prompt("Elige 1= piedra 2= papel o 3= tijera");

console.log(comparar(decision1, random));


            
            
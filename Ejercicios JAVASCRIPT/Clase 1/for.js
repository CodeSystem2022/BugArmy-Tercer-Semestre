for( let cont = 0; cont < 3; cont++){
    console.log(cont);
}
console.log("Fin del ciclo for");

//break
for(let cont = 0; cont <= 10; cont++){
    if(cont % 2 == 0){
        console.log(cont); 
        break;
    }
}
console.log("Termina el ciclo al encontrar el número par");

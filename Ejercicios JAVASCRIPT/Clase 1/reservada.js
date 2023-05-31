inicio:
for(let cont = 0; cont<= 10; cont++){
    if(cont % 2 !== 0){
        break inicio;
    }
    console.log(cont);
}
console.log("Termina el ciclo");
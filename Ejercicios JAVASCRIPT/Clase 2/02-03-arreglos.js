//let autos=new Array('Ferrari','Renault','BMW'); //sintaxis vieja de array

const autos=['Ferrari','Renault','BMW'];
console.log(autos);

//recorro los elementos del arreglo
console.log(autos[0]);

console.log(autos[2]);

//recorro uno por uno
for (let i=0; i<autos.length;i++){
    console.log(i+':'+autos[i]);
}

//Modificar los elementos del arreglo
autos[1]= 'Volvo';
console.log(autos)

//agregar nuevos valores al arreglo
autos.push('Audi');
console.log(autos); //agrega elementos al final

//otra forma de arreglar elementos al arreglo
autos[autos.length]='Porche'
console.log(autos)

//tercera forma de gregar elementos al arreglo (cuidado!! porque pueden quedar espacios que ocupen memorias innecesarias)
autos[6]='Renault'
console.log(autos)

//Como preguntar si es un arreglo?
//Modo 1
console.log(Array.isArray(autos))

//Modo 2
console.log(autos instanceof Array) //Pregunto si la variable es una instancia de
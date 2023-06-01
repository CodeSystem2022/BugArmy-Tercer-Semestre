let x = 10; //Variable de tipo primitivo
console.log(x.length);
console.log("Tipo Primitivo");

//Objeto
let persona = {
    nombre: 'Carlos',
    apellido: 'Gil',
    email:'cgil@gmail.com',
    edad: 30,
    nombreCompleto: function(){ //método o función en JavaScript
        return this.nombre+' '+this.apellido;
    }
}

console.log('Ejecutamos con un objeto');

console.log(persona.nombre);
console.log(persona.apellido);
console.log(persona.email);
console.log(persona.edad);
console.log(persona);
console.log(persona.nombreCompleto());


let persona2 = new Object(); //Debe crear un nuevo objeto en memoria
persona2.nombre = 'Juan';
persona2.direccion = 'Salada 14';
persona2.telefono = '5445645678496';
console.log('Creamos un nuevo objeto')
console.log(persona2.telefono);

console.log(persona['apellido']); //Accedemos como si fuera un arreglo
//for in
for(propiedad in persona){
    console.log(propiedad); //Muestra las propiedades
    console.log(persona[propiedad]); //Muestra todo, accede a los datos
}

console.log('Corregimos un error');
persona.apellido = 'Betancud'; //Cambiamos dinámicamente un valor del objeto
console.log(persona);

persona.apellida = 'Perez';
delete persona.apellida; //Elimina la propiedad


console.log("Distintas formas de imprimir un objeto");

console.log("Número 1: la más sencilla - Concatenar cada valor de cada propiedad");
console.log(persona.nombre + ',' + persona.apellido);

console.log("Número 2: a través del ciclo for in");
for(nombrePropiedad in persona){
    console.log(persona[nombrePropiedad]);
}

console.log("Número 3: la función Object.values()");
let personaArray = Object.values(persona);
console.log(personaArray);

console.log("Número 4: Utilizaremos el método JSON.stringify");
let  personaString = JSON.stringify(persona);
console.log(persona);


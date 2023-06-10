class Persona {
    static contadorPersona = 0;

    constructor(nombre, apellido, edad) {
        this._idPersona = ++Persona.contadorPersona;
        this._nombre = nombre;
        this._apellido = apellido;
        this._edad = edad;
    }
    get idPersona() {
        return this._idPersona;
    }
    get nombre() {
        return this._nombre;
    }
    get apellido() {
        return this._apellido;
    }
    get edad() {
        return this._edad;
    }
    set nombre(nombre) {
        this._nombre = nombre;
    }
    set apellido(apellido) {
        this._apellido = apellido;
    }
    set edad(edad) {
        this._edad = edad;
    }
    toString() {
        return `${this._idPersona} ${this._nombre} ${this._apellido} ${this._edad}`;
    }
}
class Empleado extends Persona {

    static contadorEmpleados = 0;

    constructor(nombre, apellido, edad, sueldo) {
        super(nombre, apellido, edad);
        this._idEmpleado = ++Empleado.contadorEmpleados;
        this._sueldo = sueldo;
    }
    get idEmpleado() {
        return this._idEmpleado;
    }
    get sueldo() {
        return this._sueldo;
    }
    set sueldo(sueldo) {
        this._sueldo = sueldo;
    }
    toString() {
        return `${super.toString()} ${this.idEmpleado} ${this.sueldo}`;
    }
}
class Cliente extends Persona {

    static contadorCliente = 0;

    constructor(nombre, apellido, edad, fecharegistro) {
        super(nombre, apellido, edad);
        this._idCliente = ++Cliente.contadorCliente;
        this._fechaRegistro = fecharegistro;
    }
    get idCliente() {
        return this._idCliente;
    }
    get fechaRegistro() {
        return this._fechaRegistro;
    }
    set fechaRegistro(fecha) {
        this._fechaRegistro = fecha;
    }
    toString() {
        return `${super.toString()} ${this._idCliente} ${this.fechaRegistro}`;
    }
}

let p1 = new Persona('Juan', 'Perez', 32);
let p2 = new Persona('Carla', 'Perez', 22);
let em1 = new Empleado('Pedro', 'Roman', 18, 5000);
let em2 = new Empleado('Jonas', 'Torres', 30, 7000);
let clt1 = new Cliente('Miguel', 'Zala', 29, new Date());
let clt2 = new Cliente('Natalia', 'Ortega', 22, new Date());

console.log(p1.toString());
console.log(p2.toString());
console.log(em1.toString());
console.log(clt1.toString());
console.log(clt2.toString());
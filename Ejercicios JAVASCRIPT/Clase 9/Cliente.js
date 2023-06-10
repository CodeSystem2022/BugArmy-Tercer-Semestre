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
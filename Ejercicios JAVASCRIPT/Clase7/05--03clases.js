class Persona{

    constructor(nombre, apellido){
        this._nombre = nombre;
        this._apellido = apellido;
    }
    get nombre(){
        return this._nombre;
    }
    set nombre(nombre){
        this._nombre = nombre;
    }
    get apellido(){
        return this._apellido;
    }
    set apellido(apellido){
        this._apellido = apellido;
    }
    nombreCompleto(){
        return this.nombre + " " + this.apellido;
    }
    toString(){
        return this.nombreCompleto();
    }
}
class Empleado extends Persona{
    constructor(nombre, apellido, departamentos, cont){
        super(nombre, apellido);
        this._departamentos = departamentos;
        this.cont = cont;
    }
    get cont(){
        return this._cont;
    }
    set cont(cont){
            this._cont = cont;
        }
    get departamentos(){
            return this._departamentos;
        }
    set departamentos(departamentos){
            this._departamentos = departamentos;
        }
    nombreCompleto(){
            return super.nombreCompleto()+ ", " + this._departamentos;
        }
    printFormat(){
        return "\nEmpleado N°"+this.cont+":"+"\nNombre: "+this.nombre +"\nApellido: "+ this.apellido +"\nDepartamento: "+ this.departamentos+"\n";
    }
}

/********************************/

let p1 = new Persona('testName-1', 'testSurname-1');
let p2 = new Persona('testName-2', 'testSurname-2');
let p3 = new Persona('testName-3', 'testSurname-3');

//console.log("Persona 1= " + p1.apellido+ ", " +p1.nombre);
//console.log("Persona 2= " + p2.apellido+ ", " +p2.nombre);
//console.log("Persona 3=" + p3.apellido+ ", " +p3.nombre);

/********************************/

let e1 = new Empleado("testNameE-1", "testSurnameE-1", "testDepartmentE-1", 1);
let e2 = new Empleado("testNameE-2", "testSurnameE-2", "testDepartmentE-2", 2);
let e3 = new Empleado("testNameE-3", "testSurnameE-3", "testDepartmentE-3", 3);

//console.log(e1.printFormat(), e2.printFormat(), e3.printFormat(), e3.printFormat());
//console.log(e1.nombreCompleto());

/**********************************/

//console.log(e1.toString());
//console.log(p1.toString());

/**********************************/
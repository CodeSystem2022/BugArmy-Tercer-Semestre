class Persona{

    static contadorPersona = 0;
    //email = 'Valor default email'
    static get MAX_OBJ(){
        return 5;
    }

    constructor(nombre, apellido){
        this._nombre = nombre;
        this._apellido = apellido;
        if(Persona.contadorPersona < Persona.MAX_OBJ){
            this.idPersona = ++Persona.contadorPersona;
        }
        else{
            console.log("Se ha superado el maximo de objetos permitidos");
        }
        //console.log('Se incrementa el contador: ' +Persona.contadorObjetosPersona);
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
        return this.idPersona + " " + this.nombre + " " + this.apellido;
    }
    toString(){
        return this.nombreCompleto();
    }
    static saludar(){
        console.log("Saludos desde este método static");
    }
    static saludar2(persona){
        console.log(persona.nombre+" "+persona.apellido);
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
let p4 = new Persona('testName-4', 'testSurname-4');
let p5 = new Persona('testName-5', 'testSurname-5');

//console.log("Persona 1= " + p1.apellido+ ", " +p1.nombre);
//console.log("Persona 2= " + p2.apellido+ ", " +p2.nombre);
//console.log("Persona 3=" + p3.apellido+ ", " +p3.nombre);

/********************************/

let e1 = new Empleado("testNameE-1", "testSurnameE-1", "testDepartmentE-1", 1);
let e2 = new Empleado("testNameE-2", "testSurnameE-2", "testDepartmentE-2", 2);
let e3 = new Empleado("testNameE-3", "testSurnameE-3", "testDepartmentE-3", 3);
let e4 = new Empleado("testNameE-4", "testSurnameE-4", "testDepartmentE-4", 4);
let e5 = new Empleado("testNameE-5", "testSurnameE-5", "testDepartmentE-5", 5);

//console.log(e1.printFormat(), e2.printFormat(), e3.printFormat(), e3.printFormat());
//console.log(e1.nombreCompleto());

/**********************************/

//console.log(e1.toString());
//console.log(p1.toString());

/**********************************/

//Persona.saludar();
//Persona.saludar2(p1);

//Empleado.saludar();
//Empleado.saludar2(e1);

/**********************************/

//console.log(Persona.contadorObjetosPersona);
//console.log(Empleado.contadorObjetosPersona);

/**********************************/

//console.log(p1.email);
//console.log(e1.email);

/**********************************/

//console.log(p1.toString());
//console.log(p2.toString());
//console.log(p3.toString());

//console.log(e1.toString());
//console.log(e2.toString());
//console.log(e3.toString());

/**********************************/

//console.log(Persona.MAX_OBJ);
//console.log(p5.toString());

/**********************************/
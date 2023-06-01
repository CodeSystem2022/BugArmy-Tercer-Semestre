package domain;

public class Empleado {
    protected String nombre;     //Atributos de la clase padre Empleado
    protected double sueldo;
    
    public Empleado(String nombre,double sueldo){   //Metodo Constructor (que le paso los atributos como parametros)
        this.nombre = nombre;     //Inicializo atributos 
        this.sueldo = sueldo;
    }    
    //Metodo para luego hacer sobreescritura en la clase hija
    public String obtenerDetalles(){
        return "Nombre:" + this.nombre + ",Sueldo:" + this.sueldo;
    }
        
    //metodos GET y SET para los atributos ya que son protected(get) y querre cambiar el valor (set)   

    public String getNombre() {
        return nombre;
    }

    public void setNombre(String nombre) {
        this.nombre = nombre;
    }

    public double getSueldo() {
        return sueldo;
    }

    public void setSueldo(double sueldo) {
        this.sueldo = sueldo;
    }
    
    
}

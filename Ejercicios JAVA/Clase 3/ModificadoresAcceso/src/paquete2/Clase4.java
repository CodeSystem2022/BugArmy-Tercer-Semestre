package paquete2;

public class Clase4 {
	
	private String atributoPrivate = "Atributo privado";
	
	private Clase4() {
		System.out.println("Constructor privado");
	}
	//Creamos un constructor public para crear objetos
	public Clase4(String argumento) { //Aquí se puede llamar al constructor vacío
		this();
		System.out.println("Constructor público");
	}	
	public String getAtributoPrivate() {
		return atributoPrivate;
	}
	public void setAtributoPrivate(String atributoPrivate) {
		this.atributoPrivate = atributoPrivate;
	}
	//Método private
	private void metodoPrivado() {
		System.out.println("Método privado");
	}
}

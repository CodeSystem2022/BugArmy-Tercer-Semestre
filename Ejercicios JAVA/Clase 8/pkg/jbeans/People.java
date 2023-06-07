package pkg.jbeans;

import java.io.Serializable;


// clase 8.1

public class People implements Serializable{
	private static final long serialVersionUID = 1L;
	
	private String name, surname;
	private int quant;
	
	public People(){
	}
	public People(String name, String surname, int q) {
		this.name = name;
		this.surname = surname;
		this.quant = q;
	}
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public String getSur() {
		return surname;
	}
	public void setSur(String surname) {
		this.surname = surname;
	}
	@Override
	public String toString() {
		return "Persona N°" + quant +":\n"+ "\nNombre: " + name +"\nApellido: "+ surname +"\n";
	}
	
	
}

package com.calculadora;

public class Calculadora {
	//metodo que no regresa nada 
public void sumarMensaje () {
	
	System.out.println("voy a sumar dos numeros");
	
	
}
//metodo que retorna datos
public String mensaje() {
	String mensaje="voy a relaizar una operacion";
	return mensaje;
	
}
//operaciones 
public float suma (float a, float b) {
	return a+b;
}
public float restar (float a, float b) {
	return a-b;
}
public float multiplicar (float a, float b) {
	return a*b;
}
public float dividir (float a, float b) {
	if (b!=0) {
		return a/b;
	}
	else {
		return -1;
	}
}

public void sumarN(int a, int b) {
	System.out.println("la suma es: " + (a+b));
}

//metodos con argumentos 
}

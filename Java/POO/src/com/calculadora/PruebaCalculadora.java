package com.calculadora;

public class PruebaCalculadora {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		
		System.out.println("vamos a calcular");
		
		Calculadora cal= new Calculadora ();
		cal.sumarMensaje();
		//metodos con argumentos 
		double suma=cal.suma(10, 20);
		System.out.println(suma);
		cal.sumarN(19, 20);
		Areas ar=new Areas();
		ar.mensaje();
		
		System.out.println(ar.areaCuadrado(2));
		

	}

}

package com.ejercicio;

import java.util.Scanner;

public class CalculadoraGeometrica {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		
	
		Perimetro per=new Perimetro();
		Areas ar=new Areas();
		
	Scanner sc=new Scanner(System.in);
	System.out.println("TRIANGULO");
	System.out.print("LADO 1= ");
	double lado1=sc.nextDouble(); 
	System.out.print("LADO 2= ");
	double lado2=sc.nextDouble(); 
	System.out.print("BASE= ");
	double base3=sc.nextDouble(); 
	double triangulo=per.perimetroTriangulo(lado1,lado2,base3);
	System.out.println("El perimetro del triangulo es: " + triangulo);
	double arT=ar.areaTriangulo(lado1,base3);
	System.out.println("El area del triangulo es: " + arT);
	//////////////////////////////////////////
	System.out.println("CuADRADO");
	System.out.println("LADO= ");
	int c1=sc.nextInt(); 
	int cuadrado=per.perimetroCuadrado(c1);
	System.out.println("El perimetro del cuadrado es: " + cuadrado);
	int arC=ar.areaCuadrado(c1);
	System.out.println("El area del cuadrado es: " + arC);
	
	//////////////////////////////////////////7
	System.out.println("CIRCULO");
	System.out.print("DIAMETRO= ");
	double d1=sc.nextDouble(); 
	double r1=d1/2; 
	System.out.println("RADIO= "+ r1);
	double circulo=per.perimetroCirculo(d1);
	System.out.println("EL perimetro del circulo es: " + circulo);
	double arCi=ar.areaCirculo(r1);
	System.out.println("El area del circulo es: " + arCi);
	sc.close();
	}

}

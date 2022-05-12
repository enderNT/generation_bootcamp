class persona {
  //atributos
  #id=0;
  static #contador=0;
  #nombre = "";
  #edad = null;
  #correo = "";
  constructor(nombre, edad, correo) {
    this.#nombre = nombre;
    this.#edad = edad;
    this.#correo = correo;
    this.#id=++persona.#contador;
}
  //set & get (fijar /obtener)
  //se llaman como si fueran atributos
  get getNombre(){
      return this.#nombre
  }
  set setNombre(nombre){
      this.#nombre=nombre;
  }
  get getEdad(){
    return this.#edad
}
set setEdad(edad){
    this.#edad=edad;
}
get getCorreo(){
    return this.#correo
}
set setCorreo(correo){
    this.#correo=correo;
}
//metodos
cambiarNombre(nombre){
    this.#nombre=nombre;
}
#saludar(){
    let mensaje=`Hola mi nombre es ${this.#nombre}`
    return mensaje;
}
mostrarSaludo(){
    return this.#saludar();
}
static mostrarContador(){
    return persona.#contador;
}
}
//instancia de la clase persona
const persona1 = new persona("ghadieel", 14, "ghadieel@gmail.com");
const persona2 = new persona("santiago", 29, "g_santi144@hotmail.com");
const persona3= new persona("martin",40,"martin@gmail.com");
console.log(persona1);
console.log(persona2);
console.log(persona3);
console.log(persona.mostrarContador());
/* console.log(persona1.getNombre);
console.log(persona1.getEdad);
console.log(persona1.getCorreo);
////////////////////////////
persona1.setNombre='juan';
persona1.setEdad=29;
persona1.setCorreo='juan@gmail.com';
console.log(persona1.getNombre);
console.log(persona1.getEdad);
console.log(persona1.getCorreo);
//////////////////////////
console.log(persona2.getNombre);
console.log(persona2.getEdad);
console.log(persona2.getCorreo);
////metodos
console.log( persona1.mostrarSaludo());
 */
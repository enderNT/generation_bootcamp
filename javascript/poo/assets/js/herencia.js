class pokemon{
    //
    #nombre="";
    #edad=0;
    #evolucion;
    
    constructor(nombre,edad,evoluvion,tipo){
        this.#nombre=nombre;
        this.#edad=edad;
        this.#evolucion=evoluvion;
          
    }
    get nombre(){
        return this.#nombre
    }
    atacar(){
        return console.log(`${this.#nombre}, esta atacando`);
    }
    evolucionar(){
        //||operador de cortocircuito
        //false => toma el valor de la izquierda 
        //true =>toma al valor de la derecha 
        const EVOLUCION=this.#evolucion ||'';
        let mensaje="no puedo evolucionar";
        if(EVOLUCION){
            mensaje=`${this.#nombre} ha evolucionado a ${EVOLUCION}`
            this.#nombre=EVOLUCION;
        }
        return console.log(mensaje);
    }
}
/* const charmander= new pokemon('Charmander',2,'Charmeleon','Fuego');
const bulbasaur= new pokemon('Bulbasaur', 1, 'Ivisaur', 'Planta');
console.log(charmander);
console.log(bulbasaur);

charmander.atacar();
bulbasaur.atacar();
charmander.evolucionar();

console.log(charmander); */

//clase hija tipoFuego- padre pokemon
class tipoFuego extends pokemon{
  #tipo="";
    constructor (nombre,edad,evoluvion){
     super(nombre,edad,evoluvion);
     this.#tipo='fuego';
    }
    atacar(){
        return console.log(`${super.nombre}, esta lanzando un ataque de tipo ${this.#tipo}`);
    } 
}

const charmander= new tipoFuego('Charmander',2,'Charmeleon');
console.log(charmander);

charmander.atacar();
charmander.evolucionar();
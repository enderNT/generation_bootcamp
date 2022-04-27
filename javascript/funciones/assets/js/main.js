/* Funciones: nos permiten reutilizar código */

/* function saludar(nombre = "Panchito", apellido = ""){
    
    //string normal
    let nombre= true;
    //console.log('Hola mi nombre es: ', nombre, apellido); //forma 1
    
    //console.log(`Hola mi nombre es: ${nombre?"David":"Desconocido"}`);
    //template Strings || plantillas literales / 
    Lo que está dentro de las llaves se llama operador ternario o condicional.
    return `Mi nombre es ${nombre} ${apellido}`
} */

//saludar();

//saludar("", "Pérez");
//Sobreescribe el valor de arriba. Representa la invocación o llamada de la función

//let funcionSaludar = saludar('Felipe', 'Maqueda');
//console.log(funcionSaludar);

//console.log(saludar('Alberto', 'Hernandez').toLowerCase());
//console.log(funcionSaludar.toUpperCase());

/* document.write('<h1>Este es un h1</h1>');
console.log('<h1>Este es un h1</h1>');
console.log(`<h1>Este es un h1</h1>`); 
//Plantilla Literal
*/


/* Funcion declarada */
console.log(suma(10,20));
//Se puede mandar a llamar incluso antes de inicializarla a eso se le llama "hoisting"

function suma(a,b){
    return a+b;
}

/* Funciones expresadas | Función expresión */
const resta = function(a,b){
    return a-b;
}
//No se puede hacer hoisting
console.log(resta(30,10));

//Callbacks
/* setTimeout(()=>{ 

}, 3000); */

//Funcion flecha
//Es la "novedad" para declarar funciones.
/* const multiplicacion = (a,b) =>{
    return a*b;
}*/

const multiplicacion = (a,b) => a*b; 
//Remplaza al corchete y al return

console.log(multiplicacion(40, 5));
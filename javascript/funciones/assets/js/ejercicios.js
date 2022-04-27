
const invertir  = (palabra = "") =>{
    /*if(palabra.length <=1 )
    return console.warn('No ingreso nungún valor');

    if(typeof(palabra) !== 'string')
    return console.error('El valor ingresado no es una palabra');*/

    let arreglo = palabra.split("");
    let reverso = arreglo.reverse();
    let unir = reverso.join("");
    
    return console.log(unir);
}

invertir("Hola mundo");
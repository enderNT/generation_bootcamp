/* Algunas cosas que podemos hacer con DOM */
/*Propiedades */
console.log(window.document);
console.log(document);
console.log(document.head); /*Regresa el head del documento HTML*/
console.log(document.body); /*Regresa el body del documento HTML*/
console.log(document.documentElement); /*Regresa solo el HTML*/
console.log(document.doctype);
console.log(document.charset);

console.log(document.links); /*Regresa la colección de enlaces*/
console.log(document.images); /*Regresa las imagenes de la página*/
console.log(document.styleSheets); /*Regresa los estilos de CSS*/
console.log(document.scripts); /*Regresa los scripts de Js*/

/*Métodos */
/*Es un método que se ejecuta cada cierto tiempo */
setTimeout(() => {

    /*Es un método que lo que selecciona, lo convierte en string */
    console.log(document.getSelection().toString());
}, 3000);

setTimeout(() => {
    /* Se añade como última línea al documento HTML */
    document.write("Hola mundo desde el DOM");
}, 3000);
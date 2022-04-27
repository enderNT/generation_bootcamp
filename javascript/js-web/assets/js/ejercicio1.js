/* Instrucciones:
* Crear los documentos: ejercicio1.html y ejercicio1.js
* Crear una aplicación que registre y muestre la tecla presionada
* Mostrar key keycode y code
*/

const $input = document.getElementById('textIn');
const $output = document.getElementById('textOut');

window.addEventListener('keydown', function (event) {
    this.setTimeout(function () {
        $output.innerHTML = event.key + ' ' + event.keyCode + ' ' + event.code;
    }, 50);

    console.log(event.key, event.keyCode, event.code);

});
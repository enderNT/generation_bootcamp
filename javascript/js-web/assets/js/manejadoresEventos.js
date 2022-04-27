
function saludar() {
    alert("Hola");
}

/* Manejador de eventos semántico  */

const $btnSemantico = document.getElementById('btnSemantico');
$btnSemantico.onclick = saludar;
/*Sin parentesis, ya que se ejecutaría de manera común*/

/*
const $btnSemAnonimFunction = document.getElementById('btnSemAnonimFunction');
$btnSemAnonimFunction.onclick = function (evento){
    console.log(evento);
   }
*/

/* Manejador de eventos múltiples */

const $btnEventoMultiple = document.getElementById('btnEventoMultiple');

$btnEventoMultiple.addEventListener('click', function (evento){
    alert("Evento 1");
});

$btnEventoMultiple.addEventListener('click', function (evento){
        console.log(evento.target);
    });



const year = document.querySelector('#year');
const btnCalcular = document.querySelector('#btnCalcular');

const yearActual = new Date().getFullYear();

btnCalcular.addEventListener('click', calcularEdad);

function calcularEdad() {
    const yearNacimiento = year.value;
    const edad = yearActual - yearNacimiento;
    console.log(edad);
}
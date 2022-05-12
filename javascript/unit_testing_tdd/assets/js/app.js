const suma = (a, b) => {
  return a - b;
};

/* console.log(suma(1,3)===4);
console.log(suma(0,0)===0);
console.log(suma(5,5)===10); */

const arr = [
  {
    a: 1,
    b: 3,
    resultado: 4,
  },
  {
    a: 0,
    b: 0,
    resultado: 0,
  },
  {
    a: 5,
    b: 5,
    resultado: 10,
  },
  {
    a: 10,
    b: 20,
    resultado: 30,
  },
  {
    a: 20,
    b: 20,
    resultado: 40,
  }
  
];
//?: assert crea una comparacion y devuelve un bollean
/* console.assert(suma(1,3)===4, 
'el resultado de la suma 1+3 deberia ser 4') */

arr.forEach(prueba => {

    const{a,b,resultado}=prueba;
    console.assert(suma(a,b)==resultado, `el resultado de ${a}+${b} es ${resultado}`)

});
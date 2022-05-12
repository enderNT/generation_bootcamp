const formulario=document.querySelector('form');
formulario.addEventListener("submit",(e)=>{
    e.preventDefault();
    console.log("boton presionado");
  const busqueda1=document.querySelector("input").value;
  console.log(busqueda1);
  window.location.href=`busqueda.html?${busqueda1}`;
})
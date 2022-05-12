const idinfo = window.location.href.split("=").pop();
const info = document.getElementById("infoani");
/* console.log(idinfo); */
const urlId = `https://api.jikan.moe/v4/anime/${idinfo}`;
fetch(urlId)
  .then((r) => r.json())
  .then((datos) => {
    /* console.log(datos.data); */
    const datosNecesarios = {
      id: datos.data.mal_id,
      imagen: datos.data.images.jpg.large_image_url,
      sinopsis: datos.data.synopsis,
      nombre: datos.data.title,
    };
    /*  console.log(datosNecesarios); */
    const template = ` 
    <div class="col">
<img src="${datosNecesarios.imagen}" alt="" class="img-fluid">
  </div>
  <div class="col">
  <h2>${datosNecesarios.nombre}</h2>
  <p>${datosNecesarios.sinopsis}</p>
  <div class="favorito">
    <button type="button" class="btn btn-dark" id="agregarFavoritos">agregar a favorito</button>
  </div>
  </div>`;
    info.innerHTML = template;
    const btn=document.getElementById('agregarFavoritos')
    btn.addEventListener("click",()=>{
       /*  console.log("agregado"); */
       const datos={
           id:datosNecesarios.id,
           nombre:datosNecesarios.nombre,
           imagen:datosNecesarios.imagen,
       }
       if (localStorage.getItem("fav")) {
           /* console.log("existe un elemento"); */
           /* console.log( JSON.parse(localStorage.getItem("fav"))); */
           const fav= JSON.parse(localStorage.getItem("fav"))
           fav.push(datos)
           localStorage.setItem("fav",JSON.stringify(fav));
           console.log(fav);
           
       }
       else
           {
               console.log("no tienes fav");
           const fav=[];
           fav.push(datos)
           localStorage.setItem("fav",JSON.stringify(fav));
    }
      
     /*   JSON.parse(localStorage.getItem("favoritos"))//obtine datos guardados
       localStorage.setItem("favoritos",JSON.stringify(favoritos))//gurada datos */
    })
   if( localStorage.getItem("fav"))console.log("tienes datos");
   else(console.log("no tienes datos"))
});

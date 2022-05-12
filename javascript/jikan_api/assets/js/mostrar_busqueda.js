const busquedaInf=window.location.href.split("?").pop();
console.log(busquedaInf);

const urlBusqueda=`https://api.jikan.moe/v4/anime?q=${busquedaInf}&order_by:popularity`

const mostarBusqueda=document.getElementById('busquedaAnime');

fetch(urlBusqueda).then(r=>r.json()).then(datos=>{
    console.log(datos.data);
    const resultadoBusqueda=datos.data;
    resultadoBusqueda.forEach(anime => {
        const datosNecesarios = {
            nombre: anime.title,
            imagen: anime.images.jpg.image_url,
            id: anime.mal_id,
            sinopsis: anime.synopsis,
          };
          const template = `
        <div class="col mb-4">
        <div class="card">
          <img src="${datosNecesarios.imagen}" class="card-img-top" alt="...">
          <div class="card-body">
            <h5 class="card-title">${datosNecesarios.nombre}</h5>
          </div>
        </div>
      </div>`;
        mostarBusqueda.innerHTML+=template;
    });
})
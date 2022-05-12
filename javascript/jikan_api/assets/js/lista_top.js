const urltop="https://api.jikan.moe/v4/top/anime"
const topanime=document.getElementById('topanime');
fetch(urltop).then(r=>r.json()).then(datos=>{
   /*  console.log(datos.data.slice(0,8)); */
    const animesTop=datos.data.slice(0,8);
    animesTop.forEach(anime => {
        const datosNecesarios={
            nombre: anime.title,
        }
        const template=`<a href="#" class="list-group-item list-group-item-action">${datosNecesarios.nombre}</a>
        `;
        topanime.innerHTML+=template;
    });
})
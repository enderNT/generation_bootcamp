const URL = 'https://dog.ceo/api/breeds/list/all'
const $lista = document.querySelector('ul')

window.fetch(URL).then(resp => resp.json()).then(datos => {
  const { message } = datos
  const arregloTiposTerrier = message.terrier
  arregloTiposTerrier.forEach(tipoTerrier => {
    const template = `<li class="list-group-item">${tipoTerrier}</li>`
    $lista.innerHTML += template
  })
}).catch(e => console.error(e))

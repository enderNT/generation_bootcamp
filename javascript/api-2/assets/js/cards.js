const URL = 'https://jsonplaceholder.typicode.com/albums/1/photos'
const $containerCards = document.querySelector('#container-cards')

window.fetch(URL).then(r => r.json()).then(d => {
  d.forEach(data => {
    const card = `<div class="col mb-4">
    <div class="card">
      <img src=${data.url} class="card-img-top" alt=${data.title}>
      <div class="card-body">
      <h5 class='card-title'>${data.albumId}</h5>
        <p class="card-text">${data.title}</p>
      </div>
    </div>
  </div>`
    $containerCards.innerHTML += card
  })
})

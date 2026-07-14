
const apiKey = "dd47d1d7";

function openModal(id,title) {
  document.getElementById(id).style.display = 'flex';


fetch(`http://www.omdbapi.com/?apikey=${apiKey}&t=${encodeURIComponent(title)}`)
.then (res => res.json())
.then (data => {
  console.log(data);
  const imdb = data.imdbRating
  document.getElementById("imdb-" + id.split("modal-")[1]).innerHTML = ` <i class="fa-solid fa-star" style="color: #FFD43B;"></i> IMDb: ${imdb}/10`;
})
.catch (err => console.log(err))
}

function closeModal(id) {
  document.getElementById(id).style.display = 'none';
}

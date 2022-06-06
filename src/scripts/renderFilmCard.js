import { popularFilm } from '././fetch.js'
const gallery = document.querySelector('.gallery');

const place = document.querySelector('.main');

popularFilm().then((filmSet) => {
    console.log(filmSet)
    const filmArray = filmSet.results;
    renderFilmCardHtml(filmArray);
});

export function renderFilmCardHtml(filmArray) {
    const renderHtml = filmArray.reduce((html, film) => {
        return html +=
        `<li class="gallery__item">
          <div class="movie-card">
            <img
              class="poster"
              src="https://image.tmdb.org/t/p/original/${film.poster_path}"
              alt="poster of movie"
              data-id="${film.id}"
              loading="lazy"
            />

            <div class="movie-details">
              <div class="movie-details-info">
                <p class="movie-name">${film.title}</p>
                <div class="movie-description">
                  <p class="movie-info">Documentary, Drama, Other | 2019</p>
                  <div class="movie-details-rate">6.5</div>
                </div>
              </div>
            </div>
          </div>
        </li>`
    }, "");
  
  
    return gallery.insertAdjacentHTML('beforeend', renderHtml);
}

//src="https://upload.wikimedia.org/wikipedia/commons/c/c2/No_image_poster.png"
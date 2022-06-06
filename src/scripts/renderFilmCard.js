import { popularFilm } from '../scripts/fetch.js'
import { refs } from './refs.js';

// import movieCardTemplate from '.././templates/cards.hbs';

// const place = document.querySelector('.main');

popularFilm().then((filmSet) => {
    console.log(filmSet)
    const filmArray = filmSet.results;
    renderFilmCardHtml(filmArray);
});

export function renderFilmCardHtml(filmArray) {
  const markup = filmArray.reduce((html, film) => {
  const { original_title, poster_path, genre_ids, id, release_date } = film;
        return html +=
        `<li class="gallery__item">
          <div class='movie-card'>
            <img class='poster' src='https://image.tmdb.org/t/p/w500/${poster_path}' loading="lazy" alt='Poster for film ${original_title}' data-id=${id} />
            <div class="movie-details">
              <p class="movie-name">${original_title}</p>
              <p class="movie-info">${genre_ids} | ${release_date}</p>
            </div>
          </div>
        </li>`
    }, "");
    return refs.movieGallery.insertAdjacentHTML('beforeend', markup); 
}

//src="https://upload.wikimedia.org/wikipedia/commons/c/c2/No_image_poster.png"
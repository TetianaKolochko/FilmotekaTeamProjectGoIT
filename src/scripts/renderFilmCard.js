import { popularFilm } from '../scripts/fetch.js'
import { refs } from './refs.js';

// import movieCardTemplate from '.././templates/cards.hbs';

popularFilm().then((filmSet) => {
    console.log(filmSet)
    const filmArray = filmSet.results;
    renderMovieCardOnMainPage(filmArray);
});

export function renderMovieCardOnMainPage(filmArray) {

  const markup = filmArray.reduce((html, film) => {
  const { original_title, poster_path, genre_ids, id, release_date } = film;
        return html +=
        `<li class="gallery__item">
          <a class="gallery__link">
            <img class='gallery__poster' src='https://image.tmdb.org/t/p/w500/${poster_path}' loading="lazy" alt='Poster for film ${original_title}' data-id=${id} />
          <div class="gallery__movie-details">
            <p class="movie-details__movie-name">${original_title}</p>
            <p class="movie-details__movie-info">${genre_ids} | ${release_date}</p>
          </div>
          </a>
        </li>`
    }, "");

    return refs.movieGallery.insertAdjacentHTML('beforeend', markup);
}

//src="https://upload.wikimedia.org/wikipedia/commons/c/c2/No_image_poster.png"
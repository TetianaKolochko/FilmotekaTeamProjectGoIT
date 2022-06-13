import { popularFilm } from './fetch.js'
import { refs } from './refs.js';
import { GENRES } from './genre.js';
import { removeCardFromList } from "./onOpenLibrary";


getPopularMovieList();

export function getPopularMovieList() {
  return popularFilm().then((filmSet) => {
    console.log(filmSet)
    const filmArray = filmSet.results;
    renderMovieCardOnMainPage(filmArray);
  })
};

export function renderMovieCardOnMainPage(filmArray) {
  const markup = filmArray.reduce((html, film) => {
    const { original_title, poster_path, genre_ids, id, release_date } = film;
    const genresArray = getGenresToId(genre_ids);
    const genresText = sliceGenres(genresArray);
     return html +=
        `<li class="gallery__item">
          <a class="gallery__link" href="" data-id=${id}>
            <img class='gallery__poster' src='https://image.tmdb.org/t/p/w500/${poster_path}' loading="lazy" alt='Poster for film ${original_title}'/>
            <div class="gallery__movie-details">
              <p class="movie-details__movie-name">${original_title}</p>
              <p class="movie-details__movie-info">${genresText} | ${release_date}</p>
            </div>
          </a>
        </li>`
  }, "");
    return refs.movieGallery.insertAdjacentHTML('beforeend', markup);
}

//src="https://upload.wikimedia.org/wikipedia/commons/c/c2/No_image_poster.png"

export function renderWatchedMovie(filmObject) {
  
  const markup = filmObject.reduce((html, film) => {
    const { original_title, poster_path, genres, id, release_date, vote_average } = film;
    const genresNameArray = getGenresToName(genres);
    const genresText = sliceGenres(genresNameArray);
    // const func = () => {
    //   console.log('1 :>> ');
    // }
    return html +=
      `<li class="gallery__item">
          <a class="gallery__link" href="" data-id=${id}>
            <img class='gallery__poster' src='https://image.tmdb.org/t/p/w500/${poster_path}' loading="lazy" alt='Poster for film ${original_title}' />
            <div class="gallery__movie-details">
              <p class="movie-details__movie-name">${original_title}</p>
              <div class="movie-details-wrap">
                <p class="movie-details__movie-info">${genresText} | ${release_date}</p>
                <div class="movie-details-rate">${vote_average}</div>
              </div>
            </div>
            
          </a>
          <button type="button" class="remove-btn" card-id=${id}">
          <svg class="close-icon" width="14" height="14">
            <svg class="close-icon" width="100" height="100">
              <path  stroke-linejoin="miter" stroke-linecap="butt" stroke-miterlimit="4" stroke-width="2.1333" d="M8.533 8.533l14.933 14.933"></path>
              <path stroke-linejoin="miter" stroke-linecap="butt" stroke-miterlimit="4" stroke-width="2.1333" d="M8.533 23.467l14.933-14.933"></path>
          </svg>
          </button>
        </li>`}, "");
  
  // refs.removeBtn.addEventListener('click', removeCardFromList);
  
    return refs.movieGallery.insertAdjacentHTML('beforeend', markup);
}



export function getGenresToId(idArray) {
  return idArray.map(genreId => GENRES[genreId]);
}

function getGenresToName(idArray) {  
  return idArray.map(GENRES => GENRES.name);  
}


 export function sliceGenres(genreArray) {
  if (genreArray.length > 2) {
    const slicedGenredWordArray = genreArray.slice(0, 2);
    slicedGenredWordArray.push('Other');
    return slicedGenredWordArray.join(", ");
  }
  return genreArray.join(", ")
}


//tried to add class to btn, also get this btn at all
// const removeBtn = () => {
//   let btn = document.querySelectorAll('.remove-btn');
//   console.log('btn :>> ', btn);
//   btn.forEach(item => {
//     item.classList.add('examoke');
//     item.addEventListener('click', () => console.log('object'));
//   })
// }

// (async function fetchFunc() {
//   await getWatchedMovie(moviesIds);
//   await removeBtn();
// })()

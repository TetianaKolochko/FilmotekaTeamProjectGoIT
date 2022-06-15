import { load, save, remove } from '../scripts/localStorageApi.js';
import { renderWatchedMovie } from './renderFilmCard';
import { resetGallery } from '../scripts/resetGallery.js';
import { findCardId } from './fetch';
import { refs } from './refs.js';

const addWatched = () => {
  const btn = document.querySelector('.modal__container .btn__watch');

  btn.addEventListener('click', function () {
    btn.classList.add('active');
    const id = btn.getAttribute('data-id');

    if (load('watched') === undefined) {
      let movieListId = [id];
      save('watched', movieListId);
    } else {
      const movieListId = load('watched');

      if (movieListId.includes(id) === false) {
        movieListId.push(id);
        save('watched', movieListId);
      }
    }
    // console.log(window.localStorage.getItem('watched'));
  });
};
export default addWatched;

export function getWatchedMovie(moviesIds) {
  const localStorageFile = load(moviesIds);
  // console.log('-------------------------------------------- :>>');
  resetGallery();
  if (localStorageFile) {
    
    return localStorageFile.map((filmId) => {
      findCardId(filmId).then(filmObj => {
        // console.log('Whatch object :>> ');
        // console.log(filmObj);
        const filmArr = [filmObj]
        // console.log('Film Arr :>> ');
        // console.log(filmArr);

        return renderWatchedMovie(filmArr);
        // refs.removeBtn.addEventListener('click', removeCardFromList);
        
      })
    })
  }
}


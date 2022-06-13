import { load, save, remove } from '../scripts/localStorageApi.js';
import { renderWatchedMovie } from './renderFilmCard';
import { resetGallery } from '../scripts/resetGallery.js';
import { findCardId } from './fetch';
import { refs } from './refs.js';

const addWatched = () => {
  const btn = document.querySelector('.modal__container .btn__watch');

  btn.addEventListener('click', function () {
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

// export function getWatchedMovie() {
//   const getIdArray = localStorage.getItem('watched');
//   const parsedIdArray = JSON.parse(getIdArray);
//   if (getIdArray) {
//     resetGallery();
//     return parsedIdArray.map((filmId) => {
//       findCardId(filmId).then(filmObj => {
//         console.log('Whatch object :>> ');
//         console.log(filmObj);
//         const filmArr = [filmObj]
//         console.log('Film Arr :>> ');
//         console.log(filmArr);
//         return renderWatchedMovie(filmArr);
//       })
//     })
//   }
// }


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





//removing card from localStorage
function removeCardFromList() {
  let localStorageFile = localStorage.getItem('watched');
  console.log('localStorageFile :>> ', localStorageFile);
  const cardId = removeBtn.getAttribute("card-id");
  console.log('cardId :>> ', cardId);
  for (let index = 0; index < localStorageFile.length; index++) {
    if (localStorageFile[index] === cardId) {
      localStorage.removeItem(localStorageFile[index]);
    }
  }
  getWatchedMovie('watched');
}

// return localStorageFile;
  // const li = e.target.parentElement.parentElement;
  // li.remove();
  // // closest('li').remove();
  // console.log('removed :>>');b

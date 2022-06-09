import { load, save, remove } from '../scripts/localStorageApi.js';

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
    console.log(window.localStorage.getItem('watched'));
  });
};
export default addWatched;

import { findCardId } from '../fetch.js';

import * as basicLightbox from 'basiclightbox';
import 'basiclightbox/dist/basicLightbox.min.css';

function openModal(e) {
  e.preventDefault();

  fetchOneMovieInfo(e.target.dataset.id)
    .then(data => {
      if (e.target.nodeName !== 'IMG') return;

      const markup = modalFilmCard(data);
      const modal = basicLightbox.create(markup);

      modal.show();

      const closeBtn = document.querySelector('.modal-close-btn');
      closeBtn.addEventListener('click', closeModal);

      window.addEventListener('keydown', closeModalHandler);

      function closeModalHandler(e) {
        if (e.code === 'Escape') {
          modal.close();
          window.removeEventListener('keydown', closeModalHandler);
        }
        }
        function closeModal(e) {
        modal.close();
        window.removeEventListener('keydown', closeModalHandler);
      }

      //new Function
      //initStorageBtns();
    })
    .then(data => {})
    .catch(error => {
      console.log('oops!');
    });
}
import { findCardId } from '../fetch.js';
import { refs } from '../refs.js';
import { createModalFilmCard } from './modalFilmCard.js';
import addWatched from '../addWatched.js';
import addQueue from '../addQueue.js';
import movieTrailer from './modalTrailer.js';


import * as basicLightbox from 'basiclightbox';
import 'basiclightbox/dist/basicLightbox.min.css';

refs.movieGallery.addEventListener('click', openModal);

function openModal(e) {
  e.preventDefault();

  if (e.target.nodeName !== 'A') {
    return;
  };
    
  findCardId(e.target.dataset.id)
    .then(movie => {
      //console.log(e.target.nodeName);
      //console.log(movie);            
      const modal = basicLightbox.create(createModalFilmCard({ movie }));      
  
      modal.show();
      document.body.style.overflow = 'hidden';
      addWatched();
      addQueue();
      movieTrailer();
      const closeBtn = document.querySelector('.modal-close-btn');
      closeBtn.addEventListener('click', closeModal);

      window.addEventListener('keydown', closeModalHandler);
      window.addEventListener('click', closeModalBackdrop);

      function closeModalBackdrop(e) {        
        if (e.target.nodeName === 'DIV') {
          modal.close();
          document.body.style.overflow = '';
          window.removeEventListener('keydown', closeModalHandler);
        }
        }

      function closeModalHandler(e) {        
        if (e.code === 'Escape') {
          modal.close();
          document.body.style.overflow = '';
          window.removeEventListener('keydown', closeModalHandler);
        }
      }
      function closeModal(e) {
        modal.close();
        document.body.style.overflow = '';
        window.removeEventListener('keydown', closeModalHandler);
      }
    })
    .then(data => {})
    .catch(error => {
      console.log('oops!');
    });
}

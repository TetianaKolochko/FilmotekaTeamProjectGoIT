import * as basicLightbox from 'basiclightbox';
import 'basiclightbox/dist/basicLightbox.min.css';

import { findTrailer } from '../fetch.js';

const movieTrailer = () => {
  const trailerBtn = document.querySelector('.trailer__btn');

  trailerBtn.addEventListener('click', function (e) {
        openTrailer(e.target.dataset.id);
  })
}

function openTrailer (id) {
  findTrailer(id).then(data => {
    console.log(data);
        const key = data.results[0].key;
        const modal = basicLightbox.create(`
  <iframe width="860" height="615" src="https://www.youtube.com/embed/${key}" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
<button class="modal-close-btn">
     <svg class="close-modal__icon" width="20" height="20">
 <path  stroke-linejoin="miter" stroke-linecap="butt" stroke-miterlimit="4" stroke-width="2.1333" d="M8.533 8.533l14.933 14.933"></path>
<path stroke-linejoin="miter" stroke-linecap="butt" stroke-miterlimit="4" stroke-width="2.1333" d="M8.533 23.467l14.933-14.933"></path>
     </svg>
     </button>`);
    modal.show();
    
    const closeBtn = document.querySelector('.modal-close-btn');
    closeBtn.addEventListener('click', closeModal);
    function closeModal(e) {
        modal.close();        
        window.removeEventListener('keydown', closeModalHandler);
      }
      })
      .catch(error => {
      const modal = basicLightbox.create(`
    <iframe width="860" height="615" src="https://www.youtube.com/embed/6DhiiFGk4_s" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
      `);
        modal.show();
    });
  }


export default movieTrailer;
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
        const key = data.results[0].key;
        const instance = basicLightbox.create(`
  <iframe width="860" height="615" src="https://www.youtube.com/embed/${key}" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
`);
        instance.show();
        
      })
      .catch(error => {
      console.log('oops!');
    });
  }


export default movieTrailer;
import * as basicLightbox from 'basiclightbox';
import 'basiclightbox/dist/basicLightbox.min.css';

const movieTrailer = () => {
  const btn = document.querySelector('.modal__container .trailer__btn');

  btn.addEventListener('click', function (e) {
        openTrailer(e.target.dataset.id);
  })
}

function openTrailer (id) {
    const ApiKey = '1e3bd345eb5d29ac0f4521d096bb0e9d';
    const url = `https://api.themoviedb.org/3/movie/${id}/videos?api_key=${ApiKey}&language=en-US`;
    fetch(url)
      .then(response => response.json())
      .then(data => {
        const id = data.results[0].key;
        const instance = basicLightbox.create(`
  <iframe width="860" height="615" src="https://www.youtube.com/embed/${id}" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
`);
        instance.show();
        
      })
      .catch(error => {
      console.log('oops!');
    });
  }


export default movieTrailer;
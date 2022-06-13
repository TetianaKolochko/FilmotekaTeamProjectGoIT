import { GENRES } from "../genre";



export function createModalFilmCard({ movie }) {
    const genresArray = getGenresToId(movie.genres);
    const genresText = addGenres(genresArray);
    return `
         <div class="modal__container">
     <div class="film__image">
     <button class="trailer__btn">Watch trailer
     <svg class="close__icon-trailer" width="50" height="50">
     
       </svg>
     </button>
        <img class="image" src="https://image.tmdb.org/t/p/original/${movie.poster_path}" alt="${movie.title}" loading="lazy" width="500" />
     </div>
        <div class="film__information">
           
     <h2 class="film__title">${movie.title}</h2>
     <ul>
     <li class="film__item">
                        <p class="film__details ">Vote / Votes</p>
                        <p class="film__info--uper">
                           <span class=" film__rating--orange">${movie.vote_average}</span>
                           <span class="film__rating--divider"> / </span>
                           <span>${movie.vote_count}</span>
                       </p>
                    </li>
        <li class="film__item">
                       <p class="film__details ">Popularity</p>
                       <p class="film__info--uper">${movie.popularity}</p>
                  </li>
                   <li class="film__item">
                         <p class="film__details">Original title</p>
                         <p class="film__details-title">${movie.original_title}</p>
                    </li>
                    <li class="film__item">
                 <p class="film__details">Genre</p>
                 <p class="film__info">
              <span>${genresText}</span>
                                                                           
              </p>
                 </li>
                     </ul>
                     <div>
                     <h3 class="film__about__title">About</h3>
                     <p class="film__about__text">${movie.overview}</p>
          
           <div class="film__button__wrapper">
               <button type="button" class=" film__button btn__watch" data-id="${movie.id }">Add to watched</button>
               <button type="button" class=" film__button btn__queue" data-id="${movie.id }">Add to queue</button>
             </div>
                <button class="modal-close-btn">
                  <svg class="close-icon" width="100" height="100">
                    <path  stroke-linejoin="miter" stroke-linecap="butt" stroke-miterlimit="4" stroke-width="2.1333" d="M8.533 8.533l14.933 14.933"></path>
                    <path stroke-linejoin="miter" stroke-linecap="butt" stroke-miterlimit="4" stroke-width="2.1333" d="M8.533 23.467l14.933-14.933"></path>
                  </svg>
                </button>
               </div>
             </div>`;
    
}
    
function getGenresToId(idArray) {  
  return idArray.map(GENRES => GENRES.name);  
}

 function addGenres(genreArray) {
  
  return genreArray.join(", ")
}


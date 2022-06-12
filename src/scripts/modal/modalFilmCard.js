import { GENRES } from "../genre";
import { sliceGenres } from '../renderFilmCard';


export function createModalFilmCard({ movie }) {
        const genresArray = getGenresToId(movie.genres);
        const genresText = sliceGenres(genresArray);
        return `
         <div class="modal__container">
     <button class="modal-close-btn">
     <svg class="close-icon" width="14" height="14">
     <path stroke-linejoin="miter" stroke-linecap="butt" stroke-miterlimit="4" stroke-width="2.1333" d="M8.533 23.467l14.933-14.933"></path>
    //  <use href="../images/sprite.svg/#close"></use>
     </svg>
     </button>
     <div class="film__image">
     <button class="trailer__btn">
     <svg class="close__icon-trailer" width="40" height="70">
     <path d="M0 4v24h32v-24h-32zM6 26h-4v-4h4v4zM6 18h-4v-4h4v4zM6 10h-4v-4h4v4zM24 26h-16v-20h16v20zM30 26h-4v-4h4v4zM30 18h-4v-4h4v4zM30 10h-4v-4h4v4zM12 10v12l8-6z"></path>
    //  <use href="./images/sprite.svg/#film"></use>
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
                           <span class=" film__rating--orange">${
                             movie.vote_average
                           }</span>
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
               <button type="button" class=" film__button btn__watch" data-id="${
                 movie.id
               }">Add to watched</button>
               <button type="button" class=" film__button btn__queue" data-id="${
                 movie.id
               }">Add to queue</button>
             </div>
               </div>
             </div>`;
    
        
}
    
function getGenresToId(idArray) {  
  return idArray.map(GENRES => GENRES.name);  
}

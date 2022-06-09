import { GENRES } from "../genre";
import { sliceGenres } from '../renderFilmCard';


export function createModalFilmCard({ movie }) {
        const genresArray = getGenresToId(movie.genres);
        const genresText = sliceGenres(genresArray);
        return `
         <div class="modal__container">
     <button class="modal-close-btn">
     <svg class="close-icon" width="14" height="14">
     <use href="/sprite.77e7e650.svg/#close"></use>
     </svg>
     </button>
     <div class="film__image">
     <button class="trailer__btn">
     <svg class="close__icon-trailer" width="50" height="30">
     <use href="/sprite.77e7e650.svg/#film"></use>
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
               <button type="button" class=" film__button btn__queue" data-id="">Add to queue</button>
             </div>
               </div>
             </div>`;
    
        
}
    
function getGenresToId(idArray) {  
  return idArray.map(GENRES => GENRES.name);  
}

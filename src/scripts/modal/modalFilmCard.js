import { GENRES } from '../genre';

export function createModalFilmCard({ movie }) {
  console.log(movie);
  return `
   
     <div class="modal__container">
     <button class="modal-close-btn">Close</button>
     <div class="film__image">
     
        <img class="image" src="https://image.tmdb.org/t/p/original/${
          movie.backdrop_path
        }" alt="${movie.title}" loading="lazy" width="500" />
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

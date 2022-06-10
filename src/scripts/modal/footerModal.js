import{ teamId }  from '../team';

import * as basicLightbox from 'basiclightbox' 
import 'basiclightbox/dist/basicLightbox.min.css';

const btnTeam = document.querySelector('.footer-text__command');
const autorsCardsMarkup = teamId
.map(({ name, position, github, instagram }) => {
        return `
        <li class="worker__item">
              <div class="worker__card">
                <h2 class="worker__title">${name}</h2>
                <div class="worker__icons">
                <p class = "worker__position">${position}</p>  
                <a class="worker__icon" href="${github}">
                          <svg width="35" height="35">
                            <use href="#github"></use>
                          </svg>
                        </a>
                  <a class="workers__icon" href="${instagram}">
                          <svg width="35" height="35">
                            <use href="#instagram"></use>
                          </svg>
                        </a>
                </div>
            </div>
          </li>`
})
.join(``);

btnTeam.addEventListener('click', modalShow);

function modalShow(e){
    e.preventDefault();
    
    const instance = basicLightbox.create(autorsCardsMarkup);
    instance.show();

    closeModal(e);
}

function closeModal(e) {
    if (e.code === 'Escape') {
      modal.close();
      window.removeEventListener('keydown', closeModal);
    } 
}






// function autorsCardsMarkup(teamId){
//     return teamId
//     .map(({ name, position, github, instagram }) => {
//      return `
//     <li class="worker__item">
//         <div class="worker__card">
//         <h2 class="worker__title">${name}</h2>
//         <div class="worker__icons">
//             ${
//                 position
//                   ? ` <a class="worker__icon" href="${position}"></a>`
//                   : ''
//               }
//               ${
//                 github
//                   ? ` <a class="worker__icon" href="${github}">
//                       <svg width="35" height="35">
//                         <use href="${links}#github"></use>
//                       </svg>
//                     </a>`
//                   : ''
//               }
//               ${
//                 instagram
//                   ? ` <a class="workers__icon" href="${instagram}">
//                       <svg width="35" height="35">
//                         <use href="${links}#instagram"></use>
//                       </svg>
//                     </a>`
//                   : ''
//               }
//             </div>
//         </div>
//       </li>`;

// })
// .join(` `);
// }

  // if(modal.visible()) {
    //     window.addEventListener(`keydown`, (event) => {
    //         console.log(event);
    //         if(event.code === `Escape`) {
    //             modal.close();
    //         };
    //     });
    // };

    // const autorsContainer = document.querySelector('#js_team_modal');



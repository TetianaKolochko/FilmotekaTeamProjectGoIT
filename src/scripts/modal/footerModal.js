import teamId from '../team';

import * as basicLightbox from 'basiclightbox' 
import 'basiclightbox/dist/basicLightbox.min.css';

// const autorsContainer = document.querySelector('a');
const btnTeam = document.querySelector('.footer-text__command');
function autorsCardsMarkup(teamId){
    return teamId
    .map(({ name, position, github, instagram }) => {
     return `
    <li class="worker__item">
        <div class="worker__card">
        <h2 class="worker__title">${name}</h2>
        <div class="worker__icons">
            ${
                position
                  ? ` <a class="worker__icon" href="${position}"></a>`
                  : ''
              }
              ${
                github
                  ? ` <a class="worker__icon" href="${github}">
                      <svg width="35" height="35">
                        <use href="${links}#github"></use>
                      </svg>
                    </a>`
                  : ''
              }
              ${
                instagram
                  ? ` <a class="workers__icon" href="${instagram}">
                      <svg width="35" height="35">
                        <use href="${links}#facebook"></use>
                      </svg>
                    </a>`
                  : ''
              }
            </div>
        </div>
      </li>`;

})
.join(` `);
}

// autorsContainer.insertAdjacentHTML('beforeend', autorsCardsMarkup);
btnTeam.addEventListener('click', modalShow);

function modalShow(e){
    e.preventDefault();
    
    const instance = basicLightbox.create(`
    <div class="modal">
        <p>A custom modal that has been styled independently. It's not part of basicLightbox, but perfectly shows its flexibility.</p>
        <input placeholder="Type something">
        <a>Close</a>
    </div>
`, {
    onShow: (instance) => {
        instance.element().querySelector('a').onclick = instance.close
    }
})

instance.show()

    if(modal.visible()) {
        window.addEventListener(`keydown`, (event) => {
            console.log(event);
            if(event.code === `Escape`) {
                modal.close();
            };
        });
    };
}










// import team from "../team";


// export function ourCardTeam ({ name, position, github, instagram }){
//     return `
//     <li class="worker__item">
        
//           <div class="worker__card">
//             <h2 class="worker__title">${name}</h2>
//             <div class="worker__icons">
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
//                         <use href="${links}#facebook"></use>
//                       </svg>
//                     </a>`
//                   : ''
//               }
//             </div>
//         </div>
//       </li>`

// }




import { TEAM } from "../team";

export function ourCardTeam ({ name, github, instagram }){
    return `
    <li class="worker__item">
        
          <div class="worker__card">
            <h2 class="worker__title">${name}</h2>
            <div class="worker__icons">
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
      </li>`

}




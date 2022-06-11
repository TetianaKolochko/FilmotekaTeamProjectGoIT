import { teamIds }  from '../team';
import { refs } from '../refs.js';

const btnTeam = document.querySelector('.footer_open');

(() => {
    const refs = {
      openModalBtn: document.querySelector('[data-modal-open]'),
      closeModalBtn: document.querySelector('[data-modal-close]'),
      modal: document.querySelector('[data-modal]'),
    };
  
    refs.openModalBtn.addEventListener('click', toggleModal);
    refs.closeModalBtn.addEventListener('click', toggleModal);
  
    function toggleModal() {
      refs.modal.classList.toggle('visually-hidden');
    }
  })();

function renderTeamMember(teamIds) {
    console.log('render :>> ');
    const markup = teamIds.reduce((html, member) => {
      const { name, position, github, instagram, img } = member;
      
       return html +=
          `<li class="worker-item">
          <a href="" class="worker-link ">
            <div class="worker-item-wrap">
           <img src="${img}" alt="member image" width="10px" height="10px"/>
           <p class="worker-top-text">Технокряк это современная площадка распространения коронавируса. Компании используют эту платформу для цифрового шпионажа и атак на защищённые сервера конкурентов</p>
           </div>
            <div class="worker-card">
                  <h2 class="worker-title">${name}</h2>
                  <p class = "worker-text">${position}</p> 
                  <div class="worker__icons">
                  <a class="worker__icon" href="${github}">
                  <img src="/src/images/Team Avengers/CatWoman.jpeg" width="35" height="35" />
                           
                          </a>
                    <a class="workers__icon" href="${instagram}">
                            <svg width="35" height="35">
                              <use href="./images/sprite.svg#icon-arrow-right"></use>
                            </svg>
                          </a>
                  </div>
              </div>
              </a>
          </li>`
      }, "");
      return refs.workerList.insertAdjacentHTML('beforeend', markup);
  }

//   <svg width="35" height="35">
//   <use href="./images/sprite.svg#icon-arrow-right"></use>
// </svg>

  btnTeam.addEventListener('click', onClickBtn);

  function onClickBtn (){
      console.log('click Open :>> ');
      const team = teamIds;
      renderTeamMember(team);
  }




import { teamIds }  from '../team';
import { refs } from '../refs.js';

import Siema from 'siema';

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
           <img src="${img}" alt="member image" width="8px" height="8px"/>
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

  btnTeam.addEventListener('click', onClickBtn);

  function onClickBtn (){
      console.log('click Open :>> ');
      const team = teamIds;
      renderTeamMember(team);
      
      
  }

  const mySiema = new Siema({
    selector: '.siema_one',
    duration: 200,
    easing: 'ease-out',
    perPage: 1,
    startIndex: 0,
    draggable: true,
    multipleDrag: true,
    threshold: 20,
    loop: false,
    rtl: false,
    onInit: () => {},
    onChange: () => {},
  });
  
    document.querySelector('.prev').addEventListener('click', () => mySiema.prev());
    document.querySelector('.next').addEventListener('click', () => mySiema.next());



  



  

//   <svg width="35" height="35">
//   <use href="./images/sprite.svg#icon-arrow-right"></use>
// </svg>
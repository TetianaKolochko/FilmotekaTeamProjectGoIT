import { teamIds }  from '../team';
import { refs } from '../refs.js';
import Siema from 'siema';

const setting = {
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
}

const refsModal = {
    openModalBtn: document.querySelector('.footer-text__command'),
    closeModalBtn: document.querySelector('[data-modal-close]'),
    modal: document.querySelector('[data-modal]'),
    body: document.querySelector('body'),
  };
  
refsModal.openModalBtn.addEventListener('click', onOpenModal);
refsModal.closeModalBtn.addEventListener('click', onCloseModal);


function renderTeamMember(teamIds) {
    console.log('render :>> ');
    const markup = teamIds.reduce((html, member) => {
      const { name, position, github, instagram, img, text} = member;
      
       return html +=
          ` <div class="worker__item">
            <img src="${img}" alt="member image" class="worker__img" width="350px" height="375px"/>
            <div class="worker-card">
                  <h2 class="worker-title">${name}</h2>
                  <p class = "worker-positoin">${position}</p> 
                  <div class="worker__icons">
                    <a class="worker__icon" href="${github}">
                        <svg width="50" height="50">
                              <use href="href="./images/sprite.svg#icon-github""></use>
                        </svg>
                    </a>
                    <a class="workers__icon" href="${instagram}">
                        <svg width="50" height="50">
                              <use href="./images/sprite.svg#icon-instagram"></use>
                        </svg>
                          </a> 
                        <p class="worker-text">${text}</p>     
                </div>
                </div>
                </div>`
      }, "");
      return refs.workerList.insertAdjacentHTML('beforeend', markup);
      
  }

function onOpenModal(e) {
    e.preventDefault();

    const team = teamIds;
    renderTeamMember(team);
    refsModal.body.addEventListener('keydown', onEscCloseModal);
    refsModal.modal.addEventListener('click', onBackdropCloseModal);
    const mySiema = new Siema(setting);
    document.querySelector('.prev').addEventListener('click', () => mySiema.prev());
    document.querySelector('.next').addEventListener('click', () => mySiema.next());
    refsModal.modal.classList.add('shown');
  }
  
function onCloseModal ()  {
      refsModal.modal.classList.remove('shown');
      refsModal.body.removeEventListener('Keydown', onEscCloseModal);
      refsModal.modal.removeEventListener('click', onBackdropCloseModal);
  }
  
function onEscCloseModal(e) {
      if (e.keyCode === 27) {
          onCloseModal();
      }
  }
  
function onBackdropCloseModal(e) {
      const isBackdrop = e.target === refsModal.modal;
  
      if (isBackdrop) {
          onCloseModal();
      }
  }







//   btnTeam.addEventListener('click', onClickBtn);

//   function onClickBtn (){
//       console.log('click Open :>> ');
//       const team = teamIds;
//       renderTeamMember(team);
//       const mySiema = new Siema(setting);

//     document.querySelector('.prev').addEventListener('click', () => mySiema.prev());
//     document.querySelector('.next').addEventListener('click', () => mySiema.next());
      
//   }



//   <svg width="35" height="35">
//   <use href="./images/sprite.svg#icon-arrow-right"></use>
// </svg>
import { teamIds }  from '../team';
import { refs } from '../refs.js';
import Siema from 'siema';
import { lockBodyScroll }  from '../bodyScroll.js';


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
    sliderBody: document.querySelector('.js-worker__list'),
  };
  
refsModal.openModalBtn.addEventListener('click', onOpenModal);
refsModal.closeModalBtn.addEventListener('click', onCloseModal);


function renderTeamMember(teamIds) {
    console.log('render :>> ');
    const markup = teamIds.reduce((html, member) => {
      const { name, position, github, instagram, img, text} = member;
      
       return html +=
          ` <div class="worker__item">
            <div class="worker-image-wrapp">
            <img src="${img}" alt="member image" class="worker__img"/>
            </div>
                  <h2 class="worker-title">${name}</h2>
                  <p class ="worker-position">${position}</p> 
                  <div class="worker__icons">
                    <a class="worker__icon-link" href="${github}">
                      <svg class="worker__icon worker__icon--git" width="32px" height="32px">
                      ${iconGitSvgCode}
                      </svg>
                    </a>
                    <a class="worker__icon-link" href="${instagram}">
                      <svg class="worker__icon worker__icon--inst" width="32px" height="32px">
                      ${iconInstSvgCode}
                      </svg>
                    </a> 
                  </div>
                  <p class="worker-text">${text}</p> 
                </div>`
      }, "");
      return refs.workerList.insertAdjacentHTML('beforeend', markup);
      
  }

function onOpenModal(e) {
  e.preventDefault();
    const team = teamIds;
    if (refsModal.sliderBody.innerHTML === "") {
      renderTeamMember(team);
      const mySiema = new Siema(setting);
      document.querySelector('.prev').addEventListener('click', () => mySiema.prev());
      document.querySelector('.next').addEventListener('click', () => mySiema.next());
  }
    refsModal.body.addEventListener('keydown', onEscCloseModal);
    refsModal.modal.addEventListener('click', onBackdropCloseModal);
    refsModal.modal.classList.add('shown');
    lockBodyScroll();
  }
  
function onCloseModal ()  {
      refsModal.modal.classList.remove('shown');
      refsModal.body.removeEventListener('Keydown', onEscCloseModal);
      refsModal.modal.removeEventListener('click', onBackdropCloseModal);
      lockBodyScroll();
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


const iconInstSvgCode = `
<path d="M16 2.881c4.275 0 4.781 0.019 6.462 0.094 1.563 0.069 2.406 0.331 2.969 0.55 0.744 0.288 1.281 0.638 1.837 1.194 0.563 0.563 0.906 1.094 1.2 1.838 0.219 0.563 0.481 1.412 0.55 2.969 0.075 1.688 0.094 2.194 0.094 6.463s-0.019 4.781-0.094 6.463c-0.069 1.563-0.331 2.406-0.55 2.969-0.288 0.744-0.637 1.281-1.194 1.837-0.563 0.563-1.094 0.906-1.837 1.2-0.563 0.219-1.413 0.481-2.969 0.55-1.688 0.075-2.194 0.094-6.463 0.094s-4.781-0.019-6.463-0.094c-1.563-0.069-2.406-0.331-2.969-0.55-0.744-0.288-1.281-0.637-1.838-1.194-0.563-0.563-0.906-1.094-1.2-1.837-0.219-0.563-0.481-1.413-0.55-2.969-0.075-1.688-0.094-2.194-0.094-6.463s0.019-4.781 0.094-6.463c0.069-1.563 0.331-2.406 0.55-2.969 0.288-0.744 0.638-1.281 1.194-1.838 0.563-0.563 1.094-0.906 1.838-1.2 0.563-0.219 1.412-0.481 2.969-0.55 1.681-0.075 2.188-0.094 6.463-0.094zM16 0c-4.344 0-4.887 0.019-6.594 0.094-1.7 0.075-2.869 0.35-3.881 0.744-1.056 0.412-1.95 0.956-2.837 1.85-0.894 0.888-1.438 1.781-1.85 2.831-0.394 1.019-0.669 2.181-0.744 3.881-0.075 1.713-0.094 2.256-0.094 6.6s0.019 4.887 0.094 6.594c0.075 1.7 0.35 2.869 0.744 3.881 0.413 1.056 0.956 1.95 1.85 2.837 0.887 0.887 1.781 1.438 2.831 1.844 1.019 0.394 2.181 0.669 3.881 0.744 1.706 0.075 2.25 0.094 6.594 0.094s4.888-0.019 6.594-0.094c1.7-0.075 2.869-0.35 3.881-0.744 1.050-0.406 1.944-0.956 2.831-1.844s1.438-1.781 1.844-2.831c0.394-1.019 0.669-2.181 0.744-3.881 0.075-1.706 0.094-2.25 0.094-6.594s-0.019-4.887-0.094-6.594c-0.075-1.7-0.35-2.869-0.744-3.881-0.394-1.063-0.938-1.956-1.831-2.844-0.887-0.887-1.781-1.438-2.831-1.844-1.019-0.394-2.181-0.669-3.881-0.744-1.712-0.081-2.256-0.1-6.6-0.1v0z"></path>
<path d="M16 7.781c-4.537 0-8.219 3.681-8.219 8.219s3.681 8.219 8.219 8.219 8.219-3.681 8.219-8.219c0-4.537-3.681-8.219-8.219-8.219zM16 21.331c-2.944 0-5.331-2.387-5.331-5.331s2.387-5.331 5.331-5.331c2.944 0 5.331 2.387 5.331 5.331s-2.387 5.331-5.331 5.331z"></path>
<path d="M26.462 7.456c0 1.060-0.859 1.919-1.919 1.919s-1.919-0.859-1.919-1.919c0-1.060 0.859-1.919 1.919-1.919s1.919 0.859 1.919 1.919z"></path>`;

const iconGitSvgCode = `
<path d="M16 0.395c-8.836 0-16 7.163-16 16 0 7.069 4.585 13.067 10.942 15.182 0.8 0.148 1.094-0.347 1.094-0.77 0-0.381-0.015-1.642-0.022-2.979-4.452 0.968-5.391-1.888-5.391-1.888-0.728-1.849-1.776-2.341-1.776-2.341-1.452-0.993 0.11-0.973 0.11-0.973 1.606 0.113 2.452 1.649 2.452 1.649 1.427 2.446 3.743 1.739 4.656 1.33 0.143-1.034 0.558-1.74 1.016-2.14-3.554-0.404-7.29-1.777-7.29-7.907 0-1.747 0.625-3.174 1.649-4.295-0.166-0.403-0.714-2.030 0.155-4.234 0 0 1.344-0.43 4.401 1.64 1.276-0.355 2.645-0.532 4.005-0.539 1.359 0.006 2.729 0.184 4.008 0.539 3.054-2.070 4.395-1.64 4.395-1.64 0.871 2.204 0.323 3.831 0.157 4.234 1.026 1.12 1.647 2.548 1.647 4.295 0 6.145-3.743 7.498-7.306 7.895 0.574 0.497 1.085 1.47 1.085 2.963 0 2.141-0.019 3.864-0.019 4.391 0 0.426 0.288 0.925 1.099 0.768 6.354-2.118 10.933-8.113 10.933-15.18 0-8.837-7.164-16-16-16z"></path>`;
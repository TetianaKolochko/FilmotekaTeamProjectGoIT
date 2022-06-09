import teamTemplate from '../modal/footerModal';
import { TEAM } from '../team';

import * as basicLightbox from 'basiclightbox' 
import 'basiclightbox/dist/basicLightbox.min.css';
import NProgress from 'nprogress';
import 'nprogress/nprogress.css';

const modalContainer = document.querySelector('#js-team-modal');

modalContainer.addEventListener('click', openModal);

function openModal(e) {
  e.preventDefault();
//   showConfetti();
  NProgress.start();

  try {
    getTeamInfo(TEAM);
  } catch (error) {
    // errorModal();
    console.error('Smth wrong with team modal window' + error);
  }

  NProgress.done();
}
// Function for getting data from Json
function getTeamInfo(teamId) {
  const teamMarkup = teamTemplate(teamId);
  const modalContent = basicLightbox.create(teamMarkup);

  modalContent.show();

  window.addEventListener('keydown', closeModalByEsc);

  function closeModalByEsc(e) {
    if (e.code === 'Escape') {
      modalContent.close();

      window.removeEventListener('keydown', closeModalByEsc);
    }
  }
  const btnCloseRef = document.querySelector('.close__button');
  btnCloseRef.addEventListener('click', closeModalbyBtn);
  function closeModalbyBtn() {
    modalContent.close();

    btnCloseRef.removeEventListener('click', closeModalbyBtn);
  }
}


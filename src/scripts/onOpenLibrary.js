import { refs } from './refs.js';
import { resetGallery } from './resetGallery.js';
import { getPopularMovieList } from './renderFilmCard.js';
import { getWatchedMovie } from './addWatched';

import {
  createListFilms,
  onHideSearchInfo,
  onClearSearchInput,
} from './searsh.js';

refs.headerNav.addEventListener('click', onChangePage);
refs.logo.addEventListener('click', onLogoClick);
refs.libraryBtn.addEventListener('click', onLiblaryClick);
refs.watchedBtn.addEventListener('click', onWatchedClick);


// const removeCardFromList = () =>

function onChangePage(e) {
  e.preventDefault();
  onHideSearchInfo();
  const currentElementClick = e.target;
  if (currentElementClick.nodeName !== 'A') {
    return;
  }

  if (currentElementClick.hasAttribute('data-libraryPage')) {
    showLibraryPage(currentElementClick);
    setActiveLink(currentElementClick);
  }
  if (currentElementClick.hasAttribute('data-homePage')) {
    showHomePage(currentElementClick);
    setActiveLink(currentElementClick);
  }
}

function onLogoClick(e) {
  e.preventDefault();
  const currentElementClick = e.target;
  onClearSearchInput();
  onHideSearchInfo();
  showHomePage(currentElementClick);
  deleteActiveLink();
  refs.homePage.classList.add('header-nav__link--active');
}

function showLibraryPage(targetElement) {
  if (!targetElement.classList.contains('header-nav__link--active')) {
    resetGallery();
    refs.changedElementsToOpenLibrary.forEach(el => {
      return el.classList.add('js-open-library');
    });
  }
}

function showHomePage(targetElement) {
  if (!targetElement.classList.contains('header-nav__link--active')) {
    resetGallery();
    refs.changedElementsToOpenLibrary.forEach(el => {
      return el.classList.remove('js-open-library');
    });
    if (refs.searchInput.value !== '') {
      return createListFilms(refs.searchInput.value);
    }
    getPopularMovieList();
  }
}

function setActiveLink(targetElement) {
  deleteActiveLink();
  targetElement.classList.add('header-nav__link--active');
}

function deleteActiveLink() {
  return refs.headerNavLinks.forEach(link => {
    if (link.classList.contains('header-nav__link--active')) {
      link.classList.remove('header-nav__link--active');
    }
  });
}



function onLiblaryClick() {
  getWatchedMovie('watched');

  // refs.removeBtn.addEventListener('click', removeCardFromList);
}

function removeCardFromList() {
  let localStorageFile = localStorage.getItem('watched');
  console.log('localStorageFile :>> ', localStorageFile);
  const cardId = removeBtn.getAttribute("card-id");
  console.log('cardId :>> ', cardId);
  for (let index = 0; index < localStorageFile.length; index++) {
    if (localStorageFile[index] === cardId) {
      localStorage.removeItem(localStorageFile[index]);
    }
  }
  getWatchedMovie('watched');
  }

function onWatchedClick() {
  getWatchedMovie('watched');
  // refs.removeBtn.addEventListener('click', removeCardFromList);
}



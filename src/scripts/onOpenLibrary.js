import { refs } from './refs.js';
import { resetGallery } from './resetGallery.js';
import { getPopularMovieList } from './renderFilmCard.js';

import {
  createListFilms,
  onHideSearchInfo,
  onClearSearchInput,
} from './searsh.js';

refs.headerNav.addEventListener('click', onChangePage);
refs.logo.addEventListener('click', onLogoClick);

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

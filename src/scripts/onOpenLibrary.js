import { refs } from './refs.js'

refs.headerNav.addEventListener('click', onChangePage);

function onChangePage(e) {
    e.preventDefault();
    const currentElementClick = e.target;
    if (currentElementClick.nodeName !== "A") {
        return;
    }

    if (currentElementClick.hasAttribute('data-libraryPage')) {
        onOpenLibraryPage(currentElementClick)
    }
    if (currentElementClick.hasAttribute('data-homePage')) {
         onOpenHomePage(currentElementClick);
    }
}

function onOpenHomePage(currentElementClick) {
    if (!currentElementClick.classList.contains('header-nav__link--active')) {
        console.log('home');
        deleteActiveLink()
        setActiveLink(currentElementClick)
        refs.heroSection.classList.remove('js-library');
        refs.libraryButtons.classList.add('visually-hidden');
        refs.searchInput.classList.remove('visually-hidden');
    }
}

function onOpenLibraryPage(currentElementClick) {
    if (!currentElementClick.classList.contains('header-nav__link--active')) {
        console.log('lib');
        onHideSearchInput();
        refs.heroSection.classList.add('js-library');
        refs.libraryButtons.classList.remove('visually-hidden');
        deleteActiveLink()
        setActiveLink(currentElementClick);
    }
}

function setActiveLink(currentElement) {
    currentElement.classList.add('header-nav__link--active');
}

function deleteActiveLink() {
    return refs.headerNavLinks.forEach(link => {
        if (link.classList.contains('header-nav__link--active')) {
            link.classList.remove('header-nav__link--active');
        }
    })
}

function onHideSearchInput() {
    refs.searchInput.classList.add('visually-hidden');
}


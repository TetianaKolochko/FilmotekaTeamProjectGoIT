import { popularFilm } from '././fetch.js'

const place = document.querySelector('.main');

popularFilm().then((filmSet) => {
    console.log(filmSet)
    const filmArray = filmSet.results;
    renderFilmCardHtml(filmArray);
});

export function renderFilmCardHtml(filmArray) {
    const renderHtml = filmArray.reduce((html, film) => {
        return html += `<ul class=""><li>${film.title}</li></ul>`
    }, "");
    return place.insertAdjacentHTML('beforeend', renderHtml); 
}

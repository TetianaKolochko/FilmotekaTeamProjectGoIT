!function(){var e="1e3bd345eb5d29ac0f4521d096bb0e9d";var a={heroSection:document.querySelector(".js-hero__section"),heroContainer:document.querySelector(".js-hero__container"),headerNav:document.querySelector(".js-header-nav"),headerNavLinks:document.querySelectorAll(".js-header-nav__link"),searchInput:document.querySelector(".js-search__wrapp"),libraryButtons:document.querySelector(".js-library__button-wrapp"),movieGallery:document.querySelector(".js-gallery")};function t(e){e.classList.add("header-nav__link--active")}function n(){return a.headerNavLinks.forEach((function(e){e.classList.contains("header-nav__link--active")&&e.classList.remove("header-nav__link--active")}))}(function(){var a=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1;return fetch("https://api.themoviedb.org/3/trending/movie/day?api_key=".concat(e,"&page=").concat(a)).then((function(e){return e.json()}))})().then((function(e){console.log(e),function(e){var t=e.reduce((function(e,a){var t=a.original_title,n=a.poster_path,r=a.genre_ids,i=a.id,s=a.release_date;return e+"<li class=\"gallery__item\">\n          <div class='gallery__poster-wrapp'>\n            <img class='gallery__poster' src='https://image.tmdb.org/t/p/w500/".concat(n,"' loading=\"lazy\" alt='Poster for film ").concat(t,"' data-id=").concat(i,' />\n          </div>\n          <div class="gallery__movie-details">\n            <p class="movie-details__movie-name">').concat(t,'</p>\n            <p class="movie-details__movie-info">').concat(r," | ").concat(s,"</p>\n          </div>\n        </li>")}),"");a.movieGallery.insertAdjacentHTML("beforeend",t)}(e.results)})),a.headerNav.addEventListener("click",(function(e){e.preventDefault();var r=e.target;if("A"!==r.nodeName)return;r.hasAttribute("data-libraryPage")&&function(e){e.classList.contains("header-nav__link--active")||(console.log("lib"),a.searchInput.classList.add("visually-hidden"),a.heroSection.classList.add("js-library"),a.libraryButtons.classList.remove("visually-hidden"),n(),t(e))}(r);r.hasAttribute("data-homePage")&&function(e){e.classList.contains("header-nav__link--active")||(console.log("home"),n(),t(e),a.heroSection.classList.remove("js-library"),a.libraryButtons.classList.add("visually-hidden"),a.searchInput.classList.remove("visually-hidden"))}(r)}))}();
//# sourceMappingURL=index.256500d5.js.map

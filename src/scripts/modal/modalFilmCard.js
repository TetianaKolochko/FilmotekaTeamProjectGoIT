
const getMoviePage = () => {
    const {
        poster_path,
        title,
        vote_average,
        vote_count,
        popularity,
        original_title,
        overview,
        genres,
        id,
    } = movie;

    const genresList = genres => {
      return genres.reduce((acc, item) => {
        return (acc += `<li class="genre-list--item"><span>${item.name}</span></li>\n`);
      }, "");
    };
     return `
    <div class="container">
    <section class="section" data-id="{id}">
      <div class="poster-wrapper">
        <img class="film-poster" src="https://image.tmdb.org/t/p/w500/${poster_path}" alt="poster image" />
      </div>
      <div class="description-wrapper">
      <h2 class="film-title">${title}</h2>
      
      <div class="vote-wrapper">
        <span class="titles vote-titles">vote / votes: </span>
        <span class="votes-numbers">${vote_average} / ${vote_count}</span>
      </div>
      <div class="popularity-wrapper">
        <span class="titles film-popularity">popularity: </span>
        <span class="popularity-score">${popularity}</span>
      </div>
      <div class="original-film-wrapper">
        <span class="titles original-film-titles">original title: </span>
        <span class="original-film-name">${original_title}</span>
      </div>
      <div class="film-genre-wrapper">
        <span class="titles film-genre">genre: </span>
        <ul class="genre-list">${genresList(genres)}</ul>
      </div>
      <h3 class="about-movie">About</h3>
      <p class="film-description">
        ${overview}
      </p>
      <div class="button-wrapper">
         <button type="button" class=" film__button btn__watch" data-id="${id}">Add to watched</button>
         <button type="button" class=" film__button btn__queue" data-id="${id}">Add to queue</button>
      </div>
    </section>
    </div>
    `;
  };


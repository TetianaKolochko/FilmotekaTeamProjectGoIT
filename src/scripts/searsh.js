import { refs } from './refs.js';
import { findWordKey } from './fetch';
import { resetGallery } from './resetGallery';
import { renderMovieCardOnMainPage } from './renderFilmCard';
import { getPopularMovieList } from './renderFilmCard.js';

import { Notify } from 'notiflix/build/notiflix-notify-aio';
import { Loading } from 'notiflix/build/notiflix-loading-aio';



const debounce = require('lodash.debounce');
const DEBOUNCE_DELAY = 300;

refs.searchInput.addEventListener("input",debounce(onTexterialInput,DEBOUNCE_DELAY));

function onTexterialInput(e) {
    onHideSearchInfo()
    resetGallery();

    Loading.hourglass({
        backgroundColor: "rgba(0,0,0,0)",   
    });

    let curentCountri = e.target.value.trim();

    if(curentCountri===""){
        Loading.remove();
        return getPopularMovieList();
    };
    
    createListFilms (curentCountri);
}

export function createListFilms (inputValue) {

    findWordKey(inputValue).then(inputValue=>{

        Loading.remove();

        if(inputValue.results.length<1){
            Notify.failure(`Can't find a movie with this name`);
            return onShowSearchInfo();
        }

        renderMovieCardOnMainPage(inputValue.results);
    })

}

function onShowSearchInfo () {
    refs.searchInfo.classList.add('shown');
}

export function onHideSearchInfo() {
    refs.searchInfo.classList.remove('shown');
}

export function onClearSearchInput () {
    refs.searchInput.value = "";
}
import { refs } from './refs.js';
import { findWordKey } from './fetch';
import { resetGallery } from './resetGallery';
import { renderMovieCardOnMainPage } from './renderFilmCard';
import { getPopularMovieList } from './renderFilmCard.js';
import { renderPaginationButtons } from './pagination.js';

import { Notify } from 'notiflix/build/notiflix-notify-aio';
import { Loading } from 'notiflix/build/notiflix-loading-aio';



const debounce = require('lodash.debounce');
const DEBOUNCE_DELAY = 300;

refs.searchInput.addEventListener("input",debounce(onTexterialInput,DEBOUNCE_DELAY));

let checkStartSpiner = null;


function onTexterialInput(e) {
    onHideSearchInfo()
    resetGallery();

    checkStartSpiner = true;
    setTimeout(() => {showSpiner ()}, 300);


    let curentCountri = e.target.value.trim();

    if(curentCountri===""){
        checkStartSpiner = false;

        Loading.remove();
        return getPopularMovieList();
    };
    
    createListFilms (curentCountri);
}

export function createListFilms (inputValue, page) {

    findWordKey(inputValue, page).then(inputValue => {
        // console.log(inputValue.results)

        checkStartSpiner = false;

        Loading.remove();

        if(inputValue.results.length<1){
            Notify.failure(`Can't find a movie with this name`);
            return onShowSearchInfo();
        }

        renderMovieCardOnMainPage(inputValue.results);
        renderPaginationButtons(inputValue.total_pages, inputValue.page);
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

function showSpiner (){

    if(checkStartSpiner === true){

        Loading.hourglass({
            svgColor: "rgb(255, 106, 0)",
            backgroundColor: "rgba(0,0,0,0)", 
             
        });

     checkStartSpiner = false;
        
    }
   
}
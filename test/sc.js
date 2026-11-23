`use strict`;

let click = document.querySelector(`#click`);
let res = document.querySelector(`#res`);
let count = document.querySelector(`.count`);
let text;

if(window.localStorage.length === 0) {
   window.localStorage.setItem(`text`, ``); 
} else {
    count.value = window.localStorage.getItem(`text`);
}



click.addEventListener(`click`, function (e) {
    window.localStorage.setItem(`text`, count.value);
});

res.addEventListener(`click`, function (e) {
    window.localStorage.setItem(`text`, ``)
    count.value = ``
})
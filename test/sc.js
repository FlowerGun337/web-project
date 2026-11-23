`use strict`;

let click = document.querySelector(`#click`);
let res = document.querySelector(`#res`);
let count = document.querySelector(`.count`);

if(window.localStorage.length === 0) {
   window.localStorage.setItem(`num`, 0); 
}

let num = window.localStorage.getItem(`num`);

count.textContent = num;

click.addEventListener(`click`, function (e) {
    num++;
    window.localStorage.setItem(`num`, num);
    console.log(num);
    count.textContent = num;
});

res.addEventListener(`click`, function (e) {
    window.localStorage.clear();
    num = 0;
    count.textContent = 0;
})
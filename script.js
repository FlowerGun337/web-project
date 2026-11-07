`use strict`;

let popup = document.querySelector(`.pop-up`);
let btn = document.querySelector(`.pop-up-btn`);

btn.addEventListener(`click`, function(e) {
  popup.classList.add(`active`);
});

popup.addEventListener(`click`, function(e) {
  if(e.target.classList.contains(`overlay`) || e.target.classList.contains( `yeah`)){
    popup.classList.remove(`active`);
  }
});
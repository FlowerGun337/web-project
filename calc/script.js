`use strict`;

let nums = document.querySelector(`[data-nums]`);
let action = document.querySelector(`[data-action]`);
//Ввод в документ основных частей счетчика калькулятора
let calcBut = document.querySelector(`[data-buts]`)
let buts = document.querySelectorAll(`[data-but]`);

buts.forEach(item => {
    item.addEventListener(`mousedown`, function () {
        item.classList.add(`active`);
    });

    item.addEventListener(`mouseleave`, function () {
        item.classList.remove(`active`);
    });

    item.addEventListener(`mouseup`, function () {
        item.classList.remove(`active`)
    })
})
//подсветка кнопок при ажатии мыши

let fNum = document.createElement(`p`);
let sNum = document.createElement(`p`);
let act = document.createElement(`p`);

action.appendChild(fNum);
action.appendChild(act);
action.appendChild(sNum)


let numAr = [`0`,`1`,`2`,`3`, `4`, `5`, `6`,`7`, `8`,`9`,`.`, `.`];
let acts = [`/`,`*`,`-`,`+`]

calcBut.addEventListener(`click`, function (e) {
    let key = e.target.closest(`[data-but]`);
    if(!key) {
        return
    };
    /*Сама схема работы калькулятора
    1. на пустоту первого числа if else
    2. Если да заполнение 1 числа, еси нет, то заполнение второго числа
    3. Проверка на нажатие Enter или C
    4. Проверка isNan*/
    if(key.dataset.but === `C`) {
        nums.textContent = `0`;
        fNum.textContent = null;
        sNum.textContent = null;
        act.textContent = null;
        return;
    } else if(key.dataset.but === `Enter`) {
        nums.textContent = calculate(fNum.textContent, sNum.textContent, act.textContent);
        fNum.textContent = nums.textContent;
        sNum.textContent = null;
        act.textContent = null; 
        return;
    }
    //Выше были проверки на допустимость значений
    if(numAr.includes(key.dataset.but) || key.dataset.but === `.`) {

        if(fNum.textContent === `` && key.dataset.but === `.`) {
            fNum.textContent = `0`;
        }
        //Проверка на то, есть ли перед точкой число
        
        if(fNum.textContent && act.textContent) {
            if(numAr.includes(key.dataset.but) || key.dataset.but === `.`) {
                if(sNum.textContent.includes(`.`) && key.dataset.but === `.`) {
                    return;
                }
                sNum.textContent += key.dataset.but;  
        }
        } else {
            if(numAr.includes(key.dataset.but) || key.dataset.but === `.`) {
                if(fNum.textContent.includes(`.`) && key.dataset.but === `.`) {
                    return;
                }
                fNum.textContent += key.dataset.but;  
        }
    }

    } else if (acts.includes(key.dataset.but)) {
            act.textContent = key.dataset.but;
        }
//Выше была описана логика калькулятора
});

function calculate(a, b, act) {
        console.log(act)
        let res = 0;
        switch (act) {
            case `+`:
                res = +a + +b;
                break;
            case `-`:
                res = +a - +b;
                break;
            case `*`:
                res = +a * +b;
                break;
            case `/`:
                res = +a / +b;
                break;
            default:
                res = `What???`
                break;
        }
        return res;
    }
/*Функция счета была вынесена за тело действия, так как она будет создаваться каждый раз снова
*/ 
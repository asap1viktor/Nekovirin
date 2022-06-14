"use strict";

//Для выполнения скрипта после загрузки страницы 
window.addEventListener('DOMContentLoaded', () => {


//Интерактив для превьюшки.
const start = document.querySelector(".start"),
      startClick = start.querySelector(".start__click");

startClick.addEventListener ('click', () => {
    start.style.marginTop = "-100vh";
    document.body.style.overflowY = "visible";
    document.body.style.overflowX = "hidden";
});

//Интерактив слайдера.
//Инициализация элементов страницы.
let slider = document.querySelector(".slider"),
    sliderWrapper = slider.querySelector(".slider__wrapper"),
    sliderContent = sliderWrapper.querySelector(".slider__content"),
    arrowLeft = slider.querySelector(".arrow-left"),
    arrowRight = slider.querySelector(".arrow-right"),
    cloneFirst = sliderContent.firstElementChild.cloneNode(true),
    cloneLast = sliderContent.lastElementChild.cloneNode(true),
    index = 1;
//Добавляем первый слайд в конце слайдера, а последний в начало.
sliderContent.append(cloneFirst);
sliderContent.prepend(cloneLast);
//Рендерим страницу на основании новых элементов.
sliderContent.style.gridTemplateColumns = 'repeat(10, auto)';
//Функция сдвига слайдера
function dragSlider(i,callback) {
    console.log(index);
    sliderContent.style.transition = "1s";
    sliderContent.style.marginLeft = -i * 56 + "vw";
    callback(i);
}
//Функция условия index
function conditionSlider (i) {
    if(i < 1) {
        sliderContent.addEventListener('transitionend', () => {
            index = 8;
            i = 8;
            sliderContent.style.transition = "none";
            sliderContent.style.marginLeft = -i * 56 + "vw";
        }, {once: true});
    } else if(i > 8) {
        sliderContent.addEventListener('transitionend', () => {
            index = 1;
            i = 1;
            sliderContent.style.transition = "none";
            sliderContent.style.marginLeft = -i * 56 + "vw";
        }, {once: true});
    } else {}
}
//Функция слайдера
function eventSlider () {
    //При клике на правую кнопку
    arrowLeft.addEventListener('click', () => {
        index--;
        dragSlider(index,conditionSlider);
    });
    //При клике на левую кнопку
    arrowRight.addEventListener('click', () => {
        index++;
        dragSlider(index,conditionSlider);
    });
}
//Функция события когда доходим до конца
eventSlider();
});

//Функция для событий клика планет
let sliderItems = document.querySelectorAll(".slider__item"),
    menuPlanets = document.querySelectorAll(".menu__planet"),
    planet = document.querySelectorAll(".planet"),
    menuItem = document.querySelectorAll(".menu__item");




menuItem.forEach(function(item, i) {
    item.addEventListener('click', (event) => {
        event.preventDefault();
        console.log(menuItem[i]);
        window.scrollTo({
            top: menuItem[i].offsetTop,
            left: 0,
            behavior:"smooth"});
    });
});

menuPlanets.forEach(function(item, i) {
    item.addEventListener('click', (event) => {
        event.preventDefault();
        event.stopPropagation();
        console.log(menuPlanets[i]);
        window.scrollTo({
            top: planet[i].offsetTop,
            left: 0,
            behavior:"smooth"});
    });
});

sliderItems.forEach(function(item, i) {
    item.addEventListener('click', (event) => {
        event.preventDefault();
        event.stopPropagation();
        window.scrollTo({
            top: planet[i].offsetTop,
            left: 0,
            behavior:"smooth"});
    });
});
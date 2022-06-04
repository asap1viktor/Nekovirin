"use strict";

//Для выполнения скрипта после загрузки страницы 
window.addEventListener('DOMContentLoaded', () => {


//Интерактив для превьюшки.
const start = document.querySelector(".start"),
      startClick = start.querySelector(".start__click");

startClick.addEventListener ('click', () => {
    start.style.marginTop = "-100vh";
    document.body.style.overflow = "visible";
});

//Интерактив слайдера.
//Инициализация элементов страницы.
const slider = document.querySelector(".slider"),
      sliderWrapper = slider.querySelector(".slider__wrapper"),
      sliderContent = sliderWrapper.querySelector(".slider__content"),
      arrowLeft = slider.querySelector(".arrow-left"),
      arrowRight = slider.querySelector(".arrow-right"),
      firstSlide = sliderContent.firstElementChild.cloneNode(true),
      lastSlide = sliderContent.lastElementChild.cloneNode(true);

//Добавляем первый слайд в конце слайдера, а последний в начало.
sliderContent.append(firstSlide);
sliderContent.prepend(lastSlide);

console.log(sliderContent);

//Рендерим страницу на основании новых элементов.
sliderContent.style.gridTemplateColumns = 'repeat(10, auto)';

});


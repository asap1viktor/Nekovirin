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
let slider = document.querySelector(".slider"),
    sliderWrapper = slider.querySelector(".slider__wrapper"),
    sliderContent = sliderWrapper.querySelector(".slider__content"),
    arrowLeft = slider.querySelector(".arrow-left"),
    arrowRight = slider.querySelector(".arrow-right");

//Рендерим страницу на основании новых элементов.
sliderContent.style.gridTemplateColumns = 'repeat(10, auto)';

//Создаем функцию слайдера.
function slide(wrapper, items, prev, next) {
    let posX1 = 0,
        posX2 = 0,
        posInitial,
        posFinal,
        threshold = 100,
        slides = items.getElementsByClassName('slider__item'),
        slidesLength = slides.length,
        slideSize = items.getElementsByClassName('slider__item')[0].offsetWIdth,
        firstSlide = slides[0],
        lastSlide = slides[slidesLength - 1],
        cloneFirst = firstSlide.cloneNode(true),
        cloneLast = lastSlide.cloneNode(true),
        index = 0,
        allowShift = true;

    //Добавляем первый слайд в конце слайдера, а последний в начало.
    sliderContent.append(cloneFirst);
    sliderContent.prepend(lastSlide);

    //Функция старта
    function dragStart (e) {
        e = e || window.event;
        e.preventDefault();
        posInitial = items.offsetLeft;

        if (e.type == 'touchstart') {
            posX1 = e.toches[0].clientX;
        } else {
            posX1 = e.clientX;
            document.omouseup = dragEnd;
            document.onmousemove = dragAction;
        }
    }

    //Функция Движения
    function dragAction (e) {
        e = e || window.event;

        if (e.type == 'touchmove') {
            posX2 = posX1 - e.touches[0].clientX;
            posX1 = e.touches[0].clientX;
        } else {
            posX2 = posX1 - e.clientX;
            posX1 = e.clientX;
        }
        items.style.left = (items.offsetLeft - posX2) + "px";
        }
    //Функция конца
    function dragEnd (e) {
        
    }
}
//Передаем переменные в функцию.
slide(slider, sliderContent, arrowLeft, arrowRight);

});
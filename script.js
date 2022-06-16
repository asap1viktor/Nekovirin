"use strict";

//Для выполнения скрипта после загрузки страницы 
window.addEventListener('DOMContentLoaded', () => {


//Интерактив для превьюшки.
const start = document.querySelector(".start"),
      startClick = start.querySelector(".start__click"),
      audio = document.querySelector(".audio");

startClick.addEventListener ('click', () => {
    audio.innerHTML = "<audio src='audio/Hans-Hujans.mp3' autoplay></audio>";
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
    callback(i);
    sliderContent.style.transition = "0.5s";
    sliderContent.style.marginLeft = -i * 56 + "vw";
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
        (index > 0) ? index-- : false;
        dragSlider(index,conditionSlider);
    });
    //При клике на левую кнопку
    arrowRight.addEventListener('click', () => {
        (index < 9) ? index++ : false;
        dragSlider(index,conditionSlider);
    });
}
//Функция события когда доходим до конца
eventSlider();

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
            top: planet[i-1].offsetTop,
            left: 0,
            behavior:"smooth"});
    });
});
//2 задание лабы

let planetRollover = document.querySelectorAll(".planet-rollover"),
    planetSolarInfH2 = document.querySelector("#planets-solar__h2"),
    planetSolarInfP = document.querySelector("#planets-solar__p"),
    planetWrapperH2 = document.querySelectorAll('.planet__heading'),
    planetWrapperP = document.querySelectorAll('.planet__p');


  

    //При клике
    planetRollover.forEach(function(item,i) {
       item.addEventListener('click', (event) => {
            planetRollover.forEach(function(item,i) {
                item.style.backgroundColor = "";
                planetRollover[i].style.boxShadow = "";
            });
            planetRollover[i].style.backgroundColor = "rgba(0, 0, 0, 0.836)";
            planetRollover[i].style.boxShadow = "0 0 1vw 1vw black";

            if(i == 0) {
                planetSolarInfH2.textContent = "Солнце";
                planetSolarInfP.textContent = "Солнце — ближайшая к Земле звезда. Средняя удалённость Солнца от Земли — 149,6 млн км — приблизительно равна астрономической единице, а видимый угловой диаметр при наблюдении с Земли, как и у Луны, — чуть больше полуградуса (31—32 минуты). Солнце находится на расстоянии около 26 000 световых лет от центра Млечного Пути и вращается вокруг него на ящичной орбите, делая один оборот за 225—250 миллионов лет. Орбитальная скорость Солнца равна 217 км/с — таким образом, световой год оно проходит примерно за 1400 земных лет, а одну астрономическую единицу — за 8 земных суток.";
            } else {
                console.log(planetWrapperP[1]);
                planetSolarInfH2.textContent = planetWrapperH2[i-1].textContent;
                planetSolarInfP.textContent = planetWrapperP[i-1].textContent;
            }
       });
    });
});


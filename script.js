"use strict";


const start = document.querySelector(".start"),
    startClick = start.querySelector(".start__click");

startClick.addEventListener ('click', () => {
    start.style.marginTop = "-100vh";
    document.body.style.overflow = "visible";
});

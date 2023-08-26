"use strict";

const body = document.querySelector(".body-dark");

const buttonTheme = document.getElementById("btn-theme");

buttonTheme.addEventListener('click', ()=> {
    if (body.className == "body-dark") {
        body.classList.replace("body-dark", "body-light");
    } else if (body.className == "body-light") {
        body.classList.replace("body-light", "body-dark")
    }
})
"use strict"
let button = document.querySelector("#cart-button");
let modal = document.querySelector(".modal");
let close = document.querySelector(".close");

function taggleModal () {
    modal.classList.toggle('is-open');
}

button.addEventListener(`click`, taggleModal);
close.addEventListener(`click`, taggleModal);

foo

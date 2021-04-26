'use strict'

const adicionar = document.getElementById("grid__adicionar")
const popup = document.getElementById("nav__popup")

adicionar.addEventListener("click", ()=>{
    popup.classList.remove("nav__popup")
    popup.classList.add("nav__popupAppear")

    setInterval(() => {
        popup.classList.remove("nav__popupAppear")
        popup.classList.add("nav__popup")
    }, 3000);
})
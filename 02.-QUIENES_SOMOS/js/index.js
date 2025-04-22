'use strict'
//Menú responsive
const menuHamburguesa=document.querySelector('.Header-menu-hamburguesa')
//console.log(menuHamburguesa)
const menuSticky=document.querySelector('.Menu-nav')
//console.log(menuSticky)

menuHamburguesa.addEventListener('click',function(){
   menuSticky.classList.toggle('isActive')
})
//Fin de Menú responsive


//Acordeón
const Imgs = document.querySelectorAll('.Team-img')
// console.log(btnTitle)

const pS = document.querySelectorAll('.Team-p')
// console.log (paragraph)

Imgs.forEach(function (eachImg, index) {
    Imgs[index].addEventListener('click', function () {
        pS.forEach(function (eachP, index) {
            pS[index].classList.remove('isActive')
        })
        pS[index].classList.add('isActive')
    })
})
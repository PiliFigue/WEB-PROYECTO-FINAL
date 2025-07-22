'use strict'
//JAVASCRIPT DE LA PAGINA DE "QUIENES SOMOS"

//Menú responsive
const menuHamburguesa=document.querySelector('.Header-menu-hamburguesa')
const menuSticky=document.querySelector('.Menu-ul')

menuHamburguesa.addEventListener('click',function(){
   menuSticky.classList.toggle('isActive')
})
//Fin de Menú responsive

//Acordeón
const Pictures = document.querySelectorAll('.Team-img')
console.log(Pictures)
const pS = document.querySelectorAll('.Team-p')

Pictures.forEach(function (eachImg, index) {
    Pictures[index].addEventListener('click', function () {
        pS.forEach(function (eachP, index) {
            pS[index].classList.remove('isActive')
        })
        pS[index].classList.add('isActive')
    })
})

//Fin de Acordeón
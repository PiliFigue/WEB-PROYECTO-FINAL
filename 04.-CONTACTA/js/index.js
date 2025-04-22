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
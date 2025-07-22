'use strict'
//Menú responsive
const menuHamburguesa=document.querySelector('.Header-menu-hamburguesa')
const menuSticky=document.querySelector('.Menu-ul')

menuHamburguesa.addEventListener('click',function(){
   menuSticky.classList.toggle('isActive')
})
//Fin de Menú responsive

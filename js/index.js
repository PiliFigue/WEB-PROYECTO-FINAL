'use strict'

//Efecto parallax
const parallax=document.querySelector('.Section-parallax')
//console.log(parallax)
const parallaxlogo=document.querySelector('.Parallax-logo')
//console.log(parallaxlogo)

function paralax(){
    let scrollpos = window.scrollY
    // let scrollpos=document.documentElement.scrollTop

    parallax.style.backgroundPosition = "50% " + (-scrollpos / 4) + "px"
    parallaxlogo.style.opacity=1 - (scrollpos / 250)
}
paralax()


document.addEventListener('DOMContentLoaded',function(){
    window.addEventListener('scroll',function(){
        paralax()
})
})
//Fin de parallax


//Menú responsive
const menuHamburguesa=document.querySelector('.Header-menu-hamburguesa')
//console.log(menuHamburguesa)
const menuSticky=document.querySelector('.Header-menu-sticky')
//console.log(menuSticky)

menuHamburguesa.addEventListener('click',function(){
   menuSticky.classList.toggle('isActive')
})
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
const menuSticky=document.querySelector('.Menu-ul')
//console.log(menuSticky)

menuHamburguesa.addEventListener('click',function(){
   menuSticky.classList.toggle('isActive')
})
//Fin de Menú responsive

//Pestañas


const Btns=document.querySelectorAll('.Services-button')
// console.log(Btns)
const Ps=document.querySelectorAll('.Services-tabs-li-inside')
// console.log(Ps)

/* Al hacer 'click' en Btn, 
    se añade (add) la clase 'isActive a Ps
    y se le quita (remove) al resto
*/

Btns.forEach(function(eachBtn,index){
    Btns[index].addEventListener('click',function(){
        Ps.forEach(function(eachP,index){
            Ps[index].classList.remove('isActive')  
        })
        Ps[index].classList.add('isActive')

        Btns.forEach(function(eachBtn,index){
            Btns[index].classList.remove('isActive')
        })
        Btns[index].classList.add('isActive')
    })
})
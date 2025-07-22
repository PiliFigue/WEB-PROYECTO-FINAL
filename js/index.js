'use strict'
document.addEventListener('DOMContentLoaded',function(){
//Efecto parallax
const parallax=document.querySelector('.Section-parallax')
const parallaxlogo=document.querySelector('.Parallax-logo')

function paralax(){
    let scrollpos = window.scrollY
    
    parallax.style.backgroundPosition = "50% " + (-scrollpos / 4) + "px"
    parallaxlogo.style.opacity=1 - (scrollpos / 250)
}


    window.addEventListener('scroll',function(){
        paralax()
})
})
//Fin de parallax

//Menú responsive
const menuHamburguesa=document.querySelector('.Header-menu-hamburguesa')
const menuSticky=document.querySelector('.Menu-ul')

menuHamburguesa.addEventListener('click',function(){
   menuSticky.classList.toggle('isActive')
})
//Fin de Menú responsive

//Pestañas
const Btns=document.querySelectorAll('.Services-button')
const Tabs=document.querySelectorAll('.Services-tabs-li-inside')

//Cargamos el primero elemento de la lista con la clase "isActive" para que cuando cargue la pagina por primera vez muestre el contenido del primer boton.
Tabs[0].classList.add('isActive')

/* Al hacer 'click' en Btn, 
    se añade (add) la clase 'isActive' a 'Tabs'
    y se le quita (remove) al resto
*/

Btns.forEach(function(eachBtn,index){
    Btns[index].addEventListener('click',function(){
        Tabs.forEach(function(eachP,index){
            Tabs[index].classList.remove('isActive')  
        })
        Tabs[index].classList.add('isActive')

        Btns.forEach(function(eachBtn,index){
            Btns[index].classList.remove('isActive')
        })
        Btns[index].classList.add('isActive')
    })
})

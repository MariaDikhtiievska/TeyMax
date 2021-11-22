let burgerMenu = document.querySelector('.burger_menu')
let header_menu = document.querySelector('.header_menu')


burgerMenu.addEventListener('click', function (){
    burgerMenu.classList.toggle('burger_active')
    header_menu.classList.toggle('header_active')


})

mobile = document.querySelector('.mobile-nav-icon');
navbar = document.querySelector('.navbar');
navbarlist = document.querySelector('.navbar-list')
logo = document.querySelector('.logo');
header = document.querySelector('.header')


mobile.addEventListener('click',()=>{
    navbar.classList.toggle('navbar-resp');
    logo.classList.toggle('logo-resp');
    navbarlist.classList.toggle('navbar-list-resp');
    header.classList.toggle('head-resp');
})
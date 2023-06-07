const burger = document.querySelector('.burger');
const navbar = document.querySelector('.nav-bar');
const navlist = document.querySelector('.nav-list');


burger.addEventListener('click',()=>{
    navlist.classList.toggle('v-nav-resp');
    navbar.classList.toggle('h-nav-resp');
});


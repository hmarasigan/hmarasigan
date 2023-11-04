// element for mobile

const burger = document.querySelector(".btn");
const menu = document.querySelector(".nav-items-dropdown");

burger.addEventListener('click',()=>{
    burger.classList.toggle('active');
    menu.classList.toggle('active');
})

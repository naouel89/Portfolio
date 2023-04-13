let menu = document.querySelector(".fa-bars");
let nav = document.querySelector("nav");
menu.addEventListener("click", function(){
    menu.classList.toggle("fa-xmark");
    nav.classList.toggle("active");
})
window.addEventListener("scroll", function(){
    var navbar = document.querySelector(".navbar");
    navbar.classList.toggle("sticky", window.scrollY > 0);
})
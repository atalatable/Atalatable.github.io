const bars = document.querySelector(".bars");
const navMenu = document.querySelector(".nav-menu");
const navLink = document.querySelectorAll(".nav-link");

bars.addEventListener("click", mobileMenu);
navLink.forEach(n => n.addEventListener("click", closeMenu));

function mobileMenu() {
    bars.classList.toggle("active");
    navMenu.classList.toggle("active");
}

function closeMenu() {
    bars.classList.remove("active");
    navMenu.classList.remove("active");
}

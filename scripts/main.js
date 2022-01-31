// Sandwich menu logic

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

/***********************************************************/

window.addEventListener("load", initElement);

// Discord pseudo logic

function initElement() {
    var discordLogo = document.getElementById("discord");
    discordLogo.addEventListener("click", CopyToClipBar);
}

function CopyToClipBar() {

    navigator.clipboard.writeText("Atalata#2363")
        .then(() => {
        console.log("Discord nickname copied to clipboard...");
        alert("Pseudo Discord copié !");
    })
        .catch(err => {
        console.log("Something went wrong", err);
        alert("I can't copy my discord nickname in your pc, here it is : Atalata#2363 !");
    })
}

/***********************************************************/

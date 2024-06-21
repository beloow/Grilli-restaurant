'use strict';

////// Retrait du Préload une fois le site chargé //////

const preloader = document.querySelector("[data-preaload]");

window.addEventListener("load", function () {
    preloader.classList.add("loaded");
    document.body.classList.add("loaded");
});

////// addEventListener sur des elements multiples //////

const addEventOnElements = function (elements, eventType, callback) {
    for (let i = 0, len = elements.length; i < len; i++){
        elements[i].addEventListener(eventType, callback);
    };
};

////// Navbar //////

const navbar = document.querySelector("[data-navbar]");
const navTogglers = document.querySelectorAll("[data-nav-toggler]");
const overlay = document.querySelector("[data-overlay]");

const toggleNavbar = function () {
    navbar.classList.toggle("active");
    overlay.classList.toggle("active");
    document.body.classList.toggle("nav-active");
}

addEventOnElements(navTogglers, "click", toggleNavbar);

////// header //////

const header = document.querySelector("[data-header]");

let lastScrollPos = 0;

const hideHeader = function() {
}

window.addEventListener("scroll", function() {
    if (window.screenY >= 50) {
        header.classList.add("active");
    } else {
        header.classList.remove("active");
    }
})

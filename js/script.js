"use strict";

/**
 * Initialiseer alle functies na het laden van de DOM
 */
document.addEventListener("DOMContentLoaded", function() {
    initBackToTop();
    initScrollSpy();
});

/**
 * Toon/verberg de back-to-top knop op basis van scroll-positie
 */
function initBackToTop() {
    const btnTop = document.querySelector("#js-back-to-top");
    
    if (!btnTop) return;

    window.addEventListener("scroll", () => {
        if (window.scrollY > 400) {
            btnTop.style.display = "block";
            btnTop.classList.add("u-fade-in");
        } else {
            btnTop.style.display = "none";
        }
    });

    btnTop.addEventListener("click", () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    });
}

/**
 * Optioneel: Voeg actieve klassen toe aan navigatie op basis van scroll
 */
function initScrollSpy() {
    const sections = document.querySelectorAll("section[id]");
    const navLinks = document.querySelectorAll(".nav-link");

    window.addEventListener("scroll", () => {
        let current = "";
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            if (window.scrollY >= sectionTop - 100) {
                current = section.getAttribute("id");
            }
        });

        navLinks.forEach(link => {
            link.classList.remove("active");
            if (link.getAttribute("href").includes(current)) {
                link.classList.add("active");
            }
        });
    });
}
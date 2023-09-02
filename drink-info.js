"use strict";

// HEADER - Language toggle 

const languageToggle = document.getElementById("language-toggle");

const languageMenu = document.querySelector(".language__ul");

const visibleElem = (menu,toggle) => {
    menu.classList.remove("not-visible");
    toggle.classList.toggle("active");
}

const notVisibleElem = (menu,toggle) => {
    menu.classList.add("not-visible");
    toggle.classList.remove("active");
}

languageToggle.addEventListener("click", () => {
    languageMenu.classList.toggle("language__ul-visible");
    visibleElem(languageMenu,languageToggle);
    if (languageMenu.classList.contains("language__ul-visible")) {
        languageToggle.setAttribute("aria-label", "Close language menu");
        // Mouse when "pick" an option in menu
        languageMenu.addEventListener("mouseup", () => {
            languageMenu.classList.remove("language__ul-visible");
            notVisibleElem(languageMenu,languageToggle);
            languageToggle.setAttribute("aria-label", "Open language menu");
        });
    } else {
        languageToggle.setAttribute("aria-label", "Open language menu");
        languageMenu.classList.add("not-visible");
    };
});

// FOOTER - Footer Newsletter

const containerNewsletter = document.querySelector(".footer__newsletter");

const inputNewsletter = document.querySelector(".newsletter_input");

const buttonNewsletter = document.querySelector(".newsletter_button");

inputNewsletter.addEventListener("focusin", () => {
    containerNewsletter.classList.toggle("active");
    buttonNewsletter.classList.toggle("active");
});

inputNewsletter.addEventListener("focusout", () => {
    containerNewsletter.classList.toggle("active");
    buttonNewsletter.classList.toggle("active");
});
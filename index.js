"use strict";

// HEADER - Products toggle

const productsToggle = document.getElementById("products-toggle");

const productsMenu = document.querySelector(".nav_ul");

const main = document.getElementById("main");

const visibleElem = (menu,toggle) => {
    menu.classList.remove("not-visible");
    toggle.classList.toggle("active");
}

const notVisibleElem = (menu,toggle) => {
    menu.classList.add("not-visible");
    toggle.classList.remove("active");
}

productsToggle.addEventListener("click", () => {
    productsMenu.classList.toggle("nav_ul-visible");
    visibleElem(productsMenu,productsToggle);
    if (productsMenu.classList.contains("nav_ul-visible")) {
        productsToggle.setAttribute("aria-label", "Close menu");
        // Mouse when "click" main, menu close
        main.addEventListener("click", ()=> {
            productsMenu.classList.remove("nav_ul-visible");
            notVisibleElem(productsMenu,productsToggle);
            productsToggle.setAttribute("aria-label", "Open menu");
        });
        // Mouse when "pick" an option in menu
        productsMenu.addEventListener("mouseup", () => {
            productsMenu.classList.remove("nav_ul-visible");
            productsToggle.classList.remove("active");
        });
    } else {
        productsToggle.setAttribute("aria-label", "Open menu");
        productsMenu.classList.add("not-visible");
    };
});

// HEADER - Language toggle 

const languageToggle = document.getElementById("language-toggle");

const languageMenu = document.querySelector(".language__ul");

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




// MAIN - Section for Drinks

class Tabs {
    constructor(section) {
        this.section = section;
    }
    event() {
        let selectTabs = document.querySelectorAll(`#${this.section} .info__li`);
        selectTabs.forEach((tab,index) => {
            tab.addEventListener("click", () => {
                let sectionDrink = tab.parentElement.parentElement.parentElement.parentElement;
                if (sectionDrink.id === `${this.section}`) {
                    let tabContents = document.querySelectorAll(`#${this.section} .tab-content`);
                    tabContents.forEach(content => {
                        content.classList.remove("active");
                    });
                    selectTabs.forEach(tab => {
                        tab.classList.remove("active");
                    });
                    tabContents[index].classList.add("active");
                    selectTabs[index].classList.add("active");
                }
            });
        });
    }
};

const tabsDrink1 = new Tabs("drink1");
tabsDrink1.event();
const tabsDrink2 = new Tabs("drink2");
tabsDrink2.event();
const tabsDrink3 = new Tabs("drink3");
tabsDrink3.event();
const tabsDrink4 = new Tabs("drink4");
tabsDrink4.event();
const tabsDrink5 = new Tabs("drink5");
tabsDrink5.event();
const tabsDrink6 = new Tabs("drink6");
tabsDrink6.event();
const tabsDrink7 = new Tabs("drink7");
tabsDrink7.event();




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
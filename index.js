"use strict";

const tabs = document.querySelectorAll(".info__li");

tabs.forEach((tab,index) => {
    tab.addEventListener("click", () => {
        let sectionDrink = tab.parentElement.parentElement.parentElement.parentElement;
        if (sectionDrink.id === "drink1") {
            let tabContents = document.querySelectorAll("#drink1 .tab-content");
            tabContents.forEach(content => {
                content.classList.remove("active");
            });
            tabs.forEach((tab) => {
                tab.classList.remove("active");
            });
            tabContents[index].classList.add("active");
            tabs[index].classList.add("active");
        };
    });
});


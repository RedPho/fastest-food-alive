import { createHomePage } from "./modules/homepage.js";
import { createMenuPage } from "./modules/menu";

createHomePage();

let content = document.querySelector("#content");
let homeBtn = document.querySelector("#home");
let menuBtn = document.querySelector("#menu");

homeBtn.addEventListener("click", () => {
    content.innerHTML = "";
    createHomePage();
});

menuBtn.addEventListener("click", () => {
    content.innerHTML = "";
    createMenuPage();
});
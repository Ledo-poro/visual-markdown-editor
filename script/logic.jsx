import Animations from "./animations.js";

function logic(){
    const app = Animations();
    const main = document.querySelector("main");
    if (main) {
        main.appendChild(app);
    }
}

logic()
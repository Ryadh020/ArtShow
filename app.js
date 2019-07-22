const main = document.querySelector("main");

const more = document.querySelector("#more");
const left = document.querySelector("#more");
const right = document.querySelector("#right");

const logo = document.querySelector("#logo");
const standart = document.querySelector("#standart");
const artistName = document.querySelector("#artistName");

more.addEventListener("click",()=> {
    moveOut();
});

function moveOut() {
    main.style.display = "inline";
    left.style.left = "15px";

    /*
    
    left.style.float = "left";
    right.style.float = "right";
    */
}

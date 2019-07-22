const main = document.querySelector("main");
const footer = document.querySelector("footer");

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
    /*main.style.padding = "0px 0px";*/
    footer.style.alignItems = "flex-end";

    /*
    
    left.style.float = "left";
    right.style.float = "right";
    */
}

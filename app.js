const main = document.querySelector("main");
const footer = document.querySelector("footer");

const more = document.querySelector("#more");
const left = document.querySelector("#left");
const right = document.querySelector("#right");

const logo = document.querySelector("#logo");
const standart = document.querySelector("#standart");
const artistName = document.querySelector("#artistName");

// FADE OUT ARROWS WHEN CLICK THE MORE BUTTON :
more.addEventListener("click",()=> {
    setTimeout(()=> {
        moveOut();
    },0);
    setTimeout(()=> {
        fadeIt();
    },200);
});

// FUNCTIONS : 
function moveOut() {
        main.style.padding = "0px 0px";
        footer.style.alignItems = "flex-end";
}
function fadeIt() {
        left.style.visibility =  "hidden";
        right.style.visibility =  "hidden";
        more.style.visibility =  "hidden";
}
const main = document.querySelector("main");
const footer = document.querySelector("footer");

const more = document.querySelector("#more");
const left = document.querySelector("#left");
const right = document.querySelector("#right");

const logo = document.querySelector("#logo");
const standart = document.querySelector("#standart");
const artistName = document.querySelector("#artistName");


// DATA BASE :                   {choos it randomly}
let logos ;
let artistNames ;
let arts;



// CHOOSE THE ARTISTS AND IT'S ART :
(function () {
        // the number of the artist :
    let num = 0;

        //pick the artist :
    pickArtist(num);

        //Pick another artist(to the right):
        right.addEventListener("click", ()=> {
            if(num===0 || num <art.arts.length-1) {
                num += 1;
                pickArtist(num);
                console.log(num);
            }else if(num===art.artistsNames.length-1) {
                num = 0;
                pickArtist(num); 
                console.log(num);
            }
        })

        //Pick another artist(to the left):
        left.addEventListener("click", ()=> {
            if(num <=2 && num!==0) {
                num -= 1;
                pickArtist(num);
                console.log(num);
                
            }else if(num===0) {
                num = art.artistsNames.length-1;
                pickArtist(num); 
                console.log(num);
            }
        })

})();







// FADE OUT ARROWS WHEN CLICK THE MORE BUTTON :
more.addEventListener("click",()=> {
    setTimeout(()=> {
        moveOut();
    },0);
    setTimeout(()=> {
        fadeIt();
    },200);
    setTimeout(()=> {
        logo.style.visibility = "hidden";
        moveUp();
    },300);
    setTimeout(()=> {
        minimize();
    },400);

});

// FUNCTIONS : 

    //moove out the buttons
function moveOut() {
    main.style.padding = "0px 0px";
    footer.style.alignItems = "flex-end";
}

    //fade out the buttons
function fadeIt() {
    left.style.visibility =  "hidden";
    right.style.visibility =  "hidden";
    more.style.visibility =  "hidden";
}

    //minimize the logoArtist size
function minimize() {
    standart.style.fontSize = "2vh";
    artistName.style.fontSize = "2.5vh";
}

    //moove the artist name to the top of the page :
function moveUp() {

    standart.style.position = "absolute";
    standart.style.top = "20px";

    artistName.style.position = "absolute";
    artistName.style.top = "32px";
}

    //pick the artist number :
function pickArtist(index) {
    logos = art.artistsLogos[index];
    artistNames = art.artistsNames[index];
    arts = art.arts[index];

        // Print the result :
    logo.setAttribute("src", logos);
        artistName.textContent = `${artistNames}`;
        console.log(arts);
}
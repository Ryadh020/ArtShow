let logos ;
let artistNames ;
let arts;
let num;
let boxe = "";
let athorBox = "";
var boxNum;
var boxClassNum;
let toLeft = 0;
let theBox;
let imageClassName;
let imageFileName;
let klicked;

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
    
        //minimize the ArtistName size
    function minimize() {
        standart.style.fontSize = "2vh";
        artistName.style.fontSize = "2.5vh";
    }
    
        //moove the artist name to the top of the page :
        if(screen.width <= 600) {  // for mobiles
            function moveUp() {
                standart.style.position = "absolute";
                standart.style.top = "89px";
            
                artistName.style.position = "absolute";
                artistName.style.top = "105px";
            }
        }else {  // for desktop
            function moveUp() {
                standart.style.position = "absolute";
                standart.style.top = "25px";
            
                artistName.style.position = "absolute";
                artistName.style.top = "39px";
            }
        }

    
        //pick the artist number :
    function pickArtist(index) {
        setTimeout(()=> {
            logos = art.artistsLogos[index];
            artistNames = art.artistsNames[index];
            arts = artsOfArtists[index];
        
                // Print the result :
            logo.setAttribute("src", logos);
            artistName.textContent = `${artistNames}`;
        },650);
    }
    

        // Change the background:
    function changeBackGround(index) {
        setTimeout(()=> {
            body.style.backgroundImage = `url("${art.Background[index]}")`;
        },600)
        if(index === 2) {
            body.style.color = "black";
        }else if( index === 1) {
            body.style.color = "gray";
        } else {
            body.style.color = "white";
        }
    }

        // Change font family and color:
    function ChangeFontFNC(id) {
        if(id === 0) {
            artist.style.color = "#e0cf4f";
            artist.style.fontFamily = "'Fjalla One', sans-serif";
        }else if(id === 1) {
            artist.style.color = "Pink";
            artist.style.fontFamily = "'Lobster', cursive";
        }else if(id === 2) {
            artist.style.color = "Black";
            artist.style.fontFamily = "'Abril Fatface', cursive";
        }else if(id === 3) {
            artist.style.color = "White";
            artist.style.fontFamily = "'MedievalSharp', cursive";
        }
    }

    
        //Animate (get smaller than bigger smoothly) left and right buttons onclick:
    function animateButton(button) {
        button.style.fontSize = "0.5rem";
        setTimeout(()=> {
            button.style.fontSize = "1rem";
        },300);
    }
    
        //slide Artists logos :
    function slideLogo(first,second) {
        artist.style.position = "absolute";
        artist.style.left = `${first}%`;
        artist.style.opacity ="0";
        setTimeout(()=> {
            artist.style.position = "absolute";
            artist.style.left = `${second}%`;
        },350)
        setTimeout(()=> {
            artist.style.opacity ="1";
            artist.style.position = "initial";
        },650)
    }
    
        //Boxes from right to left :
    function CreateBoxes(number) {
        boxNum =0;
        boxe = ""
            arts.forEach(element => {
                boxe += `<div class="box box${boxNum}" id="" style="background-image: url(./images/${number}/${boxNum}.png); margin: 0px 50px;" ></div>`;
                boxNum +=1;
            });
            boxes.innerHTML = boxe;
    }

        //Show boxes sliders:
    function ShowboxesSliders() {
        sliders.style.top = "80vh";
        //slider.style.margin = "0px 0px";
    } 

        // Show the get back button
    function BackButton(n) {
        setTimeout(() => {
            if (n == 1) {
                GetBack.style.opacity = "1";
            } else {
                GetBack.style.opacity = "0";
            }
        }, 1000);
    }

        //Get more boxes from right to left :
    function moreBoxes(left) {
        boxes.style.left = `${left}`;
    }
        // get the boxes margin smaller
    function MinifyBoxesMargin(number) {
        boxClassNum = 0;

        artsOfArtists[number].forEach(element => {
            document.querySelector(`.box${boxClassNum}`).style.margin = "0px 45px";
            boxClassNum += 1;
        });
    } 
        // get the boxes margin bigger
    function BigfyBoxesMargin(number, margin) {
        boxClassNum = 0;

        artsOfArtists[number].forEach(element => {
            document.querySelector(`.box${boxClassNum}`).style.margin = `0px ${margin}px`;
            boxClassNum += 1;
        });
    }
    // Functions for the back to menu button:
    // hide the boxes
    const hideBoxes = ()=> {
        boxes.style.bottom = `${screen.height}px`
        setTimeout(() => {
            boxes.style.left = `${screen.width}px`;
        }, 1000);  
        setTimeout(() => {
            boxes.style.bottom = `0px`
        }, 2100);
    }

    // put down Sliders buttons :
    const mooveDownSlidersAndTitle = ()=> {
        setTimeout(() => {
            sliders.style.top = "200vh"; 
            standart.style.position = "static";
            artistName.style.position = "static";

            if(screen.width <= 600 || screen.width == 600) {
                standart.style.fontSize = "3vh";
                artistName.style.fontSize = "3vh";
            }else {
                standart.style.fontSize = "7vh";
                artistName.style.fontSize = "7vh";
            }


        }, 1000);

    } 

    // show The artist profile and sliders
    const ShowProfileAndSliders = () => {
        main.style.padding = "0px 28px";
        footer.style.alignItems = "center";
        setTimeout(() => {
            left.style.visibility =  "visible";
            right.style.visibility =  "visible";
            more.style.visibility =  "visible";
            logo.style.visibility = "visible";
        }, 1000);
    }
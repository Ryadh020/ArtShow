let logos ;
let artistNames ;
let arts;
let num;
let boxe = "";
var boxNum;
var boxClassNum;
let toLeft = 0;

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
    function moveUp() {
        standart.style.position = "absolute";
        standart.style.top = "20px";
    
        artistName.style.position = "absolute";
        artistName.style.top = "32px";
    }
    
        //pick the artist number :
    function pickArtist(index) {
        setTimeout(()=> {
            logos = art.artistsLogos[index];
            artistNames = art.artistsNames[index];
            arts = art.arts[index];
        
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
        
        artsOfArtists[number].forEach(element => {
            boxe += `<div class="box box${boxNum}" style="background-image: url(./images/${number}/${boxNum}.png); margin: 0px 50px;"></div>`;
            boxNum +=1;
        });
        boxes.innerHTML = boxe;
    }

        //Show boxes sliders:
    function ShowboxesSliders() {
        
        sliders.style.top = "80vh";
        //slider.style.margin = "0px 0px";
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

        //Get More details about aindividual arts :
    function GetMoreDetails(event,leftAbsolute) {
        
        let theBox = event.target;

        theBox.style.position = "absolute";
        leftAbsolute === 0?theBox.style.left = `${leftAbsolute}`:theBox.style.left = "1000px";
        theBox.style.margin = "0 0";
        theBox.style.width = "100vw";
        theBox.style.height = "100vh";
        theBox.style.borderRadius =  "0";
        theBox.style.zIndex = "1";


    }
    

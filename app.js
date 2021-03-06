// SWIPE ARTISTS FROM LEFT TO RIGHT:
(function () {
        // the first number of the artist :
    num = 0;
        //pick the first artist :
    pickArtist(num);
    ChangeFontFNC(num);
        //Pick another artist(to the right):
        right.addEventListener("click", ()=> {
            if(num===0 || num <art.arts.length-1) {
                animateButton(right);
                slideLogo(25,15);
                num += 1;
                pickArtist(num);
                changeBackGround(num);
                ChangeFontFNC(num);
            }else if(num===art.artistsNames.length-1) {
                animateButton(right);
                slideLogo(25,15);
                num = 0;
                pickArtist(num); 
                changeBackGround(num);
                ChangeFontFNC(num);
            }
        });
        //Pick another artist(to the left):
        left.addEventListener("click", ()=> {
            if(num <=art.artistsNames.length-1 && num!==0) {
                animateButton(left);
                slideLogo(-15,15);
                num -= 1;
                pickArtist(num);
                changeBackGround(num);
                ChangeFontFNC(num);
                
            }else if(num===0) {
                animateButton(left);
                slideLogo(-15,15);
                num = art.artistsNames.length-1;
                pickArtist(num); 
                changeBackGround(num);
                ChangeFontFNC(num);
            }
        });
})();

// CLICK THE MORE BUTTON :
boxes.style.left = `${screen.width}px`

artist.addEventListener("click",()=> {
    setTimeout(()=> {
        moveOut();
    },0);
    setTimeout(()=> {
        fadeIt();
        CreateBoxes(num);
        boxes.style.left = "0px"
    },200);
    setTimeout(()=> {
        logo.style.visibility = "hidden";
        moveUp();
        MinifyBoxesMargin(num);
    },300);
    setTimeout(()=> {
        minimize(); 
        ShowboxesSliders()
        BackButton(1)
    },400);

});

more.addEventListener("click",()=> {
    setTimeout(()=> {
        moveOut();
    },0);
    setTimeout(()=> {
        fadeIt();
        CreateBoxes(num);
        boxes.style.left = "0px"
    },200);
    setTimeout(()=> {
        logo.style.visibility = "hidden";
        moveUp();
        MinifyBoxesMargin(num);
    },300);
    setTimeout(()=> {
        minimize(); 
        ShowboxesSliders()
        BackButton(1)
    },400);

});

//Sliders buttons:
    // 1. slide boxes to the right by setting the - left style - of ther container
    // 2. when there is no boxes to swip up play with the - boxes margin - to feel the user that can't swip anymore
    //Get more boxes (to the right):
    sliderRight.addEventListener("click", ()=> {
        if (screen.width <= 600 || screen.width == 600) {  // for mobile phones:
            if(artsOfArtists[num].length >=1  && toLeft !== -335 * (artsOfArtists[num].length -1 )) {
                toLeft -= 335; 
                moreBoxes(`${toLeft}px`);
                setTimeout(()=> {
                    BigfyBoxesMargin(num, 50);
                },0);
                setTimeout(()=> {
                    MinifyBoxesMargin(num);
                },600);
            }else if(artsOfArtists[num].length <1 || toLeft == -335 * (artsOfArtists[num].length - 1)) {
                setTimeout(()=> {
                    BigfyBoxesMargin(num, 30);
                },0);
                setTimeout(()=> {
                    MinifyBoxesMargin(num);
                },600);
            }
        } else {  // for desktops:
            if(artsOfArtists[num].length >=3  && !(toLeft === ((Math.floor((artsOfArtists[num].length)/4) * - screen.width)))) {
                toLeft -= screen.width;
                moreBoxes(`${toLeft}px`);
                setTimeout(()=> {
                    BigfyBoxesMargin(num, 100);
                },0);
                setTimeout(()=> {
                    MinifyBoxesMargin(num);
                },600);
            }else if(artsOfArtists[num].length <3 || toLeft === (((artsOfArtists[num].length)/4 * - screen.width))) {
                setTimeout(()=> {
                    BigfyBoxesMargin(num, 50);
                },0);
                setTimeout(()=> {
                    MinifyBoxesMargin(num);
                },600);
            }
        }


    });
    //Pick another artist(to the left):
    sliderLeft.addEventListener("click", ()=> {
        if (screen.width <= 600 || screen.width == 600) { // for mobile phones:
            if(toLeft !==0 && toLeft >= -335 * (artsOfArtists[num].length - 1)) {
                toLeft += 335;
                moreBoxes(`${toLeft}px`);
                setTimeout(()=> {
                    BigfyBoxesMargin(num, 20);
                },0);
                setTimeout(()=> {
                    MinifyBoxesMargin(num);
                },600);
            }else {
                setTimeout(()=> {
                    BigfyBoxesMargin(num, 30);
                },0);
                setTimeout(()=> {
                    MinifyBoxesMargin(num);
                },600); 
            }  
        } else {    // for desktops :
            if(!(boxes.style.left === "0px")) {
                toLeft += screen.width;
                moreBoxes(`${toLeft}`);
                //console.log(toLeft);
                setTimeout(()=> {
                    BigfyBoxesMargin(num, 50);
                },0);
                setTimeout(()=> {
                    MinifyBoxesMargin(num);
                },600);
            }else {
                setTimeout(()=> {
                    BigfyBoxesMargin(num, 50);
                },0);
                setTimeout(()=> {
                    MinifyBoxesMargin(num);
                },600); 
            }  
        }
 
    });

    // Get back to the main menu
    // Logic :
        // A reverse process of the more button
        // 1. get the main padding thick(0px 28px) to show the left/right buttons & get the footer align-item to center
        // 2. get the buttons visible 
        // 3. get the boxes of arts fail down with setting it's bottom position to -//// then it's left to 1000px then to the top with /////px
        // 4. get the logo visible
        // 5. Move down the standart and artistName on setting them to : position : relative & get them bigger to 7 vh
        // 6. set the - toLeft - variable from the boxes slider to - 0 - to begin from - 0 - when cliking more again on another artist

        boxes.style.bottom = `0px`
    GetBack.addEventListener("click", ()=> {
        hideBoxes()
        mooveDownSlidersAndTitle()
        BackButton(0)
        ShowProfileAndSliders()
        setTimeout(() => {
            toLeft = 0
        }, 1000);
    })




console.log(screen.width);
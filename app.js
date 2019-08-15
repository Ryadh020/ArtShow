// SWIPE ARTISTS FROM LEFT TO RIGHT:
(function () {
        // the first number of the artist :
    num = 0;
        //pick the first artist :
    pickArtist(num);
        //Pick another artist(to the right):
        right.addEventListener("click", ()=> {
            if(num===0 || num <art.arts.length-1) {
                animateButton(right);
                slideLogo(50,30);
                num += 1;
                pickArtist(num);
                changeBackGround(num);
            }else if(num===art.artistsNames.length-1) {
                animateButton(right);
                slideLogo(50,30);
                num = 0;
                pickArtist(num); 
                changeBackGround(num);
            }
        });
        //Pick another artist(to the left):
        left.addEventListener("click", ()=> {
            if(num <=art.artistsNames.length-1 && num!==0) {
                animateButton(left);
                slideLogo(30,50);
                num -= 1;
                pickArtist(num);
                changeBackGround(num);
                
            }else if(num===0) {
                animateButton(left);
                slideLogo(30,50);
                num = art.artistsNames.length-1;
                pickArtist(num); 
                changeBackGround(num);
            }
        });
})();

// CLICK THE MORE BUTTON :
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
    },400);

});

//Sliders buttons:
    //Get more boxes (to the right):
    sliderRight.addEventListener("click", ()=> {
        if(artsOfArtists[num].length >=3  && !(toLeft === ((Math.floor((artsOfArtists[num].length)/4) * -1000)))) {
            toLeft -= 1000;
            moreBoxes(`${toLeft}px`);
            console.log(toLeft);
            setTimeout(()=> {
                BigfyBoxesMargin(num, 100);
            },0);
            setTimeout(()=> {
                MinifyBoxesMargin(num);
            },600);
        }else if(artsOfArtists[num].length <3 || toLeft === (((artsOfArtists[num].length)/4 * -1000))) {
            setTimeout(()=> {
                BigfyBoxesMargin(num, 50);
            },0);
            setTimeout(()=> {
                MinifyBoxesMargin(num);
            },600);
        }
    });
    //Pick another artist(to the left):
    sliderLeft.addEventListener("click", ()=> {
        if(!(boxes.style.left === "0px")) {
            toLeft += 1000;
            moreBoxes(`${toLeft}`);
            console.log(toLeft);
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
    });

    // Get more information about individual arts on clicking there boxes:
    boxes.addEventListener("click",(ev)=> {

        GetMoreDetails(ev,toLeft);


    })
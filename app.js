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
            }else if(num===art.artistsNames.length-1) {
                animateButton(right);
                slideLogo(50,30);
                num = 0;
                pickArtist(num); 
            }
        });
        //Pick another artist(to the left):
        left.addEventListener("click", ()=> {
            if(num <=art.artistsNames.length-1 && num!==0) {
                animateButton(left);
                slideLogo(30,50);
                num -= 1;
                pickArtist(num);
                
            }else if(num===0) {
                animateButton(left);
                slideLogo(30,50);
                num = art.artistsNames.length-1;
                pickArtist(num); 
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
        boxes.style.left = "0vw"
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
        if(artsOfArtists[num].length >=3 && boxes.style.left === "0vw") {
            moreBoxes("-95vw");
            setTimeout(()=> {
                BigfyBoxesMargin(num);
            },0);
            setTimeout(()=> {
                MinifyBoxesMargin(num);
            },600);
        }
    });
    //Pick another artist(to the left):
    sliderLeft.addEventListener("click", ()=> {
        if(boxes.style.left === "-95vw") {
            moreBoxes("0vw");
            setTimeout(()=> {
                BigfyBoxesMargin(num);
            },0);
            setTimeout(()=> {
                MinifyBoxesMargin(num);
            },600);
            return;
        }else {
            return;
        }
    });
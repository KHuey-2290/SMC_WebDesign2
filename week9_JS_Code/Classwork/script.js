var docHeader = document.getElementById("docHeader");
var hColorChangebtn = document.getElementById("headerColorControl");

var flowerImage = document.getElementById("flowerImg");
var flowerButton = document.getElementById("flowerImgChange");

var headerColorChange = function(){
    var redComp = Math.random() * 255;
    console.log(redComp);
    var greenComp = Math.random() * 255;
    var blueComp = Math.random() * 255;
    
    // rgb(255, 255, 255)
    // rgb(|- number for red -|, |- -|, |- -|)

    docHeader.style.backgroundColor = "rgb(" + redComp + ", " + greenComp + ", " + blueComp + ")";
}

var swapFlowerImage = function(){
    console.log(flowerImage.alt);

    // the first image is showing
    if(flowerImage.alt == "First image of flowers") {
        flowerImage.src = "Assets/flowers2.jpeg";
        flowerImage.alt = "Second image of flowers";
        flowerButton.innerText = "Show first one!";
    }

    // otherwise
    else { 
        flowerImage.src = "Assets/flowers1.jpg";
        flowerImage.alt = "First image of flowers";
        flowerButton.innerText = "Show second one!"; 
    }
}

// just when JS loads
headerColorChange();

// just when button is clicked
hColorChangebtn.addEventListener("click", headerColorChange);

flowerButton.addEventListener("click", swapFlowerImage);
var response = confirm("Spring is here!");
console.log("Flowers!");

var docHeader = document.getElementById("docHeader");
var headerButton = document.getElementById("buttonColorChange");

var flowerImage = document.getElementById("flowerImg");
var flowerButton = document.getElementById("buttonImgChange");

var headerColorChange = function(){
    var redComp = Math.random() * 255;
    console.log(redComp);
    var greenComp = Math.random() * 255;
    var blueComp = Math.random() * 255;

    docHeader.style.backgroundColor = "rgb(" + redComp + ", " + greenComp + ", " + blueComp + ")";
    docHeader.style.border = "solid 2px midnightblue";

    headerButton.addEventListener("click", function() {
        console.log("Click happened!");
        var notification = document.createElement("h3");
        notification.innerText = "Buttercups, Daisies, Lilies, Poppies!";
        docHeader.appendChild(notification);
    })
    
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

headerColorChange();

headerButton.addEventListener("click", headerColorChange);

flowerButton.addEventListener("click", swapFlowerImage);
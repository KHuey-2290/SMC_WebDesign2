var response = confirm("Spring is here!");
console.log("Flowers!");

var docHeader = document.getElementById("docHeader");
var headerButton = document.getElementById("buttonColorChange");

var flowerButtercupImage = document.getElementById("flowerButtercupImg");
var flowerDaisyImage = document.getElementById("flowerDaisyImg");
var flowerLilyImage = document.getElementById("flowerLilyImg");
var flowerPoppyImage = document.getElementById("flowerPoppyImg");

var flowerButtercupButton = document.getElementById("buttonButtercupChange");
var flowerDaisyButton = document.getElementById("buttonDaisyChange");
var flowerLilyButton = document.getElementById("buttonLilyChange");
var flowerPoppyButton = document.getElementById("buttonPoppyChange");

var headerColorChange = function(){
    var redComp = Math.random() * 255;
    console.log(redComp);
    var greenComp = Math.random() * 255;
    var blueComp = Math.random() * 255;

    docHeader.style.backgroundColor = "rgb(" + redComp + ", " + greenComp + ", " + blueComp + ")";
    docHeader.style.textAlign = "center";
    docHeader.style.border = "solid 2px midnightblue";

    headerButton.addEventListener("click", function() {
        console.log("Click happened!");
        console.log("Color Change YAY");
        console.log("Flower Power");
        var notification = document.createElement("h3");
        notification.innerText = "Buttercups, Daisies, Lilies, Poppies!";
        docHeader.appendChild(notification);
    })   
}

var swapButtercupImage = function(){
    console.log(flowerButtercupImage.alt);

    if(flowerButtercupImage.alt == "First image of California ButterCup"){
        flowerButtercupImage.src = "Assets/buttercup1.jpg";
        flowerButtercupImage.alt = "Second image of California ButterCups";
        flowerButtercupImage.innerText = "Show the first one!";
    } 
    else {
        flowerButtercupImage.src = "Assets/buttercup2.jpg";
        flowerButtercupImage.alt = "First image of California ButterCups";
        flowerButtercupImage.innerText = "Show the second one!";
    }
}

var swapDaisyImage = function(){
    console.log(flowerDaisyImage.alt);

    if (flowerDaisyImage.alt == "First image of Fleabane Daisies"){
        flowerDaisyImage.src = "Assets/daisy1.jpg";
        flowerDaisyImage.alt = "Second image of Fleabane Daisies";
        flowerDaisyImage.innerText = "Show the first one!";
    } 
    else  {
        flowerDaisyImage.src = "Assets/daisy2.jpg";
        flowerDaisyImage.alt = "First image of Fleabane Daisies";
        flowerDaisyImage.innerText = "Show the second one!";
    }
}

var swapLilyImage = function(){
    console.log(flowerLilyImage.alt);

    if(flowerLilyImage.alt == "First image of Catalina Mariposa Lilies"){ 
        flowerLilyImage.src = "Assets/lily1.jpg";
        flowerLilyImage.alt = "Second image of Catalina Mariposa Lilies";
        flowerLilyImage.innerText = "Show the first one!";
    } 
    else { 
        flowerLilyImage.src = "Assets/lily2.jpg";
        flowerLilyImage.alt = "First image of Catalina Mariposa Lilies";
        flowerLilyImage.innerText = "Show the second one!";
    }
}

var swapPoppyImage = function(){
    console.log(flowerPoppyImage.alt);

    if(flowerPoppyImage.alt == "First image of California Poppies"){ 
        flowerPoppyImage.src = "Assets/poppy1.jpg";
        flowerPoppyImage.alt = "Second image of California Poppies";
        flowerPoppyImage.innerText = "Show the first one!";
    } 
    else { 
        flowerPoppyImage.src = "Assets/poppy2.jpg";
        flowerPoppyImage.alt = "First image of California Poppies";
        flowerPoppyImage.innerText = "Show the second one!";
    }
}

headerColorChange();

headerButton.addEventListener("click", headerColorChange);

flowerButtercupButton.addEventListener("click", swapButtercupImage);
flowerDaisyButton.addEventListener("click", swapDaisyImage);
flowerLilyButton.addEventListener("click", swapLilyImage);
flowerPoppyButton.addEventListener("click", swapPoppyImage);
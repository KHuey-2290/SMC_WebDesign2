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

headerColorChange();

headerButton.addEventListener("click", headerColorChange);

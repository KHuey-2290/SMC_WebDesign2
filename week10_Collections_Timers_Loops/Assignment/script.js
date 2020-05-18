var groupSelect = document.getElementById("groupSelect");
var catSelect = document.getElementById("catSelect");

groupSelect.addEventListener("change", function(){
    console.log(groupSelect.value);

    if (groupSelect.value == 'breakfast'){
        fillCategory(catBreakfast);
    }
    else if(groupSelect.value == 'lunch'){
        fillCategory(catLunch);
    }
    else if (groupSelect.value == 'dinner'){
        fillCategory(catDinner);
    }
    else if (groupSelect.value == 'dessert'){
        fillCategory(catDessert);
    }
    else if (groupSelect.value == 'beverage'){
        fillCategory(catBeverage);
    }
})

var catBreakfast = ["Select", "Bagels", "Cereal", "Eggs"];
var catLunch = ["Select", "Pizza", "Salad", "Sandwich"];
var catDinner = ["Select", "Chicken", "Fish", "Steak"];
var catDessert = ["Select", "Citrus", "Chocolate", "Strawberry", "Vanilla"];
var catBeverage = ["Select", "Coffee", "Juice", "Tea", "Water"];

var fillCategory = function(selection){
    catSelect.innerHTML = "";

    selection.forEach(element => {
        var opt = document.createElement('option');
        opt.value = element;
        opt.textContent = element.charAt(0).toUpperCase() + element.slice(1);

        catSelect.appendChild(opt);
    })
}

var galImage1 = document.getElementById("galleryImg-1");
var galImage2 = document.getElementById("galleryImg-2");
var galImage3 = document.getElementById("galleryImg-3");
var galImage4 = document.getElementById("galleryImg-4");
var galImage5 = document.getElementById("galleryImg-5");

var clickOption = document.getElementById("clickOption");

var bfastImages = ["Assets/bagel1.jpg", "Assets/cereal.jpg", "Assets/eggs.jpg"];
var lunchImages = ["Assets/pizza.jpg", "Assets/salad.jpg", "Assets/sandwich.jpg"];
var dinnerImages = ["Assets/chicken.jpeg", "Assets/fish.jpg", "Assets/steak.jpg"];
var dessertImages = ["Assets/citrus.jpg", "Assets/chocolate.jpg", "Assets/strawberry.jpg", "Assets/vanilla.jpg"];
var bevImages = ["Assets/coffee.jpg", "Assets/juice.jpg", "Assets/tea.jpg", "Assets/water.jpeg"];

var imageCounter = 1;
var currentImage = 0;

function bfastGallery() {
    var nextImage = currentImage + 1;
    if(nextImage == bfastImages.length) nextImage = 0;
    galImage1.src = bfastImages[nextImage];
    currentImage = nextImage;
}

function lunchGallery() {
    var nextImage = currentImage + 1;
    if(nextImage == lunchImages.length) nextImage = 0;
    galImage2.src = lunchImages[nextImage];
    currentImage = nextImage;
}

function dinnerGallery() {
    var nextImage = currentImage + 1;
    if(nextImage == dinnerImages.length) nextImage = 0;
    galImage3.src = dinnerImages[nextImage];
    currentImage = nextImage;
}

function dessertGallery() {
    var nextImage = currentImage + 1;
    if(nextImage == dessertImages.length) nextImage = 0;
    galImage4.src = dessertImages[nextImage];
    currentImage = nextImage;
}

function bevGallery() {
    var nextImage = currentImage + 1;
    if(nextImage == bevImages.length) nextImage = 0;
    galImage5.src = bevImages[nextImage];
    currentImage = nextImage;
}

window.setInterval(bfastGallery, 3000);
window.setInterval(lunchGallery, 3000);
window.setInterval(dinnerGallery, 3000);
window.setInterval(dessertGallery, 3000);
window.setInterval(bevGallery, 3000);
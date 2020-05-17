var groupSelect = document.getElementById("groupSelect");
var catSelect = document.getElementById("catSelect");
var galleryImage1 = document.getElementById("galleryImg-1");
var galleryImage2 = document.getElementById("galleryImg-2");
var galleryImage3 = document.getElementById("galleryImg-3");
var galleryImage4 = document.getElementById("galleryImg-4");
var galleryImage5 = document.getElementById("galleryImg-5");


var catBreakfast = ["Bagels", "Cereal", "Eggs", "Pancakes", "Toast"];
var catLunch = ["Burger", "Pizza", "Salad", "Sandwich", "Wrap"];
var catDinner = ["Steak", "Fish", "Pasta", "Chicken", "Soup"];
var catDessert = ["Chocolate", "Strawberry", "Vanilla", "Blueberry", "Citrus"];
var catBeverage = ["Coffee", "Juice", "Soda", "Tea", "Water"];


var imageCounter = 1;

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
    else{
        catSelect.innerHTML = "";
    }
})

var fillCategory = function(catArray){
    catSelect.innerHTML = "";

    catArray.forEach(function(member){
        var option = document.createElement('option');
        option.value = member;
        option.textContent = member;
        catSelect.appendChild(option);
    })
}

var timerFunction = function(){
    console.log(galleryImg.src);

    if(imageCounter == 1){
        galleryImg.src = "poppy1.jpg";
        imageCounter = 2;
    }
    else if(imageCounter == 2){
        galleryImg.src = "lily1.jpg";
        imageCounter = 3;
    }
    else if(imageCounter == 3){
        galleryImg.src = "buttercup1.jpg";
        imageCounter = 1;
    }
}

window.setTimeout(timerFunction, 3000);
var groupSelect = document.getElementById("groupSelect");
var catSelect = document.getElementById("catSelect");
var galleryImg = document.getElementById("galleryImg");

var catAnimals = ["Puppies", "Cats", "Quokkas"];
var catFood = ["Coffee", "Desserts", "Cocktails", "Muffins", "Pineapples", "Onions"];
var catNature = ["Forests", "Beaches", "Mountains"];

var imageCounter = 1;

groupSelect.addEventListener("change", function(){
    console.log(groupSelect.value);

    if (groupSelect.value == 'animals'){
        fillCategory(catAnimals);
    }
    else if(groupSelect.value == 'food'){
        fillCategory(catFood);
    }
    else if (groupSelect.value == 'nature'){
        fillCategory(catNature);
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

// Donate Page
var thankYouPage = document.getElementById("thankYouPage");

thankYouPage.style.display = "none";

// Navbar JS
$(document).ready(function () {
    //Buttons in header
    $("#buttonSMToggle").click(function() {
        $("#mySMIconsBox").toggle();
    });

    $("#buttonNavbarToggle").click(function() {
        $("#myFlexNavbarLinks").toggle();
    });

    //Thank you button
    $("#completeButton").click(function() {
        $("#thankYouPage").show();
        $(".donate-container").hide();
    });
});

// Home Page Slideshow
var slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
    showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    var i;
    var mySlides = document.getElementsByClassName("slides");
    var dots = document.getElementsByClassName("dot");
    if (n > mySlides.length) {slideIndex = 1}
    if (n < 1) {slideIndex = mySlides.length}
    for (i = 0; i < mySlides.length; i++) {
        mySlides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    mySlides[slideIndex-1].style.display = "block";
    dots[slideIndex-1].className += " active";
}

// Donate Page
var thankYouPage = document.getElementById("thankYouPage");

thankYouPage.style.display = "none";
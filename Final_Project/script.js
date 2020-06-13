// Navbar JS
var myNavLinks = document.getElementById("myFlexNavbarLinks");
var mySMIconsBox = document.getElementById("mySMIconsBox");

myNavLinks.style.display = "none";
mySMIconsBox.style.display = "none";

$(document).ready(function () {
    //Buttons in header
    $("#buttonSMToggle").click(function() {
        $("#mySMIconsBox").toggle();
    });

    $("#buttonNavbarToggle").click(function() {
        $("#myFlexNavbarLinks").toggle();
    });
});
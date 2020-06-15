// Navbar JS

$(document).ready(function () {
    //Buttons in header
    $("#buttonSMToggle").click(function() {
        $("#mySMIconsBox").toggle();
    });

    $("#buttonNavbarToggle").click(function() {
        $("#myFlexNavbarLinks").toggle();
    });
});
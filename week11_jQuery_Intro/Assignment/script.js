$(document).ready(function () {
    //Buttons in header
    $("#hipsterVeniceButton").click(function() {
        $(".container-1").show();
        $(".container-2").hide();
        $("#hipsterHeader").show();
        $("#touristHeader").hide();
    });

    $("#touristVeniceButton").click(function() {
        $(".container-2").show();
        $(".container-1").hide();
        $("#hipsterHeader").hide();
        $("#touristHeader").show();
    });

    // Buttons for image 1
    $("#buttonFadeToggle").click(function () {
        $("#galleryImg1").fadeToggle(3000);
      });

    // Buttons for image 2
    $("#buttonToggle").click(function() {
        $("#galleryImg2").toggle();
    });

    // Buttons for image 3
    $("#buttonFadeTo").click(function() {
        $("#galleryImg3").fadeTo( "fast", Math.random());
    });

    // Buttons for image 4
    $("#buttonSlideToggle").click(function() {
        $("#galleryImg4").slideToggle(3000);
    });

    // Buttons for image 5
    $("#buttonFadeOut").click(function () {
        $("#galleryImg5").fadeOut(3000);
    });

    $("#buttonFadeIn").click(function () {
        $("#galleryImg5").fadeIn(3000);
    });

    // Buttons for image 6
    $("#buttonSlideUp").click(function () {
        $("#galleryImg6").slideUp(3000);
    });

    $("#buttonSlideDown").click(function () {
        $("#galleryImg6").slideDown(3000);
    });

    // Buttons for image 7
    $("#buttonShrink").click(function () {
        $("#galleryImg7").animate( {
          height: "50px",
          width: "50px",
          margin: "100px",
        }, 2000);
    });

    $("#buttonGrow").click(function () {
        $("#galleryImg7").animate( {
          height: "100%",
          width: "100%",
          margin: "0px",
        }, 2000);
    });

    // Buttons for image 8
    $("#buttonMoveDown").toggle(function(){
        $("#galleryImg8").animate( {
            marginTop: "100px",
        }, 2000);
    });

    $("#buttonMoveUp").toggle(function() {
        $("#galleryImg8").animate( {
            marginTop: "0px",
        }, 2000);
    });
})
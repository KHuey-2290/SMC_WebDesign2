$(document).ready(function () {
    var numProducts = 0;

    // draggable and droppable
    $(".draggable").draggable({
        revert: "invalid"
    });

    $(".droppable").droppable({
        drop: function(){
            var plural = "";

            if(numProducts > 1) {
                plural = "s"
            };

            numProducts++,

            $(".product-cart").find("h3").text("You have " + numProducts + " prodtuct" + plural + " in cart.")
        }
    });

    // 

    // 
})
$("#clickB").click(function(){
    $(".many-para").append("<p class='long-para'>riojf dkj eiorj iojre gidfj gidfgj ijdf gjfgidjfg iojdf iogjdf gikjfdkgjdfk</p>");
})

$("#clickR").click(function(){
    $(".long-para").remove();
})

$("#clickImg").click(function(){
    $(".hideable-img").hide();
})

$("#toggleImg").click(function(){
    $(".hideable-img").toggle();
})

$("#fadeOutImg").click(function(){
    $(".hideable-img").fadeOut(4000, function(){
        $(".images").append('<h1>Image Hidden Now!</h1>');
    });
})

$("#fadeTOggleImg").click(function(){
    $(".hideable-img".)
})
$(document).ready(function () {
    //everything should go in here!!!
    $("#clickB").click(function () {
      $(".long-ps").append(
        '<p class="long-paragraph">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae, nostrum aut dolore voluptatibus distinctio, tempore obcaecati at illum earum libero eaque, possimus blanditiis dolorum cumque. Quia atque earum laudantium aliquid!</p>'
        );
    });

    $("#clickR").click(function () {
      $('.long-paragraph').remove();
    })

    $("#hideBtn").click(function () {
      $('.hideable-img').hide();
    })

    $("#toggleBtn").click(function () {
      $('.hideable-img').toggle();
    })

    $("#fadeOutBtn").click(function () {
      $('.hideable-img').fadeOut(4000, function () {
        $(".images").append('<h1>Image Hidden Now!</h1>')
      });
    })

    $("#fadeToggleBtn").click(function () {
      $('.hideable-img').fadeToggle(2000);
    })

    $("#slideUpBtn").click(function () {
      $('.hideable-img').slideUp(2000);
    })

    $('#customAnim').click(function () {
      $('.hideable-img').animate({
        height: "0px",
        width: "920px",
        marginBottom: "657px"
      }, 2000);
    })//end of customAnim click

  })//end of document ready
/* Enable tooltips */
$(function () {
    $('[data-toggle="tooltip"]').tooltip({
        delay: { "show": 500, "hide": 100 }
    });
  });

/* smooth scroll */
$('a').click(function(){
    $('html, body').animate({
        scrollTop: $( $(this).attr('href') ).offset().top
    }, 500);
    return false;
});	
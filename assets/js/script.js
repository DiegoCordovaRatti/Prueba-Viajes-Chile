/* Enable tooltips */
$(function () {
    $('[data-toggle="tooltip"]').tooltip({
        delay: { "show": 300, "hide": 100 } /* adds delay to the tooltip */
    });
  });

/* smooth scroll */
$('a').click(function(){
    $('html, body').animate({
        scrollTop: $( $(this).attr('href') ).offset().top
    }, 500);
    return false;
});	
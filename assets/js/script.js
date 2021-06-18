/* Enable tooltips */
$(function () {
    $('[data-toggle="tooltip"]').tooltip({
        delay: {
            "show": 300,
            "hide": 100
        } /* adds delay to the tooltip */
    });
});

/* smooth scroll */
$(function () {
    let sc = document.getElementsByClassName("smooth")
    $(sc).click(function () {
        $('html, body').animate({
            scrollTop: $($(this).attr('href')).offset().top
        }, 500);
        return false;
    });
});
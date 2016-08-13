$(window).scroll(function() {
    var scroll = $(window).scrollTop();

    if (scroll >= 2) {
        $("header").addClass("scrolling");
    } else {
        $("header").removeClass("scrolling");
    }
});

$(window).scroll(function() {
    if ($(document).scrollTop() > 100) {
        $("header").addClass("animate");
            } else {
        $("header").removeClass("animate");
    }
});


// Hamburger
$(document).ready(function() { 

    $('[data-modal=hamburger]').on('click', function() {
        $('#hamburger').fadeIn();
    });
    $('.menu__wrap__header__close').on('click', function() {
        $('#hamburger').fadeOut();
    });
});


// Call Back
$(document).ready(function() { 

    $('[data-modal=callBack]').on('click', function() {
        $('.call').fadeIn();
    });
    $('.call__wrap__close').on('click', function() {
        $('.call').fadeOut();
    });
});


// Video
$(document).ready(function() { 

    $('[data-modal=video]').on('click', function() {
        $('.video').fadeIn();
    });
    $('.video__wrap__close').on('click', function() {
        $('.video').fadeOut();
    });
});




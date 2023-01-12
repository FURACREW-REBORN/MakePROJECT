//= components/script.js
//= components/script2.js
//= components/script3.js

$(document).ready(function() {
    $('.about__slider').slick({
        arrows: true,
        dots: false,
        adaptiveHeight: true,
        slidesToShow: 3,
    });
    $('.advan__slider').slick({
        arrows:true,
        dots: false,
        slidesToShow: 1,
    })
});
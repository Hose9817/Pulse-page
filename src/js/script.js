$(document).ready(function () {
    $('.carousel__inner').slick({
        speed: 500,
        // adaptiveHeight: true,
        prevArrow: '<button type="button" class="slick-prev"><img src="icons/arrow_left.svg" alt="left"></button>',
        nextArrow: '<button type="button" class="slick-next"><img src="icons/arrow_right.svg" alt="right"></button>'
    });
});
$('.reviews_full').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: true,
    asNavFor: '.reviews_nav',
    prevArrow: '<div class="slider_prew slider_arrow icofont">',
    nextArrow: '<div class="slider_next slider_arrow icofont">',

});
$('.reviews_content-des').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    fade: true,
    asNavFor: '.reviews_nav',
    prevArrow: '<div class="slider_prew slider_arrow icofont">',
    nextArrow: '<div class="slider_next slider_arrow icofont">',

});
$('.reviews_nav').slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    asNavFor: '.reviews_full, .reviews_content-des',
    dots: false,
    arrows: false,
    focusOnSelect: true,
});
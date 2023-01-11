$(document).on('click', '.foryou_list.tab li', function(e){
    e.preventDefault();
    let all_tab = $('.foryou_list.tab li');
    if ($(this).hasClass('active')) {
        $(this).removeClass('active');
    } else {
        all_tab.removeClass('active');
        $(this).addClass('active');
    }
});
$(document).on('click', '.mob_button', function(e){
    e.preventDefault();
    $(this).toggleClass('active');
    $('.mainmenu').toggleClass('active');
});

$('.reviews_full').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
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
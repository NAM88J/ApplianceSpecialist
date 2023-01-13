$('.brend_slider').slick({
    slidesToShow: 8,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1500,
    infinite: true,
    speed: 1000,
    arrows: false,
    responsive: [
        {
            breakpoint: 1180,
            settings: {
                slidesToShow: 6,
            }
        },
        {
            breakpoint: 788,
            settings: {
                slidesToShow: 3,
            }
        }
    ]

});
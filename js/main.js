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
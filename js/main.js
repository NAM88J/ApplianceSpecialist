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
function isEmail(email) {
    var regex = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    return regex.test(email);
}
function isPhone(phone) {
    var regex = /^((\+[1-9]{1,4}[ \-]*)|(\([0-9]{2,3}\)[ \-]*)|([0-9]{2,4})[ \-]*)*?[0-9]{3,4}?[ \-]*[0-9]{3,4}?$/;
    return regex.test(phone);
}
function success_modal () {
    let fon = $('.modal_fon'),
        window = $('.modal');
    fon.fadeIn('200');
    setTimeout(function() { 
        window.fadeIn('200');
    }, 200);
    setTimeout(function() { 
        window.fadeOut('200');
    }, 1500);
    setTimeout(function() { 
        fon.fadeOut('200');
    }, 1700);
}
$(document).on('click', '.plans_link', function (e) {
    e.preventDefault();
    let id  = $(this).attr('href'),
        top = $(id).offset().top;
    $('body,html').animate({scrollTop: top}, 1200);
});
$(document).on('click', '.sen_form', function(e){
    e.preventDefault();
    let form = $('form'),
        req_name = form.find('.req_name'),
        req_phone = form.find('.req_phone'),
        req_email = form.find('.req_email'),
        valid = true;
    if (req_name.length > 0) {
        if(req_name.val().length < 4) {
            req_name.addClass('error');
            valid = false;
        } else {
            req_name.removeClass('error');
        }
    }
    if (req_phone.length > 0) {
        if(!isPhone(req_phone.val())) {
            req_phone.addClass('error');
            valid = false;
        } else {
            req_phone.removeClass('error');
        }
    }
    if (req_email.length > 0) {
        if(!isEmail(req_email.val())) {
            req_email.addClass('error');
            valid = false;
        } else {
            req_email.removeClass('error');
        }
    }
    if (valid) {
        $.ajax({
            type: "POST",
            url: './sender.php',
            data: form.serialize(),
            beforeSend: function () {
                success_modal ();
            },
            success: function (data) {
                success_modal ();
            },
            error: function (jqXHR, text, error) {

            }
        });
    }
});

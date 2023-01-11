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
$(document).on('click', '.sen_form', function(e){
    e.preventDefault();
    let form = $('form'),
        req_name = form.find('.req_name'),
        req_phone = form.find('.req_phone'),
        req_email = form.find('.req_email'),
        valid = true;
    if (req_name) {
        if(req_name.val() < 4) {
            req_name.addClass('error');
            valid = false;
        } else {
            req_name.removeClass('error');
        }
    }
    if (req_phone) {
        if(!req_phone.val().match(/^[0-9]+$/) != null && req_phone.val().length() > 2) {
            req_phone.addClass('error');
            valid = false;
        } else {
            req_phone.removeClass('error');
        }
    }
    if (req_email) {
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
            url: './send.php',
            data: form.serialize(),
            beforeSend: function () {
                alert("Hello! I am an alert box!!");
                // $(formNm).html('<p class="sendprosec">Sending...</p>');
            },
            success: function (data) {
                alert("Успех");
                // Вывод текста результата отправки
                // $(formNm).html('<p style="text-align:center">'+data+'</p>');
            },
            error: function (jqXHR, text, error) {
                // $(formNm).html(error);
            }
        });
    }

});

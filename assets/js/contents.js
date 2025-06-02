$(function() {

    $('main.guide_topre > .container ul > li').on('click', function() {

        if($(this).hasClass('open_topre')) {
            $(this).removeClass('open_topre');
        } else {
            $('li.open_topre').removeClass('open_topre');
            $(this).addClass('open_topre');
        }
    });
});

$(function() {

    $('button.remodal-close').on('click', function() {
        $('.remodal-wrapper.makeshop-modal.remodal-is-opened').css('display, none');
    });
});

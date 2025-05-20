$(function() {

    // console.log('テスト');

    /* drawer_topre */
    $('li.drawerbutton_topre').on('click', function() {
        $('nav.drawer_topre').toggleClass('open_topre');
    });

    /* mv_topre */
    $('.mv_topre').slick({
        dots: true,
        autoplay: true,
        autoplaySpeed: 5000,
        pauseOnHover: false,
        pauseOnFocus: false
    });
});

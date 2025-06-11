$(function() {

    // console.log('test');

    /* slick */
    $(".ks-slick").slick({
        autoplay: true,
        fade: true,
        dots: false,
        arrows: false,
        speed: 3000,
        autoplaySpeed: 3000,
        pauseOnFocus: false,
        pauseOnHover: false
    });

    /* フェードインアニメーション(ウィンドウの高さにより) */
    var windowHeight = $(window).height();
    var targetOffset = $('.slideIn-up-fv_p').offset().top;
    if(targetOffset <= windowHeight) {
        $('.slideIn-up-fv_p').addClass('slideIn-up-fv_p-on');
    } else {
        $(window).on('scroll', function(){
            $('.slideIn-up-fv_p').each(function() {
                let targetOffset = $(this).offset().top;
                let scrollPos = $(window).scrollTop() + $(window).height();
                let offset = 0;
                if (scrollPos > targetOffset + offset) {
                    $(this).addClass('slideIn-up-fv_p-on');
                }
            });    
        });
    }

    /* スクロールアニメーション */
    $(window).on('scroll', function(){

        $('.slideIn-up').each(function() {
            let targetOffset = $(this).offset().top;
            let scrollPos = $(window).scrollTop() + $(window).height();
            let offset = 100;
            if (scrollPos > targetOffset + offset) {
                $(this).addClass('slideIn-up-on');
            }
        });

        $('.fadeIn-about').each(function() {
            let targetOffset = $(this).offset().top;
            let scrollPos = $(window).scrollTop() + $(window).height();
            let offset = 200;
            if (scrollPos > targetOffset + offset) {
                $(this).addClass('fadeIn-about-on');
                $(this).parent('.ks-about-flex').find('h3.fadeIn-about').addClass('fadeIn-about-on');
                $(this).parent('.ks-about-flex').find('.slideIn-left-about').addClass('slideIn-left-about-on');
            }
        });

        $('.fadeIn').each(function() {
            let targetOffset = $(this).offset().top;
            let scrollPos = $(window).scrollTop() + $(window).height();
            let offset = 100;
            if (scrollPos > targetOffset + offset) {
                $(this).addClass('fadeIn-on');
            }
        });

        $('.ks-pickUp-item_img-obi').each(function() {
            let targetOffset = $(this).offset().top;
            let scrollPos = $(window).scrollTop() + $(window).height();
            let offset = 100;
            if (scrollPos > targetOffset + offset) {
                $(this).find('.ks-pickUp-item_img-obi-bg-sp').addClass('ks-pickUp-item_img-obi-bg-sp-on');
                $(this).find('.ks-pickUp-item_img-obi-bg-sp div').addClass('ks-pickUp-item_img-obi-bg-sp-on');
                $(this).find('.ks-pickUp-item_img-obi-bg-pc').addClass('ks-pickUp-item_img-obi-bg-pc-on');
                $(this).find('.ks-pickUp-item_img-obi-bg-pc div').addClass('ks-pickUp-item_img-obi-bg-pc-on');
                $(this).find('p').addClass('ks-pickUp-item_img-obi_p-on');
                $(this).find('p span').addClass('ks-pickUp-item_img-obi_span-on');
            }
        });

        $('.slideIn-left').each(function() {
            let targetOffset = $(this).offset().top;
            let scrollPos = $(window).scrollTop() + $(window).height();
            let offset = 100;
            if (scrollPos > targetOffset + offset) {
                $(this).addClass('slideIn-left-on');
            }
        });

        $('.slideIn-up-pickUp').each(function() {
            let targetOffset = $(this).offset().top;
            let scrollPos = $(window).scrollTop() + $(window).height();
            let offset = 100;
            if (scrollPos > targetOffset + offset) {
                $(this).addClass('slideIn-up-pickUp-on');
            }
        });

        $('.fadeIn-ranking').each(function() {
            let targetOffset = $(this).offset().top;
            let scrollPos = $(window).scrollTop() + $(window).height();
            let offset = 100;
            if (scrollPos > targetOffset + offset) {
                $(this).addClass('fadeIn-ranking-on');
                $(this).parent('.ks-ranking').find('.slideIn-left-ranking').addClass('slideIn-left-ranking-on');
                $(this).parent('.ks-recommend').find('.slideIn-left-ranking').addClass('slideIn-left-ranking-on');
            }
        });
    });

    /* スライド */
    $('.ks-arrow-next').on('click', function() {

        if($(this).parent('section').find('.ks-slide-ul1').hasClass('ks-slide-ul-on1')) {
            $(this).parent('section').find('.ks-slide-ul1').removeClass('ks-slide-ul-on1');
            $(this).parent('section').find('.ks-slide-ul2').addClass('ks-slide-ul-on2');
        }

        if(!$(this).hasClass('ks-arrow-next-on')) {
            $(this).addClass('ks-arrow-next-on');
            $(this).parent('section').find('.ks-arrow-prev').removeClass('ks-arrow-prev-on');
        }
    });

    $('.ks-arrow-prev').on('click', function() {

        if($(this).parent('section').find('.ks-slide-ul2').hasClass('ks-slide-ul-on2')) {
            $(this).parent('section').find('.ks-slide-ul2').removeClass('ks-slide-ul-on2');
            $(this).parent('section').find('.ks-slide-ul1').addClass('ks-slide-ul-on1');
        }

        if(!$(this).hasClass('ks-arrow-prev-on')) {
            $(this).addClass('ks-arrow-prev-on');
            $(this).parent('section').find('.ks-arrow-next').removeClass('ks-arrow-next-on');
        }
    });    

    /* 遷移元の判定(商品一覧の切り替え) */
    let referrer = document.referrer;
    let targetUrl = 'https://www.kitano-ace.jp/view/category/ct127';
    let targetUrl1 = 'https://www.kitano-ace.jp/view/category/ct127?page=1';
    let targetUrl2 = 'https://www.kitano-ace.jp/view/category/ct127?page=2';
    let targetUrl3 = 'https://www.kitano-ace.jp/view/category/ct127?page=3';

    if (referrer === targetUrl || referrer === targetUrl1 || referrer === targetUrl2 || referrer === targetUrl3) {
        let targetOffset = $('.ks-items').offset().top - 200;
        $('html, body').animate({ scrollTop: targetOffset }, 1000);
    }
});

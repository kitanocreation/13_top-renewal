$(function() {

    // console.log('テスト');

    /* header_topre */
    const $header = $('header.down_topre');
    const $guideTopre = $('ul.guide_topre');
    let lastScrollTop = 0;
    const SCROLL_THRESHOLD = 50;
    const TOP_SECTION_THRESHOLD = 142.5;
    let scrollUpCounter = 0;
    let scrollDownCounter = 0;
    $(window).on('scroll', function() {

        const currentScrollTop = $(this).scrollTop();
        if(currentScrollTop < TOP_SECTION_THRESHOLD) {

            $header.addClass('close_topre');
            scrollUpCounter = 0;
            scrollDownCounter = 0;
        } else {

            if(currentScrollTop > lastScrollTop) {

                scrollDownCounter += (currentScrollTop - lastScrollTop);
                scrollUpCounter = 0;
                if(scrollDownCounter >= SCROLL_THRESHOLD) {

                    $header.addClass('close_topre');
                    scrollDownCounter = 0;
                }
            } else if(currentScrollTop < lastScrollTop) {

                scrollUpCounter += (lastScrollTop - currentScrollTop);
                scrollDownCounter = 0;
                if(scrollUpCounter >= SCROLL_THRESHOLD) {

                    $header.removeClass('close_topre');
                    scrollUpCounter = 0;
                }
            }
        }

        if(currentScrollTop <= TOP_SECTION_THRESHOLD) {

            $guideTopre.css('margin-top', '136px');
        } else {

            $guideTopre.css('margin-top', '110px');
        }
        lastScrollTop = currentScrollTop;
    });
    const initialScrollTop = $(window).scrollTop();
    if(initialScrollTop < TOP_SECTION_THRESHOLD) {

        $header.addClass('close_topre');
    } else {
        $header.removeClass('close_topre');
    }
    if(initialScrollTop <= TOP_SECTION_THRESHOLD) {

        $guideTopre.css('margin-top', '136px');
    } else {

        $guideTopre.css('margin-top', '110px');
    }

    /* drawer_topre */
    $('li.drawerbutton_topre').on('click', function() {

        const $this1 = $(this).find('img');
        const $this2 = $(this).find('span');
        const closeIconSrc = 'https://gigaplus.makeshop.jp/kitanoace/19_top-renewal/assets/img/template/header/close-icon.svg';
        const originalIconSrc = 'https://gigaplus.makeshop.jp/kitanoace/19_top-renewal/assets/img/template/header/dmenu-icon.svg';
        $('nav.drawer_topre').toggleClass('open_topre');
        if($('nav.drawer_topre').hasClass('open_topre')) {

            $this1.attr('src', closeIconSrc);
            $this2.text('閉じる');
        } else {

            $this1.attr('src', originalIconSrc);
            $this2.text('メニュー');
        }
    });
    $('ul.category_topre li').on('click', function() {

        if($(this).hasClass('open_topre')) {

            $(this).removeClass('open_topre');
        } else {
            
            $('li.open_topre').removeClass('open_topre');
            $(this).addClass('open_topre');
        }
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

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

    /* gnav-topre */
    $('nav.gnav_topre > ul > li').hover(function() {
        $(this).toggleClass('gnav-select_topre');
        $(this).find('nav.medium_topre').toggleClass('medium-select_topre');
    });
    $('li.catgory_topre').hover(function() {
        $('nav.medium_topre > ul > li').on('click', function() {
            $('nav.small_topre').removeClass('small-select_topre');
            $(this).find('nav.small_topre').addClass('small-select_topre');
        });
        $('nav.breadcrumb_topre').on('click', function(event) {
            event.stopPropagation();
            $(this).parents('nav.small-select_topre').removeClass('small-select_topre');
        });
    });

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
            $(this).find('.large_topre span:eq(1)').text('+');
        } else {
            $('ul.category_topre li').each(function() {
                $(this).removeClass('open_topre');
                $(this).find('.large_topre span:eq(1)').text('+');
            });
            $(this).addClass('open_topre');
            $(this).find('.large_topre span:eq(1)').text('-');
        }
    });

    /* search-nav_topre */
    $('.searchKeywordInput').on('input', function() {
        const keyword = $(this).val();
        $('.searchKeywordInput').val(keyword);
    });

    /* mv_topre */
    $('.mv_topre').slick({
        dots: true,
        autoplay: true,
        autoplaySpeed: 5000,
        pauseOnHover: false,
        pauseOnFocus: false
    });

    /* icon_topre */
    $('nav.icon_topre ul li').on('click', function() {

        let spanText = $(this).find('span').text();
        let targetSelector;
        if(spanText === 'ランキング') {
            targetSelector = 'section.ranking_topre';
        } else if(spanText === '新商品') {
            targetSelector = 'section.new_topre';
        } else if(spanText === 'ポイントUP') {
            targetSelector = 'section.recommend_topre';
        } else {
            return;
        }
        let target = $(targetSelector);
        if(target.length) {
            $('html, body').animate({
                scrollTop: target.offset().top
            }, 800);
        }
    });

    /* ranking_topre */
    $('p.ranking-icon_topre img').each(function(index) {
        let srcToSet;
        if(index === 0) {
            srcToSet = 'https://gigaplus.makeshop.jp/kitanoace/19_top-renewal/assets/img/ranking1-icon.svg';
        } else if(index === 1) {
            srcToSet = 'https://gigaplus.makeshop.jp/kitanoace/19_top-renewal/assets/img/ranking2-icon.svg';
        } else if(index === 2) {
            srcToSet = 'https://gigaplus.makeshop.jp/kitanoace/19_top-renewal/assets/img/ranking3-icon.svg';
        } else {
            srcToSet = 'https://gigaplus.makeshop.jp/kitanoace/19_top-renewal/assets/img/ranking4-icon.svg';
        }
        $(this).attr('src', srcToSet);
    });

    /*  */
    $('main.top_topre button').on('click', function() {
        const $targetButton = $(this).parents('section').find('button');
        const $targetUl = $(this).parents('section').find('ul');
        const openHtml = '<span>&minus;</span>閉じる';
        const closeHtml = '<span>&plus;</span>もっと見る';
        if($targetButton.hasClass('open_topre')) {
            $targetUl.removeClass('open_topre');
            $targetButton.removeClass('open_topre');
            $targetButton.html(closeHtml);
        } else {
            $('main.top_topre ul.open_topre').removeClass('open_topre');
            $('main.top_topre button.open_topre').each(function() {
                if($(this)[0] !== $targetButton[0]) {
                    $(this).removeClass('open_topre');
                    $(this).html(closeHtml);
                }
            });
            $targetUl.addClass('open_topre');
            $targetButton.addClass('open_topre');
            $targetButton.html(openHtml);
        }
    });
    $('button.next-icon_topre').on('click', function() {
        $(this).parents('section').addClass('active_topre');
    });
    $('button.prev-icon_topre').on('click', function() {
        if($(this).parents('section').hasClass('active_topre')) {
            $(this).parents('section').removeClass('active_topre');
        }
    });      

    /* review_topre */
    $('section.review_topre ul li a .con_topre p').each(function() {
        const $p = $(this);
        const maxLength = parseInt($p.data('max-length'), 10);
        const originalText = $p.text();
        if(originalText.length > maxLength) {
            const truncatedText = originalText.slice(0, maxLength) + '...';
            $p.text(truncatedText);
        }
    });

    /* list-head-sort_topre */
    const urlParams = new URLSearchParams(window.location.search);
    const sortParam = urlParams.get('sort');
    $('.category-title dl.list-head-sort dd a').each(function() {
        const $link = $(this);
        const linkText = $link.text();
        $link.parents('dd').removeClass('select_topre');
        if(sortParam === 'price') {
            if(linkText === '価格の低い順') {
                $link.parents('dd').addClass('select_topre');
            }
        } else if(sortParam === 'price_high') {
            if(linkText === '価格の高い順') {
                $link.parents('dd').addClass('select_topre');
            }
        } else if(sortParam === 'order') {
            if(linkText === '新着順') {
                $link.parents('dd').addClass('select_topre');
            }
        } else {
            if(linkText === 'おすすめ順') {
                $link.parents('dd').addClass('select_topre');
            }
        }
    });

    /* pager */
    function updatePagerArrows() {
        const $currentLi = $('.pager span.current').closest('li');
        const $firstLi = $('.pager li:first-child');
        const $lastLi = $('.pager li:last-child');
        if($currentLi.is($firstLi)) {
            $('.prev_topre').addClass('off_topre');
        } else {
            $('.prev_topre').removeClass('off_topre');
        }
        if($currentLi.is($lastLi)) {
            $('.next_topre').addClass('off_topre');
        } else {
            $('.next_topre').removeClass('off_topre');
        }
    }
    updatePagerArrows();
    $('.prev_topre').on('click', function() {
        if($(this).hasClass('off_topre')) {
            return;
        }
        const $currentLi = $('.pager span.current').closest('li');
        const $prevLi = $currentLi.prev('li');
        if($prevLi.length) {
            const $prevLink = $prevLi.find('a');
            if($prevLink.length) {
                window.location.href = $prevLink.attr('href');
            }
        }
    });
    $('.next_topre').on('click', function() {
        if($(this).hasClass('off_topre')) {
            return;
        }
        const $currentLi = $('.pager span.current').closest('li');
        const $nextLi = $currentLi.next('li');
        if($nextLi.length) {
            const $nextLink = $nextLi.find('a');
            if($nextLink.length) {
                window.location.href = $nextLink.attr('href');
            }
        }
    });
});

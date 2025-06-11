$(function() {

    // console.log('test');
    
    /* 書き換え↓↓↓ */
    /* ピックアップ */
    const pickupData = [
        {
            num: '000000000297',
            name: 'あご入りだし',
            catchcopy: '毎日作れる、プロの味',
            copy: '“国内産”にこだわった鰹節や昆布、旨味の決め手である焼あごなどの多くの素材を黄金比率で配合しました。どんな料理に使っても美味しく飽きない万能和風だしです。',
            price: '1,080'
        },
        {
            num: '000000000254',
            name: '大人のためのにんじんドレッシング',
            catchcopy: '国産素材本来の美味しさ',
            copy: 'コクがあるのにさっぱりとした味わいで、国産にんじんのすりおろし食感を楽しめる贅沢なドレッシングです。お肉やお魚、冷奴にかけるほか、炒飯にかけても美味しく召し上がれます。',
            price: '746'
        },
        {
            num: '000000000298',
            name: 'しじみ汁',
            catchcopy: '本格しじみをお手軽に',
            copy: '国内産の殻付きしじみを使用し、生タイプのみそで仕上げる本格的な即席しじみ汁です。香り高い昔ながらのしじみ汁をお湯を注ぐだけでお手軽にお楽しみいただけます。',
            price: '1,296'
        }
    ];

    /* ランキング */
    const rankingData = [
        {
            num: '000000000266',
            name: '焼き塩さば',
            price: '499'
        },
        {
            num: '000000000254',
            name: '大人のためのにんじんドレッシング',
            price: '746'
        },
        {
            num: '000000000258',
            name: '炭焼珈琲ゼリー',
            price: '431'
        },
        {
            num: '000000000297',
            name: 'あご入りだし',
            price: '1,080'
        },
        {
            num: '000000001136',
            name: '鮭ほぐし',
            price: '735'
        },
        {
            num: '000000000247',
            name: '国産たけのこごはん',
            price: '972'
        },
        {
            num: '000000000292',
            name: '大人のためのビーフカレー',
            price: '431'
        },
        {
            num: '000000000296',
            name: 'あご入りだし45%減塩',
            price: '1,080'
        },
        {
            num: '000000000298',
            name: 'しじみ汁',
            price: '1,296'
        },
        {
            num: '000000000244',
            name: '筍ごはん',
            price: '647'
        },
        {
            num: '000000000632',
            name: '二度がけ濃蜜 黒糖かりんとう',
            price: '399'
        },
        {
            num: '000000000290',
            name: 'パンケーキミックス',
            price: '562'
        }
    ];

    /* おすすめ */
    const recommendData = [
        {
            num: '000000000384',
            name: '杏仁豆腐',
            price: '215'
        },
        {
            num: '000000001580',
            name: 'あま酒',
            price: '399'
        },
        {
            num: '000000001296',
            name: 'さばみそラー油',
            price: '539'
        },
        {
            num: '000000000246',
            name: '無選別えびせん揚げ',
            price: '464'
        },
        {
            num: '000000000430',
            name: '大人のための飲むお酢 レモン果汁入りリンゴ酢',
            price: '539'
        },
        {
            num: '000000000279',
            name: 'アールグレイ',
            price: '854'
        },
        {
            num: '000000000899',
            name: '大人のための贅沢な日向夏ジャム',
            price: '746'
        },
        {
            num: '000000001340',
            name: '九州さつまチップス',
            price: '280'
        },
        {
            num: '000000001135',
            name: '国産たらこと鮭ほぐし',
            price: '735'
        },
        {
            num: '000000000270',
            name: '梅なじみ',
            price: '648'
        },
        {
            num: '000000000260',
            name: '鶏そぼろ',
            price: '539'
        },
        {
            num: '000000000699',
            name: '明太子なめ茸',
            price: '399'
        }
    ]

    /* ↑↑↑書き換え */

    $('.ks-pickUp article').each(function(index) {
        const item = pickupData[index];
        $(this).find('.ks-pickUp-item_img-obi p span').text(item.catchcopy);
        $(this).find('.ks-pickUp-item_img img').attr('src', 'https://gigaplus.makeshop.jp/kitanoace/09_ks/assets/img/pickup-item/' + item.num + '.webp').attr('alt', item.name);
        $(this).find('h3').text(item.name);
        $(this).find('.ks-pickUp-item-copy').text(item.copy);
        $(this).find('.ks-pickUp-item-price span').text(item.price);
        $(this).find('.ks-pickUp-item-cta a').attr('href', 'https://www.kitano-ace.jp/view/item/' + item.num);
    });

    function rankingContainer(index, item) {
        const ranking = index + 1;
        const crown = ranking <= 3 ? ranking : 4;
        return $('<li>').append(
            $('<a>').attr('href', 'https://www.kitano-ace.jp/view/item/' + item.num).append(
                $('<div>').addClass('ks-ranking-icon').append(
                    $('<p>').text(ranking),
                    $('<img>').attr('src', 'https://gigaplus.makeshop.jp/kitanoace/09_ks/assets/img/3_crown' + crown + '.svg').attr('alt', '')
                ),
                $('<div>').addClass('ks-slideX-item_img').append(
                    $('<img>').attr('src', 'https://gigaplus.makeshop.jp/kitanoace/09_ks/assets/img/item/' + item.num + '.webp').attr('alt', item.name)
                ),
                $('<h3>').text(item.name),
                $('<p>').html('税込<span>' + item.price + '</span>円')
            )
        );
    }
    $('.ks-ranking .ks-slideX-sp ul').empty();
    $.each(rankingData, function(index, item) {
        $('.ks-ranking .ks-slideX-sp ul').append(rankingContainer(index, item));
    });
    $('.ks-ranking .ks-slideX-pc .ks-slide-ul1').empty();
    $('.ks-ranking .ks-slideX-pc .ks-slide-ul2').empty();
    $.each(rankingData, function(index, item) {
        const $li = rankingContainer(index, item);
        if(index < 6) {
            $('.ks-ranking .ks-slideX-pc .ks-slide-ul1').append($li);
        } else {
            $('.ks-ranking .ks-slideX-pc .ks-slide-ul2').append($li);
        }
    });

    function recommendContainer(index, item) {
        return $('<li>').append(
            $('<a>').attr('href', 'https://www.kitano-ace.jp/view/item/' + item.num).append(
                $('<div>').addClass('ks-slideX-item_img').append(
                    $('<img>').attr('src', 'https://gigaplus.makeshop.jp/kitanoace/09_ks/assets/img/item/' + item.num + '.webp').attr('alt', item.name)
                ),
                $('<h3>').text(item.name),
                $('<p>').html('税込<span>' + item.price + '</span>円')
            )
        );
    }
    $('.ks-recommend .ks-slideX-sp ul').empty();
    $.each(recommendData, function(index, item) {
        $('.ks-recommend .ks-slideX-sp ul').append(recommendContainer(index, item));
    });
    $('.ks-recommend .ks-slideX-pc .ks-slide-ul1').empty();
    $('.ks-recommend .ks-slideX-pc .ks-slide-ul2').empty();
    $.each(recommendData, function(index, item) {
        const $li = recommendContainer(index, item);
        if(index < 6) {
            $('.ks-recommend .ks-slideX-pc .ks-slide-ul1').append($li);
        } else {
            $('.ks-recommend .ks-slideX-pc .ks-slide-ul2').append($li);
        }
    });
});

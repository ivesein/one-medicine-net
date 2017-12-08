$('.close_ico').click(function() {
    $('.safe_warm').css('display', 'none');
});
//头部导航划入效果
$('.province_box').hover(function() {
    $('.province_box').css('background', '#fff');
    $(' #userProvince').css('background', '#fff');
    $('.hd_provinceList').css('display', 'block');
}, function() {
    $('.province_box').css('background', 'url(../../images/common_sprite.png) no-repeat right -143px');
    $(' #userProvince').css('background', '#f1f1f1');
    $('.hd_provinceList').css('display', 'none');
});
$('.hd_provinceList').hover(function() {
    $('.hd_provinceList').css('display', 'block');
}, function() {
    $('.province_box').css('background', 'url(../../images/common_sprite.png) no-repeat right -143px');
    $('.hd_provinceList').css('display', 'none');
});

$('.myyaowang').mouseenter(function() {
    $('#menu_bd_orther').css('display', 'block');
});
$('#menu_bd_orther').mouseleave(function() {
    $('#menu_bd_orther').css('display', 'none');
});

$('.tell').mouseenter(function() {
    $('#menu_bd_app').css('display', 'block');
    $('.tell_title').css('display', 'block');
});
$('.tell_title').mouseleave(function() {
    $('#menu_bd_app').css('display', 'none');
    $('.tell_title').css('display', 'none');
});
$('#menu_bd_app').mouseleave(function() {
    $('#menu_bd_app').css('display', 'none');
    $('.tell_title').css('display', 'none');
});
(function() {
    //大轮播
    var oCar_l_box = $('#car-l-box');
    var aImgBox = $('.car-l-img-box');
    var aCar_l_btn = $('.car-l-btn');
    var iTimer = null;
    var index = 0;
    aCar_l_btn.mouseenter(function() {
        index = $(this).index();
        aCar_l_btn.removeClass('active').eq(index).addClass('active');
        aImgBox.stop(true).fadeOut('normal').eq(index).stop(true).fadeIn('normal');
    });

    function autoMove() {
        iTimer = setInterval(function() {
            index++;
            if (index > 6) {
                index = 0;
            }
            move();
        }, 3000);
    }
    oCar_l_box.hover(function() {
        clearInterval(iTimer);
    }, function() {
        autoMove();
    })

    function move() {
        aCar_l_btn.removeClass('active').eq(index).addClass('active');
        aImgBox.stop(true).fadeOut('normal').eq(index).stop(true).fadeIn('normal');
        console.log(aImgBox[index]);
    }
})();
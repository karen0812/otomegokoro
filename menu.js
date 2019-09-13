var _window = $(window),
    _header = $('.site-header'),
    heroBottom;

_window.on('scroll', function () {
    heroBottom = $('.first').height();
    if (_window.scrollTop() > heroBottom) {
        _header.addClass('transform');
    }
    else {
        _header.removeClass('transform');
    }
});

_window.trigger('scroll');


var option = {
  section : '.js-section', // 対象を指定
  easing: "swing", // イージングをしてい(jQueryのanimation)
  scrollSpeed: 600, // スクロール時の速度
  scrollbars: true, // スクロールバーを表示するか
};

$(function() {
  $.scrollify(option); // scrollifyの実行
});



$(function(){
    $(window).scroll(function (){
        $('.fadein').each(function(){
            var targetElement = $(this).offset().top;
            var scroll = $(window).scrollTop();
            var windowHeight = $(window).height();
            if (scroll > targetElement - windowHeight + 500){
                $(this).css('opacity','1');
                $(this).css('transform','translateY(0)');
            }
        });
    });
});


$(function() {
    var h = $(window).height();
    $('.main-content').css('display','none'); 
    $('.loading, .loader').height(h).css('display','block'); 
});

$(window).on("load",function(){
    $('.loading').delay(1000).fadeOut(1000); 
    $('.loader').delay(1000).fadeOut(300);
    $('.main-content').css('display', 'block'); 
    $('.appear img').hide().delay(2000).fadeIn(500);
});
$(function () {


    //partsloadから読み出し
    //pageheaderを途中から固定
    var _window = $(window);
    var _header = $('.pageheader');
    var allheaderbottom;
    _window.on('scroll', function () {
        allheaderbottom = $('#allheader').height();
        if (_window.scrollTop() > allheaderbottom) {
            _header.addClass('fixed');
        } else {
            _header.removeClass('fixed');
        }
    });
    _window.trigger('scroll');


    //スムーススクロール
    var headerHeight = 85;
    var speed = 400;//スムーズスクロールスピード
    var urlHash = location.hash;
    var url = location.pathname;
    if (urlHash) {
        history.replaceState(null, null, url);
        $("html, body").stop().scrollTop(0);
        setTimeout(function () {
            var target = $(urlHash);
            var position = target.offset().top - headerHeight;
            if($('[id="hunbmenuch"]').prop('checked')){
                $('[id="hunbmenuch"]').prop('checked', false);
            }
            $("html, body").stop().animate({ scrollTop: position }, speed, "swing");
        }, 100);
    }
    $('a[href^="#"]').click(function () {
        var href = $(this).attr("href");
        var target = $(href == "#" || href == "" ? 'html' : href);
        var position = target.offset().top - headerHeight;
        if($('[id="hunbmenuch"]').prop('checked')){
            $('[id="hunbmenuch"]').prop('checked', false);
        }
        $("html, body").animate({ scrollTop: position }, speed, "swing");
        return false;
    });
});

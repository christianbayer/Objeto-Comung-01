$(function () {
    var $modalTriggers = $('.modal-trigger');
    var $backes = $('.back');
    var $window = $(window);

    $modalTriggers.on("click", function () {
        var hash = $(this).attr("href");
        $(hash).show();
        $('body').addClass('overflow-hidden');
        $('main').removeClass('page-moveFromLeft').addClass('page-moveToLeft');
        $(hash).removeClass('page-moveToRight').addClass('page-moveFromRight');
        console.log($window.width());
        if($window.width() > 800){
            $(hash).find('blockquote').css({"opacity": 0, "margin-left": "+=100"});
            setTimeout(function () {
                $(hash).find('blockquote').animate({marginLeft: 0, opacity: 1}, 750);
            }, 500);
        }
    });

    $backes.on("click", function () {
        $('body').removeClass('overflow-hidden');
        $('main').removeClass('page-moveToLeft').addClass('page-moveFromLeft');
        $(this).closest('.modal').removeClass('page-moveFromRight').addClass('page-moveToRight');
        setTimeout(function () {
            $(this).closest('.modal').hide();
        }, 600)
    });

    $('.arrow-down').click(function () {
        $("html, body").stop().animate({
            scrollTop: $('.ancoras').offset().top
        }, 1000, 'swing');
    });
    $window.on('scroll', function () {
        if ($(this).scrollTop() > ($window.height() / 2)) {
            mostrarAncoras();
        }
    });

    function mostrarAncoras() {
        $('.ancora').each(function (index) {
            $(this).delay(200 * index).fadeIn(500);
        });
    }

    if ($window.scrollTop() > ($window.height() / 2)) {
        mostrarAncoras();
    }
});
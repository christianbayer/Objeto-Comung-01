var $modalTriggers = $('.modal-trigger');
var $closes = $('.close');

$modalTriggers.on("click", function () {
    var hash = $(this).attr("href");
    $(hash).show();
    $('body').addClass('overflow-hidden');
    $('main').removeClass('page-moveFromLeft').addClass('page-moveToLeft');
    $(hash).removeClass('page-moveToRight').addClass('page-moveFromRight');
});

$closes.on("click", function () {
    $('body').removeClass('overflow-hidden');
    $('main').removeClass('page-moveToLeft').addClass('page-moveFromLeft');
    $(this).closest('.modal').removeClass('page-moveFromRight').addClass('page-moveToRight');
    setTimeout(function () {
        $(this).closest('.modal').hide();
    }, 600)
});

$(function () {
    setTimeout(function () {
        $('.capa').addClass('page-moveToTop');
        $('.slide-01').addClass('page-moveToTop');
        setTimeout(function () {
        },600);
    },2000);
    // $('.capa')
    // $('html, body').animate({
    //     scrollTop: 0
    // }, 100);
    // setTimeout(function () {
    //     $('html, body').animate({
    //         scrollTop: $(".slide-01").offset().top
    //     }, 1000);
    // }, 2000);
});